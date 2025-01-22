import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'

export default function Footer() {
  return (
    <>
    {/* Footer with Social Icons */}
    <footer className="footer text-center py-3 mt-auto" style={{ backgroundColor: '#2c3e50', color: 'white', border: 'none'}}>
          <div className="container">
            <div className="social-icons mb-3">
              <Link to="/" className="btn btn-outline-light btn-sm mx-2">
                <FaFacebookF size={20} />
              </Link>
              <Link to="/" className="btn btn-outline-light btn-sm mx-2">
                <FaInstagram size={20} />
              </Link>
              <Link to="/" className="btn btn-outline-light btn-sm mx-2">
                <FaTwitter size={20} />
              </Link>
              <Link to="/" className="btn btn-outline-light btn-sm mx-2">
                <FaLinkedinIn size={20} />
              </Link>
              <Link to="/" className="btn btn-outline-light btn-sm mx-2">
                <FaEnvelope size={20} />
              </Link>
            </div>
            <p className="mb-0">© 2025 Questra. All rights reserved.</p>
          </div>
        </footer>
    </>
  )
}
