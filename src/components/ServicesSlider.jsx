//  This is a Component that shows the services the agency in Providing in the form of Sliding Images with the content!
import React,{useEffect} from 'react'
import "./ServicesSlider.css"
const ServicesSlider = () => {
    useEffect(() => {
        const sliders = document.querySelectorAll('.glide');
    
        const initializedSliders = [...sliders].map((slider, index) => {
          let newSlider = new Glide(slider, {
             type: 'slider',
            animationDuration: 1200,
            animationTimingFunc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            rewind: false,
            gap: 0,
          }).mount();
          
          if(slider.classList.contains('glide__main')) {
            newSlider.on('run.before', function(e) {
              translateSlider(e, slider);
            });
          }
          
          newSlider.mount();
          return newSlider;
        });
        
        const translateSlider = function(e, slider) {
            initializedSliders.forEach(sibling => {
              let slides = sibling._c.Html.slides;
              let activeSlide = slides.find(slide => slide.classList.contains('active'));
              let nexBtn = document.querySelector('.glide__arrow--right');
              let prevBtn = document.querySelector('.glide__arrow--left');
        
               let id = sibling._i;
              let activeClassId = id;
              
              if(!!activeSlide) {
                activeSlide.classList.remove('active');
              }

              
              if(e.direction === "<" && sibling._i > 1 && sibling._i <= slides.length) {
                nexBtn.dataset.disabled = false;
                let id = sibling._i - 1;
                activeClassId = id;
              } else if(e.direction === "<" && sibling._i <= 1) {
                prevBtn.dataset.disabled = true;
                activeClassId = sibling._i - 1;
               } else if(e.direction === ">" && sibling._i >= 0 && sibling._i < slides.length - 2) {
                 prevBtn.dataset.disabled = false;
                 let id = sibling._i + 1;
                 activeClassId = sibling._i;
               } else if(e.direction === ">" && sibling._i  >= slides.length - 2) {
                 nexBtn.dataset.disabled = true;
                 activeClassId = sibling._i + 1;
               } 
              
              if(activeClassId < slides.length && activeClassId >= 0 ) {
                let slideId = activeClassId ;
                if(e.direction === ">" && slideId === 0) {
                  slideId = 1;
                }
                slides[slideId].classList.add('active');
              }
              
              sibling.go(e.direction);
            });
        };
    
    }, []);
    
    

  return (
    <div className="slider__container my-5">
    <div className="slider__wrapper">
      <div className="glide glide__text">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <h2 className="slider__title">Title 1</h2>
            </li>
            <li className="glide__slide">
              <h2 className="slider__title">Title 2</h2>
            </li>
            <li className="glide__slide">
              <h2 className="slider__title">Title 3</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="glide glide__small glide__prev">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide" />
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1559626627-cb31b201e27f?ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80)"
                  }}
                ></div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1565378434747-262417385c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80)"
                  }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="glide glide__main">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide active">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1559626627-cb31b201e27f?ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80)"
                  }}
                ></div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1565378434747-262417385c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80)"
                  }}
                ></div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1554329209-5c31b5b35e69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)"
                  }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            data-disabled="true"
          >
            &lt;
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            data-disabled="false"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="glide glide__small  glide__next">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1565378434747-262417385c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80)"
                  }}
                ></div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img__cover">
                <div
                  className="img__bg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1554329209-5c31b5b35e69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)"
                  }}
                ></div>
              </div>
            </li>
            <li className="glide__slide" />
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesSlider
