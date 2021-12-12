import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { OptionsSize } from '../options';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
     flex: 1;
     padding: 0 50px;
     ${mobile({ padding: '10px' })}

`;

const Title = styled.h1`
   font-weight: 300;
   font-size: 2.5rem;
`;

const Desc = styled.p`
    margin: 20px 0;
    text-align: justify;
    margin-bottom: 100px;
`;

const Price = styled.span`
    font-size: 2.5rem;
    font-weight: 100;
`;

const FilterContainer = styled.div`
   margin: 50px 0;
   width: 50%;
   display: flex;
   justify-content: space-between;
   ${mobile({ width: '100%' })}

`;

const Filter = styled.div`
   display: flex;
   align-items: center;
   ${mobile({
    marginRight: '15px',
  })};
`;

const FilterTitle = styled.span`
   font-size: 1.2rem;
   font-weight: 200;
`;

const FilterColorOption = styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0 5px;
   cursor: pointer;
`;

const FilterSize = styled.select`
    width: 100px;
    margin: 0 10px;
    height: 30px;
    border: 1px solid #ccc;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
   font-size: 1.2rem;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
    justifyContent: 'center', flexDirection: 'column', textAlign: 'center', width: '100%',
  })};
`;

const AmontContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    text-align: center;
    font-size: 1.5rem;
    margin: 0 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: teal;
    color: white;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    margin: 0 20px;

    &:hover {
        background-color: #00bcd4;
    }

`;

const Product = () => (
  <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImgContainer>
      <InfoContainer>
        <Title>Denim Jumsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </Desc>
        <Price>$ 20.00</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColorOption color="black" />
            <FilterColorOption color="darkblue" />
            <FilterColorOption color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption selected disabled>Size</FilterSizeOption>
              {OptionsSize.map((option) => (
                <FilterSizeOption key={option.value} value={option.value}>
                  {option.label}
                </FilterSizeOption>
              ))}
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmontContainer>
            <Remove className="btn" />
            <Amount>1</Amount>
            <Add className="btn" />
          </AmontContainer>
          <Button>Add to cart</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    <Newsletter />
    <Footer />
  </Container>
);

export default Product;
