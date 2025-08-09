import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../video/Video';

function OurProcessLlayout() {
    return (
        <div>
            <div class="our-process-layout2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">Наш процесс</h3>
                                <h2 class="text-anime">Наш рабочий процесс</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <div class="process-item2 wow fadeInUp" data-wow-delay="0.25s">
                                <div class="process-step">
                                    <span>01</span>
                                </div>

                                <div class="process-content">
                                    <div class="icon-box">
                                        <img src="./img/icon-one/plan1.svg" alt=""/>
                                    </div>

                                    <h3>Планирование проекта</h3>
                                    <p>продвигать передовые технологии в области Smart PV (умных солнечных систем);</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="process-item2 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="process-step">
                                    <span>02</span>
                                </div>

                                <div class="process-content">
                                    <div class="icon-box">
                                        <img src="./img/icon-one/plan2.svg" alt=""/>
                                    </div>

                                    <h3>Исследования и анализ</h3>
                                    <p>предлагать клиентам надёжные и эффективные энергетические решения;</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="process-item2 wow fadeInUp" data-wow-delay="0.75s">
                                <div class="process-step">
                                    <span>03</span>
                                </div>

                                <div class="process-content">
                                    <div class="icon-box">
                                        <img src="./img/icon-one/plan3.svg" alt=""/>
                                    </div>

                                    <h3>Солнечная установка</h3>
                                    <p>реализовывать проекты на новом уровне качества и эффективности.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurProcessLlayout;