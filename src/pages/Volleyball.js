import "./Volleyball.css";

const Volleyball = () => {
  return (
    <div className="volleyball">
      <img
        className="locker01-back-1-11"
        alt=""
        src="/locker01-back-1-11@2x.png"
      />
      <div className="header1">
        <div className="department-of-physical-container1">
          <p className="department-of-physical1">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya2">University of Peradeniya</p>
        </div>
        <div className="headerback1" />
        <img className="unilogo-icon1" alt="" src="/unilogo@2x.png" />
        <div className="logout1">
          <b className="log-out1">Log out</b>
        </div>
        <div className="navigationbar1">
          <div className="naviback1" />
          <button className="home1">Home</button>
          <button className="about-us1">About Us</button>
          <button className="registration1">Registration</button>
          <button className="payments1">Payments</button>
          <button className="equipments2">Equipments</button>
          <button className="sports1">Sports</button>
          <button className="locker-system1">Locker System</button>
          <button className="facilities1">Facilities</button>
          <button className="daily-events1">Daily Events</button>
          <button className="classes1">Classes</button>
          <button className="special-programmes1">Special Programmes</button>
        </div>
        <img className="uopname-icon1" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer1">
        <img className="mapimage-icon1" alt="" src="/mapimage@2x.png" />
        <div className="contactus1">
          <div className="contact-us-departments-container1">
            <p className="contact-us1">
              <b>Contact Us</b>
            </p>
            <p className="blank-line3">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat1">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya3">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya3">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya3">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone1">
              <b>Telephone</b>
            </p>
            <p className="blank-line5">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya3">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21641">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon1" alt="" src="/callicon@2x.png" />
          <img className="locationicon1" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="volleyball-wrapper">
        <div className="volleyball1">VOLLEYBALL</div>
      </div>
      <div className="locker-14">Locker 14</div>
      <div className="equipments3">Equipments</div>
      <div className="court1">Court</div>
      <div className="available-number-of1">Available Number of balls</div>
      <div className="today-available-times1">Today Available Times</div>
      <div className="bacsketballsavailable1">
        <div className="div1">10</div>
      </div>
      <div className="courttimeslots2">
        <div className="div1">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots3">
        <div className="div1">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Volleyball;
