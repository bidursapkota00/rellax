import { TiTick } from 'react-icons/ti'
import './safety.css'
import image1 from './image1.png'
import image from './image.png'
import image2 from './image2.png'
import image3 from './image3.png'

const Safety = () => {
    return (
        <section className="safety__section">
            <div className="safety__section__container">
                <div className="safety__first__section">
                    <img src={image} />
                    <div className="safety__heading">SAFETY <span className="text-primary">FIRST</span></div>
                    <div className="vertical__lines" >
                        <p>Our goal is to provide you with a safe space where you can live confortably without having to worry about disasters or other any mishappenings. </p>
                    </div>
                    <div className="safety__features">
                        <div style={{ display: 'flex' }}>
                            <div>
                                <TiTick className="tick" style={{ fontSize: '20px' }} />
                            </div>
                            <div className="safety__description">
                                <p>Earthquake Resistance</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <TiTick className="tick" style={{ fontSize: '20px' }} />
                            </div>
                            <div className="safety__description">
                                <p>Smart Surveillence</p>
                            </div>
                        </div><div style={{ display: 'flex' }}>
                            <div>
                                <TiTick className="tick" style={{ fontSize: '20px' }} />
                            </div>
                            <div className="safety__description">
                                <p>Fire Fighting System</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="safety__second__section">
                    <div className="safety__image-f">
                        <img src={image1} />
                    </div>
                    <div className="safety__image__section">
                        <div className="safety__image-s">
                            <img src={image2} /></div>
                        <div className="safety__image-t">
                            <img src={image3} layout="fill" objectFit="covevr" /></div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Safety
