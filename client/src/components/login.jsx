import {useHistory} from 'react-router'
import {useEffect} from 'react'
import "./recordList.css"
function Login(){
    const history = useHistory()
    function handleLogin(e){
        e.preventDefault()
        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value

        }
        fetch("/login",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token) 
        })
    }
    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/dashboard"): null)

    },[])
    return(
        <div class="w3-container" >

        <div style={{ marginTop: 10 , marginLeft: 15, marginRight: 15}}>
        <form onSubmit={event => handleLogin(event)}>
            <h3>LOGIN</h3>
            <p><label htmlFor="email">Email:</label>  

            <input required type="email"/></p>
            <label htmlFor="password">Password:</label>  

            <input required type="password"/>
            <div><input type="submit" value="Submit"/></div>
        </form>
        </div></div>
    )
}

export default Login;