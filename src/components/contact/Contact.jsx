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
import location from '../assets/img/logo1/location-img.jpg'
import location1 from '../assets/img/logo1/icon-location.svg'

import email from '../assets/img/logo1/email-img.jpg'
import email1 from '../assets/img/logo1/icon-mail.svg'

import phone from '../assets/img/logo1/phone-img.jpg'
import phone1 from '../assets/img/logo1/icon-phone.svg'

import follow from '../assets/img/logo1/follow-img.jpg'
import follow1 from '../assets/img/logo1/icon-follow.svg'

import telegram from '../assets/img/icon/telegram.png'
import instagram from '../assets/img/icon/instagram.png'

function Contact() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header-box">
                                <br /><br /><br />
                                <h1 class="text-anime">Связаться с нами</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-information">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">Контактная информация</h3>
                                <h2 class="text-anime">С радостью отвечу на все ваши вопросы</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                                <div class="contact-image">
                                    <figure class="image-anime">
                                        <img src={location} alt="" />
                                    </figure>
                                </div>

                                <div class="contact-info-content">
                                    <h3>Наши адреса:</h3>
                                    <p>Арк Булок L1-21</p>
                                </div>

                                <div class="contact-icon">
                                    <img src={location1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                                <div class="contact-image">
                                    <figure class="image-anime">
                                        <img src={email} alt="" />
                                    </figure>
                                </div>

                                <div class="contact-info-content">
                                    <h3>Telegram username:</h3>
                                    <p>@Enerjiprojectadmin</p>
                                </div>

                                <div class="contact-icon">
                                    <img src={email1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="0.75s">
                                <div class="contact-image">
                                    <figure class="image-anime">
                                        <img src={phone} alt="" />
                                    </figure>
                                </div>

                                <div class="contact-info-content">
                                    <h3>Телефоны:</h3>
                                    <p>+998 95 148 12 12</p>
                                </div>

                                <div class="contact-icon">
                                    <img src={phone1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="1.0s">
                                <div class="contact-image">
                                    <figure class="image-anime">
                                        <img src={follow} alt="" />
                                    </figure>
                                </div>

                                <div class="contact-info-content">
                                    <h3>Подписывайтесь на нас:</h3>
                                    <ul>
                                        <li><a href="https://t.me/Enerjiprojectadmin"><img src={telegram}
                                            alt="" /></a>
                                        </li>
                                        <li><a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp"><img
                                            src={instagram} alt="" /></a></li>
                                    </ul>
                                </div>

                                <div class="contact-icon">
                                    <img src={follow1} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="google-map-form">
                <div class="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6001.262471722486!2d69.154235!3d41.229806!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzJzQ3LjMiTiA2OcKwMDknMTUuMyJF!5e0!3m2!1suz!2s!4v1754389360723!5m2!1suz!2s"
                        width="600" height="450" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="contact-form-box">
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">Свяжитесь сейчас</h3>
                                    <h2 class="text-anime">Свяжитесь с нами</h2>
                                </div>

                                <div class="contact-form wow fadeInUp" data-wow-delay="0.75s">
                                    <form class="form" onsubmit="sendEmailTelegram(event)">
                                        <div class="row">
                                            <div class="form-group col-md-6 mb-4">
                                                <input type="text" name="name" autocomplete="off" maxlength="50" required
                                                    placeholder="Имя" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6 mb-4">
                                                <input type="text" name="pass" id="name" autocomplete="off" maxlength="50"
                                                    required placeholder="Фамилия" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6 mb-4">
                                                <input type="text" name="pawwaa" id="name" autocomplete="off" maxlength="50"
                                                    required placeholder="Ваши вопросы" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6 mb-4">
                                                <input type="tel" name="phone" id="phone" autocomplete="off" maxlength="15"
                                                    required placeholder="Номер телефона" class="form-control" />
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-inner">
                                                    <div class="form__submit-block">
                                                        <div class="form__submit-button">
                                                            <button type="submit"
                                                                class="btn-default disabled">Отправлять</button>
                                                        </div>
                                                    </div>
                                                    <div class="form__send-result"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-ticker">
                <div class="scrolling-ticker">
                    <div class="scrolling-ticker-box">
                        <div class="scrolling-content">
                            <span>Генерируйте свою собственную энергию</span>
                            <span>Пожинайте плоды</span>
                            <span>Исцели мир</span>
                            <span>Эффективность и мощность</span>
                            <span>24/7 Круглосуточная поддержка</span>
                        </div>

                        <div class="scrolling-content">
                            <span>Генерируйте свою собственную энергию</span>
                            <span>Пожинайте плоды</span>
                            <span>Исцели мир</span>
                            <span>Эффективность и мощность</span>
                            <span>24/7 Круглосуточная поддержка</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;