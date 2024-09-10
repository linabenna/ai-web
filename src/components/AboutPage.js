import React, { useState } from 'react';
import './AboutPage.css'
import ProfilePic from '../assets/ai-logo-2.png';

const AboutPage = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(prevState => !prevState);  // Toggle the state
    };

  return (
    <div className='pricing'>
            <div className='cardContainer1'>
                <div className='largeCard'>
                    <div className='glowingBorder'></div>
                    <div className='insidelargeCard'>
                        <div className='about-wrapper'>

                            <div className='letter-gradient'>M</div>
                            <div className='info-wrapper'>
                                <div className='about-title'>Our Mission</div>
                                <div className='about-info'>
                                To empower students to innovate, experiment, and develop AI 
                                solutions that matter. We’ll decode the latest AI trends, 
                                collaborate on real-world projects, and explore everything 
                                from neural networks to the algorithms running your favorite apps.
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>   
                <div className='largeCard'>
                    <div className='glowingBorder'></div>
                    <div className='insidelargeCard'>
                    <div className='about-wrapper'>
                        <div className='letter-gradient'>V</div>
                        <div className='info-wrapper'>
                                <div className='about-title'>Our Vision</div>
                                <div className='about-info'>
                                    Where code meets creativity.

                                    We envision a future where AI isn't just a tool—it's 
                                    a lifestyle, seamlessly integrated into how we think, 
                                    create, and solve problems. We're here to push the 
                                    boundaries of what students can do.
                                </div>
                            </div>
                    </div>
                    </div>
                </div> 
                <div className='largeCard'>
                    <div className='glowingBorder'></div>
                    <div className='insidelargeCard'>
                    <div className='about-wrapper'>
                        <div className='letter-gradient'>G</div>
                        <div className='info-wrapper'>
                                <div className='about-title'>Our Goals</div>
                                <div className='about-info'>
                                Learn, collab, and meme our way through AI and machine learning.
                                Build projects that aren’t just cool, but actually useful.
                                </div>
                            </div>
                    </div>
                    </div>
                </div> 
            </div>    

            <div className='customHeading'>
                <h2>Our Leads</h2>
            </div>

            <div className='cardContainer'>
                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Afra Alshehhi</p>
                    <h3>President</h3>
                    <p>Junior CE</p>
                </div>

                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Lina Benna</p>
                    <h3>Vice President</h3>
                    <p>Senior CS</p>
                </div>

                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Asmaa Chehab</p>
                    <h3>Media Manager</h3>
                    <p>Senior CE</p>
                </div>

                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Mohammed Alghfeli</p>
                    <h3>Event Organizer</h3>
                    <p>Junior CE</p>
                </div>

                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Abdulrahman Alsharhan</p>
                    <h3>Event Organizer</h3>
                    <p>Junior CE</p>
                </div>

                <div className='card'>
                    <img src={ProfilePic} alt="Profile" class="profile-pic" />
                    <p className='btc'>Amine Kidane</p>
                    <h3>Event Organizer</h3>
                    <p>-</p>
                </div>
            </div>
    </div>
  )
}

export default AboutPage;
