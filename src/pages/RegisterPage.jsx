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
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare the data to be sent to the API
    const data = {
      email,
      password
    };


    // API call to register the user
    try {
      const response = await fetch('http://localhost:8080/api/auth/perform_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to register. Please try again.');
      }

      const result = await response.text();
      console.log('Registration successful:', result);
      navigate('/login');

      // Optionally clear the form or redirect the user
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };
  return <AppLayout>
    <Header>Sign up</Header>
    <Form onSubmit={handleSubmit}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="Confirm Password" />
      <Button type="submit">Register</Button>
      <Link to="/login" >Login</Link>
    </Form>
  </AppLayout>
}

export default RegisterPage