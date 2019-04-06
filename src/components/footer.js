import React from 'react';

const Footer = (props) => {
  return (
    <footer className="row footer">
      <div className="footer__main">
        <div className="footer__address">
          <img src={require("../assets/logo.png")} className="footer__logo" />
          <p className="paragraph" style={{marginBottom: "70px"}}>528 Block ore dolore eu culpa pariatur <br /> magna minim.ctetur ad est excep.</p>

          <div className="footer__social">

            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__social__icon">
              <path d="M21.5156 5.125C21.5469 5.25 21.5625 5.45312 21.5625 5.73438C21.5625 7.98438 21.0156 10.1562 19.9219 12.25C18.7969 14.4688 17.2188 16.2344 15.1875 17.5469C12.9688 19.0156 10.4219 19.75 7.54688 19.75C4.79688 19.75 2.28125 19.0156 0 17.5469C0.34375 17.5781 0.734375 17.5938 1.17188 17.5938C3.45312 17.5938 5.5 16.8906 7.3125 15.4844C6.21875 15.4844 5.25 15.1719 4.40625 14.5469C3.59375 13.8906 3.03125 13.0781 2.71875 12.1094C3.03125 12.1406 3.32812 12.1562 3.60938 12.1562C4.04688 12.1562 4.48438 12.1094 4.92188 12.0156C3.79688 11.7656 2.85938 11.1875 2.10938 10.2812C1.35938 9.375 0.984375 8.34375 0.984375 7.1875V7.09375C1.67188 7.5 2.40625 7.71875 3.1875 7.75C2.53125 7.28125 2 6.6875 1.59375 5.96875C1.1875 5.25 0.984375 4.46875 0.984375 3.625C0.984375 2.75 1.21875 1.92188 1.6875 1.14062C2.90625 2.67188 4.39062 3.89063 6.14062 4.79688C7.92188 5.70312 9.8125 6.20312 11.8125 6.29688C11.75 5.92188 11.7188 5.54688 11.7188 5.17188C11.7188 4.29687 11.9375 3.48438 12.375 2.73438C12.8125 1.95312 13.4062 1.34375 14.1562 0.90625C14.9062 0.46875 15.7188 0.25 16.5938 0.25C17.3125 0.25 17.9688 0.390625 18.5625 0.671875C19.1875 0.953125 19.7344 1.32812 20.2031 1.79688C21.3281 1.57812 22.375 1.1875 23.3438 0.625C22.9688 1.78125 22.25 2.6875 21.1875 3.34375C22.125 3.21875 23.0625 2.95313 24 2.54688C23.3125 3.54687 22.4844 4.40625 21.5156 5.125Z" fill="url(#paint0_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#039785"/>
              <stop offset="1" stop-color="#00C1A9"/>
              </linearGradient>
              </defs>
            </svg>

            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__social__icon">
              <path d="M21.5 2.75V19.25C21.5 19.875 21.2812 20.4062 20.8438 20.8438C20.4062 21.2812 19.875 21.5 19.25 21.5H15.2656V13.2031H18.0781L18.5 10.0156H15.2656V8C15.2656 7.5 15.3594 7.125 15.5469 6.875C15.7969 6.59375 16.2188 6.45312 16.8125 6.45312H18.5V3.64062C17.8438 3.54688 17.0312 3.5 16.0625 3.5C14.8125 3.5 13.8125 3.875 13.0625 4.625C12.3438 5.34375 11.9844 6.35938 11.9844 7.67188V10.0156H9.125V13.2031H11.9844V21.5H2.75C2.125 21.5 1.59375 21.2812 1.15625 20.8438C0.71875 20.4062 0.5 19.875 0.5 19.25V2.75C0.5 2.125 0.71875 1.59375 1.15625 1.15625C1.59375 0.71875 2.125 0.5 2.75 0.5H19.25C19.875 0.5 20.4062 0.71875 20.8438 1.15625C21.2812 1.59375 21.5 2.125 21.5 2.75Z" fill="url(#paint0_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
              <stop stop-color="#039785"/>
              <stop offset="1" stop-color="#00C1A9"/>
              </linearGradient>
              </defs>
            </svg>

            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__social__icon">
              <path d="M11 5.60938C10.0312 5.60938 9.125 5.85937 8.28125 6.35938C7.46875 6.82812 6.8125 7.48438 6.3125 8.32812C5.84375 9.14062 5.60938 10.0312 5.60938 11C5.60938 11.9688 5.84375 12.875 6.3125 13.7188C6.8125 14.5312 7.46875 15.1875 8.28125 15.6875C9.125 16.1562 10.0312 16.3906 11 16.3906C11.9688 16.3906 12.8594 16.1562 13.6719 15.6875C14.5156 15.1875 15.1719 14.5312 15.6406 13.7188C16.1406 12.875 16.3906 11.9688 16.3906 11C16.3906 10.0312 16.1406 9.14062 15.6406 8.32812C15.1719 7.48438 14.5156 6.82812 13.6719 6.35938C12.8594 5.85937 11.9688 5.60938 11 5.60938ZM11 14.5156C10.0312 14.5156 9.20312 14.1719 8.51562 13.4844C7.82812 12.7969 7.48438 11.9688 7.48438 11C7.48438 10.0312 7.82812 9.20312 8.51562 8.51562C9.20312 7.82812 10.0312 7.48438 11 7.48438C11.9688 7.48438 12.7969 7.82812 13.4844 8.51562C14.1719 9.20312 14.5156 10.0312 14.5156 11C14.5156 11.9688 14.1719 12.7969 13.4844 13.4844C12.7969 14.1719 11.9688 14.5156 11 14.5156ZM17.8906 5.375C17.8594 5.71875 17.7188 6.01563 17.4688 6.26562C17.25 6.51562 16.9688 6.64062 16.625 6.64062C16.2812 6.64062 15.9844 6.51562 15.7344 6.26562C15.4844 6.01563 15.3594 5.71875 15.3594 5.375C15.3594 5.03125 15.4844 4.73437 15.7344 4.48438C15.9844 4.23438 16.2812 4.10938 16.625 4.10938C16.9688 4.10938 17.2656 4.23438 17.5156 4.48438C17.7656 4.73437 17.8906 5.03125 17.8906 5.375ZM21.4531 6.64062C21.3906 5.73438 21.25 4.95312 21.0312 4.29688C20.75 3.51562 20.3125 2.84375 19.7188 2.28125C19.1562 1.6875 18.4844 1.25 17.7031 0.96875C17.0469 0.75 16.2656 0.625 15.3594 0.59375C14.4844 0.53125 13.0312 0.5 11 0.5C8.96875 0.5 7.5 0.53125 6.59375 0.59375C5.71875 0.625 4.95312 0.75 4.29688 0.96875C3.51562 1.25 2.82812 1.6875 2.23438 2.28125C1.67188 2.84375 1.25 3.51562 0.96875 4.29688C0.75 4.95312 0.609375 5.73438 0.546875 6.64062C0.515625 7.51563 0.5 8.96875 0.5 11C0.5 13.0312 0.515625 14.5 0.546875 15.4062C0.609375 16.2812 0.75 17.0469 0.96875 17.7031C1.25 18.4844 1.67188 19.1719 2.23438 19.7656C2.82812 20.3281 3.51562 20.7344 4.29688 20.9844C4.95312 21.2344 5.71875 21.375 6.59375 21.4062C7.5 21.4688 8.96875 21.5 11 21.5C13.0312 21.5 14.4844 21.4688 15.3594 21.4062C16.2656 21.375 17.0469 21.25 17.7031 21.0312C18.4844 20.75 19.1562 20.3281 19.7188 19.7656C20.3125 19.1719 20.75 18.4844 21.0312 17.7031C21.25 17.0469 21.375 16.2812 21.4062 15.4062C21.4688 14.5 21.5 13.0312 21.5 11C21.5 8.96875 21.4844 7.51563 21.4531 6.64062ZM19.2031 17.1875C18.8281 18.125 18.1562 18.7969 17.1875 19.2031C16.6875 19.3906 15.8438 19.5156 14.6562 19.5781C14 19.6094 13.0312 19.625 11.75 19.625H10.25C9 19.625 8.03125 19.6094 7.34375 19.5781C6.1875 19.5156 5.34375 19.3906 4.8125 19.2031C3.875 18.8281 3.20312 18.1562 2.79688 17.1875C2.60938 16.6562 2.48438 15.8125 2.42188 14.6562C2.39062 13.9688 2.375 13 2.375 11.75V10.25C2.375 9 2.39062 8.03125 2.42188 7.34375C2.48438 6.15625 2.60938 5.3125 2.79688 4.8125C3.17188 3.84375 3.84375 3.17188 4.8125 2.79688C5.34375 2.60938 6.1875 2.48437 7.34375 2.42188C8.03125 2.39062 9 2.375 10.25 2.375H11.75C13 2.375 13.9688 2.39062 14.6562 2.42188C15.8438 2.48437 16.6875 2.60938 17.1875 2.79688C18.1562 3.17188 18.8281 3.84375 19.2031 4.8125C19.3906 5.3125 19.5156 6.15625 19.5781 7.34375C19.6094 8 19.625 8.96875 19.625 10.25V11.75C19.625 13 19.6094 13.9688 19.5781 14.6562C19.5156 15.8125 19.3906 16.6562 19.2031 17.1875Z" fill="url(#paint0_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
              <stop stop-color="#039785"/>
              <stop offset="1" stop-color="#00C1A9"/>
              </linearGradient>
              </defs>
            </svg>

          </div>
        </div>

        <div className="footer__category">
          <h3 className="heading-tertiary">Company</h3>
          <ul className="footer__menu">
            <li className="footer__link">About Us</li>
            <li className="footer__link">Careers</li>
            <li className="footer__link">Press</li>
            <li className="footer__link">Privacy & Policy</li>
            <li className="footer__link">FAQs</li>
          </ul>
        </div>

        <div className="footer__category">
          <h3 className="heading-tertiary">Discover</h3>
          <ul className="footer__menu">
            <li className="footer__link">How it Works</li>
            <li className="footer__link">CM Local Ambassadors</li>
            <li className="footer__link">CM Business</li>
            <li className="footer__link">CM Premium</li>
            <li className="footer__link">Partners</li>
          </ul>
        </div>

      <div className="footer__subscribe">
        <h3 className="heading-tertiary" style={{marginBottom: "10px"}}>Subscribe to Our Newsletter</h3>
        <a href="#" className="footer__link">Receive our latest news and promotions <br /> in your inbox!</a>
        <a href="#" className="footer__button">
          Your email address
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="9" y1="-13" x2="9" y2="31" gradientUnits="userSpaceOnUse">
            <stop stop-color="#039785"/>
            <stop offset="1" stop-color="#014C43" stop-opacity="0.1"/>
            </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>
    <p className="paragraph footer__intellect">&copy; Copyright 2019. CountlessMiles. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;