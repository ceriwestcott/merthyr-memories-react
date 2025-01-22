import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Location } from "../models/Entry";

const LocationCard = ({
  location,
  onClick,
}: {
  location: Location;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    {/* Background Image */}
    <img
      src={location.image}
      alt={location.name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
      <div>
        <h2 className="text-2xl font-bold mb-2 transform group-hover:translate-y-2 transition-transform">
          {location.name}
        </h2>
        <div className="w-12 h-1 bg-white rounded-full transform transition-all duration-300 group-hover:w-16"></div>
      </div>
      <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to explore
        <svg
          className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  </div>
);

const LoadingCard = () => (
  <div className="h-64 rounded-xl bg-gray-200 animate-pulse">
    <div className="h-full flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
    </div>
  </div>
);

const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="col-span-full p-8 rounded-xl bg-red-50 border border-red-100">
    <div className="text-center">
      <h3 className="text-xl font-semibold text-red-800 mb-3">
        Unable to load locations
      </h3>
      <p className="text-red-600 mb-4">
        There was an error fetching the location data. Please try again.
      </p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Retry
      </button>
    </div>
  </div>
);

function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchLocations = () => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/locations")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch locations");
        return response.json();
      })
      .then((data: Location[]) => {
        setLocations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleClick = (area: string) => {
    navigate(`/area?area=${area}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Areas of Merthyr Tydfil
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the historic neighborhoods and distinctive areas of our town
        </p>
      </div>

      {error ? (
        <ErrorState onRetry={fetchLocations} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {loading
            ? [...Array(6)].map((_, index) => <LoadingCard key={index} />)
            : locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  onClick={() => handleClick(location.name)}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default Locations;
