import React from 'react'
import "./ThirdPage.css"
const ThirdPage = () => {


    return (
        <div className='ThirdPage p-1 relative'>
            <div className="leftside flex flex-col gap-10 sticky top-5 items-center justify-center p-5 h-screen">
                <div className="ourwork text-5xl underline underline-offset-4 ref={}">Our Work</div>
                <div className="case_studies">
                    Case Studies, a selection of <span id='successful' >successful projects.</span>
                </div>
            </div>
            <div className="rightside h-screen overflow-y-auto">
            
            </div>
        </div>
    )
}

export default ThirdPage
