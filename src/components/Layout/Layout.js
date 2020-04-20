import HeaderThree from "../header/HeaderThree";
import React from 'react';
import Helmet from "../common/Helmet";
const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
        </div>
    )
}

export default PortfolioLanding;
