import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {sliderItems} from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

// * Css section starts here
const Container = styled.div`
   margin-top: 50px;
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
   ${mobile({display: "none"})}
   margin-top: 70px;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    margin-bottom: 30%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(7px) saturate(200%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "100px"};
    right: ${props=> props.direction === "right" && "100px"};
    opacity: 0.5;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    :hover{
           transition: all 0.7s ease;
           box-shadow: 3px 3px 30px rgba(234, 237, 240, 0.514);
           border-radius: 50%;
           background: rgba(109, 108, 108, 0.911);
           }
    z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;
margin-left: 25%;
margin-top: 12%;
display: flex;
`;

const Image = styled.img`
   height: 50%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom: 10%;
  margin-right: 18%;
`;

const Title = styled.h1`
font-size: 40px;
color: #5cfdb2;
`;

const Desc = styled.p`
color: #5cfdb2;
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
  width: 20%;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #3a9c6f;
  color: #10003d;
  display: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: #5cfdb2;
    box-shadow: 2px 2px 20px rgba(1, 141, 82, 0.514);
  }
`;

// * Css section ends here!

// * Announce section starts here!

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{
  if (direction==="left"){
   setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
  } else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  }
};

  return (
<Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>shop now!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>

// * Announce section ends here!
  )
}

export default Slider;