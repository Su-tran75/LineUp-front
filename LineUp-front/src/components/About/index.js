import React from 'react';

import './about.scss';

import Su from 'src/assets/Su.jpg';
import Alan from 'src/assets/Alan.jpg';
import William from 'src/assets/William.jpg';
import Remi from 'src/assets/Remi.jpg';
import Loic from 'src/assets/Loic.jpg';

const About = () => (
  <div className="about-page-container">
    <div className="article1 article-div">
      <img className="article-image" src={Su} alt="Su Product Owner" />
      <div className="article-content">
        <div className="name">Su</div>
        <div className="role">Product Owner</div>
      </div>
    </div>
    <div className="article2 article-div">
      <img className="article-image" src={Alan} alt="Alan Scrum Master" />
      <div className="article-content">
        <div className="name">Alan</div>
        <div className="role">Scrum Master</div>
      </div>
    </div>
    <div className="article3 article-div">
      <img className="article-image" src={William} alt="William Lead Dev Front" />
      <div className="article-content">
        <div className="name">William</div>
        <div className="role">Lead Dev Front</div>
      </div>
    </div>
    <div className="article4 article-div">
      <img className="article-image" src={Loic} alt="Loic Git Master" />
      <div className="article-content">
        <div className="name">Loïc</div>
        <div className="role">Git Master</div>
      </div>
    </div>

    <div className="article5 article-div">
      <img className="article-image" src={Remi} alt="Rémi Lead Dev Back" />
      <div className="article-content">
        <div className="name">Rémi</div>
        <div className="role">Lead Dev Back</div>
      </div>
    </div>
  </div>
);

export default About;
