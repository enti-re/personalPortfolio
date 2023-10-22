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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/dp.jpg */ \"./public/dp.jpg\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience/index.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Projects */ \"./src/components/Projects/index.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Contact */ \"./src/components/Contact/index.tsx\");\n/* harmony import */ var _components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EntryLoader */ \"./src/components/EntryLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimatedCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-animated-cursor_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-animated-cursor */ \"./node_modules/react-animated-cursor/dist/index.umd.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"Home.tsx -> \" + \"react-animated-cursor\"\n        ]\n    },\n    ssr: false\n});\n_c = AnimatedCursor;\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\");\n    const [loader, setLoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    ref.current = color;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const colorChange = ()=>{\n            const show = window.scrollY >= 200;\n            if (ref.current !== show) {\n                setColor(true);\n            }\n        };\n        window.addEventListener(\"scroll\", colorChange);\n        return ()=>window.removeEventListener(\"scroll\", colorChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"enteirng here...\");\n        setTimeout(()=>{\n            setLoder(false);\n        }, 3000);\n    }, []);\n    if (loader) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: ref,\n            className: \"bg-black w-screen h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                    color: \"255, 255, 255\",\n                    innerSize: 8,\n                    outerSize: 8,\n                    innerScale: 2,\n                    outerScale: 2,\n                    clickables: [\n                        \"a\",\n                        'input[type=\"text\"]',\n                        'input[type=\"email\"]',\n                        'input[type=\"number\"]',\n                        'input[type=\"submit\"]',\n                        'input[type=\"image\"]',\n                        \"label[for]\",\n                        \"select\",\n                        \"textarea\",\n                        \"button\",\n                        \".link\"\n                    ],\n                    outerStyle: {\n                        mixBlendMode: \"exclusion\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EntryLoader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row w-screen h-screen sm:justify-start px-4 md:px-36 pt-16 lg:gap-56 ml-100  items-start bg-black text text-gray-400 overflow-scroll\",\n        children: [\n            window.innerWidth > 540 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedCursor, {\n                color: \"255, 255, 255\",\n                innerSize: 8,\n                outerSize: 8,\n                innerScale: 2,\n                outerScale: 2,\n                clickables: [\n                    \"a\",\n                    'input[type=\"text\"]',\n                    'input[type=\"email\"]',\n                    'input[type=\"number\"]',\n                    'input[type=\"submit\"]',\n                    'input[type=\"image\"]',\n                    \"label[for]\",\n                    \"select\",\n                    \"textarea\",\n                    \"button\",\n                    \".link\"\n                ],\n                outerStyle: {\n                    mixBlendMode: \"exclusion\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" fixed flex mt-40 flex-col sm:w-[45%] justify-start sm:items-center lg:items-start gap-6 overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"180px\",\n                                height: \"180px\",\n                                className: \"rounded-xl text-center\",\n                                src: _public_dp_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break\",\n                                        children: \"Nikhil Chandna\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg md:text-xl text-slate-200\",\n                                        children: \"Software Engineer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"\".concat(navigation === \"about\" ? \"text-white text-lg\" : \"\"),\n                                onClick: async ()=>{\n                                    setNavigation(\"about\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"about\");\n                                    }, 2000);\n                                },\n                                children: \"- About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"experience\" ? \"text-white text-lg\" : \"\", \" \"),\n                                onClick: ()=>{\n                                    setNavigation(\"experience\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"experience\");\n                                    }, 2000);\n                                },\n                                children: \"- Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"projects\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"projects\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"projects\");\n                                    }, 2000);\n                                },\n                                children: \"- Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\".concat(navigation === \"contact\" ? \"text-white text-lg\" : \"\"),\n                                onClick: ()=>{\n                                    setNavigation(\"contact\");\n                                    setPage(\"loader\");\n                                    setTimeout(()=>{\n                                        setPage(\"contact\");\n                                    }, 2000);\n                                },\n                                children: \"- Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-end pt-40 gap-32 overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_5__.Experience, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 182,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_6__.Projects, {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/pages/Home.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"/SYtbc3E/iw1Gvs8CQtV3j/TFX4=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedCursor\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7b0NBQ2RGLFFBQVE7b0NBQ1JpQixXQUFXO3dDQUNUakIsUUFBUTtvQ0FDVixHQUFHO2dDQUNMOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNnQztnQ0FDQ2IsV0FBVyxHQUVWLE9BRENsQixlQUFlLGFBQWEsdUJBQXVCO2dDQUVyRGlDLFNBQVM7b0NBQ1BoQyxjQUFjO29DQUNkRixRQUFRO29DQUNSaUIsV0FBVzt3Q0FDVGpCLFFBQVE7b0NBQ1YsR0FBRztnQ0FDTDswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDZ0M7Z0NBQ0NiLFdBQVcsR0FFVixPQURDbEIsZUFBZSxZQUFZLHVCQUF1QjtnQ0FFcERpQyxTQUFTO29DQUNQaEMsY0FBYztvQ0FDZEYsUUFBUTtvQ0FDUmlCLFdBQVc7d0NBQ1RqQixRQUFRO29DQUNWLEdBQUc7Z0NBQ0w7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPTCw4REFBQ2tCO2dCQUFJQyxXQUFVOztrQ0FDWiw4REFBQ3hCLHlEQUFLQTs7Ozs7a0NBQ04sOERBQUNGLDhEQUFVQTs7Ozs7a0NBQ1gsOERBQUNDLDBEQUFRQTs7Ozs7a0NBQ1QsOERBQUNFLDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakI7R0E1S01FO01BQUFBO0FBOEtOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Ib21lLnRzeD82MWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi8uLi8uLi9wdWJsaWMvZHAuanBnXCI7XG5cbmNvbnN0IEFuaW1hdGVkQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hbmltYXRlZC1jdXJzb3JcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvRXhwZXJpZW5jZVwiO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9BYm91dFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgRW50cnlMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9FbnRyeUxvYWRlclwiO1xuaW1wb3J0IERvd25JY29uIGZyb20gXCJAL0ljb25zL0Rvd25JY29uXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbmF2aWdhdGlvbiwgc2V0TmF2aWdhdGlvbl0gPSB1c2VTdGF0ZShcImFib3V0XCIpO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2Rlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueT4oKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJlZi5jdXJyZW50ID0gY29sb3I7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPSB3aW5kb3cuc2Nyb2xsWSA+PSAyMDA7XG5cbiAgICAgIGlmIChyZWYuY3VycmVudCAhPT0gc2hvdykge1xuICAgICAgICBzZXRDb2xvcih0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY29sb3JDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNvbG9yQ2hhbmdlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbnRlaXJuZyBoZXJlLi4uXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9kZXIoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJiZy1ibGFjayB3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICA8QW5pbWF0ZWRDdXJzb3JcbiAgICAgICAgICBjb2xvcj1cIjI1NSwgMjU1LCAyNTVcIlxuICAgICAgICAgIGlubmVyU2l6ZT17OH1cbiAgICAgICAgICBvdXRlclNpemU9ezh9XG4gICAgICAgICAgaW5uZXJTY2FsZT17Mn1cbiAgICAgICAgICBvdXRlclNjYWxlPXsyfVxuICAgICAgICAgIGNsaWNrYWJsZXM9e1tcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJpbWFnZVwiXScsXG4gICAgICAgICAgICBcImxhYmVsW2Zvcl1cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCIubGlua1wiLFxuICAgICAgICAgIF19XG4gICAgICAgICAgb3V0ZXJTdHlsZT17e1xuICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcImV4Y2x1c2lvblwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxFbnRyeUxvYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LXNjcmVlbiBoLXNjcmVlbiBzbTpqdXN0aWZ5LXN0YXJ0IHB4LTQgbWQ6cHgtMzYgcHQtMTYgbGc6Z2FwLTU2IG1sLTEwMCAgaXRlbXMtc3RhcnQgYmctYmxhY2sgdGV4dCB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNTQwICYmIChcbiAgICAgICAgPEFuaW1hdGVkQ3Vyc29yXG4gICAgICAgICAgY29sb3I9XCIyNTUsIDI1NSwgMjU1XCJcbiAgICAgICAgICBpbm5lclNpemU9ezh9XG4gICAgICAgICAgb3V0ZXJTaXplPXs4fVxuICAgICAgICAgIGlubmVyU2NhbGU9ezJ9XG4gICAgICAgICAgb3V0ZXJTY2FsZT17Mn1cbiAgICAgICAgICBjbGlja2FibGVzPXtbXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwiaW1hZ2VcIl0nLFxuICAgICAgICAgICAgXCJsYWJlbFtmb3JdXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiLmxpbmtcIixcbiAgICAgICAgICBdfVxuICAgICAgICAgIG91dGVyU3R5bGU9e3tcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJleGNsdXNpb25cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpeGVkIGZsZXggbXQtNDAgZmxleC1jb2wgc206dy1bNDUlXSBqdXN0aWZ5LXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBsZzppdGVtcy1zdGFydCBnYXAtNiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmbGV4IGZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgd2lkdGg9e1wiMTgwcHhcIn1cbiAgICAgICAgICAgIGhlaWdodD17XCIxODBweFwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWMuc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LTV4bCBtZDp0ZXh0LTd4bCB3LTEvMyB0ZXh0LXNsYXRlLTIwMCB3b3JkLWJyZWFrXCI+XG4gICAgICAgICAgICAgIE5pa2hpbCBDaGFuZG5hXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIFNvZnR3YXJlIEVuZ2luZWVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWNlbnRlciBsZzpmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake25hdmlnYXRpb24gPT09IFwiYWJvdXRcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE5hdmlnYXRpb24oXCJhYm91dFwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImFib3V0XCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBBYm91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbiA9PT0gXCJleHBlcmllbmNlXCIgPyBcInRleHQtd2hpdGUgdGV4dC1sZ1wiIDogXCJcIlxuICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uKFwiZXhwZXJpZW5jZVwiKTtcbiAgICAgICAgICAgICAgc2V0UGFnZShcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZShcImV4cGVyaWVuY2VcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIEV4cGVyaWVuY2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIG5hdmlnYXRpb24gPT09IFwicHJvamVjdHNcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcInByb2plY3RzXCIpO1xuICAgICAgICAgICAgICBzZXRQYWdlKFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYWdlKFwicHJvamVjdHNcIik7XG4gICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtIFByb2plY3RzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBuYXZpZ2F0aW9uID09PSBcImNvbnRhY3RcIiA/IFwidGV4dC13aGl0ZSB0ZXh0LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbihcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgIHNldFBhZ2UoXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhZ2UoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLSBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIGxnOnctWzU1JV0gb3ZlcmZsb3ctc2Nyb2xsXCI+ICovfVxuICAgICAgey8qIHtwYWdlID09PSBcImxvYWRlclwiICYmIDxMb2FkZXIgLz59ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCBwdC00MCBnYXAtMzIgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgIHs8QWJvdXQgLz59XG4gICAgICAgIHs8RXhwZXJpZW5jZSAvPn1cbiAgICAgICAgezxQcm9qZWN0cyAvPn1cbiAgICAgICAgezxDb250YWN0IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImR5bmFtaWMiLCJwcm9maWxlUGljIiwiQW5pbWF0ZWRDdXJzb3IiLCJzc3IiLCJFeHBlcmllbmNlIiwiUHJvamVjdHMiLCJBYm91dCIsIkNvbnRhY3QiLCJFbnRyeUxvYWRlciIsIkhvbWVQYWdlIiwicGFnZSIsInNldFBhZ2UiLCJuYXZpZ2F0aW9uIiwic2V0TmF2aWdhdGlvbiIsImxvYWRlciIsInNldExvZGVyIiwicmVmIiwiY29sb3IiLCJzZXRDb2xvciIsImN1cnJlbnQiLCJjb2xvckNoYW5nZSIsInNob3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImlubmVyU2l6ZSIsIm91dGVyU2l6ZSIsImlubmVyU2NhbGUiLCJvdXRlclNjYWxlIiwiY2xpY2thYmxlcyIsIm91dGVyU3R5bGUiLCJtaXhCbGVuZE1vZGUiLCJpbm5lcldpZHRoIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n"));

/***/ })

});