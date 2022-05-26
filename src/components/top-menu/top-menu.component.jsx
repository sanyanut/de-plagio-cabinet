import React from "react";
import search_icon from '../../assets/images/search-icon.png';
import profile_icon from '../../assets/images/profile-placeholder.png';


const TopMenu = ({toggleMenu}) => {
    return (
        <>
            <div className='burger-button' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='top-menu'>
                <div className='search'>
                    <img src={search_icon} alt=''/>
                    <input className='input' type='text' placeholder='Search...'/>
                </div>
                <div className='buttons'>
                    <a className='order' href='#'>New Order</a>
                    <a className='inquiry' href='#'>Inquiry</a>
                    <a className='notification' href='#'>
                        <i className="fa fa-bell"></i>
                    </a>
                    <a className='profile' href='#'>
                        <div className='img-wrapper'>
                            <img src={profile_icon} alt='Profile icon' width='40' height='40'/>
                        </div>
                        <div className='text'>
                            <p className='name'>Alex</p>
                            <p className='id'>2555</p>
                        </div>
                    </a>
                    <div className='logout'>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopMenu;