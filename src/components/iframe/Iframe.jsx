import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/locations/locations/")
            .then(res => setLocations(res.data))
            .catch(err => console.error("Ошибка при загрузке локаций:", err));
    }, []);

    return (
        <div>
            {Array.isArray(locations) && locations.map((loc) => (
                <div key={loc.id} style={{ marginBottom: "10px" }}>
                    <iframe
                        src={loc.iframe} allowFullScreen
                        loading="lazy" />
                </div>
            ))}
        </div>
    );
};

export default LocationList;