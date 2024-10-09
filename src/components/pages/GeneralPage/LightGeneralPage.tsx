import React from 'react';
import HeaderForLight from "../../templates/Header/HeaderForLight";
import Navigation from "../../templates/Navigation/Navigation";
import MainForm from "../../organisms/MainForm/MainForm";

const LightGeneralPage = () => {
    return (
        <div>
        <div className='grid grid-rows-2'>
            <HeaderForLight/>
            <div className='flex gap-16'>
                <Navigation/>
                <MainForm/>
            </div>
        </div>
        </div>
    );
};

export default LightGeneralPage;