import React from 'react'
import hero from '../images/resources-hero.png';
const Resources = () => {
  return (
    <>
    <section id="resources">
    <div className="container-fluid-hero">
        <div className="row">
            <div className="col-lg-6 hero-intro">
                <h1>Community is made by all of us<span></span></h1>
                <h1>And the best way to give back to the community is by sharing.</h1>
                <a href="#scholarships"><button className="btn btn-lg resources-btn">
                        Take me to resources ⚡️
                    </button></a>
            </div>
            <div className="col-lg-6 hero-image pt-5 pl-5">
                <img className="image-fluid .d-none .d-lg-block .d-xl-none image-width" src={hero}alt="resources-hero" />
            </div>
        </div>
    </div>
</section>

<section id="scholarships">
    <div className="container">
        <h1>Scholarships</h1>
        <ul>
            <li>
                <a target="_blank" href="https://research.adobe.com/scholarship/">ADOBE RESEARCH WOMEN-IN-TECHNOLOGY SCHOLARSHIP
                    ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.brunel.ac.uk/women-in-brunel-engineering-and-computing/our-programme">BRUNEL
                    UNIVERSITY LONDON WOMEN IN ENGINEERING PROGRAMME ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.womentechmakers.com/scholars">WOMEN TECHMAKERS SCHOLARS PROGRAM ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.aboutamazon.co.uk/amazon-in-the-community/amazon-in-the-community">AMAZON WOMEN
                    IN INNOVATION BURSARY ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.booking.com/articles/women-in-tech-at-booking.html">BOOKING.COM WOMEN IN
                    TECHNOLOGY ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.utwente.nl/en/education/scholarship-finder/university-of-twente-scholarship/">UNIVERSITY
                    OF TWENTE SCHOLARSHIPS (UTS) ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html">ETH
                    ZURICH EXCELLENCE MASTERS SCHOLARSHIPS ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.scienceambassadorscholarship.org/">SCIENCE AMBASSADOR SCHOLARSHIP ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.skywomenintechscholars.com/">SKY WOMEN IN TECHNOLOGY ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.iflexion.com/scholarship">IFLEXION SCHOLARSHIP PROGRAM ↗️</a>
            </li>
            <li>
                <a href="http://www.european-funding-guide.eu/scholarship/3250-scholarship-foreign-students">WARSAW
                    UNIVERSITY OF TECHNOLOGY SCHOLARSHIP FOR FOREIGN STUDENTS
                    ↗️</a>
            </li>
        </ul>
    </div>
</section>

<section id="jobs">
    <div className="container">
        <h1>Job opportunities</h1>
        <ul>
            <li><a target="_blank" href="https://www.jobsforher.com/">JOBS FOR HER ↗️</a></li>
            <li>
                <a target="_blank" href="https://powertofly.com/">POWER TO FLY ↗️</a>
            </li>
            <li><a target="_blank" href="https://jobspresso.co/">JOBSPRESSO ↗️</a></li>
            <li>
                <a target="_blank" href="https://www.theswingshift.co/">THE SWING SHIFT ↗️</a>
            </li>
            <li>
                <a target="_blank" href="https://www.chargebee.com/careers/women-in-tech/">CHARGEBEE ↗️</a>
            </li>
            <li><a target="_blank" href="https://themomproject.com/">THE MOM PROJECT ↗️</a></li>
            <li>
                <a target="_blank" href="https://www.creativecircle.com/">CREATIVE CIRCLE ↗️</a>
            </li>
            <li><a target="_blank" href="https://www.flexjobs.com/">FLEX JOBS ↗️</a></li>
            <li><a target="_blank" href="https://justremote.co/">JUST REMOTE ↗️</a></li>
        </ul>
    </div>
</section>

<div className="container-fluid" style={{ backgroundColor: '#e6198e' }}>
        <div className="row" >
            <div className="col-lg-4 col-md-4 col-sm-4" >
                <h1><a className='text-white' href="#resources" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>TECHNOWOMEN</a></h1>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <p><a className='text-white' href="https://github.com/Vishal16-coder/TECHNOWOMEN">
                   GNU General Public License v3.0
                   <a href="https://github.com/Vishal16-coder/TECHNOWOMEN">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                </a></p>
            </div>
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright: Technowomen - 2022    
            </div>
            
        </div>
    </div>

</>
  )
};

export default Resources;

