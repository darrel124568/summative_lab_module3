import { useState, useRef, useEffect } from "react"
import { useFetchData } from "../customHooks/Fetch"
import { useNavigate } from "react-router-dom"
import styles from './styles/AdminLogin.module.css'

export default function AdminLogin() {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate()
    const inputRef = useRef()

    const {data} = useFetchData('http://localhost:3000/users')
    const user = data[0]||{ "id": "1", "name": "admin", "password": 1234 }

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(user && formData.userName == user.name && formData.password == user.password){
            navigate('/home', {replace: true})
        } else {
            alert('wrong username or password')
        }
    }
    return (
        <div className={styles.container}>
        <form onSubmit={e => handleSubmit(e)}>
            <label >
                <h4>Username</h4>
                <input type="text" 
                name="userName"
                value={formData.userName}
                placeholder="admin"
                onChange={e => handleChange(e)}
                ref={inputRef}
                 />
            </label>
            <label >
                <h4>Password</h4>
                <input type="text" 
                name="password"
                value={formData.password}
                placeholder="1234"
                onChange={e => handleChange(e)}/>
            </label>
            <button type="submit">Login</button>
        </form>
        </div>
    )
}