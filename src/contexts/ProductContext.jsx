import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()
export function ProductProvider({children}) {

        const [drinks, setDrinks] = useState([])
        const [locations, setLocations] = useState([])
        const [query, setQuery] = useState('')
    
        useEffect(() => {
    
            const url =
                locations.length > 0
                    ? `http://localhost:3000/drinks?location_in=${locations.join(',')}`
                    : 'http://localhost:3000/drinks'
    
            fetch(url)
                .then(r => r.json())
                .then(data => setDrinks(data))
    
        }, [locations])
    
        function handleCheckboxChange(e) {
    
            const value = Number(e.target.value)
    
            if (e.target.checked) {
                setLocations(prev => [...prev, value])
            } else {
                setLocations(prev =>
                    prev.filter(location => location !== value)
                )
            }
        }
    
        function handleInputChange(e) {
            setQuery(e.target.value)
        }
        
        const filteredDrinks = query === ''? drinks: drinks.filter(drink => drink.name.toLowerCase().includes(query.toLowerCase()))

    return(
        <ProductContext.Provider value={{filteredDrinks, query, handleCheckboxChange, handleInputChange, setDrinks}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){
    return useContext(ProductContext)
}