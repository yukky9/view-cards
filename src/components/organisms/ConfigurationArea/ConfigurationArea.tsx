import React from 'react';
import AddButton from "../../atoms/Buttons/AddButton";
import KeyTypeInputs from "../../atoms/Inputs/KeyTypeInputs";

const ConfigurationArea = () => {
    return (
        <div className='relative transition-all bg-gray-50 p-5 border-2 rounded-b-2xl'>
            <KeyTypeInputs/>
            <AddButton/>
        </div>
    );
};

export default ConfigurationArea;