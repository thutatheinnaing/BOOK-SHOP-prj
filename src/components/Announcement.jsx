import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #5cfdb2;
  color: #10003d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  padding-top: 5.5%;
  text-decoration: underline;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50!</Container>;
};

export default Announcement;