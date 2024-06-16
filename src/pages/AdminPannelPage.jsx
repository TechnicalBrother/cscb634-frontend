import AppLayout from '../components/AppLayout';
import { Header, Form } from "../SharedStyledComponents";
import Button from "../components/Button";
import Input from "../components/fields/Input";
import { useState } from "react";

const AdminPannelPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [moderatorName, setModeratorName] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleCreateUser = () => {
    alert('User created');
  }

  const handleCreateModerator = () => {
    alert('Moderator creatd');

  }

  const handleCreateProduct = () => {
    alert('Product created');
  }

  const handleCreateSupplier = () => {
    alert('Supplier created');
  }

  return (
    <AppLayout>
      <Header>Create User</Header>
      <Form onSubmit={handleCreateUser}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
        <Button type="button">Createe</Button>
      </Form>
      <Header>Create Moderator</Header>
      <Form onSubmit={handleCreateModerator}>
        <Input value={moderatorName} onChange={(e) => setModeratorName(e.target.value)} label="Name" />
        <Button type="button">Create</Button>
      </Form>
      <Header>Create Product</Header>
      <Form onSubmit={handleCreateProduct}>
        <Input value={productName} onChange={(e) => setProductName(e.target.value)} label="Name" />
        <Input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} label="Price" />
        <Button type="button">Create</Button>
      </Form>
      <Header>Create Supplier</Header>
      <Form onSubmit={handleCreateSupplier}>
        <Input value={supplierName} onChange={(e) => setSupplierName(e.target.value)} label="Name" />
        <Button type="button">Create</Button>
      </Form>
    </AppLayout>
  );
}

export default AdminPannelPage;