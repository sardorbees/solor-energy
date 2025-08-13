import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        const token = localStorage.getItem('access');

        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/accounts/change-password/',
                {
                    old_password: oldPassword,
                    new_password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage(response.data.message || 'Пароль успешно изменён');
            setOldPassword('');
            setNewPassword('');
        } catch (err) {
            if (err.response?.status === 401) {
                navigate('/login');
            } else {
                const data = err.response?.data;
                setError(
                    data?.old_password?.[0] ||
                    data?.new_password?.[0] ||
                    data?.detail ||
                    'Ошибка при смене пароля'
                );
            }
        }
    };

    return (
        <div className="change-password">
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-header-box">
                                <br /><br />
                                <h1 className="text-anime">Изменить пароль</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: '25px', marginBottom: '25px' }}>Изменить пароль</h2>
            <form onSubmit={handleChangePassword} style={{ textAlign: 'center' }}>
                <div style={{ marginTop: '35px' }}>
                    <label >Старый пароль</label>
                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '15px' }}>
                        <input
                            type={showOld ? 'text' : 'password'}
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                            name='name'
                            style={{ flex: 1, border: '1px solid black', paddingTop: '15px' }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowOld(!showOld)}
                            style={{ marginLeft: '5px', marginTop: '-1px' }}
                            className='theme-togglee'
                        >
                            {showOld ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '15px' }}>
                    <label>Новый пароль</label>
                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '15px' }}>
                        <input
                            type={showNew ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            style={{ flex: 1, border: '1px solid black' }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowNew(!showNew)}
                            style={{ marginLeft: '5px', marginTop: '-1px' }}
                            className='theme-togglee'
                        >
                            {showNew ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>
                <button type="submit" class="btn-default" style={{ background: 'green', marginTop: '1rem' }}>
                    Сменить пароль
                </button>
                <br /><br />
            </form>

            {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
};

export default ChangePassword;
