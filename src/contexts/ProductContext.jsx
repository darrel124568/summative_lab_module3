import { createContext, useContext, useState } from "react";
import { useFetchData } from "../customHooks/Fetch";

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [locations, setLocations] = useState([]);
    const [query, setQuery] = useState('');

    const url =
        locations.length > 0
            ? `http://localhost:3000/drinks?location_in=${locations.join(',')}`
            : 'http://localhost:3000/drinks';

    const { data: drinks, loading, setData } = useFetchData(url);

    const filteredDrinks =
        query === ''
            ? drinks
            : drinks.filter(drink =>
                drink.name?.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <ProductContext.Provider
            value={{
                loading,
                filteredDrinks,
                query,
                setLocations,
                setQuery,
                setData
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}