import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()
export function ProductProvider({children}) {

        const [drinks, setDrinks] = useState([])
        const [locations, setLocations] = useState([])
        const [query, setQuery] = useState('')
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
    
            const url =
                locations.length > 0
                    ? `http://localhost:3000/drinks?location_in=${locations.join(',')}`
                    : 'http://localhost:3000/drinks'
    
            fetch(url)
                .then(r => {
                    if(!r.ok) {throw new Error(`could not fetch: ${r.status}`)}                     
                    return r.json()
                })                    
                .then(data => setDrinks(data))
                .catch(error => {
                    Alert(error)
                })
                .finally(setLoading(false))
    
        }, [locations])   
        
        
        const filteredDrinks = query === ''? drinks: drinks.filter(drink => drink.name.toLowerCase().includes(query.toLowerCase()))

    return(
        <ProductContext.Provider value={{loading, filteredDrinks, query, setLocations, setQuery, setDrinks}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){
    return useContext(ProductContext)
}
