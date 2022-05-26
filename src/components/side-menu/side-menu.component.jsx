import React from "react";

import logo from '../../assets/images/logo.png'
import dollar_icon from '../../assets/svg/dollar.svg'
import list_icon from '../../assets/svg/shopping-list.svg'
import reply_icon from '../../assets/svg/reply.svg'
import copyright_icon from '../../assets/svg/copyright-symbol.svg';
import user_icon from '../../assets/svg/user.svg';
import correct_icon from '../../assets/svg/correct.svg';
import megaphone_icon from '../../assets/svg/megaphone.svg';
import cards_icon from '../../assets/svg/cards.svg';
import envelope_icon from '../../assets/svg/envelope.svg';

const SideMenu = ({toggleMenu}) => {

    return (
        <div className={`side-menu ${toggleMenu ? 'side-menu-mobile' : ''}`}>
            <div className='logo-wrapper'>
                <a className='logo' href='/'>
                    <img src={logo} alt='logo' width='200' height='54'/>
                </a>
                <span className='fa fa-times'></span>
            </div>
            <div className='items'>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={list_icon}/>
                    <span className='name'>Current Orders</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={dollar_icon}/>
                    <span className='name'>Unpaid Orders</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={reply_icon}/>
                    <span className='name'>Previous Orders</span>
                </a>
                <a className='item active' href=''>
                    <img className='icon' alt='icon' src={copyright_icon}/>
                    <span className='name'>Plagiarism Checker</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={user_icon}/>
                    <span className='name'>Profile</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={correct_icon}/>
                    <span className='name'>Verification</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={megaphone_icon}/>
                    <span className='name'>Referral Program</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={cards_icon}/>
                    <span className='name'>Credits</span>
                </a>
                <a className='item' href=''>
                    <img className='icon' alt='icon' src={envelope_icon}/>
                    <span className='name'>Contact us</span>
                </a>
                <span className='line'></span>
                <a className='item item-mobile' href=''>
                    <i className='fa fa-plus'></i>
                    <span className='name'>New Order</span>
                </a>
                <a className='item item-mobile' href=''>
                    <i className='fa fa-edit'></i>
                    <span className='name'>Inquiry</span>
                </a>
            </div>
            <div className='copyright'>
                <p>@ Copyright 2022 Pro-Papers.</p>
            </div>
            <a className='logout-mobile' href='#'>LOG OUT</a>
        </div>
    )
}

export default SideMenu;