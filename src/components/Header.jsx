import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <Link to="/" > Home </Link>
    <Link to="/login" >Login</Link>
    <Link to="/register" >Register</Link>
  </Nav>
);

export default Header

const Nav = styled.nav`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  gap: 20px;
  position: fixed;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  top: 0;
`;