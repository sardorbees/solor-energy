import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/12.png'
import '../assets/css/all.min.css'
import '../assets/css/animate.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/swiper-bundle.min.css'
import Navbar from '../nabvar/Navbar';
import Burger from '../burger/Burger';

function Header() {
    return (
        <div>
            <header class="main-header">
                <div class="header-sticky">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <a class="navbar-brand" href="/">
                                <img src={logo} alt="" class="logoa" />
                            </a>

                            <div class="collapse navbar-collapse main-menu">
                                <ul class="navbar-nav mr-auto" id="menu">
                                    <li class="nav-item"><a class="nav-link" href="/about">О комнании</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/catalog">Наш Католог</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/services">Наш Услуги</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/video-type">Наш Видео</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/contact">Связь с нами</a></li>
                                    {/* <li class="nav-item"><a class="nav-link" href="/allcategory">Все категории</a></li> */}
                                </ul>
                            </div>
                            <li class="nav-iteme"><a class="nav-link"><Navbar /></a></li>
                            <div class="navbar-toggle">
                                <Burger />
                            </div>
                        </div>
                    </nav>

                    <div class="responsive-menu"></div>
                </div>
            </header>
        </div>
    )
}
export default Header;