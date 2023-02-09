import React from "react";
import { SubHeader } from "../../Components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeader title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">123 Forget About It Lane, Place Holder</p>
        <p className="p__cormorant" style={{color: 'var(--color-pink)', margin: '2rem 0'}}>Hours Of Operation</p>
        <p className="p__opensans">Mon - Friday: 10:00 am - 6:00 pm</p>
        <p className="p__opensans">Sat - Sunday: 10:00 am - 4:00 pm</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findUs} alt="find us" style={{marginRight: '12rem'}}/>
    </div>
  </div>
);

export default FindUs;
