import { Header, Form } from "../SharedStyledComponents";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/fields/Input";
import { useState } from "react";

const RegisterPage = () => {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Submit these values to your backend/API
    console.log('Register with:', email, password);
  };
  return <AppLayout>
    <Header>Sign up</Header>
    <Form onSubmit={handleSubmit}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="Confirm Password" />
      <Button type="submit">Register</Button>
    </Form>
  </AppLayout>
}

export default RegisterPage