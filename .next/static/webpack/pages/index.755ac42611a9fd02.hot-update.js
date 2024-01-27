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

/***/ "./src/components/Projects/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Projects/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst projects = [\n    {\n        link: \"#\",\n        imgUrl: \"#\",\n        projectTitle: \"Retail Key Tool\",\n        projectDescription: \"Retail Key Tool is a self-service tool for McAfee users to generate eCodes for any partner and package combination. It can also generate eCodes based on POSA/Non POSA part numbers and has capabilities such as activating/deactivating batches and individual eCodes, checking key redemption status, adding/modifying retailers and part numbers, and managing retailers and part numbers.\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Typescript\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"MUI\"\n        ]\n    },\n    {\n        link: \"https://eazyupdates.com/login\",\n        imgUrl: \"#\",\n        projectTitle: \"Eazyupdate\",\n        projectDescription: \"Eazyupdate is employee management tool.It keeps track of your projects, teams, or individuals progress. EazyUpdates can ease your job of keeping track of every member's updates within the organization.\",\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    },\n    {\n        link: \"https://github.com/Connect-3/PlacePod\",\n        imgUrl: \"#\",\n        projectTitle: \"PlacePod\",\n        projectDescription: \"PlacePod is a college placement platform that allows students and administrators to track the placement process. Students can see their placement status, including which companies they have coding exams or interviews with, and which companies they are eligible for. Administrators can add companies to the platform, set criteria for shortlisting students, and add or remove students from placement drives.\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"MongoDB\",\n            \"Express\"\n        ]\n    },\n    {\n        link: \"https://github.com/enti-re/Webhealth\",\n        imgUrl: \"#\",\n        projectTitle: \"Webhealth\",\n        projectDescription: \"A website that provides users with personalized recommendations for diets and workout routines based on their BMI, age, gender, and personal requirements. The website is also highly interactive and user-friendly, with a clean and modern UI. It includes a variety of features to help users track their progress and stay motivated, such as a food diary, a workout tracker\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"MongoDB\",\n            \"Express\"\n        ]\n    }\n];\nconst Projects = (param)=>{\n    let { isDarkMode } = param;\n    const renderProject = ()=>{\n        const renderSkills = (skills)=>{\n            return skills.map((skill)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-xl  \".concat(isDarkMode ? \"border-white\" : \"border-[#3A3A3A]\", \" border  p-1 text-sm text-black bg-white hover:text-white hover:bg-black\"),\n                    children: skill\n                }, void 0, false, {\n                    fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            });\n        };\n        return projects.map((project)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 sm:w-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isDarkMode ? \"text-slate-200\" : \"text-[#3A3A3A]\", \" \\n              \").concat(window.innerWidth < 1120 ? \"text-lg\" : \"text-2xl\", \" hover:underline\"),\n                        children: project.projectTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: project.projectDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row flex-wrap gap-2\",\n                        children: renderSkills(project.techStack)\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:w-full lg:justify-end  h-full flex flex-col lg:w-[55%] overflow-scroll\",\n        children: [\n            window.innerWidth < 1120 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl mb-2 font-semibold text-slate-800\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 36\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-8\",\n                children: renderProject()\n            }, void 0, false, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsV0FBVztJQUNmO1FBQ0VDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLG9CQUNFO1FBQ0ZDLFdBQVc7WUFDVDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFSixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxvQkFDRTtRQUNGQyxXQUFXO1lBQUM7WUFBWTtZQUFjO1NBQU07SUFDOUM7SUFDQTtRQUNFSixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxvQkFDRTtRQUNGQyxXQUFXO1lBQUM7WUFBWTtZQUFXO1lBQVc7U0FBVTtJQUMxRDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLG9CQUNFO1FBQ0ZDLFdBQVc7WUFBQztZQUFZO1lBQVc7WUFBVztTQUFVO0lBQzFEO0NBQ0Q7QUFDTSxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsVUFBVSxFQUEyQjtJQUM5RCxNQUFNQyxnQkFBZ0I7UUFDcEIsTUFBTUMsZUFBZSxDQUFDQztZQUNwQixPQUFPQSxPQUFPQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2pCLHFCQUNFLDhEQUFDQztvQkFDQ0MsV0FBVyxlQUNSLE9BRHVCUCxhQUFhLGlCQUFpQixvQkFDckQ7OEJBRUZLOzs7Ozs7WUFHUDtRQUNGO1FBQ0EsT0FBT1osU0FBU1csR0FBRyxDQUFDLENBQUNJO1lBQ25CLHFCQUNFLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUNDQyxXQUFXLEdBRVBFLE9BRlVULGFBQWEsbUJBQW1CLGtCQUMzQyxxQkFDbUQsT0FBbERTLE9BQU9DLFVBQVUsR0FBRyxPQUFPLFlBQVksWUFBVztrQ0FFckRGLFFBQVFaLFlBQVk7Ozs7OztrQ0FFdkIsOERBQUNVO2tDQUFLRSxRQUFRWCxrQkFBa0I7Ozs7OztrQ0FDaEMsOERBQUNTO3dCQUFJQyxXQUFVO2tDQUNaTCxhQUFhTSxRQUFRVixTQUFTOzs7Ozs7Ozs7Ozs7UUFJdkM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOztZQUNaRSxPQUFPQyxVQUFVLEdBQUcsc0JBQVEsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUE0Qzs7Ozs7OzBCQUN4Riw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXVCTjs7Ozs7Ozs7Ozs7O0FBRzVDLEVBQUU7S0F2Q1dGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL2luZGV4LnRzeD9mZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICBsaW5rOiBcIiNcIixcbiAgICBpbWdVcmw6IFwiI1wiLFxuICAgIHByb2plY3RUaXRsZTogXCJSZXRhaWwgS2V5IFRvb2xcIixcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246XG4gICAgICBcIlJldGFpbCBLZXkgVG9vbCBpcyBhIHNlbGYtc2VydmljZSB0b29sIGZvciBNY0FmZWUgdXNlcnMgdG8gZ2VuZXJhdGUgZUNvZGVzIGZvciBhbnkgcGFydG5lciBhbmQgcGFja2FnZSBjb21iaW5hdGlvbi4gSXQgY2FuIGFsc28gZ2VuZXJhdGUgZUNvZGVzIGJhc2VkIG9uIFBPU0EvTm9uIFBPU0EgcGFydCBudW1iZXJzIGFuZCBoYXMgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgYWN0aXZhdGluZy9kZWFjdGl2YXRpbmcgYmF0Y2hlcyBhbmQgaW5kaXZpZHVhbCBlQ29kZXMsIGNoZWNraW5nIGtleSByZWRlbXB0aW9uIHN0YXR1cywgYWRkaW5nL21vZGlmeWluZyByZXRhaWxlcnMgYW5kIHBhcnQgbnVtYmVycywgYW5kIG1hbmFnaW5nIHJldGFpbGVycyBhbmQgcGFydCBudW1iZXJzLlwiLFxuICAgIHRlY2hTdGFjazogW1xuICAgICAgXCJSZWFjdC5qc1wiLFxuICAgICAgXCJOb2RlLmpzXCIsXG4gICAgICBcIktvYVwiLFxuICAgICAgXCJUeXBlc2NyaXB0XCIsXG4gICAgICBcIk5leHQuanNcIixcbiAgICAgIFwiVGFpbHdpbmRDc3NcIixcbiAgICAgIFwiTVVJXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxpbms6IFwiaHR0cHM6Ly9lYXp5dXBkYXRlcy5jb20vbG9naW5cIixcbiAgICBpbWdVcmw6IFwiI1wiLFxuICAgIHByb2plY3RUaXRsZTogXCJFYXp5dXBkYXRlXCIsXG4gICAgcHJvamVjdERlc2NyaXB0aW9uOlxuICAgICAgXCJFYXp5dXBkYXRlIGlzIGVtcGxveWVlIG1hbmFnZW1lbnQgdG9vbC5JdCBrZWVwcyB0cmFjayBvZiB5b3VyIHByb2plY3RzLCB0ZWFtcywgb3IgaW5kaXZpZHVhbHMgcHJvZ3Jlc3MuIEVhenlVcGRhdGVzIGNhbiBlYXNlIHlvdXIgam9iIG9mIGtlZXBpbmcgdHJhY2sgb2YgZXZlcnkgbWVtYmVyJ3MgdXBkYXRlcyB3aXRoaW4gdGhlIG9yZ2FuaXphdGlvbi5cIixcbiAgICB0ZWNoU3RhY2s6IFtcIlJlYWN0LmpzXCIsIFwiVHlwZXNjcmlwdFwiLCBcIkNzc1wiXSxcbiAgfSxcbiAge1xuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5lY3QtMy9QbGFjZVBvZFwiLFxuICAgIGltZ1VybDogXCIjXCIsXG4gICAgcHJvamVjdFRpdGxlOiBcIlBsYWNlUG9kXCIsXG4gICAgcHJvamVjdERlc2NyaXB0aW9uOlxuICAgICAgXCJQbGFjZVBvZCBpcyBhIGNvbGxlZ2UgcGxhY2VtZW50IHBsYXRmb3JtIHRoYXQgYWxsb3dzIHN0dWRlbnRzIGFuZCBhZG1pbmlzdHJhdG9ycyB0byB0cmFjayB0aGUgcGxhY2VtZW50IHByb2Nlc3MuIFN0dWRlbnRzIGNhbiBzZWUgdGhlaXIgcGxhY2VtZW50IHN0YXR1cywgaW5jbHVkaW5nIHdoaWNoIGNvbXBhbmllcyB0aGV5IGhhdmUgY29kaW5nIGV4YW1zIG9yIGludGVydmlld3Mgd2l0aCwgYW5kIHdoaWNoIGNvbXBhbmllcyB0aGV5IGFyZSBlbGlnaWJsZSBmb3IuIEFkbWluaXN0cmF0b3JzIGNhbiBhZGQgY29tcGFuaWVzIHRvIHRoZSBwbGF0Zm9ybSwgc2V0IGNyaXRlcmlhIGZvciBzaG9ydGxpc3Rpbmcgc3R1ZGVudHMsIGFuZCBhZGQgb3IgcmVtb3ZlIHN0dWRlbnRzIGZyb20gcGxhY2VtZW50IGRyaXZlcy5cIixcbiAgICB0ZWNoU3RhY2s6IFtcIlJlYWN0LmpzXCIsIFwiTm9kZS5qc1wiLCBcIk1vbmdvREJcIiwgXCJFeHByZXNzXCJdLFxuICB9LFxuICB7XG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vZW50aS1yZS9XZWJoZWFsdGhcIixcbiAgICBpbWdVcmw6IFwiI1wiLFxuICAgIHByb2plY3RUaXRsZTogXCJXZWJoZWFsdGhcIixcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246XG4gICAgICBcIkEgd2Vic2l0ZSB0aGF0IHByb3ZpZGVzIHVzZXJzIHdpdGggcGVyc29uYWxpemVkIHJlY29tbWVuZGF0aW9ucyBmb3IgZGlldHMgYW5kIHdvcmtvdXQgcm91dGluZXMgYmFzZWQgb24gdGhlaXIgQk1JLCBhZ2UsIGdlbmRlciwgYW5kIHBlcnNvbmFsIHJlcXVpcmVtZW50cy4gVGhlIHdlYnNpdGUgaXMgYWxzbyBoaWdobHkgaW50ZXJhY3RpdmUgYW5kIHVzZXItZnJpZW5kbHksIHdpdGggYSBjbGVhbiBhbmQgbW9kZXJuIFVJLiBJdCBpbmNsdWRlcyBhIHZhcmlldHkgb2YgZmVhdHVyZXMgdG8gaGVscCB1c2VycyB0cmFjayB0aGVpciBwcm9ncmVzcyBhbmQgc3RheSBtb3RpdmF0ZWQsIHN1Y2ggYXMgYSBmb29kIGRpYXJ5LCBhIHdvcmtvdXQgdHJhY2tlclwiLFxuICAgIHRlY2hTdGFjazogW1wiUmVhY3QuanNcIiwgXCJOb2RlLmpzXCIsIFwiTW9uZ29EQlwiLCBcIkV4cHJlc3NcIl0sXG4gIH0sXG5dO1xuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKHsgaXNEYXJrTW9kZSB9OiB7IGlzRGFya01vZGU6IGJvb2xlYW4gfSkgPT4ge1xuICBjb25zdCByZW5kZXJQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclNraWxscyA9IChza2lsbHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHNraWxscy5tYXAoKHNraWxsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLXhsICAke2lzRGFya01vZGUgPyBcImJvcmRlci13aGl0ZVwiIDogXCJib3JkZXItWyMzQTNBM0FdXCJcbiAgICAgICAgICAgICAgfSBib3JkZXIgIHAtMSB0ZXh0LXNtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ibGFja2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NraWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgc206dy1mdWxsIFwiPlxuICAgICAgICAgIHsvKiA8ZGl2Pntwcm9qZWN0LmltZ1VybH08L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0RhcmtNb2RlID8gXCJ0ZXh0LXNsYXRlLTIwMFwiIDogXCJ0ZXh0LVsjM0EzQTNBXVwiXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICR7d2luZG93LmlubmVyV2lkdGggPCAxMTIwID8gXCJ0ZXh0LWxnXCIgOiBcInRleHQtMnhsXCJ9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb2plY3QucHJvamVjdFRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Byb2plY3QucHJvamVjdERlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgIHtyZW5kZXJTa2lsbHMocHJvamVjdC50ZWNoU3RhY2spfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTp3LWZ1bGwgbGc6anVzdGlmeS1lbmQgIGgtZnVsbCBmbGV4IGZsZXgtY29sIGxnOnctWzU1JV0gb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICB7d2luZG93LmlubmVyV2lkdGggPCAxMTIwICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0yIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS04MDBcIj5Qcm9qZWN0czwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOFwiPntyZW5kZXJQcm9qZWN0KCl9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvamVjdHMiLCJsaW5rIiwiaW1nVXJsIiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwidGVjaFN0YWNrIiwiUHJvamVjdHMiLCJpc0RhcmtNb2RlIiwicmVuZGVyUHJvamVjdCIsInJlbmRlclNraWxscyIsInNraWxscyIsIm1hcCIsInNraWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvamVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/index.tsx\n"));

/***/ })

});