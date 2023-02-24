import React from 'react';
import '../style.css';
import Services from "./services";

import {servicesData} from "../../data/servicesData";


const Section = () => {
    return (
        <div className={'section'}>
            <div className="container">
                <h2 className="block__title">
                    OUR SERVICES
                </h2>
                <a href="src/components/section/section#" className="block__link">
                    VIEW ALL SERVICES
                </a>
                <div className={'wrapper'} >
                {servicesData.map(elem => <Services  key={Math.random()} {...elem}/>)}
                </div>
            </div>
        </div>
    );
};

export default Section;