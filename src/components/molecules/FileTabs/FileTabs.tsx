import React, {useState} from 'react';
import ConfigurationArea from "../../organisms/ConfigurationArea/ConfigurationArea";

const FileTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: 'JSON 1', content: <ConfigurationArea/>},
        { name: 'JSON 2', content: <ConfigurationArea/> },
        { name: 'JSON 3', content: <ConfigurationArea/> },
    ];

    return (
        <div className="w-full relative">
            <div className="grid grid-cols-4 border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-5 py-3 text-sm font-medium text-center transition-all duration-300 rounded-t-lg ${
                            activeTab === index
                                ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-md'
                                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        {tab.name}
                    </button>

                ))}
                <button>
                <svg xmlns="http://www.w3.org/2000/svg"  className='w-6 h-6 m-2 ml-28' viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="white"/>
                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
            </div>
            <div>
                <div>{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

export default FileTabs;