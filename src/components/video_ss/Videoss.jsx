import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/all.min.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/custom.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/swiper-bundle.min.css';

function Videoss() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems();
        // ❌ убрал setInterval — чтобы не перезапускалось каждую секунду
    }, []);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const resp = await axios.get('http://127.0.0.1:8000/api/media_app/api/media-items/');
            setItems(resp.data);
        } catch (err) {
            console.error('Ошибка загрузки', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-header-box">
                                <br /><br /><br />
                                <h1 className="text-anime">Наше Видео</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-services">
                <div className="container">
                    <div className="row">
                        {loading && <p>Загрузка...</p>}
                        {!loading && items.length === 0 && <p>Нет данных</p>}
                        {items.map((item, index) => (
                            <div key={item.id || index} className="col-lg-4 col-md-6">
                                <div className="service-item wow fadeInUp" data-wow-delay={`${0.25 * (index % 3)}s`}>
                                    {item.video_url ? (
                                        <video
                                            src={item.video_url}
                                            controls
                                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                        />
                                    ) : item.image_url ? (
                                        <img
                                            src={item.image_url}
                                            alt={item.title}
                                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{
                                            height: '250px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff'
                                        }}>
                                            Нет медиа
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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

export default Videoss;
