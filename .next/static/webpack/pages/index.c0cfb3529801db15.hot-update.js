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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/dp.jpg */ \"./public/dp.jpg\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleScroll = ()=>{\n        if (window.scrollY > 100) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []); // Empty depend\n    console.log(offset);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row w-screen h-screen sm:justify-start px-4 md:px-36 pt-16 lg:gap-20 ml-100  items-start bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" fixed flex mt-40 flex-col sm:w-[45%] justify-start sm:items-center lg:items-start gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"180px\",\n                                height: \"180px\",\n                                className: \"rounded-xl text-center\",\n                                src: _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break\",\n                                        children: \"Nikhil Chandna\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg md:text-xl text-slate-200\",\n                                        children: \"Software Engineer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white text-lg\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: \"- About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white text-lg\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: \"- Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: \"- Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: \"- Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-end pt-40 gap-32 overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 182,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"bfAM9zaN7KINHiNJf8yNhuacaWQ=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVixHQUFHO2dDQUNMOzBDQUNEOzs7Ozs7MENBR0QsOERBQUMrQjtnQ0FDQ2QsV0FBVyxHQUVWLE9BRENoQixlQUFlLGFBQWEsdUJBQXVCO2dDQUVyRGdDLFNBQVM7b0NBQ1AvQixjQUFjO29DQUNkRixRQUFRO29DQUNSZSxXQUFXO3dDQUNUZixRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQytCO2dDQUNDZCxXQUFXLEdBRVYsT0FEQ2hCLGVBQWUsWUFBWSx1QkFBdUI7Z0NBRXBEZ0MsU0FBUztvQ0FDUC9CLGNBQWM7b0NBQ2RGLFFBQVE7b0NBQ1JlLFdBQVc7d0NBQ1RmLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9MLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNaLDhEQUFDdEIseURBQUtBOzs7OztrQ0FDTiw4REFBQ0YsOERBQVVBOzs7OztrQ0FDWCw4REFBQ0MsMERBQVFBOzs7OztrQ0FDVCw4REFBQ0UsMkRBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQTdLTUU7TUFBQUE7QUErS04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUudHN4PzYxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi8uLi8uLi9wdWJsaWMvZHAuanBnXCI7XG5cbmNvbnN0IEFuaW1hdGVkQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hbmltYXRlZC1jdXJzb3JcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvRXhwZXJpZW5jZVwiO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9BYm91dFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgRW50cnlMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9FbnRyeUxvYWRlclwiO1xuaW1wb3J0IERvd25JY29uIGZyb20gXCJAL0ljb25zL0Rvd25JY29uXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbmF2aWdhdGlvbiwgc2V0TmF2aWdhdGlvbl0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2Rlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZFxuXG4gIGNvbnNvbGUubG9nKG9mZnNldCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbnRlaXJuZyBoZXJlLi4uXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9kZXIoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHctc2NyZWVuIGgtc2NyZWVuXCI+XG4gICAgICAgIDxBbmltYXRlZEN1cnNvclxuICAgICAgICAgIGNvbG9yPVwiMjU1LCAyNTUsIDI1NVwiXG4gICAgICAgICAgaW5uZXJTaXplPXs4fVxuICAgICAgICAgIG91dGVyU2l6ZT17OH1cbiAgICAgICAgICBpbm5lclNjYWxlPXsyfVxuICAgICAgICAgIG91dGVyU2NhbGU9ezJ9XG4gICAgICAgICAgY2xpY2thYmxlcz17W1xuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cIm51bWJlclwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImltYWdlXCJdJyxcbiAgICAgICAgICAgIFwibGFiZWxbZm9yXVwiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcIi5saW5rXCIsXG4gICAgICAgICAgXX1cbiAgICAgICAgICBvdXRlclN0eWxlPXt7XG4gICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwiZXhjbHVzaW9uXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPEVudHJ5TG9hZGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHctc2NyZWVuIGgtc2NyZWVuIHNtOmp1c3RpZnktc3RhcnQgcHgtNCBtZDpweC0zNiBwdC0xNiBsZzpnYXAtMjAgbWwtMTAwICBpdGVtcy1zdGFydCBiZy1ibGFjayB0ZXh0IHRleHQtZ3JheS00MDAgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICB7d2luZG93LmlubmVyV2lkdGggPiA1NDAgJiYgKFxuICAgICAgICA8QW5pbWF0ZWRDdXJzb3JcbiAgICAgICAgICBjb2xvcj1cIjI1NSwgMjU1LCAyNTVcIlxuICAgICAgICAgIGlubmVyU2l6ZT17OH1cbiAgICAgICAgICBvdXRlclNpemU9ezh9XG4gICAgICAgICAgaW5uZXJTY2FsZT17Mn1cbiAgICAgICAgICBvdXRlclNjYWxlPXsyfVxuICAgICAgICAgIGNsaWNrYWJsZXM9e1tcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJpbWFnZVwiXScsXG4gICAgICAgICAgICBcImxhYmVsW2Zvcl1cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCIubGlua1wiLFxuICAgICAgICAgIF19XG4gICAgICAgICAgb3V0ZXJTdHlsZT17e1xuICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcImV4Y2x1c2lvblwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZml4ZWQgZmxleCBtdC00MCBmbGV4LWNvbCBzbTp3LVs0NSVdIGp1c3RpZnktc3RhcnQgc206aXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGdhcC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgZmxleCBmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHdpZHRoPXtcIjE4MHB4XCJ9XG4gICAgICAgICAgICBoZWlnaHQ9e1wiMTgwcHhcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgc3JjPXtwcm9maWxlUGljLnNyY31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC01eGwgbWQ6dGV4dC03eGwgdy0xLzMgdGV4dC1zbGF0ZS0yMDAgd29yZC1icmVha1wiPlxuICAgICAgICAgICAgICBOaWtoaWwgQ2hhbmRuYVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc206ZmxleC1yb3cgc206anVzdGlmeS1jZW50ZXIgbGc6ZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtuYXZpZ2F0aW9uID09PSBcImFib3V0XCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiYWJvdXRcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJhYm91dFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gQWJvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIG5hdmlnYXRpb24gPT09IFwiZXhwZXJpZW5jZVwiID8gXCJ0ZXh0LXdoaXRlIHRleHQtbGdcIiA6IFwiXCJcbiAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJleHBlcmllbmNlXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBFeHBlcmllbmNlXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBuYXZpZ2F0aW9uID09PSBcInByb2plY3RzXCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcInByb2plY3RzXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBQcm9qZWN0c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbiA9PT0gXCJjb250YWN0XCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC0gQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBsZzp3LVs1NSVdIG92ZXJmbG93LXNjcm9sbFwiPiAqL31cbiAgICAgIHsvKiB7cGFnZSA9PT0gXCJsb2FkZXJcIiAmJiA8TG9hZGVyIC8+fSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgcHQtNDAgZ2FwLTMyIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgICB7PEFib3V0IC8+fVxuICAgICAgICB7PEV4cGVyaWVuY2UgLz59XG4gICAgICAgIHs8UHJvamVjdHMgLz59XG4gICAgICAgIHs8Q29udGFjdCAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwicHJvZmlsZVBpYyIsIkFuaW1hdGVkQ3Vyc29yIiwic3NyIiwiRXhwZXJpZW5jZSIsIlByb2plY3RzIiwiQWJvdXQiLCJDb250YWN0IiwiRW50cnlMb2FkZXIiLCJIb21lUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwibmF2aWdhdGlvbiIsInNldE5hdmlnYXRpb24iLCJsb2FkZXIiLCJzZXRMb2RlciIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yIiwiaW5uZXJTaXplIiwib3V0ZXJTaXplIiwiaW5uZXJTY2FsZSIsIm91dGVyU2NhbGUiLCJjbGlja2FibGVzIiwib3V0ZXJTdHlsZSIsIm1peEJsZW5kTW9kZSIsImlubmVyV2lkdGgiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});