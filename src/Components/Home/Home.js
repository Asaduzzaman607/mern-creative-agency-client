import React from 'react';
import ClientsFeedbackInfo from './ClientsFeedback/ClientsFeedbackInfo';
import ClientsInfo from './ClientsInfo/ClientsInfo';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PortfolioWorks from './PortfolioWorks/PortfolioWorks';
import ServiceInfo from './Service/ServiceInfo';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <ClientsInfo></ClientsInfo>
            <ServiceInfo></ServiceInfo>
            <PortfolioWorks></PortfolioWorks>
            <ClientsFeedbackInfo></ClientsFeedbackInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;