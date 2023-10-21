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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Experience: function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst experiences = [\n    {\n        link: \"https://zopsmart.com/\",\n        date: {\n            start: \"Aug:2022\",\n            end: \"Current\"\n        },\n        role: {\n            title: \"Software Engineer - Zopsmart\",\n            link: \"#\",\n            description: \"As a full stack developer, I built a retail key management tool from scratch for Mcafee using React and Node.js. The tool provides features to manage and generate keys, batches, part numbers, and retailers. It also implements Auth0 authentication, caching, tracking, tracing, MUI, governance modal, health check, CSV handling, and API aggregation. In addition, I mentored interns and interviewed SDE candidates.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Auth0\",\n            \"MUI\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"Typescript\"\n        ]\n    },\n    {\n        link: \"https://zopsmart.com/\",\n        date: {\n            start: \"Aug:2022\",\n            end: \"Feb:2022\"\n        },\n        role: {\n            title: \"Software Engineer Intern - Zopsmart\",\n            link: \"#\",\n            description: \"As a Frontend Engineer, built an employee management portal called EazyUpdate from scratch. It has features such as maintaining company projects, user timelines, project details pages, API integration, and authorization.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    }\n];\nconst renderSkills = (skills)=>{\n    return skills.map((skill)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl border-2 p-1 text-sm text-black bg-white hover:bg-black hover:text-white \",\n            children: skill\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    });\n};\nconst ExperienceItem = (param)=>{\n    let { experience } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 sm:w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: experience.link,\n                target: \"_blank\",\n                className: \"text-slate-200 text-2xl hover:underline\",\n                children: experience.role.title\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-truncate whitespace-pre sm:w-full md:w-1/3 bold text-slate-200\",\n                children: [\n                    experience.date.start,\n                    \"-\",\n                    experience.date.end\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: experience.role.description\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-2\",\n                children: renderSkills(experience.techStack)\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExperienceItem;\nconst renderExperience = experiences.map((experience)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExperienceItem, {\n        experience: experience\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, undefined);\n});\nconst Experience = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:w-full md:w-full h-full flex justify-center items-center lg:w-[55%] overflow-scroll\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-16\",\n            children: renderExperience\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Experience;\nvar _c, _c1;\n$RefreshReg$(_c, \"ExperienceItem\");\n$RefreshReg$(_c1, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxjQUFjO0lBQ2xCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUDtRQUNBQyxNQUFNO1lBQ0pDLE9BQU87WUFDUEwsTUFBTTtZQUNOTSxhQUFjO1FBQ2hCO1FBQ0FDLFdBQVc7WUFDVDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VQLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUDtRQUNBQyxNQUFNO1lBQ0pDLE9BQU87WUFDUEwsTUFBTTtZQUNOTSxhQUNFO1FBQ0o7UUFDQUMsV0FBVztZQUFDO1lBQVk7WUFBYztTQUFNO0lBQzlDO0NBQ0Q7QUFFRCxNQUFNQyxlQUFlLENBQUNDO0lBQ3BCLE9BQU9BLE9BQU9DLEdBQUcsQ0FBQyxDQUFDQztRQUNqQixxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDWkY7Ozs7OztJQUdQO0FBQ0Y7QUFFQSxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxVQUFVLEVBQXVCO0lBQ3pELHFCQUNFLDhEQUFDSDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0c7Z0JBQ0NDLE1BQU1GLFdBQVdmLElBQUk7Z0JBQ3JCa0IsUUFBTztnQkFDUEwsV0FBVTswQkFFVEUsV0FBV1gsSUFBSSxDQUFDQyxLQUFLOzs7Ozs7MEJBRXhCLDhEQUFDTztnQkFBSUMsV0FBVTs7b0JBQ1pFLFdBQVdkLElBQUksQ0FBQ0MsS0FBSztvQkFBQztvQkFBRWEsV0FBV2QsSUFBSSxDQUFDRSxHQUFHOzs7Ozs7OzBCQUU5Qyw4REFBQ1M7MEJBQUtHLFdBQVdYLElBQUksQ0FBQ0UsV0FBVzs7Ozs7OzBCQUNqQyw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQ1pMLGFBQWFPLFdBQVdSLFNBQVM7Ozs7Ozs7Ozs7OztBQUkxQztLQW5CTU87QUFxQk4sTUFBTUssbUJBQW1CcEIsWUFBWVcsR0FBRyxDQUFDLENBQUNLO0lBQ3hDLHFCQUFPLDhEQUFDRDtRQUFlQyxZQUFZQTs7Ozs7O0FBQ3JDO0FBRU8sTUFBTUssYUFBYTtJQUN4QixxQkFDRSw4REFBQ1I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFBd0JNOzs7Ozs7Ozs7OztBQUc3QyxFQUFFO01BTldDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2UvaW5kZXgudHN4PzJiODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBleHBlcmllbmNlcyA9IFtcbiAge1xuICAgIGxpbms6IFwiaHR0cHM6Ly96b3BzbWFydC5jb20vXCIsXG4gICAgZGF0ZToge1xuICAgICAgc3RhcnQ6IFwiQXVnOjIwMjJcIixcbiAgICAgIGVuZDogXCJDdXJyZW50XCIsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlciAtIFpvcHNtYXJ0XCIsXG4gICAgICBsaW5rOiBcIiNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBgQXMgYSBmdWxsIHN0YWNrIGRldmVsb3BlciwgSSBidWlsdCBhIHJldGFpbCBrZXkgbWFuYWdlbWVudCB0b29sIGZyb20gc2NyYXRjaCBmb3IgTWNhZmVlIHVzaW5nIFJlYWN0IGFuZCBOb2RlLmpzLiBUaGUgdG9vbCBwcm92aWRlcyBmZWF0dXJlcyB0byBtYW5hZ2UgYW5kIGdlbmVyYXRlIGtleXMsIGJhdGNoZXMsIHBhcnQgbnVtYmVycywgYW5kIHJldGFpbGVycy4gSXQgYWxzbyBpbXBsZW1lbnRzIEF1dGgwIGF1dGhlbnRpY2F0aW9uLCBjYWNoaW5nLCB0cmFja2luZywgdHJhY2luZywgTVVJLCBnb3Zlcm5hbmNlIG1vZGFsLCBoZWFsdGggY2hlY2ssIENTViBoYW5kbGluZywgYW5kIEFQSSBhZ2dyZWdhdGlvbi4gSW4gYWRkaXRpb24sIEkgbWVudG9yZWQgaW50ZXJucyBhbmQgaW50ZXJ2aWV3ZWQgU0RFIGNhbmRpZGF0ZXMuYCxcbiAgICB9LFxuICAgIHRlY2hTdGFjazogW1xuICAgICAgXCJSZWFjdC5qc1wiLFxuICAgICAgXCJOb2RlLmpzXCIsXG4gICAgICBcIktvYVwiLFxuICAgICAgXCJBdXRoMFwiLFxuICAgICAgXCJNVUlcIixcbiAgICAgIFwiTmV4dC5qc1wiLFxuICAgICAgXCJUYWlsd2luZENzc1wiLFxuICAgICAgXCJUeXBlc2NyaXB0XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxpbms6IFwiaHR0cHM6Ly96b3BzbWFydC5jb20vXCIsXG4gICAgZGF0ZToge1xuICAgICAgc3RhcnQ6IFwiQXVnOjIwMjJcIixcbiAgICAgIGVuZDogXCJGZWI6MjAyMlwiLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgRW5naW5lZXIgSW50ZXJuIC0gWm9wc21hcnRcIixcbiAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQXMgYSBGcm9udGVuZCBFbmdpbmVlciwgYnVpbHQgYW4gZW1wbG95ZWUgbWFuYWdlbWVudCBwb3J0YWwgY2FsbGVkIEVhenlVcGRhdGUgZnJvbSBzY3JhdGNoLiBJdCBoYXMgZmVhdHVyZXMgc3VjaCBhcyBtYWludGFpbmluZyBjb21wYW55IHByb2plY3RzLCB1c2VyIHRpbWVsaW5lcywgcHJvamVjdCBkZXRhaWxzIHBhZ2VzLCBBUEkgaW50ZWdyYXRpb24sIGFuZCBhdXRob3JpemF0aW9uLlwiLFxuICAgIH0sXG4gICAgdGVjaFN0YWNrOiBbXCJSZWFjdC5qc1wiLCBcIlR5cGVzY3JpcHRcIiwgXCJDc3NcIl0sXG4gIH0sXG5dO1xuXG5jb25zdCByZW5kZXJTa2lsbHMgPSAoc2tpbGxzOiBhbnkpID0+IHtcbiAgcmV0dXJuIHNraWxscy5tYXAoKHNraWxsOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlci0yIHAtMSB0ZXh0LXNtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBcIj5cbiAgICAgICAge3NraWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBFeHBlcmllbmNlSXRlbSA9ICh7IGV4cGVyaWVuY2UgfTogeyBleHBlcmllbmNlOiBhbnkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBzbTp3LWZ1bGxcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2V4cGVyaWVuY2UubGlua31cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgdGV4dC0yeGwgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgID5cbiAgICAgICAge2V4cGVyaWVuY2Uucm9sZS50aXRsZX1cbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3aGl0ZXNwYWNlLXByZSBzbTp3LWZ1bGwgbWQ6dy0xLzMgYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPlxuICAgICAgICB7ZXhwZXJpZW5jZS5kYXRlLnN0YXJ0fS17ZXhwZXJpZW5jZS5kYXRlLmVuZH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj57ZXhwZXJpZW5jZS5yb2xlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICB7cmVuZGVyU2tpbGxzKGV4cGVyaWVuY2UudGVjaFN0YWNrKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyRXhwZXJpZW5jZSA9IGV4cGVyaWVuY2VzLm1hcCgoZXhwZXJpZW5jZTogYW55KSA9PiB7XG4gIHJldHVybiA8RXhwZXJpZW5jZUl0ZW0gZXhwZXJpZW5jZT17ZXhwZXJpZW5jZX0gLz47XG59KTtcblxuZXhwb3J0IGNvbnN0IEV4cGVyaWVuY2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTp3LWZ1bGwgbWQ6dy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzp3LVs1NSVdIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xNlwiPntyZW5kZXJFeHBlcmllbmNlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImV4cGVyaWVuY2VzIiwibGluayIsImRhdGUiLCJzdGFydCIsImVuZCIsInJvbGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaFN0YWNrIiwicmVuZGVyU2tpbGxzIiwic2tpbGxzIiwibWFwIiwic2tpbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJFeHBlcmllbmNlSXRlbSIsImV4cGVyaWVuY2UiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbmRlckV4cGVyaWVuY2UiLCJFeHBlcmllbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Experience/index.tsx\n"));

/***/ })

});