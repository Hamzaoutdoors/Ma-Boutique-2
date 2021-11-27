import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
   font-size: 4.5rem;
   margin-bottom: 2rem;
`;

const Description = styled.div`
   font-size: 1.1rem;
   font-weight: 300;
   margin-bottom: 20px;
   text-align: center;
   margin: 20px 10px;
`;

const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: #fff;
   display: flex;
   justify-content: space-between;
   border: 1px solid #e6e6e6;
`;

const Input = styled.input`
    padding: 0.5rem;
    border: none;
    flex: 8;
`;

const Button = styled.button`
    cursor: pointer;
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`;

const Newsletter = () => (
  <Container>
    <Title>Newsletter</Title>
    <Description>
      <p>
        Sign up
        for our newsletter to receive updates on new products and special offers.
      </p>
    </Description>
    <InputContainer>
      <Input placeholder="Your email" />
      <Button>
        <Send />
      </Button>
    </InputContainer>
  </Container>
);

export default Newsletter;
