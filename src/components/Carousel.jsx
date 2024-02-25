//  This is a Component that shows the services the agency in Providing in the form of Sliding Images with the content!
import React, { useEffect, useState } from 'react'
import "./Carousel.css"
import threem from "../assets/logos/3m.svg"
import barstool from "../assets/logos/barstool-store.svg"
import budweiser from "../assets/logos/budweiser.svg"
import buzzfeed from "../assets/logos/buzzfeed.svg"
import forbes from "../assets/logos/forbes.svg"
import macys from "../assets/logos/macys.svg"
import menshealth from "../assets/logos/menshealth.svg"
import mrbeast from "../assets/logos/mrbeast.svg"
const Carousel = () => {


  return (
    <>
    <div class="logos">
      <div class="logos-slide">
        <img src={threem} />
        <img src={barstool} />
        <img src={budweiser}/>
        <img src={buzzfeed.svg}/>
        <img src={forbes}/>
        <img src={macys} />
        <img src={menshealth} />
        <img src={mrbeast} />
      </div>

      <div class="logos-slide">
        <img src={threem} />
        <img src={barstool} />
        <img src={budweiser}/>
        <img src={buzzfeed.svg}/>
        <img src={forbes}/>
        <img src={macys} />
        <img src={menshealth} />
        <img src={mrbeast} />
      </div>
    </div>
    </>
  )
}

export default Carousel
