import {useState} from 'react';
import validation from "./Validation/validation"

const Form = ({login}) =>{

    const [userData, setUserData] = useState({
        email :"",
        password:"",
    })

    const [errors,setErrors] = useState({})

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }

    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input placeholder="Email..." type="email" name="email" value={userData.email} onChange={handleChange}></input>
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value = {userData.password} onChange={handleChange}></input>
        {errors.password && <p>{errors.password}</p>}
        <button>SUBMIT</button>
    </form>
    )
}

export default Form;