import { Link } from 'react-router-dom'
import '../App.css'

// Hero Section Component
export default function HeroSection() {
  return (
    <>
     <section className="hero-section text-center py-5 mb-5">
          <div className="container">
            <h1 className="hero-text mb-4">Simplify Your Online Assessments</h1>
            <p className="lead mb-4">
              Secure, easy-to-use platform for online exams with automated grading, real-time analytics, and advanced proctoring.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/get-started" className="btn btn-light btn-lg">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline-light btn-lg">
                Login
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}
