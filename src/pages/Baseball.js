import "./Baseball.css";

const Baseball = () => {
  return (
    <div className="baseball">
      <img
        className="locker01-back-1-18"
        alt=""
        src="/locker01-back-1-18@2x.png"
      />
      <div className="header8">
        <div className="department-of-physical-container8">
          <p className="department-of-physical8">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya16">University of Peradeniya</p>
        </div>
        <div className="headerback8" />
        <img className="unilogo-icon8" alt="" src="/unilogo@2x.png" />
        <div className="logout8">
          <b className="log-out8">Log out</b>
        </div>
        <div className="navigationbar8">
          <div className="naviback8" />
          <button className="home8">Home</button>
          <button className="about-us8">About Us</button>
          <button className="registration8">Registration</button>
          <button className="payments8">Payments</button>
          <button className="equipments16">Equipments</button>
          <button className="sports8">Sports</button>
          <button className="locker-system8">Locker System</button>
          <button className="facilities8">Facilities</button>
          <button className="daily-events8">Daily Events</button>
          <button className="classes8">Classes</button>
          <button className="special-programmes8">Special Programmes</button>
        </div>
        <img className="uopname-icon8" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer8">
        <img className="mapimage-icon8" alt="" src="/mapimage@2x.png" />
        <div className="contactus8">
          <div className="contact-us-departments-container8">
            <p className="contact-us8">
              <b>Contact Us</b>
            </p>
            <p className="blank-line24">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat8">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya17">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya17">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya17">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone8">
              <b>Telephone</b>
            </p>
            <p className="blank-line26">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya17">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21648">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon8" alt="" src="/callicon@2x.png" />
          <img className="locationicon8" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="baseball-wrapper">
        <div className="baseball1">BASEBALL</div>
      </div>
      <div className="locker-02">Locker 02</div>
      <div className="equipments17">Equipments</div>
      <div className="court8">Court</div>
      <div className="available-number-of12">Available Number of balls</div>
      <div className="available-number-of13">Available Number of bats</div>
      <div className="today-available-times8">Today Available Times</div>
      <div className="bacsketballsavailable12">
        <div className="div12">10</div>
      </div>
      <div className="bacsketballsavailable13">
        <div className="div12">10</div>
      </div>
      <div className="courttimeslots16">
        <div className="div12">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots17">
        <div className="div12">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Baseball;
