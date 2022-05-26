import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Tools from '../Tools/Tools';
import Summary from '../Summary/Summary';
import Review from '../Review/Review';

import SectionOne from '../SectionOne/SectionOne';
import CaroSel from '../CaroSel/CaroSel';

const Home = () => {
    return (
        <div className='bgallCard'>

            <Banner></Banner>
            <br />
            <h2 className="text-center font-bold text-3xl text-primary">BIKE TOOLS</h2>
            <div class="grid h-1 container mx-auto card navbar-bg text-bold text-3xl rounded-box place-items-center"></div>
            <br />
            <Tools></Tools>
            <br />
            <h2 className="text-center font-bold text-3xl text-primary">WEB SUMMARY</h2>
            <div class="grid h-1 container mx-auto card navbar-bg text-bold text-3xl rounded-box place-items-center"></div>
            <br />
            <Summary></Summary>
            <br />
            <h2 className="text-center font-bold text-3xl text-primary">CUSTOMER REVIEW</h2>
            <div class="grid h-1 container mx-auto card navbar-bg text-bold text-3xl rounded-box place-items-center"></div>

            <Review></Review>
            <br />
            <h2 className="text-center font-bold text-3xl text-primary">UPCOMMING TOOLS</h2>
            <div class="grid h-1 container mx-auto card navbar-bg text-bold text-3xl rounded-box place-items-center"></div>
            <br />
            <CaroSel />
            <br />

            <h2 className="text-center font-bold text-3xl text-primary">JOIN US</h2>
            <div class="grid h-1 container mx-auto card navbar-bg text-bold text-3xl rounded-box place-items-center"></div>
            <br />
            <SectionOne></SectionOne>
            <br />
            <Footer></Footer>


        </div>
    );
};

export default Home;