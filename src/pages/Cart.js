/* eslint-disable react/self-closing-comp */
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
   padding: 20px;
   ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
   font-size: 2em;
   font-weight: 300;
   text-align: center;
   letter-spacing: 0.8px;
    margin-bottom: 20px;
`;

const Top = styled.div`
   display: flex;
   justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
   cursor: pointer;
   font-weight: 600;
   padding: 10px;
   border-bottom: ${(props) => (props.type === 'filled' ? 'none' : '3px solid #333')};
   border: ${(props) => (props.type === 'filled' && 'none')};
   background-color: ${(props) => (props.type === 'filled' ? '#333' : 'transparent')};
    color: ${(props) => props.type === 'filled' && '#fff'};
`;

const TopTexts = styled.div`
${mobile({ display: 'none' })}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: 'column' })}

`;

const Info = styled.div`
   flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({ flexDirection: 'column' })}

`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const ProductImage = styled.img`
    width: 200px;
    border-radius: 5px;
    margin-right: 20px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ColorContainer = styled.div`
    display: flex;
    margin: 0 5px;
`;
const ProductColor = styled.span`
    width: 20px;
    margin: 0 5px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    box-shadow: 2px 1px 1px #fff;    
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
   font-size: 2em;
   margin: 5px;
   ${mobile({ margin: '5px 15px' })}

`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

`;

const Hr = styled.hr`
    width: 90%;    
    background-color: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ height: 'auto', margin: '20px 0' })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => (
  <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <ProductImage src="./assets/carts/product-1-cart.png" />
              <Details>
                <ProductName>
                  <b>Product:</b>
                  {' '}
                  JESSIE CAPS
                </ProductName>
                <ProductId>
                  <b>ID:</b>
                  {' '}
                  9030303
                </ProductId>
                <ColorContainer>
                  <ProductColor color="red" />
                  <ProductColor color="blue" />
                </ColorContainer>
                <ProductSize>
                  <b>Size:</b>
                  {' '}
                  Medium
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add className="btn" />
                <ProductAmount>
                  <b>4</b>
                </ProductAmount>
                <Remove className="btn" />
              </ProductAmountContainer>
              <ProductPrice>
                $ 15.00
              </ProductPrice>

            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <ProductImage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              <Details>
                <ProductName>
                  <b>Product:</b>
                  {' '}
                  Hackora T-shirt
                </ProductName>
                <ProductId>
                  <b>ID:</b>
                  {' '}
                  90390803
                </ProductId>
                <ColorContainer>
                  <ProductColor color="gray" />
                  <ProductColor color="orange" />
                </ColorContainer>
                <ProductSize>
                  <b>Size:</b>
                  {' '}
                  L
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add className="btn" />
                <ProductAmount>
                  <b>1</b>
                </ProductAmount>
                <Remove className="btn" />
              </ProductAmountContainer>
              <ProductPrice>
                $ 10.00
              </ProductPrice>

            </PriceDetail>
          </Product>
          <Hr />
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 25</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 25</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Wrapper>
    <Footer color="#8fcdc7" />
  </Container>
);

export default Cart;
