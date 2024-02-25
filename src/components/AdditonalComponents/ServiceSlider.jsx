import React from 'react'
import "./ServiceSlider.css"
import LaptopImage from "../../assets/ThirdPageImages/Laptop_Image.png"
import NightOfHope from "../../assets/ThirdPageImages/NightOfHope.jpg"
const ServiceSlider = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src={LaptopImage} className="d-block" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-3xl text-red-700'>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={NightOfHope} className="d-block" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-3xl text-red-700'>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={LaptopImage} className="d-block" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-3xl text-red-700'>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>




      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}

export default ServiceSlider
