import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Tools from '../Tools/Tools';
import Summary from '../Summary/Summary';
import Review from '../Review/Review';
import Register from '../Register/Register';

const Home = () => {
    return (
        <div className='bgallCard'>
            <Banner></Banner>
            <br />
            <Tools></Tools>
            <br />
            <Summary></Summary>
            <br />
            <Review></Review>
            <br />
            <Footer></Footer>


        </div>
    );
};

export default Home;