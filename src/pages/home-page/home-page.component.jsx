import React, {useState} from 'react'

import './home-page.style.scss'
import '../../sass/typography.scss'

// COMPONENTS
import Feature from '../../components/feature/feature.component';
import HomeCard from '../../components/home-card/home-card.component';
import { CARD_DATA } from '../../components/home-card/data';
import { GALLERY_IMAGE_DATA } from '../../data/image';

// ICONS
import key from '../../assets/icon/key.svg'
import location from '../../assets/icon/location.svg'
import lock from '../../assets/icon/lock.svg'
import sphere from '../../assets/icon/sphere.svg'
import statsDots from '../../assets/icon/stats-dots.svg'
import trophy from '../../assets/icon/trophy.svg'

// IMAGE
import storyImg1 from '../../assets/image/story-1.jpeg'
import storyImg2 from '../../assets/image/story-2.jpeg'
import realtor1 from '../../assets/image/realtor-1.jpeg'
import realtor2 from '../../assets/image/realtor-2.jpeg'
import realtor3 from '../../assets/image/realtor-3.jpeg'


// LOGO
import headerLogo from '../../assets/logo/favicon.png'
import bbcLogo from '../../assets/logo/logo-bbc.png'
import biLogo from '../../assets/logo/logo-bi.png'
import forbesLogo from '../../assets/logo/logo-forbes.png'
import techcrunchLogo from '../../assets/logo/logo-techcrunch.png'

const HomePage = () =>{ 

    const [data, setData] = useState(CARD_DATA);
    const [galData, setGalData] = useState(GALLERY_IMAGE_DATA);
    return(
        <div className="container">

            <div className="sidebar">
                <button className="nav-btn"></button>
            </div>
            
            <header className="header">
                <div className="header__logo-container">
                    <img src={headerLogo} alt="" className="header__logo" />
                    <h5>Home</h5>
                </div>
                <h3 className="heading-3 header__h3">Your own home:</h3>
                <h1 className="heading-1 header__h1">The ultimate personal freedom</h1>
                <button className="btn header__btn">view our properties</button>
                <div className="header__seenon-text">As seen on</div>
                <div className="header__seenon-logos">
                    <img src={bbcLogo} alt="seen on logo 1"/>
                    <img src={biLogo} alt="seen on logo 2" />
                    <img src={forbesLogo} alt="seen on logo 3" />
                    <img src={techcrunchLogo} alt="seen on logo 4" />
                </div>
            </header>
            
            <div className="realtors">
                <h3 className="heading-3">Top 3 Realtors</h3>
                <div className="realtors__list">
                    <img src={realtor1} alt="realtors 1" className="realtors__img" />
                    <div className="realtors__text">
                        <h3 className="realtors__text--name">Mohammad Ashikur Rahman</h3>
                        <p className='realtors__text--status'>245 houses sold</p>
                    </div>
                    <img src={realtor2} alt="realtors 2" className="realtors__img" />
                    <div className="realtors__text">
                        <h3 className="realtors__text--name">jessica</h3>
                        <p className='realtors__text--status'>212 houses sold</p>
                    </div>
                    <img src={realtor3} alt="realtors 3" className="realtors__img" />
                    <div className="realtors__text">
                        <h3 className="realtors__text--name">Ragin Ibn Hossain</h3>
                        <p className='realtors__text--status'>212 houses sold</p>
                    </div>
                </div>
            </div>
            
            <section className="features">
                <Feature icon={sphere} 
                        heading="World's best luxury homes" 
                        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'/>
                <Feature icon={trophy} 
                        heading='Only the best properties' 
                        text='Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'/>
                <Feature icon={location} 
                        heading='All homes in the top location' 
                        text='Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'/>
                <Feature icon={key} 
                        heading='New homes in one week' 
                        text='Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'/>
                <Feature icon={statsDots} 
                        heading='Top 1% realtors' 
                        text='Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'/>
                <Feature icon={lock} 
                        heading='Secure payments on nexter' 
                        text='Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'/>
            </section>
            
            <div className="story__picture">
                <img src={storyImg1} alt="couple new house" className="story__img-1" />
                <img src={storyImg2} alt="new house" className="story__img-2" />
            </div>
            
            <div className="story__content">
                <h3 className="heading-3 mb-sm">Happy Customers</h3>
                <h2 className="heading-2 mb-md">&ldquo;The best decision of our life&rdquo;</h2>
                <p className="story__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
                <button className="btn">Find you own home</button>
            </div>
            
            <section className="homes">
                {
                    data.map(({id, ...otherProps}) => <HomeCard key={id} {...otherProps}/>)
                }
            </section>
            
            <section className="gallery">
                {/* <img src={gal1} alt="" className='gal-1' /> */}
                {
                    galData.map(({id, image}) =>
                                            <figure className={id}>
                                                <img src={image} alt="" className='gallery__img' />
                                            </figure>
                        
                    )
                        
                }
            </section>
            
            <footer className="footer">
                <ul className="nav">
                    <li className="nav__item"><a href="#" className="nav__link">Find your dream house</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Come work with us</a></li>
                </ul>
                <p className="copyright">
                    &copy; Copyright 2021 by Khandaker Nabiul. Design by other person.
                </p>
            </footer>
        </div>
)}

export default HomePage;