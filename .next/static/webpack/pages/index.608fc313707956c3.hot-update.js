"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader/index.tsx\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setOffset(window.scrollY);\n        // if (scrollY > 100) {\n        //   // setShowBackToTopButton(true);\n        // } else {\n        //   // setShowBackToTopButton(false);\n        // }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row w-screen h-screen px-4 md:px-36 pt-16 gap-12 md:gap-1 justify-center items-center bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:w-full sm:w-1/3 flex sm:flex-row md:flex-col justify-center gap-8 md:gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-5xl md:text-7xl text-slate-200 word-break\",\n                                children: \"Nikhil Chandna\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg md:text-xl text-slate-200\",\n                                children: \"Software Engineer at Zopsmart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:justify-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"about\" ? \"____\" : \"_\",\n                                    \"About\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"experience\" ? \"____\" : \"_\",\n                                    \"Experience\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"projects\" ? \"____\" : \"_\",\n                                    \"Projects\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"contact\" ? \"____\" : \"_\",\n                                    \"Contact\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            offset,\n            page === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 172,\n                columnNumber: 29\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"3lR+Q2Lz9TofG23KH6ONZH7hE+U=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNoQjtBQUNMO0FBQ1c7QUFHekMsTUFBTUssaUJBQWlCRixtREFBT0EsQ0FBQyxJQUFNLDhPQUErQjs7Ozs7O0lBQ2xFRyxLQUFLOztLQURERDtBQUcrQztBQUNKO0FBQ1Y7QUFDSTtBQUNRO0FBRW5ELE1BQU1PLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFFBQVFDLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixlQUFlO1lBQ25CRCxVQUFVRSxPQUFPQyxPQUFPO1FBRXhCLHVCQUF1QjtRQUN2QixxQ0FBcUM7UUFDckMsV0FBVztRQUNYLHNDQUFzQztRQUN0QyxJQUFJO1FBQ047UUFFQUQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMcEIsZ0RBQVNBLENBQUM7UUFDUnlCLFFBQVFDLEdBQUcsQ0FBQztRQUNaQyxXQUFXO1lBQ1RWLFNBQVM7UUFDWCxHQUFHO0lBQ0wsR0FBRyxFQUFFO0lBRUwsSUFBSUQsUUFBUTtRQUNWLHFCQUNFLDhEQUFDWTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ3pCO29CQUNDMEIsT0FBTTtvQkFDTkMsV0FBVztvQkFDWEMsV0FBVztvQkFDWEMsWUFBWTtvQkFDWkMsWUFBWTtvQkFDWkMsWUFBWTt3QkFDVjt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTtxQkFDRDtvQkFDREMsWUFBWTt3QkFDVkMsY0FBYztvQkFDaEI7Ozs7Ozs4QkFFRiw4REFBQzNCLCtEQUFXQTs7Ozs7Ozs7Ozs7SUFHbEI7SUFDQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7O1lBQ1pSLE9BQU9pQixVQUFVLEdBQUcscUJBQ25CLDhEQUFDbEM7Z0JBQ0MwQixPQUFNO2dCQUNOQyxXQUFXO2dCQUNYQyxXQUFXO2dCQUNYQyxZQUFZO2dCQUNaQyxZQUFZO2dCQUNaQyxZQUFZO29CQUNWO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO2dCQUNEQyxZQUFZO29CQUNWQyxjQUFjO2dCQUNoQjs7Ozs7OzBCQUdKLDhEQUFDVDtnQkFBSUMsV0FBVTs7a0NBT2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQWlEOzs7Ozs7MENBR2hFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBb0M7Ozs7Ozs7Ozs7OztrQ0FJckQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1U7Z0NBQ0NDLE1BQUs7Z0NBQ0xYLFdBQVcsR0FBOEMsT0FBM0NmLGVBQWUsVUFBVSxlQUFlO2dDQUN0RDJCLFNBQVM7b0NBQ1AxQixjQUFjO29DQUNkRixRQUFRO29DQUNSYyxXQUFXO3dDQUNUZCxRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7O29DQUVDQyxlQUFlLFVBQVUsU0FBUztvQ0FBSTs7Ozs7OzswQ0FFekMsOERBQUN5QjtnQ0FDQ1YsV0FBVyxHQUFtRCxPQUFoRGYsZUFBZSxlQUFlLGVBQWUsSUFBRztnQ0FDOUQyQixTQUFTO29DQUNQMUIsY0FBYztvQ0FDZEYsUUFBUTtvQ0FDUmMsV0FBVzt3Q0FDVGQsUUFBUTtvQ0FDVixHQUFHO2dDQUNMOztvQ0FFQ0MsZUFBZSxlQUFlLFNBQVM7b0NBQUk7Ozs7Ozs7MENBRTlDLDhEQUFDeUI7Z0NBQ0NWLFdBQVcsR0FBaUQsT0FBOUNmLGVBQWUsYUFBYSxlQUFlO2dDQUN6RDJCLFNBQVM7b0NBQ1AxQixjQUFjO29DQUNkRixRQUFRO29DQUNSYyxXQUFXO3dDQUNUZCxRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7O29DQUVDQyxlQUFlLGFBQWEsU0FBUztvQ0FBSTs7Ozs7OzswQ0FFNUMsOERBQUN5QjtnQ0FDQ1YsV0FBVyxHQUFnRCxPQUE3Q2YsZUFBZSxZQUFZLGVBQWU7Z0NBQ3hEMkIsU0FBUztvQ0FDUDFCLGNBQWM7b0NBQ2RGLFFBQVE7b0NBQ1JjLFdBQVc7d0NBQ1RkLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDs7b0NBRUNDLGVBQWUsWUFBWSxTQUFTO29DQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTlDSTtZQUNBTixTQUFTLDBCQUFZLDhEQUFDVCwwREFBTUE7Ozs7OzBCQUM3Qiw4REFBQ3lCO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ3JCLHlEQUFLQTs7Ozs7a0NBQ04sOERBQUNGLDhEQUFVQTs7Ozs7a0NBQ1gsOERBQUNDLDBEQUFRQTs7Ozs7a0NBQ1QsOERBQUNFLDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQXJLTUU7TUFBQUE7QUF1S04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUudHN4PzYxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi8uLi8uLi9wdWJsaWMvZHAuanBnXCI7XG5cbmNvbnN0IEFuaW1hdGVkQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hbmltYXRlZC1jdXJzb3JcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvRXhwZXJpZW5jZVwiO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9BYm91dFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgRW50cnlMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9FbnRyeUxvYWRlclwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW25hdmlnYXRpb24sIHNldE5hdmlnYXRpb25dID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldE9mZnNldCh3aW5kb3cuc2Nyb2xsWSk7XG5cbiAgICAgIC8vIGlmIChzY3JvbGxZID4gMTAwKSB7XG4gICAgICAvLyAgIC8vIHNldFNob3dCYWNrVG9Ub3BCdXR0b24odHJ1ZSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICAvLyBzZXRTaG93QmFja1RvVG9wQnV0dG9uKGZhbHNlKTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZW50ZWlybmcgaGVyZS4uLlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvZGVyKGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICA8QW5pbWF0ZWRDdXJzb3JcbiAgICAgICAgICBjb2xvcj1cIjI1NSwgMjU1LCAyNTVcIlxuICAgICAgICAgIGlubmVyU2l6ZT17OH1cbiAgICAgICAgICBvdXRlclNpemU9ezh9XG4gICAgICAgICAgaW5uZXJTY2FsZT17Mn1cbiAgICAgICAgICBvdXRlclNjYWxlPXsyfVxuICAgICAgICAgIGNsaWNrYWJsZXM9e1tcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJpbWFnZVwiXScsXG4gICAgICAgICAgICBcImxhYmVsW2Zvcl1cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCIubGlua1wiLFxuICAgICAgICAgIF19XG4gICAgICAgICAgb3V0ZXJTdHlsZT17e1xuICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcImV4Y2x1c2lvblwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxFbnRyeUxvYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB3LXNjcmVlbiBoLXNjcmVlbiBweC00IG1kOnB4LTM2IHB0LTE2IGdhcC0xMiBtZDpnYXAtMSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgdGV4dCB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNTQwICYmIChcbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIHNtOnctMS8zIGZsZXggc206ZmxleC1yb3cgbWQ6ZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZ2FwLTggbWQ6Z2FwLTZcIj5cbiAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICB3aWR0aD17XCIyNDBweFwifVxuICAgICAgICAgIGhlaWdodD17XCIyNDBweFwifVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgc3JjPXtwcm9maWxlUGljLnNyY31cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC03eGwgdGV4dC1zbGF0ZS0yMDAgd29yZC1icmVha1wiPlxuICAgICAgICAgICAgTmlraGlsIENoYW5kbmFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgU29mdHdhcmUgRW5naW5lZXIgYXQgWm9wc21hcnRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwiYWJvdXRcIiA/IFwidGV4dC13aGl0ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiYWJvdXRcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJhYm91dFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uID09PSBcImFib3V0XCIgPyBcIl9fX19cIiA6IFwiX1wifUFib3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwiZXhwZXJpZW5jZVwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcIlwifSBgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiZXhwZXJpZW5jZVwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmF2aWdhdGlvbiA9PT0gXCJleHBlcmllbmNlXCIgPyBcIl9fX19cIiA6IFwiX1wifUV4cGVyaWVuY2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bmF2aWdhdGlvbiA9PT0gXCJwcm9qZWN0c1wiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcInByb2plY3RzXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hdmlnYXRpb24gPT09IFwicHJvamVjdHNcIiA/IFwiX19fX1wiIDogXCJfXCJ9UHJvamVjdHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bmF2aWdhdGlvbiA9PT0gXCJjb250YWN0XCIgPyBcInRleHQtd2hpdGVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hdmlnYXRpb24gPT09IFwiY29udGFjdFwiID8gXCJfX19fXCIgOiBcIl9cIn1Db250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge29mZnNldH1cbiAgICAgIHtwYWdlID09PSBcImxvYWRlclwiICYmIDxMb2FkZXIgLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIHs8QWJvdXQgLz59XG4gICAgICB7PEV4cGVyaWVuY2UgLz59XG4gICAgICB7PFByb2plY3RzIC8+fVxuICAgICAgezxDb250YWN0IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIkxvYWRlciIsIkFuaW1hdGVkQ3Vyc29yIiwic3NyIiwiRXhwZXJpZW5jZSIsIlByb2plY3RzIiwiQWJvdXQiLCJDb250YWN0IiwiRW50cnlMb2FkZXIiLCJIb21lUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwibmF2aWdhdGlvbiIsInNldE5hdmlnYXRpb24iLCJsb2FkZXIiLCJzZXRMb2RlciIsIm9mZnNldCIsInNldE9mZnNldCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpbm5lclNpemUiLCJvdXRlclNpemUiLCJpbm5lclNjYWxlIiwib3V0ZXJTY2FsZSIsImNsaWNrYWJsZXMiLCJvdXRlclN0eWxlIiwibWl4QmxlbmRNb2RlIiwiaW5uZXJXaWR0aCIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});