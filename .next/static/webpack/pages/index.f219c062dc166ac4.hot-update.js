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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader/index.tsx\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrollY(window.pageYOffset);\n            if (scrollY > 100) {\n                setShowBackToTopButton(true);\n            } else {\n                setShowBackToTopButton(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row w-screen h-screen px-4 md:px-36 pt-16 gap-12 md:gap-1 justify-center items-center bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:w-full sm:w-1/3 flex sm:flex-row md:flex-col justify-center gap-8 md:gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-5xl md:text-7xl text-slate-200 word-break\",\n                                children: \"Nikhil Chandna\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg md:text-xl text-slate-200\",\n                                children: \"Software Engineer at Zopsmart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:justify-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"about\" ? \"____\" : \"_\",\n                                    \"About\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"experience\" ? \"____\" : \"_\",\n                                    \"Experience\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"projects\" ? \"____\" : \"_\",\n                                    \"Projects\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: [\n                                    navigation === \"contact\" ? \"____\" : \"_\",\n                                    \"Contact\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            offset,\n            page === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 172,\n                columnNumber: 29\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"3lR+Q2Lz9TofG23KH6ONZH7hE+U=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxlQUFlO2dDQUN6RDhCLFNBQVM7b0NBQ1A3QixjQUFjO29DQUNkRixRQUFRO29DQUNSaUIsV0FBVzt3Q0FDVGpCLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDs7b0NBRUNDLGVBQWUsYUFBYSxTQUFTO29DQUFJOzs7Ozs7OzBDQUU1Qyw4REFBQzRCO2dDQUNDVixXQUFXLEdBQWdELE9BQTdDbEIsZUFBZSxZQUFZLGVBQWU7Z0NBQ3hEOEIsU0FBUztvQ0FDUDdCLGNBQWM7b0NBQ2RGLFFBQVE7b0NBQ1JpQixXQUFXO3dDQUNUakIsUUFBUTtvQ0FDVixHQUFHO2dDQUNMOztvQ0FFQ0MsZUFBZSxZQUFZLFNBQVM7b0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJOUNJO1lBQ0FOLFNBQVMsMEJBQVksOERBQUNULDBEQUFNQTs7Ozs7MEJBQzdCLDhEQUFDNEI7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDeEIseURBQUtBOzs7OztrQ0FDTiw4REFBQ0YsOERBQVVBOzs7OztrQ0FDWCw4REFBQ0MsMERBQVFBOzs7OztrQ0FDVCw4REFBQ0UsMkRBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBcktNRTtNQUFBQTtBQXVLTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvSG9tZS50c3g/NjFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLy4uLy4uL3B1YmxpYy9kcC5qcGdcIjtcblxuY29uc3QgQW5pbWF0ZWRDdXJzb3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWFuaW1hdGVkLWN1cnNvclwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5pbXBvcnQgeyBFeHBlcmllbmNlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9FeHBlcmllbmNlXCI7XG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvamVjdHNcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiQC9jb21wb25lbnRzL0Fib3V0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRhY3RcIjtcbmltcG9ydCBFbnRyeUxvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0VudHJ5TG9hZGVyXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbmF2aWdhdGlvbiwgc2V0TmF2aWdhdGlvbl0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2Rlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsWSh3aW5kb3cucGFnZVlPZmZzZXQpO1xuXG4gICAgICBpZiAoc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICBzZXRTaG93QmFja1RvVG9wQnV0dG9uKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2hvd0JhY2tUb1RvcEJ1dHRvbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVpcm5nIGhlcmUuLi5cIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2RlcihmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8RW50cnlMb2FkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgdy1zY3JlZW4gaC1zY3JlZW4gcHgtNCBtZDpweC0zNiBwdC0xNiBnYXAtMTIgbWQ6Z2FwLTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJsYWNrIHRleHQgdGV4dC1ncmF5LTQwMCBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgIHt3aW5kb3cuaW5uZXJXaWR0aCA+IDU0MCAmJiAoXG4gICAgICAgIDxBbmltYXRlZEN1cnNvclxuICAgICAgICAgIGNvbG9yPVwiMjU1LCAyNTUsIDI1NVwiXG4gICAgICAgICAgaW5uZXJTaXplPXs4fVxuICAgICAgICAgIG91dGVyU2l6ZT17OH1cbiAgICAgICAgICBpbm5lclNjYWxlPXsyfVxuICAgICAgICAgIG91dGVyU2NhbGU9ezJ9XG4gICAgICAgICAgY2xpY2thYmxlcz17W1xuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cIm51bWJlclwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImltYWdlXCJdJyxcbiAgICAgICAgICAgIFwibGFiZWxbZm9yXVwiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcIi5saW5rXCIsXG4gICAgICAgICAgXX1cbiAgICAgICAgICBvdXRlclN0eWxlPXt7XG4gICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwiZXhjbHVzaW9uXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBzbTp3LTEvMyBmbGV4IHNtOmZsZXgtcm93IG1kOmZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC04IG1kOmdhcC02XCI+XG4gICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgd2lkdGg9e1wiMjQwcHhcIn1cbiAgICAgICAgICBoZWlnaHQ9e1wiMjQwcHhcIn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHNyYz17cHJvZmlsZVBpYy5zcmN9XG4gICAgICAgIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtN3hsIHRleHQtc2xhdGUtMjAwIHdvcmQtYnJlYWtcIj5cbiAgICAgICAgICAgIE5pa2hpbCBDaGFuZG5hXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyIGF0IFpvcHNtYXJ0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206anVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtuYXZpZ2F0aW9uID09PSBcImFib3V0XCIgPyBcInRleHQtd2hpdGVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImFib3V0XCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiYWJvdXRcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmF2aWdhdGlvbiA9PT0gXCJhYm91dFwiID8gXCJfX19fXCIgOiBcIl9cIn1BYm91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtuYXZpZ2F0aW9uID09PSBcImV4cGVyaWVuY2VcIiA/IFwidGV4dC13aGl0ZVwiIDogXCJcIn0gYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJleHBlcmllbmNlXCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hdmlnYXRpb24gPT09IFwiZXhwZXJpZW5jZVwiID8gXCJfX19fXCIgOiBcIl9cIn1FeHBlcmllbmNlXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwicHJvamVjdHNcIiA/IFwidGV4dC13aGl0ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwicHJvamVjdHNcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uID09PSBcInByb2plY3RzXCIgPyBcIl9fX19cIiA6IFwiX1wifVByb2plY3RzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwiY29udGFjdFwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwiY29udGFjdFwiKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uID09PSBcImNvbnRhY3RcIiA/IFwiX19fX1wiIDogXCJfXCJ9Q29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtvZmZzZXR9XG4gICAgICB7cGFnZSA9PT0gXCJsb2FkZXJcIiAmJiA8TG9hZGVyIC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICB7PEFib3V0IC8+fVxuICAgICAgezxFeHBlcmllbmNlIC8+fVxuICAgICAgezxQcm9qZWN0cyAvPn1cbiAgICAgIHs8Q29udGFjdCAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJMb2FkZXIiLCJBbmltYXRlZEN1cnNvciIsInNzciIsIkV4cGVyaWVuY2UiLCJQcm9qZWN0cyIsIkFib3V0IiwiQ29udGFjdCIsIkVudHJ5TG9hZGVyIiwiSG9tZVBhZ2UiLCJwYWdlIiwic2V0UGFnZSIsIm5hdmlnYXRpb24iLCJzZXROYXZpZ2F0aW9uIiwibG9hZGVyIiwic2V0TG9kZXIiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJoYW5kbGVTY3JvbGwiLCJzZXRTY3JvbGxZIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxZIiwic2V0U2hvd0JhY2tUb1RvcEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb2xvciIsImlubmVyU2l6ZSIsIm91dGVyU2l6ZSIsImlubmVyU2NhbGUiLCJvdXRlclNjYWxlIiwiY2xpY2thYmxlcyIsIm91dGVyU3R5bGUiLCJtaXhCbGVuZE1vZGUiLCJpbm5lcldpZHRoIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});