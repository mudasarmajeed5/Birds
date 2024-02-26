// Animations of this page are defined at App.css and animation
import "./ThirdPage.css"
import LaptopImg from "../assets/ThirdPageImages/Laptop_Image.png"
import TableImg from "../assets/ThirdPageImages/Article_2_Table.jpg"
import EventImg from "../assets/ThirdPageImages/NightOfHope.jpg"

const ThirdPage = () => {    
   
    return (
            <div id="blog" className='ThirdPage md:p-3 xl:p-5 2xl:p-10 relative' >
                <div className="leftside flex flex-col gap-10 items-center justify-center p-5 ">
                    <div className="ourwork text-5xl underline underline-offset-4">Our Work</div>
                    <div className="case_studies text-white">
                        Case Studies, a selection of <span id='successful'>successful projects.</span>
                    </div>
                </div>
                <div className="rightside overflow-y-auto flex flex-col gap-2 p-2">
                    <div className="flex items-center justify-between mt-5 gap-3  md:gap-5">
                        <img className='w-[40%] md:w-[30%] rounded-md' src={LaptopImg} alt="" />
                        <div className="flex flex-col content md:h-[70%] h-[100%]">
                            <div className="head head1">Creativity</div>
                            <p id="blog1">Unleash the Power of Creativity: Your Guide to Thriving with a Creative Agency</p>
                            <div><button className='px-3 py-1 rounded-sm'>Read More</button></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 gap-3  md:gap-5">
                        <div className="flex flex-col content md:h-[70%] h-[100%]">
                            <div className="head head2">Unforgettable Experiences</div>
                            <p id="blog2">Unlocking the Digital Marketing Treasure Trove: Strategies for Success</p>
                            <div><button className='px-3 py-1 rounded-sm'>Read More</button></div>
                        </div>
                        <img className='w-[40%] md:w-[30%] rounded-md' src={TableImg} alt="" />
                    </div>
                    <div className="flex items-center justify-between mt-5 gap-3  md:gap-5">
                        <img className='w-[40%] md:w-[30%] rounded-md' src={EventImg} alt="" />
                        <div className="flex flex-col content md:h-[70%] h-[100%]">
                            <div className="head head3">Implementation</div>
                            <p id="blog3">Unlocking the Digital Marketing Treasure Trove: Strategies for Success</p>
                            <div><button className='px-3 py-1 rounded-sm'>Read More</button></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 gap-3  md:gap-5">
                        <div className="flex flex-col content md:h-[70%] h-[100%]">
                            <div className="head head4">Testimonials</div>
                            <p id="blog4">Unlocking the Digital Marketing Treasure Trove: Strategies for Success</p>
                            <div><button className='px-3 py-1 rounded-sm'>Read More</button></div>
                        </div>
                        <img className='w-[40%] md:w-[30%] rounded-md' src={EventImg} alt="" />
                    </div>
                    <div className="flex items-center justify-between mt-5 gap-3  md:gap-5">
                        <img className='w-[40%] md:w-[30%] rounded-md' src={EventImg} alt="" />
                        <div className="flex flex-col content md:h-[70%] h-[100%]">
                            <div className="head head5">Key Takeaways</div>
                            <p id="blog5">Unlocking the Digital Marketing Treasure Trove: Strategies for Success</p>
                            <div><button className='px-3 py-1 rounded-sm'>Read More</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ThirdPage
