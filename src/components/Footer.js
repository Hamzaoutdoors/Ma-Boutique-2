/* eslint-disable react/no-unescaped-entities */
import {
  Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   justify-content: center;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1`
   font-size: 2rem;
`;
const Desc = styled.p`
   margin: 20px 0;
   text-align: justify;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: #fff;
   background-color : #${(props) => props.color};
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
   width: 50%;
`;

const Footer = () => (
  <Container>
    <Left>
      <Logo>Ma Boutique</Logo>
      <Desc>
        There are many variations
        of passages of products available, but
        the majpority have suffered alteration in some form, by injected
        humour, or randomised words which don't
        look even slightly believable. If you
        are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything
        embarrassing hidden in the middle of text.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3b5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="e4405f">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55acee">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="e60023">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>About Us</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact Us</Title>
      <ContactItem>
        {' '}
        <Room style={{ marginRight: '10px' }} />
        27, rue de la paix, Paris
      </ContactItem>
      <ContactItem>
        <Phone style={{ marginRight: '10px' }} />
        +212 691 47 51 61
      </ContactItem>
      <ContactItem>
        <MailOutline style={{ marginRight: '10px' }} />
        ellaouzihamza@maboutique.ma
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
  </Container>
);

export default Footer;
