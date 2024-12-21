import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <form className="max-w-md mx-auto p-2 -pb-2">
                <label htmlFor="default-search"
                       className="mb-2 text-sm text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Search" required/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm text-sm px-2">Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;