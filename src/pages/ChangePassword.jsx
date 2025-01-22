import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';  // Key icon for change password
import '../App.css';  // Include your CSS
import SimpleFooter from '../components/SimpleFooter';
import NavBarPrivate from '../components/NavbarPriv';

export default function ChangePasswordPage() {
  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    const token = localStorage.getItem('tk')
    if (!token) {
      setError('Authentication failed. Please log in again.')
      navigate('/login')
      return
    }

    // Validate passwords
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      setError('All password fields are required')
      return
    }

    if (form.newPassword.length < 8) {
      setError('New password must be atleast 8 characters long')
      return
    }

    if (form.newPassword !== form.confirmPassword) {
      setError('New password and confirm password must match')
      return
    }

    try {
      // Send password change request to the server
      const response = await fetch('http://localhost:3000/update-password', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSuccessMessage('Password changed successfully')
        setTimeout(() => {
          navigate('/settings')
        }, 1000)
      } else {
        setError(result.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to change password. Try again.')
      console.error(err)
    }
  }

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
