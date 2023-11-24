import "./Rugby.css";

const Rugby = () => {
  return (
    <div className="rugby">
      <img
        className="locker01-back-1-1"
        alt=""
        src="/locker01-back-1-1@2x.png"
      />
      <div className="header">
        <div className="department-of-physical-container">
          <p className="department-of-physical">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya">University of Peradeniya</p>
        </div>
        <div className="headerback" />
        <img className="unilogo-icon" alt="" src="/unilogo@2x.png" />
        <div className="logout">
          <b className="log-out">Log out</b>
        </div>
        <div className="navigationbar">
          <div className="naviback" />
          <button className="home">Home</button>
          <button className="about-us">About Us</button>
          <button className="registration">Registration</button>
          <button className="payments">Payments</button>
          <button className="equipments">Equipments</button>
          <button className="sports">Sports</button>
          <button className="locker-system">Locker System</button>
          <button className="facilities">Facilities</button>
          <button className="daily-events">Daily Events</button>
          <button className="classes">Classes</button>
          <button className="special-programmes">Special Programmes</button>
        </div>
        <img className="uopname-icon" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer">
        <img className="mapimage-icon" alt="" src="/mapimage@2x.png" />
        <div className="contactus">
          <div className="contact-us-departments-container">
            <p className="contact-us">
              <b>Contact Us</b>
            </p>
            <p className="blank-line">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="peradeniya">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="peradeniya">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="peradeniya">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone">
              <b>Telephone</b>
            </p>
            <p className="blank-line2">
              <b>&nbsp;</b>
            </p>
            <p className="peradeniya">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-2164">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon" alt="" src="/callicon@2x.png" />
          <img className="locationicon" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="rugby-wrapper">
        <div className="rugby1">RUGBY</div>
      </div>
      <div className="locker-15">Locker 15</div>
      <div className="equipments1">Equipments</div>
      <div className="court">Court</div>
      <div className="available-number-of">Available Number of balls</div>
      <div className="today-available-times">Today Available Times</div>
      <div className="bacsketballsavailable">
        <div className="div">10</div>
      </div>
      <div className="courttimeslots">
        <div className="div">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots1">
        <div className="div">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Rugby;
