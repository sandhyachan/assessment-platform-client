import { useState } from "react";
import NavBar from "../components/NavBar";
import { FaPaperPlane } from "react-icons/fa";
import '../App.css';
import { useNavigate } from "react-router-dom";
import SimpleFooter from "../components/SimpleFooter";

export default function ForgotPassword() {
    const navigate  = useNavigate()
    const [error, setError] = useState(null)
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            setError("Please provide a valid email address associated with your account.")
            setSuccess(null)
        } else {
            setError(null)
            setSuccess("Password reset instructions sent! Please check your email.")
            console.log("Password reset instructions sent to:", email)
            navigate('/reset-password')
        }
    }

    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <NavBar />

                <section className="login-section p-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Password Assistance</h2>
                        <p className="lead">
                            We understand that forgetting your password can be frustrating. Simply provide your registered email address, and we will send you instructions to reset your password and regain access to your account.
                        </p>
                        <form className="form-login" onSubmit={handleSubmit}>
                            {error && <div className="alert alert-warning">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter Your Registered Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div id="emailHelp" className="form-text">
                                    Ensure that the email address you provide is the one registered with your account.
                                </div>
                            </div>

                            <button type="submit" className="btn btn-warning btn-lg w-40">
                                Send Reset Code <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </section>

                <SimpleFooter/>
            </div>
        </>
    )
}
