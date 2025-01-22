import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';  // Login icon
import '../App.css';
import NavBar from '../components/NavBar';
import SimpleFooter from '../components/SimpleFooter';

export default function LoginPage() {

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavBar/>

      {/* Login Form */}
      <section className="login-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="form-login">
            {error && <div className="alert alert-danger">{error}</div>}
            
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <div className='d-flex flex-row'>
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
                />
              </div> 
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              {/* Submit Button */}
              <button type="submit" className="btn btn-warning btn-lg w-100 mb-2">
                Login <FaSignInAlt/>
              </button>
            </div>
            {/* Forgot Password */}
            <Link to="/forgot-password" className='btn-link'>
                Forgot password?
              </Link>
          </form>
          <div className="text-center mt-4">
            <p>Don&#39;t have an account? <Link to="/register" className="btn btn-link">Sign Up</Link></p>
          </div>
        </div>
      </section>

      <SimpleFooter/>
    </div>
  )
}
