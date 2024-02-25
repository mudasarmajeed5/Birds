import React from "react";
import "./Carousel.css";
import threem from "../assets/logos/3m.svg";
import barstool from "../assets/logos/barstool-store.svg";
import budweiser from "../assets/logos/budweiser.svg";
import buzzfeed from "../assets/logos/buzzfeed.svg";
import forbes from "../assets/logos/forbes.svg";
import macys from "../assets/logos/macys.svg";
import menshealth from "../assets/logos/menshealth.svg";
import mrbeast from "../assets/logos/mrbeast.svg";

const Carousel = () => {
  return (
    <div className="logos">

      <div className="logos-slide">
        <img src={threem} alt="3m" />
        <img src={barstool} alt="Barstool Store" />
        <img src={budweiser} alt="Budweiser" />
        <img src={buzzfeed} alt="Buzzfeed" />
        <img src={forbes} alt="Forbes" />
        <img src={macys} alt="Macys" />
        <img src={menshealth} alt="Mens Health" />
        <img src={mrbeast} alt="Mr. Beast" />
      </div>
      <div className="logos-slide">
        <img src={threem} alt="3m" />
        <img src={barstool} alt="Barstool Store" />
        <img src={budweiser} alt="Budweiser" />
        <img src={buzzfeed} alt="Buzzfeed" />
        <img src={forbes} alt="Forbes" />
        <img src={macys} alt="Macys" />
        <img src={menshealth} alt="Mens Health" />
        <img src={mrbeast} alt="Mr. Beast" />
      </div>

    </div>
    );
  };

  export default Carousel;

