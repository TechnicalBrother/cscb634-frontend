import styled from "styled-components";

const AppLayout = ({ children }) => {

  return <Container>
    <InnerContainer>
      {children}
    </InnerContainer>
  </Container>
}

export default AppLayout;

const Container = styled.article`
  width: 100%;
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 60px;
`

const InnerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`