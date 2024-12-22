import React from 'react';
import Main from '../templates/Main';
import FileTree from "../molecules/FileTree/FileTree";
import StartButton from "../atoms/Buttons/StartButton";
import AddFilesButton from "../atoms/Buttons/AddFilesButton";
import FileSelectionArea from "../organisms/FileSelectionArea/FileSelectionArea";
import SelectionArea from "../organisms/SelectionArea/SelectionArea";
import ConfigurationArea from "../organisms/ConfigurationArea/ConfigurationArea";

const GeneralPage = () => {
    return (
        <div className='h-full'>
            <Main/>
            <div className='grid grid-cols-2'>
                <div className='w-72 bg-gray-50 border'>
                    <div className=' border-b-2 pb-2.5'>
                        <FileTree/>
                    </div>
                    <div className='border-t-2 pt-2.5'>
                        <FileSelectionArea/>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center -ml-72 gap-28'>
                    <div>
                        <ConfigurationArea/>
                    </div>
                    <div>
                        <SelectionArea/>
                        <AddFilesButton/>
                        <StartButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralPage;