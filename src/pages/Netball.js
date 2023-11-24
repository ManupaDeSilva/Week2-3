import "./Netball.css";

const Netball = () => {
  return (
    <div className="netball">
      <img
        className="locker01-back-1-14"
        alt=""
        src="/locker01-back-1-14@2x.png"
      />
      <div className="header4">
        <div className="department-of-physical-container4">
          <p className="department-of-physical4">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya8">University of Peradeniya</p>
        </div>
        <div className="headerback4" />
        <img className="unilogo-icon4" alt="" src="/unilogo@2x.png" />
        <div className="logout4">
          <b className="log-out4">Log out</b>
        </div>
        <div className="navigationbar4">
          <div className="naviback4" />
          <button className="home4">Home</button>
          <button className="about-us4">About Us</button>
          <button className="registration4">Registration</button>
          <button className="payments4">Payments</button>
          <button className="equipments8">Equipments</button>
          <button className="sports4">Sports</button>
          <button className="locker-system4">Locker System</button>
          <button className="facilities4">Facilities</button>
          <button className="daily-events4">Daily Events</button>
          <button className="classes4">Classes</button>
          <button className="special-programmes4">Special Programmes</button>
        </div>
        <img className="uopname-icon4" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer4">
        <img className="mapimage-icon4" alt="" src="/mapimage@2x.png" />
        <div className="contactus4">
          <div className="contact-us-departments-container4">
            <p className="contact-us4">
              <b>Contact Us</b>
            </p>
            <p className="blank-line12">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat4">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya9">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya9">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya9">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone4">
              <b>Telephone</b>
            </p>
            <p className="blank-line14">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya9">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21644">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon4" alt="" src="/callicon@2x.png" />
          <img className="locationicon4" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="netball-wrapper">
        <div className="netball1">NETBALL</div>
      </div>
      <div className="locker-10">Locker 10</div>
      <div className="equipments9">Equipments</div>
      <div className="court4">Court</div>
      <div className="available-number-of6">Available Number of balls</div>
      <div className="today-available-times4">Today Available Times</div>
      <div className="bacsketballsavailable6">
        <div className="div6">10</div>
      </div>
      <div className="courttimeslots8">
        <div className="div6">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots9">
        <div className="div6">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Netball;
