import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'; 


export default function Footer() {
  return (
    <> 
    <div className="footer">
      <div className="row-one">
      <div className="socials">
        <div className="social-logo"><SocialIcon url="https://twitter.com/1shubham7" /></div>
        <div className="social-logo"><SocialIcon url="https://github.com/1shubham7" /></div>
        <div className="social-logo"><SocialIcon url="https://www.linkedin.com/in/shubham-singh-5a002b20b/" /></div>
        <div className="social-logo"><SocialIcon url="https://hashnode.com/@1shubham7" bgColor="#ffffff" /></div>
        <div className="social-logo"><SocialIcon url="https://chat.whatsapp.com/K0K0ktvmtJDC6E1t20klDp" /></div>
      </div>
      <div className="text-part">
        <div className="text-links">
            <a href="#licenses" className="my-text-link-1 news">Licenses</a>
            <a href="#about" className="my-text-link-2 news">About</a>
            <a href="#privacy" className="my-text-link news">Privacy Policy</a>
            <a href="#blogs" className="my-text-link news">Blogs</a>
            <a href="#contribute" className="my-text-link news">Contribute</a>
        </div>
        <div className="text-para">.The "Mission Health" project aims to enhance fitness routines by leveraging human activity analysis and GPS data. This project focuses on using technology to analyze user activity patterns and GPS location data to provide users with improved fitness results.</div>
      </div>
      </div>
      <div className="row-two">
      <h1 className="copyright">© 2023 All Rights Reserved</h1>
      </div>
    </div>
    </>
  )
}
