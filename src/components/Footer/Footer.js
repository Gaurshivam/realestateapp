import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FacebookIcon  className='icon'/>
                <InstagramIcon  className='icon'/>
                <TwitterIcon  className='icon'/>
                <LinkedInIcon  className='icon'/>
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Panning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Panning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Panning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Information.</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Panning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
