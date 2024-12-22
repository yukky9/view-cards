import React from 'react';

const AddFilesButton = () => {
    return (
        <div>
            <input
                className="block w-96 mb-5 mt-5 h-12 pl-5 pt-2.5 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="file_input" type="file"/>
        </div>
    );
};

export default AddFilesButton;