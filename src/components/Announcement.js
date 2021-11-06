import styled from 'styled-components';

const Container = styled.div`
   height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 500;
`;

const Announcement = () => (
  <Container>
    Super Deal! Free Shpping on Orders Over $50
    {' '}
  </Container>
);

export default Announcement;
