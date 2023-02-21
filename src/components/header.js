import React from 'react';
import logo from '../assest/logo.png'
import './style.css'
const Header = () => {
    return (
        <header className={'header'}>
        <div className={'container'}>
               <div className="container">
                   <div className="header__wrapper">
                       <div className="header__block">
                           <a href="/" className="header__logo">
                               <img src={logo} alt="no photo"/>
                           </a>
                       </div>
                       {/*/header__block */}

                       <nav className={'nav'}>
                           <a href="#" className='nav__link active'>Main</a>
                           <a href="#" className='nav__link'>Our services</a>
                           <a href="#" className='nav__link' >About</a>
                           <a href="#" className='nav__link'>Contact</a>
                       </nav>
                       <div className="header__block">
                           <div className="header__lng">
                               <a href="#" className={'header__lng-link'}>Ru</a>
                               <a href="#" className={'header__lng-link active'}>En</a>
                           </div>
                       </div>

                   </div>
                   {/* /header__wrapper*/}

               </div>
        {/* /container*/}


        </div>
        </header>
    );
};

export default Header;