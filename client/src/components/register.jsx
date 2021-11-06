import {useHistory} from 'react-router'
import {useEffect} from 'react'
function Register(){
    const history = useHistory()
    async function handleRegister(e){
        e.preventDefault()
        const form = e.target;
        const user = {
            email: form[0].value,
            password: form[1].value

        }
        fetch("http://localhost:5000/register",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)

        })
   
    }
    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/"): null)

    },[])
    return(
        <form onSubmit={event => handleRegister(event)}>
                  <label htmlFor="email">Email:</label>  
            <input required type="email"/>
            <label htmlFor="password">Password:</label>  
            <input required type="password"/>
            <input type="submit" value="Register"/>
        </form>
    )
}
export default Register;