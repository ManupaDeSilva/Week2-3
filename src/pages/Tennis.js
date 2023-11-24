import "./Tennis.css";

const Tennis = () => {
  return (
    <div className="tennis">
      <img
        className="locker01-back-1-12"
        alt=""
        src="/locker01-back-1-12@2x.png"
      />
      <div className="header2">
        <div className="department-of-physical-container2">
          <p className="department-of-physical2">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya4">University of Peradeniya</p>
        </div>
        <div className="headerback2" />
        <img className="unilogo-icon2" alt="" src="/unilogo@2x.png" />
        <div className="logout2">
          <b className="log-out2">Log out</b>
        </div>
        <div className="navigationbar2">
          <div className="naviback2" />
          <button className="home2">Home</button>
          <button className="about-us2">About Us</button>
          <button className="registration2">Registration</button>
          <button className="payments2">Payments</button>
          <button className="equipments4">Equipments</button>
          <button className="sports2">Sports</button>
          <button className="locker-system2">Locker System</button>
          <button className="facilities2">Facilities</button>
          <button className="daily-events2">Daily Events</button>
          <button className="classes2">Classes</button>
          <button className="special-programmes2">Special Programmes</button>
        </div>
        <img className="uopname-icon2" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer2">
        <img className="mapimage-icon2" alt="" src="/mapimage@2x.png" />
        <div className="contactus2">
          <div className="contact-us-departments-container2">
            <p className="contact-us2">
              <b>Contact Us</b>
            </p>
            <p className="blank-line6">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat2">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya5">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya5">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya5">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone2">
              <b>Telephone</b>
            </p>
            <p className="blank-line8">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya5">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21642">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon2" alt="" src="/callicon@2x.png" />
          <img className="locationicon2" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="tennis-wrapper">
        <div className="tennis1">TENNIS</div>
      </div>
      <div className="locker-13">Locker 13</div>
      <div className="equipments5">Equipments</div>
      <div className="court2">Court</div>
      <div className="available-number-of2">Available Number of Balls</div>
      <div className="available-number-of3">Available Number of Paddles</div>
      <div className="today-available-times2">Today Available Times</div>
      <div className="bacsketballsavailable2">
        <div className="div2">10</div>
      </div>
      <div className="bacsketballsavailable3">
        <div className="div2">10</div>
      </div>
      <div className="courttimeslots4">
        <div className="div2">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots5">
        <div className="div2">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Tennis;
