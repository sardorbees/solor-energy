// FloatingMenu.jsx
import React, { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaTimes, FaCommentDots } from "react-icons/fa";

const FloatingButtons = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={styles.container}>
            {/* Кнопки меню */}
            <div style={{ ...styles.menu, transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0 }}>
                <a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp" style={{ ...styles.button, backgroundColor: "#FF3338" }}>
                    <FaInstagram style={styles.icon} />
                </a>
            </div>
            <div style={{ ...styles.menu, transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0 }}>
                <a href="https://t.me/Enerjiprojectadmin" target="_blank" rel="noopener noreferrer" style={{ ...styles.button, backgroundColor: "#2196F3" }}>
                    <FaTelegramPlane style={styles.icon} />
                </a>
            </div>

            {/* Основная кнопка */}
            <button
                style={{ ...styles.button, backgroundColor: "#F44336" }}
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes style={styles.icon} /> : <FaCommentDots style={styles.icon} />}
            </button>
        </div>
    );
};

const styles = {
    container: {
        position: "fixed",
        bottom: "30px",
        right: "20px",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "12px",
        zIndex: 9999
    },
    menu: {
        transition: "all 0.3s ease",
    },
    button: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
        border: "none",
        top: '18px',
        bottom: '15px',
        marginTop: '15px',
        position: 'relative',
        cursor: "pointer",
        color: "#fff",
        fontSize: "22px",
        textDecoration: "none"
    },
    icon: {
        fontSize: "24px"
    }
};

export default FloatingButtons;
