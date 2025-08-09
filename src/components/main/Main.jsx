import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../video/Video';
import AboutUs from '../about-us/AboutUs'
import ServicesLayout from '../services-layout/ServicesLayout';
import WhyChooseusLayout from '../why-chooseus-layout/WhyChooseusLayout';
import OurProcessLlayout from '../our-process-layout/OurProcessLlayout';

function Main() {
    return (
        <div>
            <Video />
            <AboutUs />
            <ServicesLayout />
            < WhyChooseusLayout />
            <OurProcessLlayout />
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
export default Main;