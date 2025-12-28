import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import './Login.css';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [message, setMessage] = useState('');

  const handleUsernameCheck = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      setUserFound(true);
      setMessage('');
    } else {
      setMessage('Username not found.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((user) =>
      user.username === username
        ? { ...user, password: bcrypt.hashSync(newPassword, 10) }
        : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setMessage('Password reset successful! You can now log in with your new password.');
    setUsername('');
    setNewPassword('');
    setUserFound(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Forgot Password</h3>

        {message && <div className="alert alert-info">{message}</div>}

        {!userFound ? (
          <Form onSubmit={handleUsernameCheck}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Verify Username
            </Button>
          </Form>
        ) : (
          <Form onSubmit={handlePasswordReset}>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Reset Password
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
}

export default ForgotPassword;
