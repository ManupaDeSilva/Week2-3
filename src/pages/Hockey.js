import "./Hockey.css";

const Hockey = () => {
  return (
    <div className="hockey">
      <img
        className="locker01-back-1-15"
        alt=""
        src="/locker01-back-1-15@2x.png"
      />
      <div className="header5">
        <div className="department-of-physical-container5">
          <p className="department-of-physical5">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya10">University of Peradeniya</p>
        </div>
        <div className="headerback5" />
        <img className="unilogo-icon5" alt="" src="/unilogo@2x.png" />
        <div className="logout5">
          <b className="log-out5">Log out</b>
        </div>
        <div className="navigationbar5">
          <div className="naviback5" />
          <button className="home5">Home</button>
          <button className="about-us5">About Us</button>
          <button className="registration5">Registration</button>
          <button className="payments5">Payments</button>
          <button className="equipments10">Equipments</button>
          <button className="sports5">Sports</button>
          <button className="locker-system5">Locker System</button>
          <button className="facilities5">Facilities</button>
          <button className="daily-events5">Daily Events</button>
          <button className="classes5">Classes</button>
          <button className="special-programmes5">Special Programmes</button>
        </div>
        <img className="uopname-icon5" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer5">
        <img className="mapimage-icon5" alt="" src="/mapimage@2x.png" />
        <div className="contactus5">
          <div className="contact-us-departments-container5">
            <p className="contact-us5">
              <b>Contact Us</b>
            </p>
            <p className="blank-line15">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat5">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya11">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya11">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya11">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone5">
              <b>Telephone</b>
            </p>
            <p className="blank-line17">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya11">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21645">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon5" alt="" src="/callicon@2x.png" />
          <img className="locationicon5" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="hockey-wrapper">
        <div className="hockey1">HOCKEY</div>
      </div>
      <div className="locker-09">Locker 09</div>
      <div className="equipments11">Equipments</div>
      <div className="court5">Court</div>
      <div className="available-number-of7">Available Number of balls</div>
      <div className="available-number-of8">Available Number of bats</div>
      <div className="today-available-times5">Today Available Times</div>
      <div className="bacsketballsavailable7">
        <div className="div7">10</div>
      </div>
      <div className="bacsketballsavailable8">
        <div className="div7">10</div>
      </div>
      <div className="courttimeslots10">
        <div className="div7">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots11">
        <div className="div7">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Hockey;
