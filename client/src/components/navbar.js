import "bootstrap/dist/css/bootstrap.css";
 import './navbar.css'; 
 import React, { useContext } from 'react';

 import { AuthContext } from './context/auth-context'
 import { useHistory} from 'react-router-dom';
// Here, we display our Navbar
const Navbar = props => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  function onLgout() {
    console.log(history)
    auth.logout()
    history.push('/auth')

  }
  return (
    <body>
      <header>
        <div class="container">
        <nav>
          <ul>
            
            <li><a href="/">Home</a></li>
=               <li><a href="/create">Add Translation</a></li>
            
               <li><a href="/flashcards">Flashcards</a></li>
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="/translations">All Translations</a></li>


      {auth.isLoggedIn && (
      <li>
        <button onClick={onLgout}>Logout</button>
      </li>
       ) }
            </ul>
        </nav>
        </div>
      </header>
    </body>
    
  );
};
 
export default (Navbar);