import React from 'react';
import '../style.css';

import plus from '../../assets/servicesImages/plus.svg'

const Services = ({title, text, image}) => {
    return (

        <div className="block">
            <div className="services__item">
                <div className="services__content">
                    <img src={image} alt=""/>
                    <div className="services__content-item">
                        <div className="services__img">
                            <img src={plus} alt=""/>
                        </div>
                        <p className="services__text">
                            {text}
                        </p>
                    </div>
                </div>
                <h3 className="services__title">
                    {title}
                </h3>
            </div>
        </div>

    );
};

export default Services;