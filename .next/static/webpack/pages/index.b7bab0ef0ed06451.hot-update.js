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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst projects = [\n    {\n        link: \"#\",\n        imgUrl: \"#\",\n        projectTitle: \"Retail Key Tool\",\n        projectDescription: \"Retail Key Tool is a self-service tool for McAfee users to generate eCodes for any partner and package combination. It can also generate eCodes based on POSA/Non POSA part numbers and has capabilities such as activating/deactivating batches and individual eCodes, checking key redemption status, adding/modifying retailers and part numbers, and managing retailers and part numbers.\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Typescript\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"MUI\"\n        ]\n    },\n    {\n        link: \"https://eazyupdates.com/login\",\n        imgUrl: \"#\",\n        projectTitle: \"Eazyupdate\",\n        projectDescription: \"Eazyupdate is employee management tool.It keeps track of your projects, teams, or individuals progress. EazyUpdates can ease your job of keeping track of every member's updates within the organization.\",\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    },\n    {\n        link: \"https://github.com/Connect-3/PlacePod\",\n        imgUrl: \"#\",\n        projectTitle: \"PlacePod\",\n        projectDescription: \"PlacePod is a college placement platform that allows students and administrators to track the placement process. Students can see their placement status, including which companies they have coding exams or interviews with, and which companies they are eligible for. Administrators can add companies to the platform, set criteria for shortlisting students, and add or remove students from placement drives.\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"MongoDB\",\n            \"Express\"\n        ]\n    },\n    {\n        link: \"https://github.com/enti-re/Webhealth\",\n        imgUrl: \"#\",\n        projectTitle: \"Webhealth\",\n        projectDescription: \"A website that provides users with personalized recommendations for diets and workout routines based on their BMI, age, gender, and personal requirements. The website is also highly interactive and user-friendly, with a clean and modern UI. It includes a variety of features to help users track their progress and stay motivated, such as a food diary, a workout tracker\",\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"MongoDB\",\n            \"Express\"\n        ]\n    }\n];\nconst Projects = (param)=>{\n    let { isDarkMode } = param;\n    const renderProject = ()=>{\n        const renderSkills = (skills)=>{\n            return skills.map((skill)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-xl $ \".concat(isDarkMode ? \"border-white\" : \"border-[#3A3A3A]\", \" border  p-1 text-sm text-black bg-white hover:text-white hover:bg-black\"),\n                    children: skill\n                }, void 0, false, {\n                    fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            });\n        };\n        return projects.map((project)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 sm:w-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isDarkMode ? \"text-slate-200\" : \"text-[#3A3A3A]\", \" text-2xl hover:underline\"),\n                        children: project.projectTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: project.projectDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row flex-wrap gap-2\",\n                        children: renderSkills(project.techStack)\n                    }, void 0, false, {\n                        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:w-full lg:justify-end  h-full flex flex-col lg:w-[55%] overflow-scroll\",\n        children: [\n            window.innerWidth < 1120 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl mb-2 font-semibold text-slate-800\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 36\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-8\",\n                children: renderProject()\n            }, void 0, false, {\n                fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nchandna/personalPortfolio/src/components/Projects/index.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsV0FBVztJQUNmO1FBQ0VDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLG9CQUNFO1FBQ0ZDLFdBQVc7WUFDVDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFSixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxvQkFDRTtRQUNGQyxXQUFXO1lBQUM7WUFBWTtZQUFjO1NBQU07SUFDOUM7SUFDQTtRQUNFSixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxvQkFDRTtRQUNGQyxXQUFXO1lBQUM7WUFBWTtZQUFXO1lBQVc7U0FBVTtJQUMxRDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLG9CQUNFO1FBQ0ZDLFdBQVc7WUFBQztZQUFZO1lBQVc7WUFBVztTQUFVO0lBQzFEO0NBQ0Q7QUFDTSxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsVUFBVSxFQUEyQjtJQUM5RCxNQUFNQyxnQkFBZ0I7UUFDcEIsTUFBTUMsZUFBZSxDQUFDQztZQUNwQixPQUFPQSxPQUFPQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2pCLHFCQUNFLDhEQUFDQztvQkFDQ0MsV0FBVyxnQkFDUixPQUR3QlAsYUFBYSxpQkFBaUIsb0JBQ3REOzhCQUVGSzs7Ozs7O1lBR1A7UUFDRjtRQUNBLE9BQU9aLFNBQVNXLEdBQUcsQ0FBQyxDQUFDSTtZQUNuQixxQkFDRSw4REFBQ0Y7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFDQ0MsV0FBVyxHQUNSLE9BRFdQLGFBQWEsbUJBQW1CLGtCQUMzQztrQ0FFRlEsUUFBUVosWUFBWTs7Ozs7O2tDQUV2Qiw4REFBQ1U7a0NBQUtFLFFBQVFYLGtCQUFrQjs7Ozs7O2tDQUNoQyw4REFBQ1M7d0JBQUlDLFdBQVU7a0NBQ1pMLGFBQWFNLFFBQVFWLFNBQVM7Ozs7Ozs7Ozs7OztRQUl2QztJQUNGO0lBQ0EscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7O1lBQ1pFLE9BQU9DLFVBQVUsR0FBRyxzQkFBUSw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQTRDOzs7Ozs7MEJBQ3hGLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBdUJOOzs7Ozs7Ozs7Ozs7QUFHNUMsRUFBRTtLQXRDV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvaW5kZXgudHN4P2ZkN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGxpbms6IFwiI1wiLFxuICAgIGltZ1VybDogXCIjXCIsXG4gICAgcHJvamVjdFRpdGxlOiBcIlJldGFpbCBLZXkgVG9vbFwiLFxuICAgIHByb2plY3REZXNjcmlwdGlvbjpcbiAgICAgIFwiUmV0YWlsIEtleSBUb29sIGlzIGEgc2VsZi1zZXJ2aWNlIHRvb2wgZm9yIE1jQWZlZSB1c2VycyB0byBnZW5lcmF0ZSBlQ29kZXMgZm9yIGFueSBwYXJ0bmVyIGFuZCBwYWNrYWdlIGNvbWJpbmF0aW9uLiBJdCBjYW4gYWxzbyBnZW5lcmF0ZSBlQ29kZXMgYmFzZWQgb24gUE9TQS9Ob24gUE9TQSBwYXJ0IG51bWJlcnMgYW5kIGhhcyBjYXBhYmlsaXRpZXMgc3VjaCBhcyBhY3RpdmF0aW5nL2RlYWN0aXZhdGluZyBiYXRjaGVzIGFuZCBpbmRpdmlkdWFsIGVDb2RlcywgY2hlY2tpbmcga2V5IHJlZGVtcHRpb24gc3RhdHVzLCBhZGRpbmcvbW9kaWZ5aW5nIHJldGFpbGVycyBhbmQgcGFydCBudW1iZXJzLCBhbmQgbWFuYWdpbmcgcmV0YWlsZXJzIGFuZCBwYXJ0IG51bWJlcnMuXCIsXG4gICAgdGVjaFN0YWNrOiBbXG4gICAgICBcIlJlYWN0LmpzXCIsXG4gICAgICBcIk5vZGUuanNcIixcbiAgICAgIFwiS29hXCIsXG4gICAgICBcIlR5cGVzY3JpcHRcIixcbiAgICAgIFwiTmV4dC5qc1wiLFxuICAgICAgXCJUYWlsd2luZENzc1wiLFxuICAgICAgXCJNVUlcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbGluazogXCJodHRwczovL2Vhenl1cGRhdGVzLmNvbS9sb2dpblwiLFxuICAgIGltZ1VybDogXCIjXCIsXG4gICAgcHJvamVjdFRpdGxlOiBcIkVhenl1cGRhdGVcIixcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246XG4gICAgICBcIkVhenl1cGRhdGUgaXMgZW1wbG95ZWUgbWFuYWdlbWVudCB0b29sLkl0IGtlZXBzIHRyYWNrIG9mIHlvdXIgcHJvamVjdHMsIHRlYW1zLCBvciBpbmRpdmlkdWFscyBwcm9ncmVzcy4gRWF6eVVwZGF0ZXMgY2FuIGVhc2UgeW91ciBqb2Igb2Yga2VlcGluZyB0cmFjayBvZiBldmVyeSBtZW1iZXIncyB1cGRhdGVzIHdpdGhpbiB0aGUgb3JnYW5pemF0aW9uLlwiLFxuICAgIHRlY2hTdGFjazogW1wiUmVhY3QuanNcIiwgXCJUeXBlc2NyaXB0XCIsIFwiQ3NzXCJdLFxuICB9LFxuICB7XG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQ29ubmVjdC0zL1BsYWNlUG9kXCIsXG4gICAgaW1nVXJsOiBcIiNcIixcbiAgICBwcm9qZWN0VGl0bGU6IFwiUGxhY2VQb2RcIixcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246XG4gICAgICBcIlBsYWNlUG9kIGlzIGEgY29sbGVnZSBwbGFjZW1lbnQgcGxhdGZvcm0gdGhhdCBhbGxvd3Mgc3R1ZGVudHMgYW5kIGFkbWluaXN0cmF0b3JzIHRvIHRyYWNrIHRoZSBwbGFjZW1lbnQgcHJvY2Vzcy4gU3R1ZGVudHMgY2FuIHNlZSB0aGVpciBwbGFjZW1lbnQgc3RhdHVzLCBpbmNsdWRpbmcgd2hpY2ggY29tcGFuaWVzIHRoZXkgaGF2ZSBjb2RpbmcgZXhhbXMgb3IgaW50ZXJ2aWV3cyB3aXRoLCBhbmQgd2hpY2ggY29tcGFuaWVzIHRoZXkgYXJlIGVsaWdpYmxlIGZvci4gQWRtaW5pc3RyYXRvcnMgY2FuIGFkZCBjb21wYW5pZXMgdG8gdGhlIHBsYXRmb3JtLCBzZXQgY3JpdGVyaWEgZm9yIHNob3J0bGlzdGluZyBzdHVkZW50cywgYW5kIGFkZCBvciByZW1vdmUgc3R1ZGVudHMgZnJvbSBwbGFjZW1lbnQgZHJpdmVzLlwiLFxuICAgIHRlY2hTdGFjazogW1wiUmVhY3QuanNcIiwgXCJOb2RlLmpzXCIsIFwiTW9uZ29EQlwiLCBcIkV4cHJlc3NcIl0sXG4gIH0sXG4gIHtcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbnRpLXJlL1dlYmhlYWx0aFwiLFxuICAgIGltZ1VybDogXCIjXCIsXG4gICAgcHJvamVjdFRpdGxlOiBcIldlYmhlYWx0aFwiLFxuICAgIHByb2plY3REZXNjcmlwdGlvbjpcbiAgICAgIFwiQSB3ZWJzaXRlIHRoYXQgcHJvdmlkZXMgdXNlcnMgd2l0aCBwZXJzb25hbGl6ZWQgcmVjb21tZW5kYXRpb25zIGZvciBkaWV0cyBhbmQgd29ya291dCByb3V0aW5lcyBiYXNlZCBvbiB0aGVpciBCTUksIGFnZSwgZ2VuZGVyLCBhbmQgcGVyc29uYWwgcmVxdWlyZW1lbnRzLiBUaGUgd2Vic2l0ZSBpcyBhbHNvIGhpZ2hseSBpbnRlcmFjdGl2ZSBhbmQgdXNlci1mcmllbmRseSwgd2l0aCBhIGNsZWFuIGFuZCBtb2Rlcm4gVUkuIEl0IGluY2x1ZGVzIGEgdmFyaWV0eSBvZiBmZWF0dXJlcyB0byBoZWxwIHVzZXJzIHRyYWNrIHRoZWlyIHByb2dyZXNzIGFuZCBzdGF5IG1vdGl2YXRlZCwgc3VjaCBhcyBhIGZvb2QgZGlhcnksIGEgd29ya291dCB0cmFja2VyXCIsXG4gICAgdGVjaFN0YWNrOiBbXCJSZWFjdC5qc1wiLCBcIk5vZGUuanNcIiwgXCJNb25nb0RCXCIsIFwiRXhwcmVzc1wiXSxcbiAgfSxcbl07XG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoeyBpc0RhcmtNb2RlIH06IHsgaXNEYXJrTW9kZTogYm9vbGVhbiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlclByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyU2tpbGxzID0gKHNraWxsczogYW55KSA9PiB7XG4gICAgICByZXR1cm4gc2tpbGxzLm1hcCgoc2tpbGw6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQteGwgJCAke2lzRGFya01vZGUgPyBcImJvcmRlci13aGl0ZVwiIDogXCJib3JkZXItWyMzQTNBM0FdXCJcbiAgICAgICAgICAgICAgfSBib3JkZXIgIHAtMSB0ZXh0LXNtIHRleHQtYmxhY2sgYmctd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ibGFja2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NraWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgc206dy1mdWxsIFwiPlxuICAgICAgICAgIHsvKiA8ZGl2Pntwcm9qZWN0LmltZ1VybH08L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0RhcmtNb2RlID8gXCJ0ZXh0LXNsYXRlLTIwMFwiIDogXCJ0ZXh0LVsjM0EzQTNBXVwiXG4gICAgICAgICAgICAgIH0gdGV4dC0yeGwgaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvamVjdC5wcm9qZWN0VGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAge3JlbmRlclNraWxscyhwcm9qZWN0LnRlY2hTdGFjayl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBsZzpqdXN0aWZ5LWVuZCAgaC1mdWxsIGZsZXggZmxleC1jb2wgbGc6dy1bNTUlXSBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgIHt3aW5kb3cuaW5uZXJXaWR0aCA8IDExMjAgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTIgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPlByb2plY3RzPC9kaXY+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04XCI+e3JlbmRlclByb2plY3QoKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9qZWN0cyIsImxpbmsiLCJpbWdVcmwiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJQcm9qZWN0cyIsImlzRGFya01vZGUiLCJyZW5kZXJQcm9qZWN0IiwicmVuZGVyU2tpbGxzIiwic2tpbGxzIiwibWFwIiwic2tpbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9qZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/index.tsx\n"));

/***/ })

});