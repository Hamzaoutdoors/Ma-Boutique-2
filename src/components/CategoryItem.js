/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 0 5px;
    height: 70vh;
    position: relative;
    &:hover {
      .category-image {
        opacity: 0.5;
        transition: opacity 0.5s ease-in-out;
      }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 22px;
    color: #fff;
    margin-bottom: 15px;

`;

const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    color: gray;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => (
  <Container>
    <Image src={item.img} className="category-image" />
    <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
    </Info>
  </Container>
);

export default CategoryItem;
