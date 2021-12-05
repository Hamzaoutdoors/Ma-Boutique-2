import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`;

const Input = styled.input`
    border: none;
    padding: 5px;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextLogo = styled.h1`
    font-size: 20px;
    font-weight: bold;    
    `;

const ImageLogo = styled.img`
    width: 10%;
    height: auto;
    margin-left: 10px;
    object-fit: cover;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <Language>En</Language>
        <SearchContainer>
          <Input />
          <Search style={{ fontSize: '17px', color: 'gray' }} />
        </SearchContainer>
      </Left>
      <Center>
        <LogoContainer>
          <TextLogo>Ma Boutique</TextLogo>
          <ImageLogo src="./assets/logo.png" />
        </LogoContainer>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
