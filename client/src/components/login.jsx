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
    
             <div className="w3-container">
  
             <div style={{ marginTop: 20 }}>
               <h3 align="center"> Login</h3>
           <form onSubmit={e=>login(e)}>
      <div>
             <label htmlFor="emal">Email:</label>        
             <input type="email" style={{width: "100%"}} rows="1" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
</div>
<div>
             <label htmlFor="pasword">Password:</label>  
             <input type="password" style={{width: "100%"}} rows="1"  name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
</div>
<div style={{ marginTop: 10 }}>
             <button className="btn btn-info" style={{
                 width:"20%"
}}
type="submit"> 
     Login
             </button>
     </div>
           </form>
           </div>
             </div>
    )
}

export default Login