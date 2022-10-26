import React from 'react'
import "./Programs.css"
import {programsData, ProgramsData} from "../../data/programsData.js"
import RightRow from "../../assets/rightArrow.png"
 
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className='programs-header'>
            <span className='stroke-text'>Explore out</span>
            <span>Programs</span>
            <span className='stroke-text'>to Shope you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program) => (
                <div className='category'>
                        {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Join now</span>
                        <img src={RightRow} />
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Programs
