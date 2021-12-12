import styled from 'styled-components';
import { popularProducts } from '../data';
import { desktop } from '../responsive';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  
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

const Products = () => (
  <Container>
    <Title>Products</Title>
    {popularProducts.map((item) => (
      <Product key={item.id} item={item} />
    ))}
  </Container>
);

export default Products;
