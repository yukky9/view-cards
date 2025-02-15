import React, {useState} from 'react';
import ListSellersCards from "../../../molecules/listSellersCards/ListSellersCards";

const ItemsDropList = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = ({index}: { index: any }) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cards = [
        { title: 'Item 1', content: <ListSellersCards/> },
        { title: 'Item 2', content: <ListSellersCards/> },
        { title: 'Item 3', content: <ListSellersCards/> },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-10">
            {cards.map((card, index) => (
                <div className="bg-white shadow-md rounded-lg mb-4" key={index}>
                    <div
                        className="p-4 cursor-pointer bg-yellow-600 text-white rounded-lg"
                        onClick={() => toggleDropdown({index: index})}>
                        <h3 className="text-lg font-semibold">{card.title}</h3>

                    </div>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-100 rounded-b-lg">
                            <p>{card.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemsDropList;