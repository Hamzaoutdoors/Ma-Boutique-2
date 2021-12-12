import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { desktop, mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 0 20px 20px 20px;
  justify-content: space-between;
  ${mobile({
    justifyContent: 'center', flexDirection: 'column', margin: '10px 0',
  })};
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${desktop({ display: 'none' })};
`;

const Categories = () => (
  <Container>
    <Title>Categories</Title>
    {categories.map((item) => (
      <CategoryItem key={item.id} item={item} />
    ))}
  </Container>
);

export default Categories;
