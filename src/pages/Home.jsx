import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Foot';
import Announcement from '../components/Announcement';
import Product from './Product';

const Container = styled.div`
 background-color: #24252a;
`;

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        <Product />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Home;
