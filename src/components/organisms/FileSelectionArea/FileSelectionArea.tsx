import React from 'react';
import SearchBar from "../../molecules/SearchBar/SearchBar";
import CheckboxList from "../../molecules/CheckboxList/CheckboxList";
import StopButton from "../../atoms/Buttons/StopButton";

const FileSelectionArea = () => {
    return (
        <div>
            <SearchBar/>
            <CheckboxList/>
            <StopButton/>
        </div>
    );
};

export default FileSelectionArea;