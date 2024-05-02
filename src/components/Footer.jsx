import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Best shop. All rights reserved.
  </FooterContainer>
);

export default Footer;


const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 14px;
`;
