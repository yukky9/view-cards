import React from 'react';
import SelectionSearchBar from "../../molecules/SearchBar/SelectionSearchBar";
import SelectionCheckboxList from "../../molecules/CheckboxList/SelectionCheckboxList";

const SelectionArea = () => {
    return (
        <div className='bg-gray-50 p-5 w-96 -end-px rounded-2xl'>
            <SelectionSearchBar/>
            <SelectionCheckboxList/>
        </div>
    );
};

export default SelectionArea;