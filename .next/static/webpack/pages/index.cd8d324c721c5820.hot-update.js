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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader/index.tsx\");\n/* harmony import */ var _public_dp_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../public/dp.jpg */ \"./public/dp.jpg\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row w-screen h-screen sm:justify-start px-4 md:px-36 pt-16 gap-12 lg:gap-4 lg:justify-center items-center bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:w-[45%] justify-center sm:items-start lg:items-start gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"180px\",\n                                height: \"180px\",\n                                className: \"rounded-xl text-center\",\n                                src: _public_dp_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break\",\n                                        children: \"Nikhil Chandna\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg md:text-xl text-slate-200\",\n                                        children: \"Software Engineer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white text-lg\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: \"- About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white text-lg\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: \"- Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: \"- Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: \"- Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex gap-4sm:w-full lg:w-[55%] overflow-scroll\",\n                children: [\n                    page === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 31\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_6__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, undefined),\n                    page === \"projects\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_7__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 33\n                    }, undefined),\n                    page === \"contact\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 32\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"ePknDoV20vO6eGTABKbwJNfrsGo=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUUCxRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ1E7Z0JBQUlDLFdBQVU7O29CQUNaVixTQUFTLDBCQUFZLDhEQUFDViwwREFBTUE7Ozs7O2tDQUM3Qiw4REFBQ00seURBQUtBOzs7OztrQ0FDTiw4REFBQ0YsOERBQVVBOzs7OztvQkFDVk0sU0FBUyw0QkFBYyw4REFBQ0wsMERBQVFBOzs7OztvQkFDaENLLFNBQVMsMkJBQWEsOERBQUNILDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7R0FuSk1FO01BQUFBO0FBcUpOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Ib21lLnRzeD82MWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IHByb2ZpbGVQaWMgZnJvbSBcIi4vLi4vLi4vcHVibGljL2RwLmpwZ1wiO1xuXG5jb25zdCBBbmltYXRlZEN1cnNvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYW5pbWF0ZWQtY3Vyc29yXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcbmltcG9ydCB7IEV4cGVyaWVuY2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL0V4cGVyaWVuY2VcIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCJAL2NvbXBvbmVudHMvQWJvdXRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IEVudHJ5TG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRW50cnlMb2FkZXJcIjtcbmltcG9ydCBEb3duSWNvbiBmcm9tIFwiQC9JY29ucy9Eb3duSWNvblwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW25hdmlnYXRpb24sIHNldE5hdmlnYXRpb25dID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVpcm5nIGhlcmUuLi5cIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2RlcihmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8RW50cnlMb2FkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgdy1zY3JlZW4gaC1zY3JlZW4gc206anVzdGlmeS1zdGFydCBweC00IG1kOnB4LTM2IHB0LTE2IGdhcC0xMiBsZzpnYXAtNCBsZzpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgdGV4dCB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNTQwICYmIChcbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTp3LVs0NSVdIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0YXJ0IGxnOml0ZW1zLXN0YXJ0IGdhcC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgZmxleCBmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHdpZHRoPXtcIjE4MHB4XCJ9XG4gICAgICAgICAgICBoZWlnaHQ9e1wiMTgwcHhcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgc3JjPXtwcm9maWxlUGljLnNyY31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC01eGwgbWQ6dGV4dC03eGwgdy0xLzMgdGV4dC1zbGF0ZS0yMDAgd29yZC1icmVha1wiPlxuICAgICAgICAgICAgICBOaWtoaWwgQ2hhbmRuYVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc206ZmxleC1yb3cgc206anVzdGlmeS1jZW50ZXIgbGc6ZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtuYXZpZ2F0aW9uID09PSBcImFib3V0XCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiYWJvdXRcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJhYm91dFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gQWJvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bmF2aWdhdGlvbiA9PT0gXCJleHBlcmllbmNlXCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIn0gYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJleHBlcmllbmNlXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBFeHBlcmllbmNlXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwicHJvamVjdHNcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcInByb2plY3RzXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBQcm9qZWN0c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtuYXZpZ2F0aW9uID09PSBcImNvbnRhY3RcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZ2FwLTRzbTp3LWZ1bGwgbGc6dy1bNTUlXSBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgICAge3BhZ2UgPT09IFwibG9hZGVyXCIgJiYgPExvYWRlciAvPn1cbiAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDxFeHBlcmllbmNlIC8+XG4gICAgICAgIHtwYWdlID09PSBcInByb2plY3RzXCIgJiYgPFByb2plY3RzIC8+fVxuICAgICAgICB7cGFnZSA9PT0gXCJjb250YWN0XCIgJiYgPENvbnRhY3QgLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwiTG9hZGVyIiwicHJvZmlsZVBpYyIsIkFuaW1hdGVkQ3Vyc29yIiwic3NyIiwiRXhwZXJpZW5jZSIsIlByb2plY3RzIiwiQWJvdXQiLCJDb250YWN0IiwiRW50cnlMb2FkZXIiLCJIb21lUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwibmF2aWdhdGlvbiIsInNldE5hdmlnYXRpb24iLCJsb2FkZXIiLCJzZXRMb2RlciIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpbm5lclNpemUiLCJvdXRlclNpemUiLCJpbm5lclNjYWxlIiwib3V0ZXJTY2FsZSIsImNsaWNrYWJsZXMiLCJvdXRlclN0eWxlIiwibWl4QmxlbmRNb2RlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});