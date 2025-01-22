import '../App.css'

export default function Testimonial() {
  return (
    <>
    {/* Testimonials Section */}
    <section className="testimonials-section text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="mb-4">What Our Users Say</h2>
            <div className="row">
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p className="mb-0">&#34;Questra&#39;s platform transformed our assessment process. It&#39;s intuitive and saves us a lot of time!&#34;</p>
                  <footer className="blockquote-footer pt-3">Ashna Ram, <cite title="Source Title">Education Admin</cite></footer>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p className="mb-0">&#34;The detailed analytics really help in understanding student performance and trends.&#34; </p>
                  <footer className="blockquote-footer pt-3">David Flynn, <cite title="Source Title">Online Instructor</cite></footer>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p className="mb-0">&#34;The proctoring method made us feel confident in the integrity of every exam.&#34; </p>
                  <footer className="blockquote-footer pt-3">Mag Prince, <cite title="Source Title">University Lecturer</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
