import React, { useState } from 'react'
import "./SecondPage.css"
import { MdHistoryEdu, MdOutlineShowChart,MdComputer } from "react-icons/md";
import { FaPeopleCarry, FaChartBar } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { FcAdvertising } from "react-icons/fc";
import { FaRegNewspaper, FaFilePen } from "react-icons/fa6";

const SecondPage = () => {
    const [seemore, setseemore] = useState(false)
    const createCards = () => {
        setseemore(!seemore);
        document.getElementById("seemore").innerHTML = seemore ? "Show More" : "Show Less";
        document.getElementById("seemore").style.display = seemore ? "block" : "none";
    }

    return (
        <div className='secondPage'>
            <div className="pt-5 secondPage_head flex flex-col items-center justify-center">
                <div id='creatingExperiences' className='flex items-center m-4'>
                    <div className='text-lg mr-8 md:text-2xl lg:text-4xl 2xl:text-5xl 2xl:mb-10 2xl:pr-10'>Creating Experiences Through</div>
                </div>
                <div className='text-xl md:text-2xl lg:text-3xl 2xl:text-6xl px-4 text-center'>
                    Digital Services, <span className='spancolor'>a comprehensive approach</span> to the Digital Landscape.
                </div>
            </div>
            <div id="explore" className="mt-[8%] secondPage_cards flex flex-wrap">
                <div className="card card1 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><FaChartBar /></div>
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
                    <div className="text-6xl serviceLogo"> <FaPeopleCarry /> </div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Event Managment</div>
                    <div className="serviceDesc text-center">We manage memorable events and expos that create genuine connections with your audience. </div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
            </div>

            <div className="justify-center flex items-center"><button onClick={createCards} id="seemore">Show More</button></div>
            {seemore && <div> <div className="secondPage_cards flex flex-wrap">
                <div className="border-left card card4 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><MdOutlineShowChart /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Digital Marketing</div>
                    <div className="serviceDesc text-center">We leverage SEO, social media, and online ads to engage your digital audience with data-driven strategies. </div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div className="border-left card card5 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><SiAntdesign /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Interior Designing</div>
                    <div className="serviceDesc text-center">Our interior design services encompass expert space planning and functional layouts to transform your environment</div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
                <div  className="border-left card card6 justify-center gap-4 items-center flex flex-col">
                    <div className="text-6xl serviceLogo"><FaRegNewspaper /></div>
                    <div className="serviceTitle text-xl md:text-2xl font-bold">Branding</div>
                    <div className="serviceDesc text-center">Our branding services encompass comprehensive solutions to enhance your brand's identity and visibility</div>
                    <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                </div>
            </div>
                <div className="secondPage_cards flex flex-wrap">
                    <div className="border-left card card7 justify-center gap-4 items-center flex flex-col">
                        <div className="text-6xl serviceLogo"><FaFilePen /></div>
                        <div className="serviceTitle text-xl md:text-2xl font-bold">Print Media</div>
                        <div className="serviceDesc text-center">Print media include news reporting, feature articles, advertising,  promotional materials,  newspapers and more.</div>
                        <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                    </div>
                    <div className="border-left card card8 justify-center gap-4 items-center flex flex-col">
                        <div className="text-6xl serviceLogo"><MdComputer /></div>
                        <div className="serviceTitle text-xl md:text-2xl font-bold">Airing</div>
                        <div className="serviceDesc text-center">We craft compelling TV ads and secure airtime for maximum reach, making your brand memorable on television.</div>
                        <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                    </div>
                    <div className="border-left card card9 justify-center gap-4 items-center flex flex-col">
                        <div className="text-6xl serviceLogo"><FcAdvertising /></div>
                        <div className="serviceTitle text-xl md:text-2xl font-bold">Outdoor Advertising</div>
                        <div className="serviceDesc text-center">Our outdoor advertising captures attention with strategically placed billboards and digital screens.</div>
                        <div className="seeDetails"><a href="#creativeAgency">See Details</a></div>
                    </div>
                </div>
            </div>}
            {seemore && <div className="justify-center flex items-center"><button onClick={createCards} id="seemore">Show Less</button></div>}

        </div>
    )
}

export default SecondPage
