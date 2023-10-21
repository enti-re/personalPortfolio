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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Experience: function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst experiences = [\n    {\n        link: \"https://zopsmart.com/\",\n        date: {\n            start: \"Aug:2022\",\n            end: \"Current\"\n        },\n        role: {\n            title: \"Software Engineer - Zopsmart\",\n            link: \"#\",\n            description: \"As a full stack developer, I built a retail key management tool from scratch for Mcafee using React and Node.js. The tool provides features to manage and generate keys, batches, part numbers, and retailers. It also implements Auth0 authentication, caching, tracking, tracing, MUI, governance modal, health check, CSV handling, and API aggregation. In addition, I mentored interns and interviewed SDE candidates.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Auth0\",\n            \"MUI\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"Typescript\"\n        ]\n    },\n    {\n        link: \"https://zopsmart.com/\",\n        date: {\n            start: \"Aug:2022\",\n            end: \"Feb:2022\"\n        },\n        role: {\n            title: \"Software Engineer Intern - Zopsmart\",\n            link: \"#\",\n            description: \"As a Frontend Engineer, built an employee management portal called EazyUpdate from scratch. It has features such as maintaining company projects, user timelines, project details pages, API integration, and authorization.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    }\n];\nconst renderSkills = (skills)=>{\n    return skills.map((skill)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl border-2 p-1 text-sm text-black bg-white \",\n            children: skill\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    });\n};\nconst ExperienceItem = (param)=>{\n    let { experience } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 sm:w-full hover:shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-200 text-2xl\",\n                children: experience.role.title\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-truncate whitespace-pre sm:w-full md:w-1/3 bold text-slate-200\",\n                children: [\n                    experience.date.start,\n                    \"-\",\n                    experience.date.end\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: experience.role.description\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-2\",\n                children: renderSkills(experience.techStack)\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExperienceItem;\nconst renderExperience = experiences.map((experience)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExperienceItem, {\n        experience: experience\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 10\n    }, undefined);\n});\nconst Experience = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:w-full md:w-full h-full flex justify-center items-center lg:w-[55%] overflow-scroll\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-16\",\n            children: renderExperience\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Experience;\nvar _c, _c1;\n$RefreshReg$(_c, \"ExperienceItem\");\n$RefreshReg$(_c1, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxjQUFjO0lBQ2xCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUDtRQUNBQyxNQUFNO1lBQ0pDLE9BQU87WUFDUEwsTUFBTTtZQUNOTSxhQUFjO1FBQ2hCO1FBQ0FDLFdBQVc7WUFDVDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VQLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUDtRQUNBQyxNQUFNO1lBQ0pDLE9BQU87WUFDUEwsTUFBTTtZQUNOTSxhQUNFO1FBQ0o7UUFDQUMsV0FBVztZQUFDO1lBQVk7WUFBYztTQUFNO0lBQzlDO0NBQ0Q7QUFFRCxNQUFNQyxlQUFlLENBQUNDO0lBQ3BCLE9BQU9BLE9BQU9DLEdBQUcsQ0FBQyxDQUFDQztRQUNqQixxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDWkY7Ozs7OztJQUdQO0FBQ0Y7QUFFQSxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxVQUFVLEVBQXVCO0lBQ3pELHFCQUNFLDhEQUFDSDtRQUVDQyxXQUFVOzswQkFFViw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQTJCRSxXQUFXWCxJQUFJLENBQUNDLEtBQUs7Ozs7OzswQkFDL0QsOERBQUNPO2dCQUFJQyxXQUFVOztvQkFDWkUsV0FBV2QsSUFBSSxDQUFDQyxLQUFLO29CQUFDO29CQUFFYSxXQUFXZCxJQUFJLENBQUNFLEdBQUc7Ozs7Ozs7MEJBRTlDLDhEQUFDUzswQkFBS0csV0FBV1gsSUFBSSxDQUFDRSxXQUFXOzs7Ozs7MEJBQ2pDLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWkwsYUFBYU8sV0FBV1IsU0FBUzs7Ozs7Ozs7Ozs7O0FBSTFDO0tBaEJNTztBQWtCTixNQUFNRSxtQkFBbUJqQixZQUFZVyxHQUFHLENBQUMsQ0FBQ0s7SUFDeEMscUJBQU8sOERBQUNEO1FBQWVDLFlBQVlBOzs7Ozs7QUFDckM7QUFFTyxNQUFNRSxhQUFhO0lBQ3hCLHFCQUNFLDhEQUFDTDtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUF3Qkc7Ozs7Ozs7Ozs7O0FBRzdDLEVBQUU7TUFOV0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9pbmRleC50c3g/MmI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgbGluazogXCJodHRwczovL3pvcHNtYXJ0LmNvbS9cIixcbiAgICBkYXRlOiB7XG4gICAgICBzdGFydDogXCJBdWc6MjAyMlwiLFxuICAgICAgZW5kOiBcIkN1cnJlbnRcIixcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIEVuZ2luZWVyIC0gWm9wc21hcnRcIixcbiAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgZGVzY3JpcHRpb246IGBBcyBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyLCBJIGJ1aWx0IGEgcmV0YWlsIGtleSBtYW5hZ2VtZW50IHRvb2wgZnJvbSBzY3JhdGNoIGZvciBNY2FmZWUgdXNpbmcgUmVhY3QgYW5kIE5vZGUuanMuIFRoZSB0b29sIHByb3ZpZGVzIGZlYXR1cmVzIHRvIG1hbmFnZSBhbmQgZ2VuZXJhdGUga2V5cywgYmF0Y2hlcywgcGFydCBudW1iZXJzLCBhbmQgcmV0YWlsZXJzLiBJdCBhbHNvIGltcGxlbWVudHMgQXV0aDAgYXV0aGVudGljYXRpb24sIGNhY2hpbmcsIHRyYWNraW5nLCB0cmFjaW5nLCBNVUksIGdvdmVybmFuY2UgbW9kYWwsIGhlYWx0aCBjaGVjaywgQ1NWIGhhbmRsaW5nLCBhbmQgQVBJIGFnZ3JlZ2F0aW9uLiBJbiBhZGRpdGlvbiwgSSBtZW50b3JlZCBpbnRlcm5zIGFuZCBpbnRlcnZpZXdlZCBTREUgY2FuZGlkYXRlcy5gLFxuICAgIH0sXG4gICAgdGVjaFN0YWNrOiBbXG4gICAgICBcIlJlYWN0LmpzXCIsXG4gICAgICBcIk5vZGUuanNcIixcbiAgICAgIFwiS29hXCIsXG4gICAgICBcIkF1dGgwXCIsXG4gICAgICBcIk1VSVwiLFxuICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICBcIlRhaWx3aW5kQ3NzXCIsXG4gICAgICBcIlR5cGVzY3JpcHRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbGluazogXCJodHRwczovL3pvcHNtYXJ0LmNvbS9cIixcbiAgICBkYXRlOiB7XG4gICAgICBzdGFydDogXCJBdWc6MjAyMlwiLFxuICAgICAgZW5kOiBcIkZlYjoyMDIyXCIsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4gLSBab3BzbWFydFwiLFxuICAgICAgbGluazogXCIjXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBcyBhIEZyb250ZW5kIEVuZ2luZWVyLCBidWlsdCBhbiBlbXBsb3llZSBtYW5hZ2VtZW50IHBvcnRhbCBjYWxsZWQgRWF6eVVwZGF0ZSBmcm9tIHNjcmF0Y2guIEl0IGhhcyBmZWF0dXJlcyBzdWNoIGFzIG1haW50YWluaW5nIGNvbXBhbnkgcHJvamVjdHMsIHVzZXIgdGltZWxpbmVzLCBwcm9qZWN0IGRldGFpbHMgcGFnZXMsIEFQSSBpbnRlZ3JhdGlvbiwgYW5kIGF1dGhvcml6YXRpb24uXCIsXG4gICAgfSxcbiAgICB0ZWNoU3RhY2s6IFtcIlJlYWN0LmpzXCIsIFwiVHlwZXNjcmlwdFwiLCBcIkNzc1wiXSxcbiAgfSxcbl07XG5cbmNvbnN0IHJlbmRlclNraWxscyA9IChza2lsbHM6IGFueSkgPT4ge1xuICByZXR1cm4gc2tpbGxzLm1hcCgoc2tpbGw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyLTIgcC0xIHRleHQtc20gdGV4dC1ibGFjayBiZy13aGl0ZSBcIj5cbiAgICAgICAge3NraWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBFeHBlcmllbmNlSXRlbSA9ICh7IGV4cGVyaWVuY2UgfTogeyBleHBlcmllbmNlOiBhbnkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHNtOnctZnVsbCBob3ZlcjpzaGFkb3ctbGdcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0yMDAgdGV4dC0yeGxcIj57ZXhwZXJpZW5jZS5yb2xlLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHdoaXRlc3BhY2UtcHJlIHNtOnctZnVsbCBtZDp3LTEvMyBib2xkIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgIHtleHBlcmllbmNlLmRhdGUuc3RhcnR9LXtleHBlcmllbmNlLmRhdGUuZW5kfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PntleHBlcmllbmNlLnJvbGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgIHtyZW5kZXJTa2lsbHMoZXhwZXJpZW5jZS50ZWNoU3RhY2spfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJFeHBlcmllbmNlID0gZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlOiBhbnkpID0+IHtcbiAgcmV0dXJuIDxFeHBlcmllbmNlSXRlbSBleHBlcmllbmNlPXtleHBlcmllbmNlfSAvPjtcbn0pO1xuXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOnctWzU1JV0gb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTE2XCI+e3JlbmRlckV4cGVyaWVuY2V9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZXhwZXJpZW5jZXMiLCJsaW5rIiwiZGF0ZSIsInN0YXJ0IiwiZW5kIiwicm9sZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJyZW5kZXJTa2lsbHMiLCJza2lsbHMiLCJtYXAiLCJza2lsbCIsImRpdiIsImNsYXNzTmFtZSIsIkV4cGVyaWVuY2VJdGVtIiwiZXhwZXJpZW5jZSIsInJlbmRlckV4cGVyaWVuY2UiLCJFeHBlcmllbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Experience/index.tsx\n"));

/***/ })

});