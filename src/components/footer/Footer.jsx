import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/12.png'
import Marquee from "react-fast-marquee";
import '../assets/css/all.min.css'
import '../assets/css/animate.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/swiper-bundle.min.css'

import email from '../assets/img/icon-one/icon-email.svg'
import phone from '../assets/img/icon-one/icon-phone.svg'
import lovation from '../assets/img/icon-one/icon-location.svg'

function Footer() {
    return (
        <div>
            <footer class="main-footer">

                <div class="footer-contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">

                                <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="contact-icon-box">
                                        <img src={email} alt="" />
                                    </div>

                                    <div class="footer-contact-info">
                                        <h3>Telegram username</h3>
                                        <p>Enerji Project</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4">

                                <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="contact-icon-box">
                                        <img src={phone} alt="" />
                                    </div>

                                    <div class="footer-contact-info">
                                        <h3>Enerji Project Admin</h3>
                                        <p>+998951481212</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4">

                                <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.75s">
                                    <div class="contact-icon-box">
                                        <img src={lovation} alt="" />
                                    </div>

                                    <div class="footer-contact-info">
                                        <h3>Наше местоположение</h3>
                                        <p>Арк Булок L1-21</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="mega-footer">
                                <div class="row">
                                    <div class="col-lg-3 col-md-12">

                                        <div class="footer-about">
                                            <h1>Enerji Project</h1>
                                            <p>Установка солнечного освещения и солнечных панелей "под ключ"
                                                Профессиональная мойка
                                                солнечных панелей
                                                Установка дизельных генераторов</p>
                                        </div>

                                        <div class="footer-social-links">
                                            <ul>
                                                <li><a href="https://t.me/Enerjiprojectadmin"><img src="./img/icon/telegram.png"
                                                    alt="" /></a></li>
                                                <li><a
                                                    href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp"><img
                                                        src="./img/icon/instagram.png" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-4">
                                        <div class="footer-links">
                                            <h2>Быстрые ссылки</h2>
                                            <ul>
                                                <li><a href="#">Основный</a></li>
                                                <li><a href="./about">О нас</a></li>
                                                <li><a href="./projects">Католог</a></li>
                                                <li><a href="./services">Наш Услуги</a></li>
                                                <li><a href="./contact">Контакт</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-4">
                                        <div class="footer-links">
                                            <h2>Услуги</h2>
                                            <ul>
                                                <li><a>Консультирование</a></li>
                                                <li><a>Солнечная система</a></li>
                                                <li><a>Солнечная панель</a></li>
                                                <li><a>Руководство по стилю</a></li>
                                                <li><a>Лицензия</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="footer-copyright">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="footer-copyright-text">
                                            <p>Если вы заходите на сайт или получаете информацию, вы несете за это
                                                ответственность.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;