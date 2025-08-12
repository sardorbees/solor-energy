import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/css/Burger.css';
import burger from '../assets/img/icon/burger-menu.png'
import icon from '../assets/img/logo/12.png'

import telegram from '../assets/img/icon/telegram.png'
import instagram from '../assets/img/icon/instagram.png'

function Burger() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <img src={burger} alt="" width={30} />
            </Button>

            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className="custom-offcanvas"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={icon} alt="" className='ffhgf' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul class="navbar-nav mr-auto" id="menu">
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/about">О комнании</a></li>
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/catalog">Наш Католог</a></li>
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/services">Наш Услуги</a></li>
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/contact">Связь с Нами</a></li>
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/contact">Наш Видео</a></li>
                        <hr />
                        <li class="nav-item"><a class="nav-link" href="/comment">Комментария</a></li>
                        <hr />
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Burger;
