// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 import './navbar.css';
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <div className = "nav">
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          Translation App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <NavLink className="nav-link" to="/create">
                    Add Translation
              </NavLink>
              <NavLink className="nav-link" to="/flashcardset">
                    Flashcards
              </NavLink>
              <NavLink className="nav-link" to="/quiz">
              Quiz
              </NavLink>
              <NavLink className="nav-link" to="/translations">
                    All Translations
              </NavLink>

          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;