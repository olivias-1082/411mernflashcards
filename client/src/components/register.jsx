import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = (props) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [errors,setErrors] = useState({})
    const register = e =>{
      e.preventDefault();
      const newUser = {
        "name" :  name,
        "email"  :  email,
        "password": password
      }
      console.log (newUser)
      axios.post("http://localhost:5000/register",newUser)
        .then(res=>{
            res.data.errors?
            setErrors(res.data.errors)
            :
            props.refresh();
            this.props.history.push("/login");
  
            setName("");
            setEmail("");
            setPassword("");

          })
        .catch (err=>console.log(err.data))
    }
    return(
      <div class="w3-container">
  
        <div style={{ marginTop: 20 }}>
          <h3 align="center"> Register</h3>
      <form onSubmit={e=>register(e)}>
        <label htmlFor="name">Name:</label>        
        <input name="name" 
                  style={{width: "100%"}}
                  rows="1"
                  value={name}
                  placeholder={errors.name? errors.name.properties.message : null}
                  onChange={e=>setName(e.target.value)}>
        </input>
        <label htmlFor="email">Email:</label>  
        <input name="email" 
                  style={{width: "100%"}}
                  rows="1"
                  value={email.toLowerCase()}
                  placeholder={errors.email? errors.email
                    .properties.message : null}
                  onChange={e=>setEmail(e.target.value)}>
        </input>
        <label htmlFor="pasword">Password:</label>  
        <input name="pasword" 
                  style={{width: "100%"}}
                  rows="1"
                  type="password"
                  value={password}
                  placeholder={errors.pasword? errors.pasword
                    .properties.message : null}
                  onChange={e=>setPassword(e.target.value)}>
        </input>
        <button className="btn btn-info"
                type="submit"> 
Register
        </button>
      </form>
      </div>
        </div>
    );
  }
  
        export default Register;