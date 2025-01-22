import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import '../App.css';
import NavBar from '../components/NavBar';
import SimpleFooter from '../components/SimpleFooter';

export default function SignUpPage() {

  return (
    <div className="min-vh-100 d-flex flex-column">

      <NavBar/>

      {/* Sign-Up Form */}
      <section className="login-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="form-signup">
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                placeholder="Enter your surname"
                value={form.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <div className='d-flex flex-row'>
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter a username"
                value={form.username}
                onChange={handleChange}
                required
                />
              </div> 
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter a new password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {/* Account Type (Student or Teacher) */}
            <div className="mb-3">
              <label htmlFor="accountType" className="form-label">Account Type</label>
              <select
                id="accountType"
                name="accountType"
                className="form-control"
                value={form.accountType}
                onChange={handleChange}
                required
              >
                <option value="">Select Account Type</option>
                <option value="student">Student</option>
                <option value="proctor">Proctor</option>
              </select>
            </div>
            <button type="submit" className="btn btn-warning btn-lg w-100">
              Sign Up <FaUserPlus />
            </button>
          </form>
          <div className="text-center mt-4">
            <p>Already have an account? <Link to="/login" className="btn btn-link" style={{ color: '#FF9900' }}>Login</Link></p>
          </div>
        </div>
      </section>

      <SimpleFooter/>
    </div>
  )
}
