import React from 'react';

const StopButton = () => {
    return (
        <button type="button"
                className="text-white h-8 w-64 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 mt-5 mb-12 ml-4 m-2">
            Остановить выбранное
        </button>
    );
};

export default StopButton;