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
import banner from '../assets/img/banner/1.jpg'
import banner1 from '../assets/img/banner/2.jpg'

function AboutUs() {
    return (
        <div>
            <div class="about-us">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-image">
                                <div class="about-img-1">
                                    <img src={banner} alt=""/>
                                </div>

                                <div class="about-img-2">
                                    <img src={banner1} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">О нас</h3>
                                <h2 class="text-anime">О зеленой энергии солнечной энергии</h2>
                            </div>
                            <div class="about-content wow fadeInUp" data-wow-delay="0.25s">
                                <ul>
                                    <li>Установка солнечного освещения и солнечных панелей "под ключ"</li>
                                    <li>Профессиональная мойка солнечных панелей</li>
                                    <li>Установка дизельных генераторов</li>
                                    <li>Установка стабилизаторов</li>
                                    <li>Монтаж и наладка резервных систем стабилизации</li>
                                    <li>Стабилизаторы: от 1 кВт до 100 кВт</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;