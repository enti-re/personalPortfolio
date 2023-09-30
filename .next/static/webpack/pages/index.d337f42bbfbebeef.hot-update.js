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

/***/ "./src/components/Experience/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Experience/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Experience: function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst experiences = [\n    {\n        date: {\n            start: \"Aug:2022\",\n            end: \"Current\"\n        },\n        role: {\n            title: \"Software Engineer - Zopsmart\",\n            link: \"#\",\n            description: \"As a full stack developer, I built a retail key management tool from scratch for Mcafee using React and Node.js. The tool provides features to manage and generate keys, batches, part numbers, and retailers. It also implements Auth0 authentication, caching, tracking, tracing, MUI, governance modal, health check, CSV handling, and API aggregation. In addition, I mentored interns and interviewed SDE candidates.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Auth0\",\n            \"MUI\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"Typescript\"\n        ]\n    },\n    {\n        date: {\n            start: \"Aug:2022\",\n            end: \"Feb:2022\"\n        },\n        role: {\n            title: \"Software Engineer Intern - Zopsmart\",\n            link: \"#\",\n            description: \"As a Frontend Engineer, built an employee management portal called EazyUpdate from scratch. It has features such as maintaining company projects, user timelines, project details pages, API integration, and authorization.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    }\n];\nconst renderSkills = (skills)=>{\n    return skills.map((skill)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl border-2 p-1 text-sm text-black bg-slate-200\",\n            children: skill\n        }, void 0, false, {\n            fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined);\n    });\n};\nconst ExperienceItem = (param)=>{\n    let { experience } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-truncate whitespace-pre w-1/3 bold text-slate-200\",\n                children: [\n                    experience.date.start,\n                    \"-\",\n                    experience.date.end\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 w-2/3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-slate-200 underline\",\n                        children: experience.role.title\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: experience.role.description\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row flex-wrap gap-2\",\n                        children: renderSkills(experience.techStack)\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExperienceItem;\nconst renderExperience = experiences.map((experience)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExperienceItem, {\n        experience: experience\n    }, void 0, false, {\n        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 69,\n        columnNumber: 10\n    }, undefined);\n});\nconst Experience = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full flex justify-center items-center overflow-scroll\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\",\n                children: renderExperience\n            }, void 0, false, {\n                fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nchandna/folder/personal/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Experience;\nvar _c, _c1;\n$RefreshReg$(_c, \"ExperienceItem\");\n$RefreshReg$(_c1, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUcxQixNQUFNQyxjQUFjO0lBQ2xCO1FBQ0VDLE1BQU07WUFDSkMsT0FBTztZQUNQQyxLQUFLO1FBQ1A7UUFDQUMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsYUFBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1Q7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFUCxNQUFNO1lBQ0pDLE9BQU87WUFDUEMsS0FBSztRQUNQO1FBQ0FDLE1BQU07WUFDSkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGFBQ0U7UUFDSjtRQUNBQyxXQUFXO1lBQUM7WUFBWTtZQUFjO1NBQU07SUFDOUM7Q0FDRDtBQUVELE1BQU1DLGVBQWUsQ0FBQ0M7SUFDcEIsT0FBT0EsT0FBT0MsR0FBRyxDQUFDLENBQUNDO1FBQ2pCLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVO3NCQUNaRjs7Ozs7O0lBR1A7QUFDRjtBQUVBLE1BQU1HLGlCQUFpQjtRQUFDLEVBQUVDLFVBQVUsRUFBdUI7SUFDekQscUJBQ0UsOERBQUNIO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1pFLFdBQVdmLElBQUksQ0FBQ0MsS0FBSztvQkFBQztvQkFBRWMsV0FBV2YsSUFBSSxDQUFDRSxHQUFHOzs7Ozs7OzBCQUU5Qyw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBNEJFLFdBQVdaLElBQUksQ0FBQ0MsS0FBSzs7Ozs7O2tDQUNoRSw4REFBQ1E7a0NBQUtHLFdBQVdaLElBQUksQ0FBQ0csV0FBVzs7Ozs7O2tDQUNqQyw4REFBQ007d0JBQUlDLFdBQVU7a0NBQ1pMLGFBQWFPLFdBQVdSLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztLQWZNTztBQWlCTixNQUFNRSxtQkFBbUJqQixZQUFZVyxHQUFHLENBQUMsQ0FBQ0s7SUFDeEMscUJBQU8sOERBQUNEO1FBQWVDLFlBQVlBOzs7Ozs7QUFDckM7QUFFTyxNQUFNRSxhQUFhO0lBQ3hCLHFCQUNFLDhEQUFDTDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXVCRzs7Ozs7O1lBQXVCOzs7Ozs7O0FBR25FLEVBQUU7TUFOV0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9pbmRleC50c3g/MmI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgZGF0ZToge1xuICAgICAgc3RhcnQ6IFwiQXVnOjIwMjJcIixcbiAgICAgIGVuZDogXCJDdXJyZW50XCIsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlciAtIFpvcHNtYXJ0XCIsXG4gICAgICBsaW5rOiBcIiNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBgQXMgYSBmdWxsIHN0YWNrIGRldmVsb3BlciwgSSBidWlsdCBhIHJldGFpbCBrZXkgbWFuYWdlbWVudCB0b29sIGZyb20gc2NyYXRjaCBmb3IgTWNhZmVlIHVzaW5nIFJlYWN0IGFuZCBOb2RlLmpzLiBUaGUgdG9vbCBwcm92aWRlcyBmZWF0dXJlcyB0byBtYW5hZ2UgYW5kIGdlbmVyYXRlIGtleXMsIGJhdGNoZXMsIHBhcnQgbnVtYmVycywgYW5kIHJldGFpbGVycy4gSXQgYWxzbyBpbXBsZW1lbnRzIEF1dGgwIGF1dGhlbnRpY2F0aW9uLCBjYWNoaW5nLCB0cmFja2luZywgdHJhY2luZywgTVVJLCBnb3Zlcm5hbmNlIG1vZGFsLCBoZWFsdGggY2hlY2ssIENTViBoYW5kbGluZywgYW5kIEFQSSBhZ2dyZWdhdGlvbi4gSW4gYWRkaXRpb24sIEkgbWVudG9yZWQgaW50ZXJucyBhbmQgaW50ZXJ2aWV3ZWQgU0RFIGNhbmRpZGF0ZXMuYCxcbiAgICB9LFxuICAgIHRlY2hTdGFjazogW1xuICAgICAgXCJSZWFjdC5qc1wiLFxuICAgICAgXCJOb2RlLmpzXCIsXG4gICAgICBcIktvYVwiLFxuICAgICAgXCJBdXRoMFwiLFxuICAgICAgXCJNVUlcIixcbiAgICAgIFwiTmV4dC5qc1wiLFxuICAgICAgXCJUYWlsd2luZENzc1wiLFxuICAgICAgXCJUeXBlc2NyaXB0XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGRhdGU6IHtcbiAgICAgIHN0YXJ0OiBcIkF1ZzoyMDIyXCIsXG4gICAgICBlbmQ6IFwiRmViOjIwMjJcIixcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIEVuZ2luZWVyIEludGVybiAtIFpvcHNtYXJ0XCIsXG4gICAgICBsaW5rOiBcIiNcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkFzIGEgRnJvbnRlbmQgRW5naW5lZXIsIGJ1aWx0IGFuIGVtcGxveWVlIG1hbmFnZW1lbnQgcG9ydGFsIGNhbGxlZCBFYXp5VXBkYXRlIGZyb20gc2NyYXRjaC4gSXQgaGFzIGZlYXR1cmVzIHN1Y2ggYXMgbWFpbnRhaW5pbmcgY29tcGFueSBwcm9qZWN0cywgdXNlciB0aW1lbGluZXMsIHByb2plY3QgZGV0YWlscyBwYWdlcywgQVBJIGludGVncmF0aW9uLCBhbmQgYXV0aG9yaXphdGlvbi5cIixcbiAgICB9LFxuICAgIHRlY2hTdGFjazogW1wiUmVhY3QuanNcIiwgXCJUeXBlc2NyaXB0XCIsIFwiQ3NzXCJdLFxuICB9LFxuXTtcblxuY29uc3QgcmVuZGVyU2tpbGxzID0gKHNraWxsczogYW55KSA9PiB7XG4gIHJldHVybiBza2lsbHMubWFwKChza2lsbDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXItMiBwLTEgdGV4dC1zbSB0ZXh0LWJsYWNrIGJnLXNsYXRlLTIwMFwiPlxuICAgICAgICB7c2tpbGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG59XG5cbmNvbnN0IEV4cGVyaWVuY2VJdGVtID0gKHsgZXhwZXJpZW5jZSB9OiB7IGV4cGVyaWVuY2U6IGFueSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgd2hpdGVzcGFjZS1wcmUgdy0xLzMgYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICB7ZXhwZXJpZW5jZS5kYXRlLnN0YXJ0fS17ZXhwZXJpZW5jZS5kYXRlLmVuZH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHctMi8zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgdW5kZXJsaW5lXCI+e2V4cGVyaWVuY2Uucm9sZS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdj57ZXhwZXJpZW5jZS5yb2xlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAge3JlbmRlclNraWxscyhleHBlcmllbmNlLnRlY2hTdGFjayl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgcmVuZGVyRXhwZXJpZW5jZSA9IGV4cGVyaWVuY2VzLm1hcCgoZXhwZXJpZW5jZTogYW55KSA9PiB7XG4gIHJldHVybiA8RXhwZXJpZW5jZUl0ZW0gZXhwZXJpZW5jZT17ZXhwZXJpZW5jZX0gLz5cbn0pO1xuXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPntyZW5kZXJFeHBlcmllbmNlfTwvZGl2PjtcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJleHBlcmllbmNlcyIsImRhdGUiLCJzdGFydCIsImVuZCIsInJvbGUiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInRlY2hTdGFjayIsInJlbmRlclNraWxscyIsInNraWxscyIsIm1hcCIsInNraWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiRXhwZXJpZW5jZUl0ZW0iLCJleHBlcmllbmNlIiwicmVuZGVyRXhwZXJpZW5jZSIsIkV4cGVyaWVuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/index.tsx\n"));

/***/ })

});