import React from 'react';
import "./style.css";

const Intro = () => {
    return (
        <div className={'intro'}>
            <div className="container">
                <div className="intro__content">
                    <div className="intro__block">
                        <h1 className={'intro__title'}>
                            KEEPING YOU ON THE ROAD
                            WITH SERVICE YOU CAN TRUST
                        </h1>

                        <a href="#" className={'btn'}>Show more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;