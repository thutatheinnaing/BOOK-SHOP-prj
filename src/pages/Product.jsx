import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
 background-color: #24252a;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  color: #5cfdb2;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #5cfdb2;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #5cfdb2;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
  color: #5cfdb2;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: #5cfdb2;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  color: #5cfdb2;
  background-color: #24252a;
`;

const FilterSizeOption = styled.option`
  
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: #5cfdb2;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 30%;
  background-color:#5cfdb2;
  cursor: pointer;
  font-weight: 500;
  transition:  all 0.3s ease-in-out;
  &:hover {
    background-color: #5cfdb2;
    box-shadow: 2px 2px 20px rgba(1, 141, 82, 0.514);
  };
`;

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://lh3.googleusercontent.com/A9P__JYL5yWKC3yTcPuvzW6Qpasza_8XMdb41K1fzv2K3IB6j-DkclnY8iRodgaJmVJ0P9EBa-UNBUkHsOdDgy4W_zywHBGrSZYHqcQpopeyi4fZHuIdec9yIv9Y_aEOVyhxpEB_=w2400" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Price</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1$</FilterSizeOption>
                <FilterSizeOption>1$</FilterSizeOption>
                <FilterSizeOption>1$</FilterSizeOption>
                <FilterSizeOption>1$</FilterSizeOption>
                <FilterSizeOption>1$</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
};

export default Product;