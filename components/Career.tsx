import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Engineering (CST)</h4>
                <h5>Institute of Information Technology, Bogura</h5>
              </div>
              <h3>2023 – NOW</h3>
            </div>
            <p>
              Studying Computer Science and Technology with a strong focus on
              software development, data structures, and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Complete Web Development Course</h4>
                <h5>Programming Hero – Online Platform</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Focused on HTML, CSS, Tailwind CSS, JavaScript, React, Firebase,
              Node.js, Express.js, and MongoDB (MERN stack) with instructor
              Jhankar Mahbub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
