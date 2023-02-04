import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Foot";
import { mobile } from "../responsive";

const Container = styled.div`
 background-color: #24252a;
`;

const Title = styled.h1`
  margin: 20px;
  color: #5cfdb2;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
  color: #5cfdb2;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
  border-radius: 10%;
  background-color: #24252a;
  color: #5cfdb2;
`;
const Option = styled.option`
 color: #5cfdb2;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              CATEGORY
            </Option>
            <Option>Classics</Option>
            <Option>Crime</Option>
            <Option>Fantasy</Option>
            <Option>Horror</Option>
            <Option>Mystery</Option>
            <Option>Plays</Option>
            <Option>Thrillers</Option>
            <Option>War</Option>
            <Option>Non-fiction novel</Option>
            <Option>Self-help</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>1$</Option>
            <Option>1$</Option>
            <Option>1$</Option>
            <Option>1$</Option>
            <Option>1$</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
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
};

export default ProductList;