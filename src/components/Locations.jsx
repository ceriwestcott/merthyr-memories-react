import React, { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
function Locations() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the fake API
        fetch("http://localhost:3001/locations")
            .then((response) => response.json())
            .then((data) => {
                setLocations(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleClick = (area) => {
        navigate(`/area?area=${area}`);
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">Areas of Merthyr Tydfil</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {locations.map((location) => (
                    <div
                        key={location.id}
                        className="card shadow-lg bg-white border border-gray-200 rounded-lg p-4 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-gray-700">{location.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Locations;
