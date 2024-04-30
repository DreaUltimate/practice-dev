import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${BASE_URL}/cities`);
                const data = await res.data;
                setCities(data);
            } catch {
                console.error('Error fetching city data...');
            } finally {
                setIsLoading(false);
            }
        };
        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await axios.get(`${BASE_URL}/cities/${id}`);
            const data = await res.data;
            setCurrentCity(data);
        } catch {
            console.error('Error fetching city data...');
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await axios.post(
                `${BASE_URL}/cities`,
                JSON.stringify(newCity),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await res.data;

            setCities((cities) => [...cities, data]);
        } catch {
            throw new Error('There was an error creating the city');
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id) {
        try {
            setIsLoading(true);
            await axios.delete(`${BASE_URL}/cities/${id}`);

            setCities((cities) => cities.filter((city) => city.id !== id));
        } catch {
            throw new Error('There was an error deleting the city');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error('The useCities should be inside <CitiesProvider>');

    return context;
}

export { CitiesProvider, useCities };