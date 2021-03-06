/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  ${mobile({ width: '80%' })};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
`;

const Button = styled.button`
  padding: 12px 18px;
  width: 50%;
  background-color: teal;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 10px 0 15px 0;
  &:hover {
    background-color: #00CCCC;
  }
`;

const Link = styled.a`
  cursor: pointer;
  margin: 5px 0;
  font-size: 12px;
  justify-self: start;
  text-decoration: underline;
`;

const Login = () => (
  <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button>LOG IN</Button>
        <Link>DO NOT REMEMBER YOUR PASSWORD</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
);

export default Login;
