import React, { useEffect, useState } from "react";
import axios from "axios";

const Iframe = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Функция загрузки данных с API
        const fetchLocations = () => {
            axios.get("http://127.0.0.1:8000/api/locations/locations/")
                .then(res => setLocations(res.data))
                .catch(err => console.error("Ошибка при загрузке локаций:", err));
        };

        fetchLocations(); // загрузить сразу при монтировании

        // Запускаем интервал обновления каждую секунду (1000ms)
        const intervalId = setInterval(fetchLocations, 1000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {Array.isArray(locations) && locations.map((loc) => (
                <iframe
                    key={loc.id} // обязательно уникальный ключ!
                    src={loc.iframe}
                    style={{ height: '766px', border: 'none', marginBottom: '20px' }}
                    width="600"
                    height="850"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Location-${loc.id}`}
                />
            ))}
        </div>
    );
};

export default Iframe;
