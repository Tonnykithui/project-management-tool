import React from 'react'
import per from "../../img/per.svg";


const Card = () => {
    return (
        <div className='grid grid-cols-4 bg-white rounded-sm'>
            <div className="img">
                <img src={per} alt="" className='object-contain' />
            </div>
            <div className="name-role">
                <h2>James Gosling</h2>
                <p>Developer</p>
            </div>
            <div className="project-stats">
                <div className="tickets">
                    <p>22</p>
                </div>
                <div className="done">
                    <p>8</p>
                </div>
                <div className="inprogress">
                    <p>4</p>
                </div>
            </div>
            <div className="percentage">

            </div>
        </div>
    )
}

export default Card