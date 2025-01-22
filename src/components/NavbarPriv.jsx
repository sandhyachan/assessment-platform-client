import { Link } from "react-router-dom";
import '../App.css';
import { FaSignInAlt } from "react-icons/fa";

export default function NavBarPrivate() {
  function handleLogout() {
    localStorage.removeItem('tk')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Questra</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleLogout}>Logout <FaSignInAlt/> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
