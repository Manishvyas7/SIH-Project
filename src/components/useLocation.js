import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
              params: {
                lat: latitude,
                lon: longitude,
                format: 'json',
                addressdetails: 1
              }
            });
            
            const { city, state } = response.data.address;
            setLocation(`${city || ''} ${state || ''}`);  // Corrected line
          } catch (error) {
            console.error("Error fetching location data", error);
          }
        }, (error) => {
          console.error("Error getting geolocation", error);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  return location;
};

export default useLocation;
