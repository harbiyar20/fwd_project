
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Payment from './pages/Payment';
import PaymentGateway from './pages/PaymentGateway';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SkarduPage from './pages/SkarduPage';
import HunzaPage from './pages/Hunzapage';
import BadshahiPage from './pages/BadshahiPage';
import SaifulPage from './pages/SaifulPage';
import Multan from './pages/Multan';
import Islamabad from './pages/Islamabad';
import Karachi from './pages/Karachi';
import Lahore from './pages/Lahore';
import Peshawar from './pages/Peshawar';
import Quetta from './pages/Quetta';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Copyright from './pages/Copyright';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/place/SkarduPage" element={<SkarduPage />} />
          <Route path="/place/Hunzapage" element={<HunzaPage />} />
          <Route path="/place/BadshahiPage" element={<BadshahiPage />} />
          <Route path="/place/SaifulPage" element={<SaifulPage />} />
          <Route path="/multan" element={<Multan />} />
          <Route path="/islamabad" element={<Islamabad />} />
          <Route path="/karachi" element={<Karachi />} />
          <Route path="/lahore" element={<Lahore />} />
          <Route path="/peshawar" element={<Peshawar />} />
          <Route path="/quetta" element={<Quetta />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<Copyright />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;