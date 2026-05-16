import ProductCard from "./ProductCard";
import styles from './styles/ProductList.module.css'
import { useProductContext } from "../contexts/ProductContext";
import { useRef, useEffect } from "react";

export default function ProductList() {
    const { loading, filteredDrinks, query, setLocations, setQuery} = useProductContext()
    const inputRef = useRef()
    
     useEffect(()=> {
        inputRef.current.focus()
    }, [])


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
    return (

        <>
        <div className={styles.container}>
            <div className={styles.search}>
                <input 
                ref={inputRef}
                type="text" 
                placeholder="Type your search" 
                value={query} 
                onChange={(e) => handleInputChange(e)}
                className={styles.searchinput}/>

                <div className={styles.checkBoxes}>
                    <label>
                        Location 1
                        <input
                            className={styles.checkBox}
                            type="checkbox"
                            value="1"
                            onChange={handleCheckboxChange}
                        />
                    </label>

                    <label>
                        Location 2
                        <input
                            type="checkbox"
                            value="2"
                            onChange={handleCheckboxChange}
                        />
                    </label>

                    <label>
                        Location 3
                        <input
                            type="checkbox"
                            value="3"
                            onChange={handleCheckboxChange}
                        />
                    </label>

                    <label>
                        Location 4
                        <input
                            type="checkbox"
                            value="4"
                            onChange={handleCheckboxChange}
                        />
                    </label>

                </div>
            </div>

            <div className={styles.cardContainer}>
                {loading && <h1>Loading...</h1>}
                {
                    filteredDrinks.map(drink => (
                        <ProductCard
                            key={drink.id}
                            drink={drink}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}