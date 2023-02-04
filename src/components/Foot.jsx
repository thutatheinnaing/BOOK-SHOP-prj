import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    color: #5cfdb2;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding-left: 150px;
    ${mobile({ display: "none" })};
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color: #5cfdb2;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: #5cfdb2;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding-left: 100px;
    ${mobile({ backgroundColor: "#fff8f8" })}
    color: #5cfdb2;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

  const Payment = styled.img`
      width: 50%;
  `;

  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo> <a href="https://lh3.googleusercontent.com/zEuZMJndhHITb81vuHPw6VctDDYzHE17D5wajtx-hQd_l2jUC9BZxDlLnQg5gKh-f7fcSDKxNEbDd7zITdmFLNnwI-NNhe41snbdmtVybK6_u7vAVWD8OSfkMAwGOpJ8EtcQtk2w=w2400?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/zEuZMJndhHITb81vuHPw6VctDDYzHE17D5wajtx-hQd_l2jUC9BZxDlLnQg5gKh-f7fcSDKxNEbDd7zITdmFLNnwI-NNhe41snbdmtVybK6_u7vAVWD8OSfkMAwGOpJ8EtcQtk2w=w173-h55-p-k" /> </a></Logo>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Congue eu consequat ac felis donec.
          Arcu cursus euismod quis viverra. Eget nullam non nisi est sit amet facilisis magna etiam.
          Ullamcorper eget nulla facilisi etiam dignissim diam.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 528 YAMA STREET,YANGON,MYANMAR
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };

  export default Footer;