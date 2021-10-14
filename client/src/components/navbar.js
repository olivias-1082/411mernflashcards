// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 import './navbar.css';
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <body>
      <header>
        <div class="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create">Add Translation</a></li>
            <li><a href="/flashcards">Flashcards</a></li>
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="/translations">All Translations</a></li>
          </ul>
        </nav>
        </div>
      </header>
    </body>
    
  );
};
 
export default Navbar;