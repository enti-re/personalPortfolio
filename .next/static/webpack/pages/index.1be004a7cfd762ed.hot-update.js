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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/dp.jpg */ \"./public/dp.jpg\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [scrolling, setScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            // Determine if the user is scrolling based on your desired logic\n            const isScrolling = window.scrollY > 0;\n            if (window.scrollY > 10) console.log(\"onej\");\n            if (window.scrollY > 20) console.log(\"two\");\n            if (window.scrollY > 400) console.log(\"three\");\n            setScrolling(isScrolling);\n        };\n        // Add a scroll event listener when the component mounts\n        window.addEventListener(\"scroll\", handleScroll);\n        // Remove the scroll event listener when the component unmounts to prevent memory leaks\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row w-screen h-screen sm:justify-start px-4 md:px-36 pt-16 lg:gap-56 ml-100  items-start bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex mt-40 flex-col sm:w-[45%] justify-start sm:items-center lg:items-start gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"180px\",\n                                height: \"180px\",\n                                className: \"rounded-xl text-center\",\n                                src: _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break\",\n                                        children: \"Nikhil Chandna\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg md:text-xl text-slate-200\",\n                                        children: \"Software Engineer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white text-lg\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: \"- About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white text-lg\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: \"- Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: \"- Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: \"- Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-end pt-40 gap-32 overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 191,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"WZQ6VrLcseTXfYRvdyetm1GTXRA=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQ0FHRCw4REFBQytCO2dDQUNDZCxXQUFXLEdBRVYsT0FEQ2hCLGVBQWUsZUFBZSx1QkFBdUIsSUFDdEQ7Z0NBQ0RnQyxTQUFTO29DQUNQL0IsY0FBYztvQ0FDZEYsUUFBUTtvQ0FDUmUsV0FBVzt3Q0FDVGYsUUFBUTtvQ0FDVixHQUFHO2dDQUNMOzBDQUNEOzs7Ozs7MENBR0QsOERBQUMrQjtnQ0FDQ2QsV0FBVyxHQUVWLE9BRENoQixlQUFlLGFBQWEsdUJBQXVCO2dDQUVyRGdDLFNBQVM7b0NBQ1AvQixjQUFjO29DQUNkRixRQUFRO29DQUNSZSxXQUFXO3dDQUNUZixRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQytCO2dDQUNDZCxXQUFXLEdBRVYsT0FEQ2hCLGVBQWUsWUFBWSx1QkFBdUI7Z0NBRXBEZ0MsU0FBUztvQ0FDUC9CLGNBQWM7b0NBQ2RGLFFBQVE7b0NBQ1JlLFdBQVc7d0NBQ1RmLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9MLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNaLDhEQUFDdEIseURBQUtBOzs7OztrQ0FDTiw4REFBQ0YsOERBQVVBOzs7OztrQ0FDWCw4REFBQ0MsMERBQVFBOzs7OztrQ0FDVCw4REFBQ0UsMkRBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQXJMTUU7TUFBQUE7QUF1TE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUudHN4PzYxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLy4uLy4uL3B1YmxpYy9kcC5qcGdcIjtcblxuY29uc3QgQW5pbWF0ZWRDdXJzb3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWFuaW1hdGVkLWN1cnNvclwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5pbXBvcnQgeyBFeHBlcmllbmNlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9FeHBlcmllbmNlXCI7XG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvamVjdHNcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiQC9jb21wb25lbnRzL0Fib3V0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRhY3RcIjtcbmltcG9ydCBFbnRyeUxvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0VudHJ5TG9hZGVyXCI7XG5pbXBvcnQgRG93bkljb24gZnJvbSBcIkAvSWNvbnMvRG93bkljb25cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFwiYWJvdXRcIik7XG4gIGNvbnN0IFtuYXZpZ2F0aW9uLCBzZXROYXZpZ2F0aW9uXSA9IHVzZVN0YXRlKFwiYWJvdXRcIik7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtzY3JvbGxpbmcsIHNldFNjcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIHVzZXIgaXMgc2Nyb2xsaW5nIGJhc2VkIG9uIHlvdXIgZGVzaXJlZCBsb2dpY1xuICAgICAgY29uc3QgaXNTY3JvbGxpbmcgPSB3aW5kb3cuc2Nyb2xsWSA+IDA7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWT4xMClcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmVqXCIpO1xuXG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWT4yMClcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d29cIik7XG5cbiAgICAgIGlmKHdpbmRvdy5zY3JvbGxZPjQwMClcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aHJlZVwiKTtcbiAgICAgIHNldFNjcm9sbGluZyhpc1Njcm9sbGluZyk7XG4gICAgfTtcblxuICAgIC8vIEFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50cyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZW50ZWlybmcgaGVyZS4uLlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvZGVyKGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICA8QW5pbWF0ZWRDdXJzb3JcbiAgICAgICAgICBjb2xvcj1cIjI1NSwgMjU1LCAyNTVcIlxuICAgICAgICAgIGlubmVyU2l6ZT17OH1cbiAgICAgICAgICBvdXRlclNpemU9ezh9XG4gICAgICAgICAgaW5uZXJTY2FsZT17Mn1cbiAgICAgICAgICBvdXRlclNjYWxlPXsyfVxuICAgICAgICAgIGNsaWNrYWJsZXM9e1tcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJpbWFnZVwiXScsXG4gICAgICAgICAgICBcImxhYmVsW2Zvcl1cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCIubGlua1wiLFxuICAgICAgICAgIF19XG4gICAgICAgICAgb3V0ZXJTdHlsZT17e1xuICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcImV4Y2x1c2lvblwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxFbnRyeUxvYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LXNjcmVlbiBoLXNjcmVlbiBzbTpqdXN0aWZ5LXN0YXJ0IHB4LTQgbWQ6cHgtMzYgcHQtMTYgbGc6Z2FwLTU2IG1sLTEwMCAgaXRlbXMtc3RhcnQgYmctYmxhY2sgdGV4dCB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNTQwICYmIChcbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbXQtNDAgZmxleC1jb2wgc206dy1bNDUlXSBqdXN0aWZ5LXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBsZzppdGVtcy1zdGFydCBnYXAtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIGZsZXggZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB3aWR0aD17XCIxODBweFwifVxuICAgICAgICAgICAgaGVpZ2h0PXtcIjE4MHB4XCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIHNyYz17cHJvZmlsZVBpYy5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtNXhsIG1kOnRleHQtN3hsIHctMS8zIHRleHQtc2xhdGUtMjAwIHdvcmQtYnJlYWtcIj5cbiAgICAgICAgICAgICAgTmlraGlsIENoYW5kbmFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgICAgU29mdHdhcmUgRW5naW5lZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNtOmZsZXgtcm93IHNtOmp1c3RpZnktY2VudGVyIGxnOmZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bmF2aWdhdGlvbiA9PT0gXCJhYm91dFwiID8gXCJ0ZXh0LXdoaXRlIHRleHQtbGdcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImFib3V0XCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiYWJvdXRcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIEFib3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBuYXZpZ2F0aW9uID09PSBcImV4cGVyaWVuY2VcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJleHBlcmllbmNlXCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiZXhwZXJpZW5jZVwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gRXhwZXJpZW5jZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbiA9PT0gXCJwcm9qZWN0c1wiID8gXCJ0ZXh0LXdoaXRlIHRleHQtbGdcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwicHJvamVjdHNcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gUHJvamVjdHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIG5hdmlnYXRpb24gPT09IFwiY29udGFjdFwiID8gXCJ0ZXh0LXdoaXRlIHRleHQtbGdcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIENvbnRhY3RcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbTp3LWZ1bGwgbGc6dy1bNTUlXSBvdmVyZmxvdy1zY3JvbGxcIj4gKi99XG4gICAgICB7Lyoge3BhZ2UgPT09IFwibG9hZGVyXCIgJiYgPExvYWRlciAvPn0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kIHB0LTQwIGdhcC0zMiBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgICAgezxBYm91dCAvPn1cbiAgICAgICAgezxFeHBlcmllbmNlIC8+fVxuICAgICAgICB7PFByb2plY3RzIC8+fVxuICAgICAgICB7PENvbnRhY3QgLz59XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsInByb2ZpbGVQaWMiLCJBbmltYXRlZEN1cnNvciIsInNzciIsIkV4cGVyaWVuY2UiLCJQcm9qZWN0cyIsIkFib3V0IiwiQ29udGFjdCIsIkVudHJ5TG9hZGVyIiwiSG9tZVBhZ2UiLCJwYWdlIiwic2V0UGFnZSIsIm5hdmlnYXRpb24iLCJzZXROYXZpZ2F0aW9uIiwibG9hZGVyIiwic2V0TG9kZXIiLCJzY3JvbGxpbmciLCJzZXRTY3JvbGxpbmciLCJoYW5kbGVTY3JvbGwiLCJpc1Njcm9sbGluZyIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpbm5lclNpemUiLCJvdXRlclNpemUiLCJpbm5lclNjYWxlIiwib3V0ZXJTY2FsZSIsImNsaWNrYWJsZXMiLCJvdXRlclN0eWxlIiwibWl4QmxlbmRNb2RlIiwiaW5uZXJXaWR0aCIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});