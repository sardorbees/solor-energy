import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/LaptopList.css"; // подключаем стили

const LaptopList = () => {
    const [laptops, setLaptops] = useState([]);

    const fetchLaptops = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/category_all/laptops/");
            setLaptops(response.data);
        } catch (err) {
            console.error("Ошибка при загрузке:", err);
        }
    };

    useEffect(() => {
        fetchLaptops();
        const interval = setInterval(fetchLaptops, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header-box">
                                <br /><br /><br />
                                <h1 class="text-anime">Каталог товаров в Ташкенте</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="gfdgd">Каталог товаров в Ташкенте</h1>
            <div className="laptop-grid">
                {laptops.map((laptop) => (
                    <a
                        href={laptop.slug}
                        key={laptop.id}
                        className="laptop-card"
                    >
                        <img src={laptop.img} alt={laptop.name} className="laptop-image" />
                        <div className="laptop-name">{laptop.name}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LaptopList;
