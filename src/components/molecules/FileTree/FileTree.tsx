import React, {useState} from 'react';

export type TreeViewDataType<T> = {
    id: number;
    label: string;
    position: 'parent' | 'child';
    children?: TreeViewDataType<T>[];
    values?: T;
};

type ListCommonProps = {
    data: TreeViewDataType<any>;
    renderLabel?: (param: { item: TreeViewDataType<any>; isActive: boolean }) => React.ReactNode;
};

type TreeViewProps<T> = {
    data: TreeViewDataType<T>[];
    parentCollapsedIcon?: React.ReactNode;
    parentExpandedIcon?: React.ReactNode;
    childIcon?: React.ReactNode;
    renderLabel?: (param: { item: TreeViewDataType<T>; isActive: boolean }) => React.ReactNode;
};


const FileTree = <T, >({data, parentCollapsedIcon, parentExpandedIcon, childIcon, renderLabel}: TreeViewProps<T>) => {
    const renderBaseOnPosition = (data: TreeViewDataType<T>) => {
        if (data.position === 'parent') {
            return (
                <ParentList
                    key={data.id}
                    collapsedIcon={!parentCollapsedIcon &&
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700'
                             viewBox="0 0 24 24">
                            <path
                                d="M12,14 L12,16.5 C12,16.7761424 11.7761424,17 11.5,17 C11.2238576,17 11,16.7761424 11,16.5 L11,14 L8.5,14 C8.22385763,14 8,13.7761424 8,13.5 C8,13.2238576 8.22385763,13 8.5,13 L11,13 L11,10.5 C11,10.2238576 11.2238576,10 11.5,10 C11.7761424,10 12,10.2238576 12,10.5 L12,13 L14.5,13 C14.7761424,13 15,13.2238576 15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L12,14 Z M4.5,4 L11,4 C12.1045695,4 13,4.8954305 13,6 C13,6.55228475 13.4477153,7 14,7 L19.5,7 C20.8807119,7 22,8.11928813 22,9.5 L22,17.5 C22,18.8807119 20.8807119,20 19.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,6.5 C2,5.11928813 3.11928813,4 4.5,4 Z M4.5,5 C3.67157288,5 3,5.67157288 3,6.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L19.5,19 C20.3284271,19 21,18.3284271 21,17.5 L21,9.5 C21,8.67157288 20.3284271,8 19.5,8 L14,8 C12.8954305,8 12,7.1045695 12,6 C12,5.44771525 11.5522847,5 11,5 L4.5,5 Z"/>
                        </svg>}
                    expandedIcon={!parentExpandedIcon &&
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700'
                             viewBox="0 0 24 24">
                            <path
                                d="M4.5,5 C3.67157288,5 3,5.67157288 3,6.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L19.5,19 C20.3284271,19 21,18.3284271 21,17.5 L21,9.5 C21,8.67157288 20.3284271,8 19.5,8 L14,8 C12.8954305,8 12,7.1045695 12,6 C12,5.44771525 11.5522847,5 11,5 L4.5,5 Z M4.5,4 L11,4 C12.1045695,4 13,4.8954305 13,6 C13,6.55228475 13.4477153,7 14,7 L19.5,7 C20.8807119,7 22,8.11928813 22,9.5 L22,17.5 C22,18.8807119 20.8807119,20 19.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,6.5 C2,5.11928813 3.11928813,4 4.5,4 Z M14.5,13 C14.7761424,13 15,13.2238576 15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L8.5,14 C8.22385763,14 8,13.7761424 8,13.5 C8,13.2238576 8.22385763,13 8.5,13 L14.5,13 Z"/>
                        </svg>}
                    data={data}
                    renderLabel={renderLabel}
                    children={data?.children && renderList(data.children)}
                />
            );
        }
        return <ChildList key={data.id} icon={!childIcon &&
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24">
                <path
                    d="M20,6.52797748 L20,19.5 C20,20.8807119 18.8807119,22 17.5,22 L6.5,22 C5.11928813,22 4,20.8807119 4,19.5 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L15.4720225,2 C15.6047688,1.99158053 15.7429463,2.03583949 15.8535534,2.14644661 L19.8535534,6.14644661 C19.9641605,6.25705373 20.0084195,6.39523125 20,6.52797748 Z M15,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,19.5 C5,20.3284271 5.67157288,21 6.5,21 L17.5,21 C18.3284271,21 19,20.3284271 19,19.5 L19,7 L15.5,7 C15.2238576,7 15,6.77614237 15,6.5 L15,3 Z M16,3.70710678 L16,6 L18.2928932,6 L16,3.70710678 Z"/>
            </svg>}
                          data={data} renderLabel={renderLabel}/>;
    };

    // render data using recursion
    const renderList = (data: TreeViewDataType<T>[]) => {
        return data.map((value) => renderBaseOnPosition(value));
    };

    return <div className='p-4 max-h-96 h-96 overflow-auto'>{renderList(data)}</div>;
};

type ParentListProps = {
    collapsedIcon: React.ReactNode;
    expandedIcon: React.ReactNode;
    children?: React.ReactNode | React.ReactNode[];
} & ListCommonProps;
const ParentList: React.FC<ParentListProps> = ({collapsedIcon, expandedIcon, data, renderLabel, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)}
                 className="flex items-center space-x-2 px-2 py-1 bg-gray-100 rounded mb-1">
                {isOpen ? expandedIcon : collapsedIcon}
                <div className="w-full">{renderLabel ? renderLabel({item: data, isActive: isOpen}) : data.label}</div>
            </div>
            {isOpen && <div className="pl-5">{children}</div>}
        </div>
    );
};
type ChildListProps = {
    icon: React.ReactNode;
} & ListCommonProps;
const ChildList: React.FC<ChildListProps> = ({icon, renderLabel, data}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)}
             className="flex items-center space-x-2 px-2 py-1 bg-gray-100 rounded mb-1">
            {icon}
            <div className="w-full">{renderLabel ? renderLabel({item: data, isActive: isOpen}) : data.label}</div>
        </div>
    );
};

export default FileTree;