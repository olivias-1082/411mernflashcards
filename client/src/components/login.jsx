import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
    
             <div class="w3-container">
  
             <div style={{ marginTop: 20 }}>
               <h3 align="center"> Login</h3>
           <form onSubmit={e=>login(e)}>
             <label htmlFor="emal">Name:</label>        
             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>

            
             <label htmlFor="pasword">Password:</label>  
             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>

             <button className="btn btn-info"
                     type="submit"> 
     Register
             </button>
           </form>
           </div>
             </div>
    )
}

export default Login