import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaKey, FaSave } from 'react-icons/fa';
import '../App.css'; 
import SimpleFooter from '../components/SimpleFooter';
import NavBarPrivate from '../components/NavbarPriv';

export default function Settings() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    })

  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  const token = localStorage.getItem('tk')
  if (!token) {
      alert('You must be logged in to update your profile')
      navigate('/login')
      return
  }

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    const isConfirmed = window.confirm("Are you sure you want to save these changes?")
    if (!isConfirmed) {
      return
    }

    try {
      const response = await fetch('http://localhost:3000/update-user', {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSuccessMessage('Profile updated successfully')
      } else {
        setError(result.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to update profile')
      console.error(err)
    }
  }

  // Handle password change navigation
  const handleChangePassword = () => {
    navigate('/change-password')
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavBarPrivate />

      {/* Settings Form */}
      <section className="settings-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Profile Settings</h2>

          {/* Informative message for users */}
          <div className="alert alert-info">
            <strong>Note:</strong> Please re-enter all your details below to update your profile. Even if you don&#39t want to change a field, it needs to be filled out.
          </div>
          
          {/* Display success or error messages */}
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          {/* Profile Update Form */}
          <form onSubmit={handleSubmit} className="form-settings">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-warning btn-lg w-100 mb-2">
                Save Changes <FaSave/>
              </button>
            </div>
          </form>

          {/* Password Change Link */}
          <div className="text-center mt-4">
            <button
              className="btn btn-link"
              onClick={handleChangePassword}
            >
              <FaKey className="me-2" />
              Change Password
            </button>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  )
}