import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductTypeFilter = () => {
    const [powers, setPowers] = useState([]);
    const [selected, setSelected] = useState([]);

    const fetchPowers = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/shop_category/producttype/");
            setPowers(res.data);
        } catch (err) {
            console.error("Ошибка при загрузке мощности:", err);
        }
    };

    useEffect(() => {
        // начальная загрузка
        fetchPowers();

        // интервал каждую 1 секунду
        const interval = setInterval(fetchPowers, 1000);

        // очистка при размонтировании
        return () => clearInterval(interval);
    }, []);

    const togglePower = (slug) => {
        setSelected((prevSelected) =>
            prevSelected.includes(slug)
                ? prevSelected.filter((item) => item !== slug)
                : [...prevSelected, slug]
        );
    };

    return (
        <div>
            <div className="space-y-2">
                {powers.map((power) => (
                    <div key={power.slug} className="flex items-center">
                        <input
                            type="checkbox"
                            id={power.slug}
                            checked={selected.includes(power.slug)}
                            onChange={() => togglePower(power.slug)}
                            className="mr-2"
                        />
                        <a
                            href={power.slug}
                            className="ml-2"
                        >
                            {power.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTypeFilter;