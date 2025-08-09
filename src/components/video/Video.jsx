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
import video from '../assets/img/video/video.mp4'

function Video() {
    return (
        <div>
            <div class="hero-layout2 hero-video">
                <div class="hero-bg-video">
                    <div id="herovideo" class="player"
                        data-property="{videoURL:'TzfnlPxCZv0',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}">
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hero-layout2-box">
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">Добро пожаловать в Enerji Project</h3>
                                    <h1 class="text-anime">Enerji <span>Project</span></h1>
                                </div>

                                <div class="hero-content wow fadeInUp" data-wow-delay="0.25s">
                                    <p>Установка солнечного освещения и солнечных панелей "под ключ",
                                        Профессиональная мойка
                                        солнечных панелей,
                                        Установка дизельных генераторов.</p>
                                </div>

                                <div class="hero-button wow fadeInUp" data-wow-delay="0.5s">
                                    <a href="./services.html" class="btn-default">Наши услуги</a>
                                    <a href="https://t.me/Enerjiprojectadmin" class="btn-default btn-border">Свяжитесь
                                        сейчас</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video;