import styles from './styles/EditForm.module.css'
import { useLocation, useNavigate} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

import { useProductContext } from '../contexts/ProductContext'

export default function EditForm() {
    const {setData} = useProductContext()
    const location = useLocation()
    const drink = location.state
    const navigate = useNavigate()
    const inputRef = useRef()
    const [formData, setFormData] = useState({
        name: drink.name,
        origin: drink.origin,
        description: drink.description,
        price: drink.price,
        image: drink.image
    })

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

     function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/drinks/${drink.id}`, {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(!r.ok) {throw new Error(`Could not edit: r.status`)}
            return r.json()
        })
        .then(data => {
            setData(prev => prev.map(drink => drink.id !== data.id? drink: data))
            alert('Successfuly editted')
            navigate('/Shop', {replace: true})
        })
        .catch(error => {
            alert(error)
        })
    }
    return(
        <>
        <div className={styles.container}>
            <form onSubmit={e => handleSubmit(e)}>
            <label >
            <h4>Name</h4>
             <input
            name='name'
             type="text"
             ref={inputRef} 
             value={formData.name} 
             onChange={e => handleChange(e)}
             required/>
            </label>

            <label >
            <h4>Origin</h4>
            <input
            name='origin'
             type="text" 
             value={formData.origin} 
             onChange={e => handleChange(e)}
             required/>
            </label>
            
            <label >
            <h4>Description</h4>
             <input 
            name='description'
            type="text" 
            value={formData.description} 
            onChange={e => handleChange(e)}
            required/>
            </label>            

            <label >
            <h4>Price</h4>
            <input 
            name='price'
            type="text" 
            value={formData.price}
            onChange={e => handleChange(e)}
            required/>
            </label>
            
            <label >
            <h4>Image URL(optional)</h4>
            <input 
            name='image'
            type='text' 
            placeholder='Enter image URL(Optional)' 
            value={formData.image}
            onChange={e => handleChange(e)}/>
            </label> <br />          
            <button type='submit'>Confirm & Edit</button>
            </form>
        </div>
        </>
    )
}

