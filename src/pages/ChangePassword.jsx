import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';  // Key icon for change password
import '../App.css';  // Include your CSS
import SimpleFooter from '../components/SimpleFooter';
import NavBarPrivate from '../components/NavbarPriv';

export default function ChangePasswordPage() {

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavBarPrivate />

      {/* Change Password Form */}
      <section className="login-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Change Password</h2>

          {/* Display success or error messages */}
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit} className="form-login">
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                required
                placeholder="Enter your current password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                placeholder="Enter a new password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your new password"
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-warning btn-lg w-100 mb-2">
                Change Password <FaKey />
              </button>
            </div>
            {/* Forgot Password */}
            <Link to="/forgot-password" className='btn-link'>
                Forgot password?
              </Link>
          </form>
        </div>
      </section>

      <SimpleFooter />
    </div>
  )
}
