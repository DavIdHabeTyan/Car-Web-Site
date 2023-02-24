import React from 'react';
import "../style.css";

//import svg
import {infoData} from "../../data/infoData";
import InfoImages from "./infoImages";

const Info = () => {

    return (
        <div className={'info'}>
            <div className="container">
                <div className="wrapper">
                    {infoData.map((elem) => <InfoImages key={Math.random()} {...elem} />)}
                    {/*    Info Block*/}
                </div>
            </div>
        </div>
    );
};

export default Info;