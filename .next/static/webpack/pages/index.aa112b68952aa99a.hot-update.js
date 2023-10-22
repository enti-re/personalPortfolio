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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/dp.jpg */ \"./public/dp.jpg\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkScrolling = ()=>{\n            console.log(window.Screen);\n        };\n        window.addEventListener(\"scroll\", checkScrolling);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row sm:justify-start px-4 md:px-36 pt-16 lg:gap-56 ml-100  items-start bg-black text text-gray-400\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" fixed flex mt-40 flex-col sm:w-[45%] justify-start sm:items-center lg:items-start gap-6 overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"180px\",\n                                height: \"180px\",\n                                className: \"rounded-xl text-center\",\n                                src: _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break\",\n                                        children: \"Nikhil Chandna\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg md:text-xl text-slate-200\",\n                                        children: \"Software Engineer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white text-lg\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: \"- About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white text-lg\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: \"- Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: \"- Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: \"- Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-end pt-40 gap-32 overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"2RpQansUbkFAWJ8kAAfao/h0NSI=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVWLE9BRENaLGVBQWUsWUFBWSx1QkFBdUI7Z0NBRXBENEIsU0FBUztvQ0FDUDNCLGNBQWM7b0NBQ2RGLFFBQVE7b0NBQ1JXLFdBQVc7d0NBQ1RYLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9MLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ1osOERBQUNsQix5REFBS0E7Ozs7O2tDQUNOLDhEQUFDRiw4REFBVUE7Ozs7O2tDQUNYLDhEQUFDQywwREFBUUE7Ozs7O2tDQUNULDhEQUFDRSwyREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBaktNRTtNQUFBQTtBQW1LTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvSG9tZS50c3g/NjFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IHByb2ZpbGVQaWMgZnJvbSBcIi4vLi4vLi4vcHVibGljL2RwLmpwZ1wiO1xuXG5jb25zdCBBbmltYXRlZEN1cnNvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYW5pbWF0ZWQtY3Vyc29yXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcbmltcG9ydCB7IEV4cGVyaWVuY2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL0V4cGVyaWVuY2VcIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCJAL2NvbXBvbmVudHMvQWJvdXRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IEVudHJ5TG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRW50cnlMb2FkZXJcIjtcbmltcG9ydCBEb3duSWNvbiBmcm9tIFwiQC9JY29ucy9Eb3duSWNvblwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW25hdmlnYXRpb24sIHNldE5hdmlnYXRpb25dID0gdXNlU3RhdGUoXCJhYm91dFwiKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5TY3JlZW4pXG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbGluZyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2RlcihmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8RW50cnlMb2FkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgc206anVzdGlmeS1zdGFydCBweC00IG1kOnB4LTM2IHB0LTE2IGxnOmdhcC01NiBtbC0xMDAgIGl0ZW1zLXN0YXJ0IGJnLWJsYWNrIHRleHQgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNTQwICYmIChcbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpeGVkIGZsZXggbXQtNDAgZmxleC1jb2wgc206dy1bNDUlXSBqdXN0aWZ5LXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBsZzppdGVtcy1zdGFydCBnYXAtNiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmbGV4IGZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgd2lkdGg9e1wiMTgwcHhcIn1cbiAgICAgICAgICAgIGhlaWdodD17XCIxODBweFwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWMuc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LTV4bCBtZDp0ZXh0LTd4bCB3LTEvMyB0ZXh0LXNsYXRlLTIwMCB3b3JkLWJyZWFrXCI+XG4gICAgICAgICAgICAgIE5pa2hpbCBDaGFuZG5hXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWNlbnRlciBsZzpmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwiYWJvdXRcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJhYm91dFwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImFib3V0XCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBBYm91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbiA9PT0gXCJleHBlcmllbmNlXCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIlxuICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiZXhwZXJpZW5jZVwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIEV4cGVyaWVuY2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIG5hdmlnYXRpb24gPT09IFwicHJvamVjdHNcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcInByb2plY3RzXCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwicHJvamVjdHNcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIFByb2plY3RzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBuYXZpZ2F0aW9uID09PSBcImNvbnRhY3RcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIGxnOnctWzU1JV0gb3ZlcmZsb3ctc2Nyb2xsXCI+ICovfVxuICAgICAgey8qIHtwYWdlID09PSBcImxvYWRlclwiICYmIDxMb2FkZXIgLz59ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCBwdC00MCBnYXAtMzIgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgIHs8QWJvdXQgLz59XG4gICAgICAgIHs8RXhwZXJpZW5jZSAvPn1cbiAgICAgICAgezxQcm9qZWN0cyAvPn1cbiAgICAgICAgezxDb250YWN0IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJwcm9maWxlUGljIiwiQW5pbWF0ZWRDdXJzb3IiLCJzc3IiLCJFeHBlcmllbmNlIiwiUHJvamVjdHMiLCJBYm91dCIsIkNvbnRhY3QiLCJFbnRyeUxvYWRlciIsIkhvbWVQYWdlIiwicGFnZSIsInNldFBhZ2UiLCJuYXZpZ2F0aW9uIiwic2V0TmF2aWdhdGlvbiIsImxvYWRlciIsInNldExvZGVyIiwiY2hlY2tTY3JvbGxpbmciLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiU2NyZWVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb2xvciIsImlubmVyU2l6ZSIsIm91dGVyU2l6ZSIsImlubmVyU2NhbGUiLCJvdXRlclNjYWxlIiwiY2xpY2thYmxlcyIsIm91dGVyU3R5bGUiLCJtaXhCbGVuZE1vZGUiLCJpbm5lcldpZHRoIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});