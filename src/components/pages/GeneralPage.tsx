import React from 'react';
import Main from '../templates/Main';
import FileTree from "../molecules/FileTree/FileTree";
import SearchBar from "../molecules/SearchBar/SearchBar";
import CheckboxList from "../molecules/CheckboxList/CheckboxList";
import StartButton from "../atoms/Buttons/StartButton";
import StopButton from "../atoms/Buttons/StopButton";

const GeneralPage = () => {
    return (
        <div>
            <Main/>
            <div className='grid grid-cols-2'>
                <div className='w-72 h-screen bg-gray-50 border'>
                    <div className=' border-b-2'>
                        <FileTree/>
                    </div>
                    <div className='border-t-2'>
                        <SearchBar/>
                        <CheckboxList/>
                        <StopButton/>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div>

                    </div>
                    <div>
                        <StartButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralPage;