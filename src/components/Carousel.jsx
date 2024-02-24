//  This is a Component that shows the services the agency in Providing in the form of Sliding Images with the content!
import React, { useEffect, useState } from 'react'
import "./ServicesSlider.css"

const Carousel = () => {


  return (
    <>
    <div class="logos">
      <div class="logos-slide">
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
      </div>

      <div class="logos-slide">
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
        <img src="./assets/logos/.svg" />
      </div>
    </div>
    </>
  )
}

export default Carousel
