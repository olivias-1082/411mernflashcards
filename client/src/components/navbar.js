import "bootstrap/dist/css/bootstrap.css";
 import './navbar.css';
 import {useHistory, Link} from 'react-router'
 import {useEffect, useState} from 'react'
 import Login from './Login'
 import Logout from './Logout'

function Navbar () {
  const history = useHistory()
  const [username, setUsername]= useState(null)
  async function logout(){
    localStorage.removeItem("token")
    await history.push("/login")
  }
  useEffect(() =>{
    fetch("/isUserAuth", {
      headers: {
          "x-access-token": localStorage.getItem("token")
      }
  })
  .then(res => res.json())
  .then(data => data.isLoggedIn ? setUsername(data.username): null)
  },[])

  return (
    <body>
      <header>
        <div class="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/flashcards">Flashcards</a></li>
            <li><a href="/quiz">Quiz</a></li>
            {username
            ? <li><a href="/create">Add Translation</a></li>
              : <li><a href="/translations">All Translations</a></li>
            }
            
            {username
            ? 
              <li><a href="/usertranslations">All Translations</a></li>
              : <li><a href="/login"><Login /></a></li>}
            {username
            ? <li><div onClick={logout}>Logout</div></li>
             : <li></li> }
          </ul>
        </nav>
        </div>
      </header>
    </body>
    
  );
};
 
export default Navbar;