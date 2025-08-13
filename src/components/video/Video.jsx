import React from 'react';
import video from '../assets/img/video/video.mp4';
import '../assets/css/all.min.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/custom.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/swiper-bundle.min.css';

function Video() {
    return (
        <div className="hero-layout2 hero-video" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Фоновое видео */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src={video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>

            {/* Контент */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-layout2-box">
                            <div className="section-title">
                                <h1 className="text-anime">Enerji Project</h1>
                                <h3 className="wow fadeInUp">Consulting Engineering Enerji Project</h3>
                            </div>

                            <div className="hero-content wow fadeInUp" data-wow-delay="0.25s">
                                <p>
                                    "Удобства и Безопасность и Эффективность все одном месте"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
