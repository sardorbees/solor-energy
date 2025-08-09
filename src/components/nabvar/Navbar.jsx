import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import logo from '../assets/img/logo/12.png'
import '../assets/css/all.min.css'
import '../assets/css/animate.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/swiper-bundle.min.css'

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const update = () => {
            const token = localStorage.getItem("access");
            if (!token) return setUser(null);
            API.get("api/accounts/profile/")
                .then((res) => setUser(res.data))
                .catch(() => setUser(null));
        };

        update(); 

        window.addEventListener("authChanged", update);

        return () => window.removeEventListener("authChanged", update);
    }, []);
    return (
        <nav style={{ marginTop: "0px" }}>
            <div>
                {user ? (
                    <>
                        <Link to="/profile" style={{ marginRight: "15px", display: "flex", alignItems: "center" }}>
                            {user.image && (
                                <img
                                    src={user.image}
                                    alt="avatar"
                                    width="35"
                                    height="35"
                                    style={{ borderRadius: "50%", objectFit: "cover", marginRight: "8px", color: 'var(--text-color)' }}
                                />
                            )}
                            <span style={{ color: 'var(--text-color)' }}>{user.first_name || user.username}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" style={{ color: 'var(--text-color)' }}>Регистрация</Link> | <Link to="/login" style={{ color: 'var(--text-color)' }}>Вход</Link>
                    </>
                )}
            </div>
        </nav>
    );
}