import React from 'react';

const AddButton = () => {
    return (
        <button type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-1 text-white hover:bg-blue-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Добавить
        </button>
    );
};

export default AddButton;