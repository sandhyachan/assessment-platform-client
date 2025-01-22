import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function GetStartedPage() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        
        <NavBar/>

        {/* Hero Section */}
        <section className="hero-section text-center py-5 mb-5">
          <div className="container">
            <h1 className="hero-text mb-4">Let&#39;s Get You Started!</h1>
            <p className="lead mb-4">
              Start creating your online assessments today! Explore our powerful platform features.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/register" className="btn btn-light btn-lg">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-outline-light btn-lg">
                Login
              </Link>
            </div>
          </div>
        </section>

        {/* Step-by-Step Onboarding Section */}
        <section className="onboarding-section text-center py-5">
          <div className="container">
            <h2 className="mb-4">How to Get Started</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Step 1: Create Your Test</h5>
                    <p className="card-text">
                      Quickly set up your first online test, quiz, or exam with our user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Step 2: Set Your Preferences</h5>
                    <p className="card-text">
                      Customize your exam settings, from proctoring to question randomization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Step 3: Analyze Results</h5>
                    <p className="card-text">
                      Get detailed analytics on student performance and exam insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial/>

        <Footer/>
      </div>
    </>
  );
}
