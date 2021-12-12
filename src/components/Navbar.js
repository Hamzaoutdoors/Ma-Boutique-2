import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px', padding: '5px', backgroundColor: '#f5f5f5' })}
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
    justify-content: space-between;
    ${mobile({ padding: '10px 0' })}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   background-color: white;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
   ${mobile({ margin: '0 12px' })}
`;

const Input = styled.input`
    border: none;
    padding: 5px;
    ${mobile({ width: '50px' })}

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
    cursor: pointer;
    text-decoration: none;
    color: rgba(0, 0, 250, 0.1);
    ${mobile({ width: '100%' })}
`;

const TextLogo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold; 
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    ${mobile({ fontSize: '13px', marginLeft: '5px' })}   
    `;

const ImageLogo = styled.img`
    width: 10%;
    height: auto;
    margin-left: 10px;
    object-fit: cover;
    ${mobile({ display: 'none' })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: 'center', flex: '2' })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: underline;
    color: black;
    ${mobile({ fontSize: '11px', marginLeft: '8px' })}
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <Language>En</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ fontSize: '17px', color: 'gray' }} />
        </SearchContainer>
      </Left>
      <Center>
        <LogoContainer as={NavLink} to="/" exact>
          <TextLogo>Ma Boutique</TextLogo>
          <ImageLogo src="./assets/logo.png" />
        </LogoContainer>
      </Center>
      <Right>
        <MenuItem as={NavLink} to="/register" exact>REGISTER</MenuItem>
        <MenuItem as={NavLink} to="/login" exact>SIGN IN</MenuItem>
        <MenuItem as={NavLink} to="/cart" exact>
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
