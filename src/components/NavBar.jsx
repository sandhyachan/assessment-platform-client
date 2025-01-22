import { Link } from "react-router-dom";
import '../App.css';
import { FaUserAlt, FaUserEdit } from "react-icons/fa";

// Navigation Bar
export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Questra
            </a>
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
                  <Link className="nav-link" to="/login">
                    Login <FaUserAlt/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register <FaUserEdit/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
