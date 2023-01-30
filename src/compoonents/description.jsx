import React from "react";
import {FaArrowDown} from 'react-icons/fa'

const Description = ()=> {
    return (
        <div className="section section_description">
            <div className="card">
                <div className="description_card-icon">
                    <FaArrowDown/>
                    <small> min</small>
                </div>
                <h2>32 F</h2>
            </div>
        </div>
    )
}

export default Description;