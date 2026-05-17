import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet} from "react-router-dom"
import styles from './styles/AdminPortal.module.css'
import { useState, useId, useRef, useEffect } from "react"
import { useProductContext } from "../contexts/ProductContext"

export default function AdminPortal() {
    const inputRef = useRef()
    const id = useId()
    const location = Math.floor(Math.random() * 4) + 1
    const {setData} = useProductContext()
    const [formData, setFormData] = useState({
        id: id,
        name: '',
        origin: '',
        description: '',
        price: '',
        image: '',
        location: location
    })
    

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/drinks`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(!r.ok) {throw new Error(`could not post: ${r.status}`)}
            return r.json()
        })
        .then(data => {
            setData(prev => [...prev, data])
            alert('Successfuly Added')
            setFormData({
                id: id,
                name: '',
                origin: '',
                description: '',
                price: '',
                image: ''
            }
            )
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <form onSubmit={e => handleSubmit(e)}>
            <label >
            <h4>Name</h4>
             <input
             ref={inputRef}
            name='name'
             type="text" 
             placeholder="Enter name of the drink"
             value={formData.name} 
             onChange={e => handleChange(e)}
             required/>
            </label>

            <label >
            <h4>Origin</h4>
            <input
            name='origin'
             type="text" 
             placeholder="Enter origin of the drink"
             value={formData.origin} 
             onChange={e => handleChange(e)}
             required/>
            </label>
            
            <label >
            <h4>Description</h4>
             <input 
            name='description'
            type="text" 
            placeholder="Enter a brief description of the drink"
            value={formData.description} 
            onChange={e => handleChange(e)}
            required/>
            </label>            

            <label >
            <h4>Price</h4>
            <input 
            name='price'
            type="number" 
            placeholder="Enter price of the drink"
            value={formData.price}
            onChange={e => handleChange(e)}
            required/>
            </label>
            
            <label >
            <h4>Image URL</h4>
            <input 
            name='image'
            type='text' 
            placeholder='Enter image URL(Optional)' 
            value={formData.image}
            onChange={e => handleChange(e)}/>
            </label> <br />          
            <button type='submit'>Add Coffee</button>
            </form>
        </div>
        <Outlet />
        <Footer />
        </>
    )
}
