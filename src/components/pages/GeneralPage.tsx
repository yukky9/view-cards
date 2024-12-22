import React from 'react';
import Main from '../templates/Main';
import FileTree, {TreeViewDataType} from "../molecules/FileTree/FileTree";
import StartButton from "../atoms/Buttons/StartButton";
import AddFilesButton from "../atoms/Buttons/AddFilesButton";
import FileSelectionArea from "../organisms/FileSelectionArea/FileSelectionArea";
import SelectionArea from "../organisms/SelectionArea/SelectionArea";
import FileTabs from "../molecules/FileTabs/FileTabs";

const accounts: TreeViewDataType<{ balance: number }>[] = [
    {
        id: 1,
        label: 'Assets',
        position: 'parent',
        children: [
            {
                id: 6,
                position: 'parent',
                label: 'Current Assets',
                children: [
                    {
                        id: 9,
                        position: 'parent',
                        label: 'Cash',
                        children: [
                            {
                                id: 12,
                                position: 'child',
                                label: 'Cash in Hand',
                                values: {
                                    balance: 872,
                                },
                            },
                            {
                                id: 13,
                                position: 'child',
                                label: 'Cash in Bank',
                                values: {
                                    balance: 233,
                                },
                            },
                        ],
                    },
                    {
                        id: 10,
                        position: 'parent',
                        label: 'Bank',
                        values: {
                            balance: 0,
                        },
                    },
                    {
                        id: 11,
                        position: 'parent',
                        label: 'Accounts Receivable',
                        values: {
                            balance: 0,
                        },
                    },
                ],
            },
            {
                id: 7,
                position: 'parent',
                label: 'Fixed Assets',
                values: {
                    balance: 0,
                },
            },
            {
                id: 8,
                position: 'parent',
                label: 'Other Assets',
                values: {
                    balance: 0,
                },
            },
        ],
        values: {
            balance: 0,
        },
    },
    {
        id: 2,
        position: 'parent',
        label: 'Liabilities',
        values: {
            balance: 0,
        },
    },
    {
        id: 3,
        position: 'parent',
        label: 'Equity',
        values: {
            balance: 0,
        },
    },
    {
        id: 4,
        position: 'parent',
        label: 'Revenue',
        values: {
            balance: 0,
        },
    },
    {
        id: 5,
        position: 'parent',
        label: 'Expenses',
        values: {
            balance: 0,
        },
    },
];

const GeneralPage = () => {
    return (
        <div className='h-full'>
            <Main/>
            <div className='grid grid-cols-2'>
                <div className='w-72 bg-gray-50 border'>
                    <div className=' border-b-2 pb-2.5'>
                        <FileTree data={accounts}/>
                    </div>
                    <div className='border-t-2 pt-2.5'>
                        <FileSelectionArea/>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center -ml-72 gap-28'>
                    <div>
                        <FileTabs/>
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