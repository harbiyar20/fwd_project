const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// ✅ MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/travelApp';

if (mongoURI.includes('localhost')) {
  // Local development
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  // Production MongoDB Atlas
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// ✅ Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Tourist Web App Backend API', 
    status: 'Running',
    endpoints: {
      destinations: '/api/destinations',
      booking: '/api/book',
      payments: '/api/payments'
    }
  });
});

// ✅ Payment Schema & Model
const paymentSchema = new mongoose.Schema({
  name: String,
  username: String,
  destination: String,
  startDate: String,
  endDate: String,
  duration: Number,
  people: Number,
  pricePerPerson: Number,
  totalAmount: Number,
  timestamp: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

// ✅ In-memory destination data
let destinations = [
  { id: 1, name: 'Multan', description: 'City of Saints', price: 1500, image: 'mulimg.jpg' },
  { id: 2, name: 'Islamabad', description: 'Capital', price: 1800, image: 'isbimg.jpg' },
  { id: 3, name: 'Karachi', description: 'City by the sea', price: 2000, image: 'karimg.jpg' },
  { id: 4, name: 'Lahore', description: 'Heart of Pakistan', price: 1700, image: 'lahimg.jpg' },
  { id: 5, name: 'Peshawar', description: 'Historic city', price: 1600, image: 'peimg.jpg' },
  { id: 6, name: 'Quetta', description: 'Mountain city', price: 1800, image: 'queimg.jpg' }
];

// ✅ Get all destinations
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// ✅ Booking endpoint (logging only)
app.post('/api/book', (req, res) => {
  const booking = req.body;
  console.log('📥 Booking received:', booking);
  res.status(201).json({ message: 'Booking successful!' });
});

// ✅ Get destination by name
app.get('/api/destination/:name', (req, res) => {
  const destinationName = req.params.name.toLowerCase();
  const destination = destinations.find(dest => dest.name.toLowerCase() === destinationName);

  if (destination) {
    res.json(destination);
  } else {
    res.status(404).json({ message: 'Destination not found' });
  }
});

// ✅ Store new payment (with fallback)
app.post('/api/payments', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log('📝 Payment logged (DB not connected):', req.body);
      return res.status(201).json({ message: 'Payment logged successfully', _id: 'temp_' + Date.now() });
    }
    const payment = new Payment(req.body);
    const savedPayment = await payment.save();
    console.log('💾 Payment saved:', savedPayment);
    res.status(201).json({ message: 'Payment stored successfully', _id: savedPayment._id });
  } catch (error) {
    console.error('❌ Error saving payment:', error);
    console.log('📝 Payment logged (fallback):', req.body);
    res.status(201).json({ message: 'Payment logged successfully', _id: 'temp_' + Date.now() });
  }
});

// ✅ Get all payments (with fallback)
app.get('/api/payments', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json([]);
    }
    const allPayments = await Payment.find().sort({ timestamp: -1 });
    res.json(allPayments);
  } catch (error) {
    console.error('❌ Error retrieving payments:', error);
    res.json([]);
  }
});

// ✅ Get a specific payment by ID
app.get('/api/payments/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error) {
    console.error('❌ Error fetching payment:', error);
    res.status(500).json({ message: 'Error retrieving payment data' });
  }
});

// ✅ Update payment by ID
app.put('/api/payments/:id', async (req, res) => {
  try {
    const updated = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updated) {
      res.json({ message: 'Payment updated successfully', updated });
    } else {
      res.status(404).json({ message: 'Payment not found for update' });
    }
  } catch (error) {
    console.error('❌ Error updating payment:', error);
    res.status(500).json({ message: 'Failed to update payment' });
  }
});

// ✅ Delete payment by ID
app.delete('/api/payments/:id', async (req, res) => {
  try {
    const result = await Payment.findByIdAndDelete(req.params.id);
    if (result) {
      console.log('🗑️ Booking cancelled:', result);
      res.json({ message: 'Booking cancelled successfully.' });
    } else {
      res.status(404).json({ message: 'Booking ID not found.' });
    }
  } catch (error) {
    console.error('❌ Error cancelling booking:', error);
    res.status(500).json({ message: 'Error cancelling booking.' });
  }
});

// Catch-all handler for React Router
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
