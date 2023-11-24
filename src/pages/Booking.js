import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  const onQuipmentBookingButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='equipmentbookingpageContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOutdoorBookingButtonContainerClick = useCallback(() => {
    // Please sync "Facilities" to the project
  }, []);

  const onIndoorBookingbuttonContainerClick = useCallback(() => {
    // Please sync "IndoorFacilities" to the project
  }, []);

  const onGotoTopContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWeightLiftingClick = useCallback(() => {
    // Please sync "Weightlifting" to the project
  }, []);

  const onSwimmingClick = useCallback(() => {
    // Please sync "Swimming" to the project
  }, []);

  const onTrackAndFieldClick = useCallback(() => {
    // Please sync "TracksFileds" to the project
  }, []);

  const onWrestlingClick = useCallback(() => {
    // Please sync "Wrestling" to the project
  }, []);

  const onKickBoxingClick = useCallback(() => {
    // Please sync "Kickboxing" to the project
  }, []);

  const onTaekwondoClick = useCallback(() => {
    // Please sync "Taekwondo" to the project
  }, []);

  const onTennisClick = useCallback(() => {
    navigate("/tennis");
  }, [navigate]);

  const onVolleyballClick = useCallback(() => {
    navigate("/volleyball");
  }, [navigate]);

  const onRugbyClick = useCallback(() => {
    navigate("/rugby");
  }, [navigate]);

  const onNetballClick = useCallback(() => {
    navigate("/netball");
  }, [navigate]);

  const onKarateClick = useCallback(() => {
    // Please sync "Karate" to the project
  }, []);

  const onTableTennisClick = useCallback(() => {
    navigate("/tabletennis");
  }, [navigate]);

  const onElleClick = useCallback(() => {
    // Please sync "Elle" to the project
  }, []);

  const onFootballClick = useCallback(() => {
    // Please sync "Football" to the project
  }, []);

  const onHockeyClick = useCallback(() => {
    navigate("/hockey");
  }, [navigate]);

  const onCarromClick = useCallback(() => {
    navigate("/carrom");
  }, [navigate]);

  const onChessClick = useCallback(() => {
    // Please sync "Chess" to the project
  }, []);

  const onCricketClick = useCallback(() => {
    // Please sync "Cricket" to the project
  }, []);

  const onBatmintonClick = useCallback(() => {
    navigate("/badminton");
  }, [navigate]);

  const onBaseBallClick = useCallback(() => {
    navigate("/baseball");
  }, [navigate]);

  const onBasketballClick = useCallback(() => {
    // Please sync "Bascketball" to the project
  }, []);

  return (
    <div className="booking">
      <div className="bookingheader">
        <div className="footer9">
          <img className="mapimage-icon9" alt="" src="/mapimage1@2x.png" />
          <div className="contactus9">
            <div className="contact-us-departments-container9">
              <p className="contact-us9">
                <b>Contact Us</b>
              </p>
              <p className="blank-line27">
                <b>
                  <span>&nbsp;</span>
                </b>
              </p>
              <p className="departments-of-physical-educat9">
                <b>
                  <span>Departments of Physical Education,</span>
                </b>
              </p>
              <p className="university-of-peradeniya18">
                <b>
                  <span>University of Peradeniya,</span>
                </b>
              </p>
              <p className="university-of-peradeniya18">
                <b>
                  <span>Peradeniya</span>
                </b>
              </p>
              <p className="university-of-peradeniya18">
                <b>
                  <span>&nbsp;</span>
                </b>
              </p>
              <p className="telephone9">
                <b>Telephone</b>
              </p>
              <p className="blank-line29">
                <b>&nbsp;</b>
              </p>
              <p className="university-of-peradeniya18">
                <b>Office - 081 - 239 2162</b>
              </p>
              <p className="check-the-availability">
                <b>Director - 081 - 239 2164</b>
              </p>
            </div>
            <img className="callicon9" alt="" src="/callicon@2x.png" />
            <img className="locationicon9" alt="" src="/locationicon@2x.png" />
          </div>
        </div>
        <div className="faculty-of-physical">
          ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
        </div>
        <div className="header9" data-scroll-to="headerContainer">
          <div className="department-of-physical-container9">
            <p className="department-of-physical9">
              Department of Physical Education
            </p>
            <p className="university-of-peradeniya19">
              University of Peradeniya
            </p>
          </div>
          <div className="headerback9" />
          <img className="unilogo-icon9" alt="" src="/unilogo@2x.png" />
          <div className="logout9">
            <b className="log-out9">Log out</b>
          </div>
          <div className="navigationbar9">
            <div className="naviback9" />
            <button className="home9">Home</button>
            <button className="about-us9">About Us</button>
            <button className="registration9">Registration</button>
            <button className="payments9">Payments</button>
            <button className="equipments18">Equipments</button>
            <button className="sports9">Sports</button>
            <button className="locker-system9">Locker System</button>
            <button className="facilities9">Facilities</button>
            <button className="daily-events9">Daily Events</button>
            <button className="classes9">Classes</button>
            <button className="special-programmes9">Special Programmes</button>
          </div>
          <img className="uopname-icon9" alt="" src="/uopname@2x.png" />
        </div>
        <div className="bookingheader1">
          <img
            className="topicbackimg-icon"
            alt=""
            src="/topicbackimg@2x.png"
          />
          <div className="bookingheader2">
            <div className="shadow" />
            <div className="topicbooking">BOOKING</div>
            <div className="topicbooking1">
              <p className="check-the-availability">
                Check the availability of any service from gymnasium and book
                any equipments,
              </p>
              <p className="check-the-availability">
                <span>
                  facilities from one place. Much easiest and faster way for
                  your needs
                </span>
                <span className="span">.</span>
              </p>
            </div>
            <div
              className="quipmentbookingbutton"
              onClick={onQuipmentBookingButtonContainerClick}
            >
              <div className="equipment-booking">EQUIPMENT BOOKING</div>
            </div>
            <div
              className="outdoorbookingbutton"
              onClick={onOutdoorBookingButtonContainerClick}
            >
              <div className="equipment-booking">OUTDOOR FACILITY BOOKING</div>
            </div>
            <div
              className="indoorbookingbutton"
              onClick={onIndoorBookingbuttonContainerClick}
            >
              <div className="equipment-booking">INDOOR FACILITY BOOKING</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="equipmentbookingpage"
        data-scroll-to="equipmentbookingpageContainer"
      >
        <div className="equipmenttopic">
          <div className="equipment">Equipment</div>
        </div>
        <div className="search-or-select">
          Search or select equipment by sport.
        </div>
        <div className="gototop" onClick={onGotoTopContainerClick}>
          <img className="gototopicon" alt="" src="/gototopicon@2x.png" />
          <b className="log-out9">Go to Top</b>
        </div>
        <div className="row7">
          <button className="weightlifting" onClick={onWeightLiftingClick}>
            <img
              className="weightliftingimg-icon"
              alt=""
              src="/weightliftingimg@2x.png"
            />
            <b className="cricket">Weight Lifting</b>
          </button>
          <button className="swimming" onClick={onSwimmingClick}>
            <img
              className="swimmingimg-icon"
              alt=""
              src="/swimmingimg@2x.png"
            />
            <b className="cricket">Swimming</b>
          </button>
          <button className="trackandfield" onClick={onTrackAndFieldClick}>
            <img
              className="trackandfieldimg-icon"
              alt=""
              src="/trackandfieldimg@2x.png"
            />
            <b className="cricket">{`Track & Field`}</b>
          </button>
        </div>
        <div className="row6">
          <button className="wrestling" onClick={onWrestlingClick}>
            <img
              className="wrestlingimg-icon"
              alt=""
              src="/wrestlingimg@2x.png"
            />
            <b className="cricket">Wrestling</b>
          </button>
          <button className="kickboxing" onClick={onKickBoxingClick}>
            <img
              className="kickboxingimg-icon"
              alt=""
              src="/kickboxingimg@2x.png"
            />
            <b className="cricket">
              <p className="check-the-availability">Kick Boxing</p>
            </b>
          </button>
          <button className="taekwondo" onClick={onTaekwondoClick}>
            <img
              className="taekwondoimg-icon"
              alt=""
              src="/taekwondoimg@2x.png"
            />
            <b className="cricket">Taekwondo</b>
          </button>
        </div>
        <div className="row5">
          <button className="tennis2" onClick={onTennisClick}>
            <img className="taekwondoimg-icon" alt="" src="/tennisimg@2x.png" />
            <b className="cricket">Tennis</b>
          </button>
          <button className="volleyball2" onClick={onVolleyballClick}>
            <img
              className="volleyballimg-icon"
              alt=""
              src="/volleyballimg@2x.png"
            />
            <b className="cricket">Volleyball</b>
          </button>
          <button className="rugby2" onClick={onRugbyClick}>
            <img className="rugbyimg-icon" alt="" src="/rugbyimg@2x.png" />
            <b className="cricket">Rugby</b>
          </button>
        </div>
        <div className="row4">
          <button className="netball2" onClick={onNetballClick}>
            <img className="netballimg-icon" alt="" src="/netballimg@2x.png" />
            <b className="cricket">Netball</b>
          </button>
          <button className="karate" onClick={onKarateClick}>
            <img className="karateimg-icon" alt="" src="/karateimg@2x.png" />
            <b className="cricket">Karate</b>
          </button>
          <button className="tabletennis1" onClick={onTableTennisClick}>
            <img
              className="tabletennisimg-icon"
              alt=""
              src="/tabletennisimg@2x.png"
            />
            <b className="cricket">Table Tennis</b>
          </button>
        </div>
        <div className="row3">
          <button className="elle" onClick={onElleClick}>
            <img className="netballimg-icon" alt="" src="/elletimg@2x.png" />
            <b className="elle1">Elle</b>
          </button>
          <button className="football" onClick={onFootballClick}>
            <img
              className="footballtimg-icon"
              alt=""
              src="/footballtimg@2x.png"
            />
            <b className="cricket">Football</b>
          </button>
          <button className="hockey2" onClick={onHockeyClick}>
            <img className="hockeyimg-icon" alt="" src="/hockeyimg@2x.png" />
            <b className="cricket">Hockey</b>
          </button>
        </div>
        <div className="row2">
          <button className="carrom2" onClick={onCarromClick}>
            <img className="carromimg-icon" alt="" src="/carromimg@2x.png" />
            <b className="cricket">Carrom</b>
          </button>
          <button className="chess" onClick={onChessClick}>
            <img className="chessimg-icon" alt="" src="/chessimg@2x.png" />
            <b className="cricket">Chess</b>
          </button>
          <button className="cricket1" onClick={onCricketClick}>
            <img className="cricketimg-icon" alt="" src="/cricketimg@2x.png" />
            <b className="cricket">Cricket</b>
          </button>
        </div>
        <div className="row1">
          <button className="batminton" onClick={onBatmintonClick}>
            <div className="batminton1">
              <img
                className="batmintonimg-icon"
                alt=""
                src="/batmintonimg@2x.png"
              />
              <b className="batminton2">Badminton</b>
            </div>
          </button>
          <button className="baseball2" onClick={onBaseBallClick}>
            <div className="baseball3">
              <img
                className="baseballimg-icon"
                alt=""
                src="/baseballimg@2x.png"
              />
              <b className="baseball4">Baseball</b>
            </div>
          </button>
          <button className="basketball" onClick={onBasketballClick}>
            <img
              className="basketballimg-icon"
              alt=""
              src="/basketballimg@2x.png"
            />
            <b className="cricket">Basketball</b>
          </button>
        </div>
        <div className="searchbar">
          <div className="searchbackground" />
          <button className="searchicon" />
          <input
            className="searchinput"
            placeholder="Search Equipment here"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
