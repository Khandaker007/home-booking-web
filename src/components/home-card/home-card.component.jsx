import React from 'react'

import './home-card.style.scss'
import '../../sass/typography.scss'

// ICON
import keyIcon from '../../assets/icon/key.svg'
import enlargeIcon from '../../assets/icon/enlarge.svg'
import userIcon from '../../assets/icon/user.svg'
import locationIcon from '../../assets/icon/location.svg'
import heartIcon from '../../assets/icon/heart.svg'

const HomeCard = ({image, houseType, location, room, area, price}) => (
    <div className="card">
        <img src={image} alt="" className="card__img" />
        <img src={heartIcon} alt="" className="card__like" />
        <h5 className="heading-5">{houseType}</h5>
        <div className="card__location">
            <img src={locationIcon} alt="location icon" className="card__icon" />
            <p>{location}</p>
        </div>
        <div className="card__rooms">
            <img src={userIcon} alt="location icon" className="card__icon" />
            <p>{room}</p>
        </div>
        <div className="card__area">
            <img src={enlargeIcon} alt="location icon" className="card__icon" />
            <p>{area}</p>
        </div>
        <div className="card__price">
            <img src={keyIcon} alt="location icon" className="card__icon" />
            <p>{price}</p>
        </div>
        <button className="btn card__btn">contact realtor</button>
    </div>
)

export default HomeCard;