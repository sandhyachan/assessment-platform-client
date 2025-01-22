import { useState } from "react";
import { FaKey } from "react-icons/fa"; // Icons for visual appeal
import '../App.css';

export default function ResetPassword() {
    const [resetCode, setResetCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Basic validation
        if (!resetCode) {
            setError("Please enter the reset code sent to your email.")
            return
        }
        if (!newPassword || !confirmPassword) {
            setError("Both password fields are required.")
            return
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match. Please try again.")
            return
        }
        
        setError(null)
        setSuccess("Your password has been successfully reset!")
        console.log("Reset Code:", resetCode)
        console.log("New Password:", newPassword)
    }

    return (
        <div className="min-vh-100 d-flex flex-column">
            <section className="login-section p-5">
                <div className="container">
                    <h2 className="text-center mb-4">Reset Your Password</h2>
                    <p className="lead text-center mb-4">
                        Enter the reset code sent to your email and choose a new password.
                    </p>

                    <form className="form-reset" onSubmit={handleSubmit}>
                        {/* Display error or success messages */}
                        {error && <div className="alert alert-warning">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        {/* Reset Code Input */}
                        <div className="mb-3">
                            <label htmlFor="resetCode" className="form-label">
                                Enter Reset Code
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resetCode"
                                name="resetCode"
                                placeholder="Enter code here"
                                value={resetCode}
                                onChange={(e) => setResetCode(e.target.value)}
                                required
                            />
                        </div>

                        {/* New Password Input */}
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                name="newPassword"
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-warning btn-lg w-100">
                            Reset Password <FaKey />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
