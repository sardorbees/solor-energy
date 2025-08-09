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
import call from '../assets/img/icon/call.png'
import Navbar from '../nabvar/Navbar';

import telegram from '../assets/img/icon/telegram.png'
import instagram from '../assets/img/icon/instagram.png'

function Topbar() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('access')
        if (token) {
            axios.get('http://127.0.0.1:8000/api/accounts/profile/', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => {
                setUser(res.data)
            }).catch(() => setUser(null))
        }
    }, [])
    return (
        <div>
            <div class="topbar wow fadeInUp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="topbar-contact-info">
                                <ul>
                                    <li><a href="tel:+998951481212"><img src={call} alt="" width={20} /> +998 95 148 12 12</a></li>
                                    <li><a href="tel:++998953451212"><img src={call} alt="" width={20} />+998 95 345 12 12</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="header-social-links">
                                <ul>
                                    <li>
                                        <a href="https://t.me/Enerjiprojectadmin"><img src={telegram} alt="" /></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp"><img
                                        src={instagram} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;