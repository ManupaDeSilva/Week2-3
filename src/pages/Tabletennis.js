import "./Tabletennis.css";

const Tabletennis = () => {
  return (
    <div className="tabletennis">
      <img
        className="locker01-back-1-13"
        alt=""
        src="/locker01-back-1-13@2x.png"
      />
      <div className="header3">
        <div className="department-of-physical-container3">
          <p className="department-of-physical3">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya6">University of Peradeniya</p>
        </div>
        <div className="headerback3" />
        <img className="unilogo-icon3" alt="" src="/unilogo@2x.png" />
        <div className="logout3">
          <b className="log-out3">Log out</b>
        </div>
        <div className="navigationbar3">
          <div className="naviback3" />
          <button className="home3">Home</button>
          <button className="about-us3">About Us</button>
          <button className="registration3">Registration</button>
          <button className="payments3">Payments</button>
          <button className="equipments6">Equipments</button>
          <button className="sports3">Sports</button>
          <button className="locker-system3">Locker System</button>
          <button className="facilities3">Facilities</button>
          <button className="daily-events3">Daily Events</button>
          <button className="classes3">Classes</button>
          <button className="special-programmes3">Special Programmes</button>
        </div>
        <img className="uopname-icon3" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer3">
        <img className="mapimage-icon3" alt="" src="/mapimage@2x.png" />
        <div className="contactus3">
          <div className="contact-us-departments-container3">
            <p className="contact-us3">
              <b>Contact Us</b>
            </p>
            <p className="blank-line9">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat3">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone3">
              <b>Telephone</b>
            </p>
            <p className="blank-line11">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya7">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21643">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon3" alt="" src="/callicon@2x.png" />
          <img className="locationicon3" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="table-tennis-wrapper">
        <div className="table-tennis">TABLE TENNIS</div>
      </div>
      <div className="locker-12">Locker 12</div>
      <div className="equipments7">Equipments</div>
      <div className="court3">Court</div>
      <div className="available-number-of4">Available Number of Balls</div>
      <div className="available-number-of5">Available Number of Paddles</div>
      <div className="today-available-times3">Today Available Times</div>
      <div className="bacsketballsavailable4">
        <div className="div4">10</div>
      </div>
      <div className="bacsketballsavailable5">
        <div className="div4">10</div>
      </div>
      <div className="courttimeslots6">
        <div className="div4">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots7">
        <div className="div4">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Tabletennis;
