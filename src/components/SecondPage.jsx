import React from 'react'
import "./SecondPage.css"
import { MdHistoryEdu,MdOutlineShowChart} from "react-icons/md";
import { FaPeopleCarry ,FaChartBar} from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";

const SecondPage = () => {
    return (
        <div id="explore" className='secondPage'>
            <div className="pt-5 secondPage_head flex flex-col items-end justify-end">
                <div id='creatingExperiences' className='flex items-center m-4'>
                    <div className='text-lg mr-8 md:text-2xl lg:text-4xl'>Creating Experiences Through</div>
                </div>
                <div className='w-[70%] md:w-[50%] xl:w-[40%] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl '>
                    Digital Services, <span className='spancolor' >a comprehensive approach</span> to the Digital Landscape
                </div>
            </div>
            <div className="mt-[10%] secondPage_cards flex flex-wrap">
                <div className="card card1 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><FaChartBar/></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Creative Agency</div>
                    <div className="serviceDesc text-center">Our versatile creative agency offers a wide array of services, including graphic design and multimedia production. </div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div className="card card2 justify-center gap-4 items-center flex flex-col">
                <div className="text-6xl serviceLogo"><MdHistoryEdu /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Visual Story Telling</div>
                    <div className="serviceDesc text-center">Our visual storytelling services utilize captivating visuals  to  convey messages effectively.</div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div className="card card3 justify-center gap-4 items-center flex flex-col">
                <div className="text-6xl serviceLogo"> <FaPeopleCarry/> </div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Event Managment</div>
                    <div className="serviceDesc text-center">We manage memorable events and expos that create genuine connections with your audience. </div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
            </div>
            <div className="secondPage_cards flex flex-wrap">
                <div className="border-left card card1 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><MdOutlineShowChart/></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Digital Marketing</div>
                    <div className="serviceDesc text-center">We leverage SEO, social media, and online ads to engage your digital audience with data-driven strategies. </div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div className="border-left card card2 justify-center gap-4 items-center flex flex-col">
                <div className="text-6xl serviceLogo"><SiAntdesign /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Interior Designing</div>
                    <div className="serviceDesc text-center">Our interior design services encompass expert space planning and functional layouts to transform your environment</div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div className="border-left card card3 justify-center gap-4 items-center flex flex-col">
                <div className="text-6xl serviceLogo"><FaRegNewspaper /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Branding</div>
                    <div className="serviceDesc text-center">Our branding services encompass comprehensive solutions to enhance your brand's identity and visibility</div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
            </div>
            
        </div>
    )
}

export default SecondPage
