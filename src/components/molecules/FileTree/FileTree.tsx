import React from 'react';

const FileTree = () => {
    return (
        <div className='ml-4 pt-3 max-h-96 overflow-auto'>
            <div className="hs-accordion-treeview-root" role="tree" aria-orientation="vertical">
                <div className="hs-accordion-group" role="group" data-hs-accordion-always-open="">

                    <div className="hs-accordion active" role="treeitem" aria-expanded="true"
                         id="hs-basic-usage-example-tree-heading-one">

                        <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                            <button
                                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                aria-expanded="true" aria-controls="hs-basic-usage-example-tree-collapse-one">
                                <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                                </svg>
                            </button>

                            <div
                                className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                <div className="flex items-center gap-x-3">
                                    <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                    </svg>
                                    <div className="grow">
              <span className="text-sm text-gray-800">
                assets
              </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hs-basic-usage-example-tree-collapse-one"
                             className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                             role="group" aria-labelledby="hs-basic-usage-example-tree-heading-one">

                            <div
                                className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100"
                                role="group" data-hs-accordion-always-open="">

                                <div className="hs-accordion active" role="treeitem" aria-expanded="true"
                                     id="hs-basic-usage-example-tree-sub-heading-one">

                                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                                        <button
                                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                            aria-expanded="true"
                                            aria-controls="hs-basic-usage-example-tree-sub-collapse-one">
                                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                 stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                                            </svg>
                                        </button>

                                        <div
                                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                            <div className="flex items-center gap-x-3">
                                                <svg className="shrink-0 size-4 text-gray-500"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                                </svg>
                                                <div className="grow">
                    <span className="text-sm text-gray-800">
                      css
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hs-basic-usage-example-tree-sub-collapse-one"
                                         className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                         role="group" aria-labelledby="hs-basic-usage-example-tree-sub-heading-one">

                                        <div
                                            className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100"
                                            role="group" data-hs-accordion-always-open="">

                                            <div className="hs-accordion active" role="treeitem" aria-expanded="true"
                                                 id="hs-basic-usage-example-tree-sub-level-two-heading-one">

                                                <div
                                                    className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                                                    <button
                                                        className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                        aria-expanded="true"
                                                        aria-controls="hs-basic-usage-example-tree-sub-level-two-collapse-one">
                                                        <svg className="size-4 text-gray-800"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             stroke-width="1.5" stroke-linecap="round"
                                                             stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path className="hs-accordion-active:hidden block"
                                                                  d="M12 5v14"></path>
                                                        </svg>
                                                    </button>

                                                    <div
                                                        className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                                        <div className="flex items-center gap-x-3">
                                                            <svg className="shrink-0 size-4 text-gray-500"
                                                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="1.5"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                                            </svg>
                                                            <div className="grow">
                          <span className="text-sm text-gray-800">
                            main
                          </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="hs-basic-usage-example-tree-sub-level-two-collapse-one"
                                                     className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                                     role="group"
                                                     aria-labelledby="hs-basic-usage-example-tree-sub-level-two-heading-one">
                                                    <div
                                                        className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">

                                                        <div
                                                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                            role="treeitem">
                                                            <div className="flex items-center gap-x-3">
                                                                <svg className="shrink-0 size-4 text-gray-500"
                                                                     xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor" stroke-width="1.5"
                                                                     stroke-linecap="round" stroke-linejoin="round">
                                                                    <path
                                                                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                                </svg>
                                                                <div className="grow">
                            <span className="text-sm text-gray-800">
                              main.css
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                            role="treeitem">
                                                            <div className="flex items-center gap-x-3">
                                                                <svg className="shrink-0 size-4 text-gray-500"
                                                                     xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor" stroke-width="1.5"
                                                                     stroke-linecap="round" stroke-linejoin="round">
                                                                    <path
                                                                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                                </svg>
                                                                <div className="grow">
                            <span className="text-sm text-gray-800">
                              docs.css
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-2">
                        <span className="text-sm text-gray-800">
                          README.txt
                        </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs-accordion" role="treeitem" aria-expanded="false"
                                                 id="hs-basic-usage-example-tree-sub-level-two-heading-two">
                                                <div
                                                    className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                                                    <button
                                                        className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                        aria-expanded="false"
                                                        aria-controls="hs-basic-usage-example-tree-sub-level-two-collapse-two">
                                                        <svg className="size-4 text-gray-800"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             stroke-width="1.5" stroke-linecap="round"
                                                             stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path className="hs-accordion-active:hidden block"
                                                                  d="M12 5v14"></path>
                                                        </svg>
                                                    </button>

                                                    <div
                                                        className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                                        <div className="flex items-center gap-x-3">
                                                            <svg className="shrink-0 size-4 text-gray-500"
                                                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="1.5"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                                            </svg>
                                                            <div className="grow">
                          <span className="text-sm text-gray-800">
                            tailwind
                          </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="hs-basic-usage-example-tree-sub-level-two-collapse-two"
                                                     className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                                     role="group"
                                                     aria-labelledby="hs-basic-usage-example-tree-sub-level-two-heading-two">
                                                    <div
                                                        className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">

                                                        <div
                                                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                            role="treeitem">
                                                            <div className="flex items-center gap-x-3">
                                                                <svg className="shrink-0 size-4 text-gray-500"
                                                                     xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor" stroke-width="1.5"
                                                                     stroke-linecap="round" stroke-linejoin="round">
                                                                    <path
                                                                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                                </svg>
                                                                <div className="grow">
                            <span className="text-sm text-gray-800">
                              input.css
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-0.5 px-1.5" role="treeitem">
                  <span className="text-sm text-gray-800">
                    .gitignore
                  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hs-accordion" role="treeitem" aria-expanded="false"
                                     id="hs-basic-usage-example-tree-sub-heading-two">

                                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                                        <button
                                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                            aria-expanded="false"
                                            aria-controls="hs-basic-usage-example-tree-sub-collapse-two">
                                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                 stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                                            </svg>
                                        </button>

                                        <div
                                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                            <div className="flex items-center gap-x-3">
                                                <svg className="shrink-0 size-4 text-gray-500"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                                </svg>
                                                <div className="grow">
                    <span className="text-sm text-gray-800">
                      img
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hs-basic-usage-example-tree-sub-collapse-two"
                                         className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                         role="group" aria-labelledby="hs-basic-usage-example-tree-sub-heading-two">
                                        <div
                                            className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">

                                            <div
                                                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                role="treeitem">
                                                <div className="flex items-center gap-x-3">
                                                    <svg className="shrink-0 size-4 text-gray-500"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="1.5" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <path
                                                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                        <circle cx="10" cy="12" r="2"></circle>
                                                        <path
                                                            d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                                                    </svg>
                                                    <div className="grow">
                      <span className="text-sm text-gray-800">
                        hero.jpg
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                role="treeitem">
                                                <div className="flex items-center gap-x-3">
                                                    <svg className="shrink-0 size-4 text-gray-500"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="1.5" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <path
                                                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                        <circle cx="10" cy="12" r="2"></circle>
                                                        <path
                                                            d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                                                    </svg>
                                                    <div className="grow">
                      <span className="text-sm text-gray-800">
                        tailwind.png
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                role="treeitem">
                                                <div className="flex items-center gap-x-3">
                                                    <svg className="shrink-0 size-4 text-gray-500"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="1.5" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <path
                                                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                        <circle cx="10" cy="12" r="2"></circle>
                                                        <path
                                                            d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                                                    </svg>
                                                    <div className="grow">
                      <span className="text-sm text-gray-800">
                        untitled.png
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hs-accordion" role="treeitem" aria-expanded="false"
                                     id="hs-basic-usage-example-tree-sub-heading-three">

                                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                                        <button
                                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                            aria-expanded="false"
                                            aria-controls="hs-basic-usage-example-tree-sub-collapse-three">
                                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                 stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                                            </svg>
                                        </button>

                                        <div
                                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                            <div className="flex items-center gap-x-3">
                                                <svg className="shrink-0 size-4 text-gray-500"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                                </svg>
                                                <div className="grow">
                    <span className="text-sm text-gray-800">
                      js
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hs-basic-usage-example-tree-sub-collapse-three"
                                         className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                         role="group" aria-labelledby="hs-basic-usage-example-tree-sub-heading-three">
                                        <div
                                            className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                                            <div
                                                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                                role="treeitem">
                                                <div className="flex items-center gap-x-3">
                                                    <svg className="shrink-0 size-4 text-gray-500"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="1.5" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <path
                                                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                        <circle cx="10" cy="12" r="2"></circle>
                                                        <path
                                                            d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                                                    </svg>
                                                    <div className="grow">
                      <span className="text-sm text-gray-800">
                        preline.jpg
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion" role="treeitem" aria-expanded="false"
                         id="hs-basic-usage-example-tree-heading-two">
                        <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                            <button
                                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                aria-expanded="false" aria-controls="hs-basic-tree-collapse-two">
                                <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                                </svg>
                            </button>

                            <div
                                className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                                <div className="flex items-center gap-x-3">
                                    <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                    </svg>
                                    <div className="grow">
              <span className="text-sm text-gray-800">
                scripts
              </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hs-basic-usage-example-tree-collapse-two"
                             className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                             role="group" aria-labelledby="hs-basic-usage-example-tree-heading-two">
                            <div
                                className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">

                                <div
                                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                    role="treeitem">
                                    <div className="flex items-center gap-x-3">
                                        <svg className="shrink-0 size-4 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        </svg>
                                        <div className="grow">
                <span className="text-sm text-gray-800">
                  preline.js
                </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                    role="treeitem">
                                    <div className="flex items-center gap-x-3">
                                        <svg className="shrink-0 size-4 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        </svg>
                                        <div className="grow">
                <span className="text-sm text-gray-800">
                  tailwind.js
                </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                    role="treeitem">
                                    <div className="flex items-center gap-x-3">
                                        <svg className="shrink-0 size-4 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        </svg>
                                        <div className="grow">
                <span className="text-sm text-gray-800">
                  www.js
                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false" aria-controls="hs-basic-usage-example-tree-collapse-three">
                            <svg className="size-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path className="hs-accordion-active:hidden block" d="M12 5v14"></path>
                            </svg>
                        </button>

                        <div
                            className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                                <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                <div className="grow">
              <span className="text-sm text-gray-800">
                templates
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="hs-basic-usage-example-tree-collapse-three"
                         className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                         role="group" aria-labelledby="hs-basic-usage-example-tree-heading-three">
                        <div
                            className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">

                            <div
                                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                                role="treeitem">
                                <div className="flex items-center gap-x-3">
                                    <svg className="shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    </svg>
                                    <div className="grow">
                <span className="text-sm text-gray-800">
                  index.html
                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileTree;