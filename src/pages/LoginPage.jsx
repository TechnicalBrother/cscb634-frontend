import { Header, Form } from "../SharedStyledComponents";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/fields/Input";
import { useState } from "react";

const RegisterPage = () => {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit these values to your backend/API
    console.log('Sign in with:', email, password);
  };
  return <AppLayout>
    <Header>Sign in</Header>
    <Form submit={handleSubmit}>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <Button type="submit">Login</Button>
    </Form>
  </AppLayout>
}

export default RegisterPage