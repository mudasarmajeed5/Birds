//  This is a Component that shows the services the agency in Providing in the form of Sliding Images with the content!
import React, { useEffect, useState } from 'react'
import "./ServicesSlider.css"

const ServicesSlider = () => {
  const handleClick = (e, slideId) => {
    e.preventDefault();
    e.stopPropagation();
    const targetSlide = document.getElementById(slideId);
    
    if (targetSlide) {
      targetSlide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // or 'start' or 'end'
        inline: 'start'   // or 'start' or 'end'
      });
    }
  };

  return (
    <>
      <section className='contain'>
        <div className="sliderwrapper">
          <div className="slider">
            <div className="slides slide1" id="slide-1">
              <div className="contunt">
                <h1 className='servh'>Digital Marketing</h1>
                <ul>
                  <li>SEO</li>
                  <li>Social Media</li>
                  <li>Engagement</li>
                  <li>Activities</li>
                  <li>Product Marketing</li>
                  <li>Website Development</li>
                  <li>App Development</li>
                  <li>Social Media Accounts Management</li>
                  <li>Web Blogging</li>
                  <li>Influencer Marketing</li>
                  <li>AR/ VR</li>
                </ul>
              </div>
            </div>
            <div className="slides slide2" id="slide-2">
              <div className="contunt">
                <h1 className='servh'>Creative Services</h1>
                <ul>
                  <li>Graphic Design</li>
                  <li>Mood board/Storyboard</li>
                  <li>Copywriting</li>
                  <li>Illustration</li>
                  <li>Content Writing</li>
                  <li>Marketing Strategy</li>
                  <li>IMC (Integrated Marketing Communication)</li>
                  <li>Art Direction</li>
                  <li>Music and Sound</li>
                  <li>Production</li>
                  <li>Environmental Design</li>
                </ul>
              </div>
            </div>
            <div className="slides slide3" id="slide-3">
              <div className="contunt">
                <h1 className='servh'>Outdoor Advertising</h1>
                <ul>
                  <li>Billboards</li>
                  <li>Transit Advertising</li>
                  <li>Digital Outdoor Advertising</li>
                  <li>Airport Advertising</li>
                  <li>Guerrilla Advertising</li>
                  <li>Aerial Advertising</li>
                  <li>Interactive Advertising</li>
                  <li>Wall Murals</li>
                  <li>Digital Signage</li>
                  <li>Stadium and Arena Advertising</li>
                  <li>Tradeshow and Exhibition Displays</li>
                </ul>
              </div>
            </div>
            <div className="slides slide5" id="slide-4">
              <div className="contunt">
                <h1 className='servh'>Visual Story Telling</h1>
                <ul>
                  <li>Cinematography</li>
                  <li>Fashion films</li>
                  <li>TV Commercials</li>
                  <li>Film Making</li>
                  <li>Concept writing</li>
                  <li>Documentaries</li>
                  <li>Animation</li>
                  <li>Full Video Production</li>
                  <li>Photography</li>
                  <li>Digital video commercial</li>
                </ul>
              </div>
            </div>
            <div className="slides slide6" id="slide-5">
              <div className="contunt">
                <h1 className='servh'>Interior Designing</h1>
                <ul>
                  <li>Traditional Interior Design</li>
                  <li>Contemporary Interior Design</li>
                  <li>Modern Interior Design</li>
                  <li>Minimalist Interior Design</li>
                  <li>Industrial Interior Design</li>
                  <li>Eclectic Interior Design</li>
                  <li>Mediterranean Interior Design</li>
                  <li>Green Interior Design (Sustainable Design)</li>
                  <li>Smart Home Interior Design</li>
                  <li>Biophilic Interior Design</li>
                </ul>
              </div>
            </div>
            <div className="slides slide7" id="slide-6">
              <div className="contunt">
                <h1 className='servh'>Branding</h1>
                <ul>
                  <li>Brand Building </li>
                  <li>Logo Designing</li>
                  <li>Broacher Designing</li>
                  <li>Brand Endorsement</li>
                  <li>Brand Ambassador</li>
                  <li>Stationary Printing and Designing</li>
                  <li>Product Designing 3D</li>
                  <li>3D Modelling and Developing</li>
                </ul>
              </div>
            </div>
            <div className="slides slide8" id="slide-7">
              <div className="contunt">
                <h1 className='servh'>Event Management</h1>
                <ul>
                  <li>Confrences</li>
                  <li>Seminars and Workshops</li>
                  <li>Trade Shows and Exhibitions</li>
                  <li>Symposiums</li>
                  <li>Corporate Events</li>
                  <li>Expos and Fairs</li>
                  <li>Fashion Shows</li>
                  <li>Cultural and Arts Events</li>
                  <li>Sporting Events</li>
                  <li>Music Concerts</li>
                  <li>Weddings and Celebrations</li>
                  <li>Awards Shows</li>
                  <li>Product Launches</li>
                </ul>
              </div>
            </div>
            <div className="slides slide9" id="slide-8">
              <div className="contunt">
                <h1 className='servh'>Airing</h1>
                <ul>
                  <li>TV Airing</li>
                  <li>Radio Airing</li>
                  <li>Bloggers Engagement</li>
                  <li>Social Media Boosting</li>
                  <li>Print Media Management</li>
                  <li>Newspaper Management</li>
                  <li>Cinema</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <button className='slider1' onClick={(e) => handleClick(e, 'slide-1')}></button>
            <button className='slider2' onClick={(e) => handleClick(e, 'slide-2')}></button>
            <button className='slider3' onClick={(e) => handleClick(e, 'slide-3')}></button>
            <button className='slider4' onClick={(e) => handleClick(e, 'slide-4')}></button>
            <button className='slider5' onClick={(e) => handleClick(e, 'slide-5')}></button>
            <button className='slider5' onClick={(e) => handleClick(e, 'slide-6')}></button>
            <button className='slider5' onClick={(e) => handleClick(e, 'slide-7')}></button>
            <button className='slider5' onClick={(e) => handleClick(e, 'slide-8')}></button>
          </div>
        </div>
      </section>

    </>
  )
}

export default ServicesSlider
