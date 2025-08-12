import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        address: '',
        description: '',
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');
    const [blockedUntil, setBlockedUntil] = useState(null);

    // Загружаем блокировку из localStorage
    useEffect(() => {
        const saved = localStorage.getItem('block_until');
        if (saved && Number(saved) > Date.now()) {
            setBlockedUntil(Number(saved));
            setIsBlocked(true);
        }
    }, []);

    // Таймер обратного отсчёта
    useEffect(() => {
        if (!blockedUntil) return;

        const interval = setInterval(() => {
            const diff = blockedUntil - Date.now();
            if (diff <= 0) {
                clearInterval(interval);
                localStorage.removeItem('block_until');
                setIsBlocked(false);
                setTimeLeft('');
                return;
            }
            const minutes = Math.floor(diff / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            setTimeLeft(`⏳ Повторите через ${minutes} мин ${seconds} сек`);
        }, 1000);

        return () => clearInterval(interval);
    }, [blockedUntil]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError('');

        if (isBlocked) return;

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/applicationapplicationapplications/',
                formData
            );

            if (response.status === 201) {
                setSuccess(true);
                setFormData({ full_name: '', phone: '', address: '', description: '' });

                // блокируем на 2 минуты
                const until = Date.now() + 2 * 60 * 1000;
                localStorage.setItem('block_until', until);
                setBlockedUntil(until);
                setIsBlocked(true);
            }
        } catch (err) {
            if (err.response && err.response.status === 429) {
                const detail =
                    err.response.data?.detail ||
                    'Вы уже отправляли заявку. Повторите через 2 минуты.';
                setError(`❌ ${detail}`);

                const match = detail.match(/(\d+)\s*мин/);
                if (match) {
                    const minutes = parseInt(match[1], 10);
                    const until = Date.now() + minutes * 60 * 1000;
                    localStorage.setItem('block_until', until);
                    setBlockedUntil(until);
                    setIsBlocked(true);
                } else {
                    // если сервер не указал время — ставим 2 минуты по умолчанию
                    const until = Date.now() + 2 * 60 * 1000;
                    localStorage.setItem('block_until', until);
                    setBlockedUntil(until);
                    setIsBlocked(true);
                }
            } else {
                setError('⚠️ Ошибка при отправке формы. Попробуйте позже.');
            }
        }
    };


    const handleUnlock = async () => {
        try {
            await axios.get('https://backend-dedd.onrender.com/api/applicationunlock-ip/');
            localStorage.removeItem('block_until');
            setIsBlocked(false);
            setTimeLeft('');
            setError('');
        } catch (err) {
            setError('⚠️ Не удалось разблокировать. Попробуйте позже.');
        }
    };

    return (
        <div className="contact-form-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-us-box">
                            <div className="contact-us-form">
                                {success && <p className="text-success mb-3">✅ Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.</p>}
                                {error && <p className="text-danger mb-3">{error}</p>}
                                {timeLeft && <p className="text-warning mb-3">{timeLeft}</p>}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="row">
                                        <div className="form-group col-md-6 mb-4">
                                            <input
                                                type="text"
                                                name="full_name"
                                                placeholder="Имя"
                                                value={formData.full_name}
                                                onChange={handleChange}
                                                className="form-control"
                                                required
                                                disabled={isBlocked}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 mb-4">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Телефон"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-control"
                                                required
                                                disabled={isBlocked}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 mb-4">
                                            <input
                                                type="number"
                                                name="address"
                                                placeholder="Телефон номер"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="form-control"
                                                required
                                                disabled={isBlocked}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 mb-4">
                                            <input
                                                name="description"
                                                placeholder="Ваши вопросы"
                                                value={formData.description}
                                                onChange={handleChange}
                                                className="form-control"
                                                rows="3"
                                                disabled={isBlocked} />
                                            <input type="hidden" name="recaptcha_token" id="recaptchaToken" />
                                        </div>

                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                className="btn-default"
                                                disabled={isBlocked}
                                                onclick="sendApplication()"
                                            >
                                                Отправить
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {isBlocked && (
                                    <button className="btn-default" id='retryBtn' onClick={handleUnlock}>
                                        🔁 Попробовать снова
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;