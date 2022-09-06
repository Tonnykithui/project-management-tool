import React from 'react';
import './droppable.css';
import { BsThreeDotsVertical } from "react-icons/bs";

const Droppable = () => {
  return (
    <div className='draggable' onDrag>
        <div className='wrappper'>
            <div className="header">
               <h2>Title</h2>
               <BsThreeDotsVertical />
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium provident omnis dolorum! Molestias, reprehenderit neque.</p>
            </div>
            <div className='percentage'>

            </div>
            <div className="finer-details">
                <div className='timeline'>
                </div>
                <div className='team'>
                    <div>TM</div>
                    <div>LM</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Droppable