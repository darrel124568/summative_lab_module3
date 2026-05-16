import ProductCard from "./ProductCard";
import styles from './styles/ProductList.module.css'
import { useProductContext } from "../contexts/ProductContext";

export default function ProductList() {

    const {filteredDrinks, query, handleCheckboxChange, handleInputChange, setDrinks} = useProductContext()
    return (

        <>
        <div className={styles.container}>
            <div className={styles.search}>
                <input 
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
                {
                    filteredDrinks.map(drink => (
                        <ProductCard
                            key={drink.id}
                            drink={drink}
                            setDrinks= {setDrinks}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}