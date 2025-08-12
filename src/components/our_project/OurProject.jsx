import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WhyChooseUs from '../why-choose-us/WhyChooseUs';
import '../assets/css/all.min.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/custom.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/swiper-bundle.min.css';

function Services() {
    const [services, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems();
        const intervalId = setInterval(fetchItems, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const resp = await axios.get('http://127.0.0.1:8000/api/our_project/cards/');
            setItems(resp.data);
        } catch (err) {
            console.error('Ошибка загрузки', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '35px' }}>Нашы проекты</h1>
            <div className="page-services">
                <div className="container">
                    <div className="row">
                        {services.map((service) => (
                            <div key={service.id} className="col-lg-4 col-md-6">
                                <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                                    <a href="#" className="service-box-link"></a>

                                    <div className="service-image">
                                        <img src={service.icon} alt={service.title} />
                                        <div className="service-icon">
                                            <img src={service.img} alt={service.title} />
                                        </div>
                                    </div>

                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <WhyChooseUs />

            <div className="footer-ticker">
                <div className="scrolling-ticker">
                    <div className="scrolling-ticker-box">
                        <div className="scrolling-content">
                            <span>Генерируйте свою собственную энергию</span>
                            <span>Пожинайте плоды</span>
                            <span>Исцели мир</span>
                            <span>Эффективность и мощность</span>
                            <span>24/7 Круглосуточная поддержка</span>
                        </div>
                        <div className="scrolling-content">
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
    );
}

export default Services;