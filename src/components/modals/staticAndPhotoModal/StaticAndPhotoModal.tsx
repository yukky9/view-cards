import React from 'react';
import ChangeButton from "../../atoms/buttons/ChangeButton/ChangeButton";
import CancelButton from "../../atoms/buttons/CancelButton/CancelButton";
import Checkbox from "../../atoms/checkbox/Checkbox";

const StaticAndPhotoModal = () => {
    return (
        <div className="grid grid-rows-2 gap-12">
            <div className="grid grid-cols-4 gap-10">
                <div className="grid grid-rows-2 gap-7">
                    <img className="rounded-sm" alt='photo1'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7">
                    <img className="rounded-sm" alt='photo2'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7">
                    <img className="rounded-sm" alt='photo3'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7">
                    <img className="rounded-sm" alt='photo4'/>
                    <Checkbox/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <ChangeButton/>
                <CancelButton/>
            </div>
        </div>
    );
};

export default StaticAndPhotoModal;