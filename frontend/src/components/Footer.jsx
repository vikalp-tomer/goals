import React from 'react';

import youtube from '../images/yt_logo_light.png'
import gitHub from '../images/gitHubLogoWhite.png';
import twitter from '../images/twitterLogoBlue.png';
import linkedIn from '../images/linkedInLogoBlue.png';

import '../styles/footer.css';

const footerStyle ={
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
}

const h4Style = {
    fontVariant: 'small-caps',
    marginTop: '1rem',
}

const cBPStyle = {
    height:'2rem',
    padding:'0 0.5rem',
    marginBottom: '-0.5rem',
}

export const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer style={footerStyle}>

            <div id='socials'>
                <br/>
                <a href="https://github.com/vikalp-tomer/goals" 
                    target="_blank" rel='noreferrer'>
                    <img src={gitHub} id='gitHubLogo'
                        className='socialLogo' alt="GitHub Icon"/>
                </a>
                {/* <a href="https://twitter.com/vikalp-tomer" 
                    target="_blank" rel='noreferrer'>
                    <img src={twitter} id='twitterLogo'
                        className='socialLogo' alt="Twitter Icon"/>
                </a> */}
                <a href="https://www.linkedin.com/in/vikalp-tomer/" 
                    target="_blank" rel='noreferrer'>
                    <img src={linkedIn} id='linkedInLogo'
                        className='socialLogo' alt="LinkedIn Icon"/>
                </a>

                <a href="https://www.youtube.com/channel/UC6Zq20sHjAu3w9FmilU9Smg" 
                    target="_blank" rel='noreferrer'>
                    <img src={youtube} id='youTubeLogo'
                        className='socialLogo' alt="YouTube Icon"/>
                </a>
            </div>

            
    
        </footer>
    )
}