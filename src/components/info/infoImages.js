import React from 'react';
import '../style.css'

const InfoImages = ({img, text, title}) => {
    return (
        <div className="block">
            <div className="info__item">
                <div className="info__img">
                    <img src={img} alt="call"/>
                    <h4 className="info__title">
                        {title}
                    </h4>
                    <p className="info__text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoImages;