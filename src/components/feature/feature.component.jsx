import React from 'react'

import './feature.style.scss'
import '../../sass/typography.scss'

const Feature = ({icon, heading, text}) => (
    <div className="feature">
        <img src={icon} alt="feature icon" className="feature__icon" />
        <h4 className="heading-4 heading-4--dark">{heading}</h4>
        <p className="feature__text">{text}</p>
    </div>
)

export default Feature;