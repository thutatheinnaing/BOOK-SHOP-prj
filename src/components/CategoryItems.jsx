import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  /* margin: 3px; */
  height: 80vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "20vh" })};
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    color: #5cfdb2;
`;

const Button = styled.button`
  width: 17%;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #5cfdb2;
  color: #10003d;
  display: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.4s ease-in-out;
  :hover{
    box-shadow: 3px 3px 30px rgba(1, 141, 82, 0.514);
  };
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;