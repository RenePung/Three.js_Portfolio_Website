import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

// InfoBox is a re-usable React component!
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
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
        <InfoBox text="I worked with many different technologies and picked up much knowledge along the way!"
        link="/about"
        btnText="Discover more"
        />
    ),
    3: (
        <InfoBox text="I have completed multiple projects during my learning journey. I invite you to check them out!"
        link="/projects"
        btnText="Check projects"
        />
    ),
    4: (
        <InfoBox text="Feel free to reach out to me for personal or business inquiries!"
        link="/contact"
        btnText="Send me a message"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo