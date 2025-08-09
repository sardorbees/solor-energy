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
import WhyChooseUs from '../why-choose-us/WhyChooseUs'
import moyka from '../assets/img/icon-one/moyka.jpg'
import moyka1 from '../assets/img/logo1/icon-service-1.svg'
import s from '../assets/img/icon-one/moyka-panel.jpg'
import s1 from '../assets/img/logo1/icon-service-2.svg'
import yus from '../assets/img/icon-one/odam-panel.jpg'
import yus1 from '../assets/img/logo1/icon-service-3.svg'
import yush from '../assets/img/logo1/service-4.jpg'
import yush1 from '../assets/img/logo1/icon-service-4.svg'
import img from '../assets/img/video/veter.jpeg'
import page from '../assets/img/video/page.webp'
import generator from '../assets/img/video/generator.webp'
import akam from '../assets/img/video/akam.png'
import cta from '../assets/img/video/cta.webp'
import ota from '../assets/img/video/ota.webp'
import kat from '../assets/img/video/kat.webp'
import itp from '../assets/img/video/itp.webp'
import kon from '../assets/img/video/kon.webp'


function Services() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header-box">
                                <br /><br /><br />
                                <h1 class="text-anime">Наш Услуги</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">

                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={moyka} alt="" />

                                    <div class="service-icon">
                                        <img src={moyka1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Солнечных панелей</h3>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={s} alt="" />

                                    <div class="service-icon">
                                        <img src={s1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Инверторы</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={yus} alt="" />

                                    <div class="service-icon">
                                        <img src={yus1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3> Ветерной Электростанции</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={yush} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Уличные Автономные Светильники</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={img} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Ветерной Электростанции</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={page} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Зарядной Станции</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={generator} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Дизельного Генератора</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={akam} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Аккумляторы</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={cta} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Стабилизатора</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={ota} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Системы Отопления </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={kat} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Котлов</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={itp} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>ИТП</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" class="service-box-link"></a>

                                <div class="service-image">
                                    <img src={kon} alt="" />

                                    <div class="service-icon">
                                        <img src={yush1} alt="" />
                                    </div>
                                </div>

                                <div class="service-content">
                                    <h3>Когенерация</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
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
export default Services;