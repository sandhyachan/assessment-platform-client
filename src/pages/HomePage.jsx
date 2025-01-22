import { Link } from 'react-router-dom';
import { FaUserShield, FaClipboardCheck, FaChartLine} from 'react-icons/fa'; 
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <NavBar/>

        <HeroSection/>

        <div className='container-fluid homepage-div'>
          <div>
            {/* Online Assessment Platform Meaning*/}
        <section className="definition-section text-center py-5">
          <div className="container">
            <h2 className="mb-3">What is an Online Assessment Platform?
            </h2>
            <p className="lead mb-4">
              An online assessment platform allows organizations, educators, and employers to create, manage, and evaluate exams, quizzes, and tests digitally. It provides tools for creating custom assessments, proctoring exams remotely, and analyzing results automatically.
            </p>
          </div>
        </section>
          </div>
          <div>

        {/* Registration Section */}
        <section className="registration-section text-center py-5">
          <div className="container">
            <h2 className="mb-3">Create your first online test, quiz or exam</h2>
            <p className="lead mb-4">
              Explore all of Testportal&#39;s assessment software features and streamline your online assessments. It&#39;s on the house. You&#39;re welcome.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg">
              Sign up free
            </Link>
            <p className="mt-3">Free registration</p>
          </div>
        </section>
          </div>
        </div>

        {/* About Section */}
        <section className="about-section">
          <div className="container text-center">
            <h2 className="mb-4">Why Choose Our Platform?</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <FaUserShield size={40} color="#f39c12" />
                    <h5 className="card-title">Advanced Proctoring</h5>
                    <p className="card-text">
                      Maintain exam integrity with features like video monitoring and AI-powered identity verification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <FaClipboardCheck size={40} color="#f39c12" />
                    <h5 className="card-title">Automated Grading</h5>
                    <p className="card-text">
                      Automatically grade exams, saving time and providing instant feedback for students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <FaChartLine size={40} color="#f39c12" />
                    <h5 className="card-title">Detailed Analytics</h5>
                    <p className="card-text">
                      Get insights into student performance, question difficulty, and exam trends with our detailed analytics dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial/>

        {/* Ecological Message */}
        <section className="ecological-section text-center py-5" style={{ color: 'white' }}>
          <div className="container">
            <h2 className="mb-3">Let&#39;s Save Trees Together</h2>
            <p className="lead mb-4">
              Choose online assessments with Testportal and reduce your ecological footprint. Help us save trees and water for future generations.
            </p>
          </div>
        </section>
        <img src="https://t3.ftcdn.net/jpg/06/72/07/64/360_F_672076483_m8ys6pvY1XrCWVmK1TfXjug2ZUk3Zrh5.jpg" alt="Lets save trees together image" />

        <Footer/>
      
      </div>
    </>
  );
}
