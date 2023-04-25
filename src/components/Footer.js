import React from 'react';
// logo 
import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        {/* logo  */}
        <a href="/">
          <img className='' src={LogoWhite} alt="" />
        </a>
        Copyright &copy; 2023. All rights reserved by Sadman Hossain.
      </div>
    </footer>
  );
};

export default Footer;
