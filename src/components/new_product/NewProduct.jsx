import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from "../api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../assets/css/all.min.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/custom.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/swiper-bundle.min.css';
import '../assets/css/product.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import search from '../assets/img/icon/search.png';
import Nav from '../nav/Nav';
import ProductTypeFilter from '../productypefilter/ProductTypeFilter';
import Brand from '../brand/Brand';
import Skidka from '../skidka/Skidka';

import { useNavigate, useLocation } from 'react-router-dom';

const SolarPanelList = () => {
    const [powers, setPowers] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);

    const selectedPower = new URLSearchParams(location.search).get("power");

    const fetchPowers = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/skidka_product/power/");
            setPowers(res.data);
        } catch (error) {
            console.error("Ошибка при загрузке мощностей:", error);
        }
    };

    useEffect(() => {
        fetchPowers(); // Загрузить сразу при монтировании

        const interval = setInterval(() => {
            fetchPowers();
        }, 1000); // Обновлять каждую секунду

        return () => clearInterval(interval); // Очистить интервал при размонтировании
    }, []);

    const handleClick = (e, powerValue) => {
        e.preventDefault();
        const params = new URLSearchParams(location.search);

        if (powerValue) {
            params.set("power", powerValue);
        } else {
            params.delete("power");
        }

        navigate({ search: params.toString() });
    };

    const togglePower = (slug) => {
        setSelected((prevSelected) =>
            prevSelected.includes(slug)
                ? prevSelected.filter((item) => item !== slug)
                : [...prevSelected, slug]
        );
    };

    return (
        <div>
            <h3>МОЩНОСТЬ</h3>
            <ul className="sf">
                {powers.map((power) => (
                    <li key={power.slug} className="sgdfh">
                        <input
                            type="checkbox"
                            id={power.slug}
                            checked={selected.includes(power.slug)}
                            onChange={() => togglePower(power.slug)}
                            className="mr-2"
                        />
                        <a
                            href={`?power=${power.slug}`}
                            onClick={(e) => handleClick(e, power.slug)}
                            className="ml-2"
                        >
                            {power.name} w
                        </a>
                    </li>
                ))}
                <li className="sgdfh">
                    <a
                        href="/"
                        onClick={(e) => handleClick(e, null)}
                        className="ml-2"
                    >
                        Все мощности
                    </a>
                </li>
            </ul>
        </div>
    );
};

function SkidkaProduct() {
    const navigate = useNavigate();
    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(7000000);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filters, setFilters] = useState({
        color: '',
        rating: '',
        memory: '',
        search: '',
        sort: '',
    });

    // Синхронизация selectedPower с URL
    const [selectedPower, setSelectedPower] = useState(() => {
        const params = new URLSearchParams(location.search);
        return params.get('power') || '';
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const powerParam = params.get('power') || '';
        setSelectedPower(powerParam);
    }, [location.search]);

    useEffect(() => {
        fetchProducts();

        const interval = setInterval(() => {
            fetchProducts();
        }, 1000);

        return () => clearInterval(interval);
    }, [rangeMin, rangeMax, selectedBrands, filters, selectedPower]);

    const fetchProducts = async () => {
        try {
            const queryObj = {
                ...filters,
                min_price: rangeMin,
                max_price: rangeMax,
            };
            if (selectedPower) {
                queryObj.power = selectedPower;
            }
            if (selectedBrands.length > 0) {
                queryObj.brands = selectedBrands.join(',');
            }

            const query = new URLSearchParams(queryObj).toString();

            const res = await axios.get(`http://127.0.0.1:8000/api/new_product/products/?${query}`);
            setProducts(res.data);
        } catch (err) {
            console.error('Ошибка загрузки товаров:', err);
        }
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handleFilterChange = (e) => {
        setFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const addToCart = async (productId) => {
        try {
            await API.post("api/shop/cart/", {
                product_id: productId,
                quantity: 1
            });
            toast.success("✅ Товар добавлен в корзину!");
        } catch {
            toast.error("❌ Ошибка при добавлении в корзину");
        }
    };

    // Обновляем selectedPower и URL при выборе мощности
    const handlePowerChange = (powerValue) => {
        const params = new URLSearchParams(location.search);

        if (powerValue) {
            params.set('power', powerValue);
        } else {
            params.delete('power');
        }

        navigate({ search: params.toString() });
        setSelectedPower(powerValue || '');
    };

    const addToWishlist = async (productId) => {
        try {
            await API.post('api/shop/wishlist/', {
                product_id: productId
            });
            toast.success("❤️ Добавлено в избранное!");
        } catch {
            toast.error("❌ Ошибка при добавлении в избранное");
        }
    };

    const handleSortClick = (sortValue) => {
        let sortParam = '';

        if (sortValue === 'price') sortParam = 'price_asc';
        else if (sortValue === 'rating') sortParam = 'rating_desc';
        else if (sortValue === 'new') sortParam = 'new';
        else if (sortValue === 'popularity') sortParam = 'popularity';

        setFilters(prev => ({
            ...prev,
            sort: sortParam
        }));
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '35px' }}>Новинки</h1>
            <div className="containeraa">
                <main className="main-content">

                    <div className="product-grid">
                        {products.length === 0 && <p>Товары не найдены.</p>}
                        {products.map((p) => (
                            <div key={p.id} className="product-card">
                                <div className="product_img">
                                    <a>
                                        <img src={p.image} alt={p.name} className="img-fluid w-100" />
                                    </a>
                                </div>
                                <div className="product-name">Модель: {p.slug}</div>
                                <div className="product-name">Бранд: {p.name}</div>
                                <div className="product-name">МОЩНОСТЬ: {p.power} w</div>
                                <div className="product-name">Новый: <span style={{ color: 'red' }}>{p.tag}</span> </div>
                                <div className="product-desc">Описание: {p.description}</div>
                                <div className="product-price">
                                    Цена: {p.price} сўм<br />
                                </div>
                                <del>Старая цена: {p.old_price} сўм</del>
                                <div className="flex gap-2 mt-2">
                                    <a href='tel:++998951481212'>
                                        <h1 className="buy-button">Под Заказ</h1>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default SkidkaProduct;
