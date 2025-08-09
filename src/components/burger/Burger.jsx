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
                        <li class="nav-item"><a class="nav-link" href="/">Основный</a></li>
                        <hr />
                        <li class="nav-item"><a class='nav-link' href='/about'>О нас</a></li>
                        <hr />
                        <li class="nav-item"><a class='nav-link' href='/services'>Услуги</a></li>
                        <hr />
                        <li class="nav-item"><a class='nav-link' href='/contact'>Контакт</a></li>
                        <hr />
                        <li class="nav-item highlighted-menu"><a class="nav-link"
                            href="https://t.me/Enerjiprojectadmin">Забронировать сейчас</a>
                        </li>
                        <hr />
                    </ul>
                    <div className="ffh">
                        <a href="/catalog" className='sdgiu'>Католог</a>
                        <a href="/allcategory" className='sdgiu'>Все категории</a>
                    </div>
                    <div class="header-social-links">
                        <ul>
                            <li>
                                <a href="https://t.me/Enerjiprojectadmin"><img src={telegram} alt="" /></a>
                            </li>
                            <li><a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp"><img
                                src={instagram} alt="" /></a></li>
                        </ul>
                    </div>
                    <hr />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Burger;
