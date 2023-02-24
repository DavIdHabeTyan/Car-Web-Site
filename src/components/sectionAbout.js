import React from 'react';
import {sectionAboutData} from "../data/sectionAboutData";

const SectionAbout = () => {
    return (
        <div className="section process">
            <div className="container">
                <h2 className="process__title">FAST & EASY </h2>
                <h3 className="process__subTitle"> our work process</h3>
                <div className="wrapper">
                    {sectionAboutData.map(elem => <div className={'block'} key={Math.random()}>
                        <div className="process__item">
                            <h4 className="info__title">{elem.title} </h4>
                            <p className="info__text">{elem.text}</p>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default SectionAbout;