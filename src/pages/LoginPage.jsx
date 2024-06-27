import { Header, Form } from "../SharedStyledComponents";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/fields/Input";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password
    };
    try {
      const response = await fetch('http://localhost:8080/api/auth/perform_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to login. Please try again.');
      }

      const result = await response.text();
      console.log('Login successful:', result);
      navigate('/');

      // Optionally clear the form or redirect the user
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };
  return <AppLayout>
    <Header>Sign in</Header>
    <Form onSubmit={handleSubmit}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <Button type="submit">Login</Button>
      <Link to="/register" >Register</Link>
    </Form>
  </AppLayout>
}

export default RegisterPage