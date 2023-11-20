import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center bg-gradient-to-r from-green-400 to-blue-500 py-4 px-8 text-white mx-5 rounded-full">
            Hello, my name is <span className="font-semibold underline">Rene!</span> 😃
            <br/>
            An Aspiring Full-Stack Developer
            </h1>
    ),
    2: (
        <InfoBox text="Worked on many solo projects and picked up many knowledge along the way"
        link="/about"
        btnText="Discover more"
        />
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo