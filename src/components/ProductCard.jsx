import { GoContainer } from 'react-icons/go'
import styles from './styles/ProductCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({drink, setDrinks}) {
    const navigate = useNavigate()
   function handleClick(drink) {
    navigate(`/${drink.id}`, {state: drink})
   }
    function handleDelete(id) {
        fetch(`http://localhost:3000/drinks/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}          
        })
        .then(r => r.json())
        .then(data => {
            setDrinks(prev => prev.filter(drink => drink.id !== data.id))
            alert('Deleted successfully')
        })
    }

    return(
        <div className={styles.container}>
            <img src={drink.image? drink.image: 'https://placehold.co/600x400?font=roboto'} alt="Drink image" />
            <h4>{drink.name}</h4>
            <h5>
                <strong>Origin: </strong> {drink.origin}                
            </h5>
            <p>
                <strong>Description: </strong> 
                {drink.description}
            </p>
            <p>
                <strong>KSH: </strong>
                {drink.price}
            </p>
            <button className={styles.delete} onClick={()=> {handleDelete(drink.id)}}>Delete</button>
            <button className={styles.edit} onClick={()=>handleClick(drink)}>Edit</button>
        </div>
    )
}