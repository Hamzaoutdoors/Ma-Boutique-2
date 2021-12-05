/* eslint-disable react/jsx-closing-tag-location */
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { OptionsProducts, OptionsSize } from '../options';

const Container = styled.div``;

const Title = styled.h1`
   margin: 20px;

   `;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
   margin: 20px;
`;

const FilterText = styled.span`
   font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    width: 120px;
    height: 40px;
`;
const Option = styled.option``;

const ProductList = () => (
  <Container>
    <Navbar />
    <Announcement />
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products : </FilterText>
        <Select>
          <Option selected disabled>Label</Option>
          {OptionsProducts.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Select>
          <Option selected disabled>Size</Option>
          {OptionsSize.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products : </FilterText>
        <Select>
          <Option selected>Neweset</Option>
          <Option>Price (asc)</Option>
          <Option>Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products />
    <Newsletter />
    <Footer />
  </Container>
);

export default ProductList;
