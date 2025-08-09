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
import banner from '../assets/img/banner/3.jpg'
import icon from '../assets/img/banner/icon-whyus-1.svg'

import banner1 from '../assets/img/banner/4.jpg'
import icon1 from '../assets/img/banner/icon-whyus-2.svg'

import banner2 from '../assets/img/banner/5.jpg'
import icon2 from '../assets/img/banner/icon-whyus-3.svg'

import banner3 from '../assets/img/banner/6.jpg'
import icon3 from '../assets/img/banner/icon-whyus-4.svg'

function WhyChooseUs() {
    return (
        <div>
            <div class="why-choose-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">Почему выбирают нас?</h3>
                                <h2 class="text-anime">Предоставление решений в области солнечной энергетики</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                <div class="why-choose-image">
                                    <img src={banner} alt=""/>
                                </div>

                                <div class="why-choose-content">
                                    <img src={icon} alt=""/>

                                        <h3>Эффективность и мощность</h3>
                                        <p>Мы работаем на качественном, сертифицированном оборудовании.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                                <div class="why-choose-image">
                                    <img src={banner1} alt=""/>
                                </div>

                                <div class="why-choose-content">
                                    <div class="why-choose-icon">
                                        <img src={icon1} alt=""/>
                                    </div>

                                    <h3>Доверие и гарантия</h3>
                                    <p>Мы работаем на качественном, сертифицированном оборудовании.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.75s">
                                <div class="why-choose-image">
                                    <img src={banner2} alt=""/>
                                </div>

                                <div class="why-choose-content">
                                    <div class="why-choose-icon">
                                        <img src={icon2} alt=""/>
                                    </div>

                                    <h3>Высококачественная работа</h3>
                                    <p>Мы работаем на качественном, сертифицированном оборудовании.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="why-choose-item wow fadeInUp" data-wow-delay="1.0s">
                                <div class="why-choose-image">
                                    <img src={banner3} alt=""/>
                                </div>

                                <div class="why-choose-content">
                                    <div class="why-choose-icon">
                                        <img src={icon3} alt=""/>
                                    </div>

                                    <h3>Круглосуточная поддержка</h3>
                                    <p>Мы работаем на качественном, сертифицированном оборудовании.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs;