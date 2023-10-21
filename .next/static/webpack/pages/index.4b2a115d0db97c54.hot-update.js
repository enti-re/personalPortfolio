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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Experience: function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst experiences = [\n    {\n        date: {\n            start: \"Aug:2022\",\n            end: \"Current\"\n        },\n        role: {\n            title: \"Software Engineer - Zopsmart\",\n            link: \"#\",\n            description: \"As a full stack developer, I built a retail key management tool from scratch for Mcafee using React and Node.js. The tool provides features to manage and generate keys, batches, part numbers, and retailers. It also implements Auth0 authentication, caching, tracking, tracing, MUI, governance modal, health check, CSV handling, and API aggregation. In addition, I mentored interns and interviewed SDE candidates.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Node.js\",\n            \"Koa\",\n            \"Auth0\",\n            \"MUI\",\n            \"Next.js\",\n            \"TailwindCss\",\n            \"Typescript\"\n        ]\n    },\n    {\n        date: {\n            start: \"Aug:2022\",\n            end: \"Feb:2022\"\n        },\n        role: {\n            title: \"Software Engineer Intern - Zopsmart\",\n            link: \"#\",\n            description: \"As a Frontend Engineer, built an employee management portal called EazyUpdate from scratch. It has features such as maintaining company projects, user timelines, project details pages, API integration, and authorization.\"\n        },\n        techStack: [\n            \"React.js\",\n            \"Typescript\",\n            \"Css\"\n        ]\n    }\n];\nconst renderSkills = (skills)=>{\n    return skills.map((skill)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl border-2 p-1 text-sm text-black bg-slate-800\",\n            children: skill\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined);\n    });\n};\nconst ExperienceItem = (param)=>{\n    let { experience } = param;\n    return(// <div className=\"flex flex-col md:flex-row\">\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 sm:w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-200 text-2xl\",\n                children: experience.role.title\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-truncate whitespace-pre sm:w-full md:w-1/3 bold text-slate-200\",\n                children: [\n                    experience.date.start,\n                    \"-\",\n                    experience.date.end\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: experience.role.description\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-2\",\n                children: renderSkills(experience.techStack)\n            }, void 0, false, {\n                fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined));\n};\n_c = ExperienceItem;\nconst renderExperience = experiences.map((experience)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExperienceItem, {\n        experience: experience\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 10\n    }, undefined);\n});\nconst Experience = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:w-full md:w-full h-full flex justify-center items-center lg:w-[55%] overflow-scroll\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-16\",\n            children: renderExperience\n        }, void 0, false, {\n            fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raramuri/personalPortfolio/src/components/Experience/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Experience;\nvar _c, _c1;\n$RefreshReg$(_c, \"ExperienceItem\");\n$RefreshReg$(_c1, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxjQUFjO0lBQ2xCO1FBQ0VDLE1BQU07WUFDSkMsT0FBTztZQUNQQyxLQUFLO1FBQ1A7UUFDQUMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsYUFBYztRQUNoQjtRQUNBQyxXQUFXO1lBQ1Q7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFUCxNQUFNO1lBQ0pDLE9BQU87WUFDUEMsS0FBSztRQUNQO1FBQ0FDLE1BQU07WUFDSkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGFBQ0U7UUFDSjtRQUNBQyxXQUFXO1lBQUM7WUFBWTtZQUFjO1NBQU07SUFDOUM7Q0FDRDtBQUVELE1BQU1DLGVBQWUsQ0FBQ0M7SUFDcEIsT0FBT0EsT0FBT0MsR0FBRyxDQUFDLENBQUNDO1FBQ2pCLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVO3NCQUNaRjs7Ozs7O0lBR1A7QUFDRjtBQUVBLE1BQU1HLGlCQUFpQjtRQUFDLEVBQUVDLFVBQVUsRUFBdUI7SUFDekQsT0FDRSw4Q0FBOEM7a0JBQzlDLDhEQUFDSDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQTJCRSxXQUFXWixJQUFJLENBQUNDLEtBQUs7Ozs7OzswQkFDL0QsOERBQUNRO2dCQUFJQyxXQUFVOztvQkFDWkUsV0FBV2YsSUFBSSxDQUFDQyxLQUFLO29CQUFDO29CQUFFYyxXQUFXZixJQUFJLENBQUNFLEdBQUc7Ozs7Ozs7MEJBRTlDLDhEQUFDVTswQkFBS0csV0FBV1osSUFBSSxDQUFDRyxXQUFXOzs7Ozs7MEJBQ2pDLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWkwsYUFBYU8sV0FBV1IsU0FBUzs7Ozs7Ozs7Ozs7O0FBSzFDO0tBZk1PO0FBaUJOLE1BQU1FLG1CQUFtQmpCLFlBQVlXLEdBQUcsQ0FBQyxDQUFDSztJQUN4QyxxQkFBTyw4REFBQ0Q7UUFBZUMsWUFBWUE7Ozs7OztBQUNyQztBQUVPLE1BQU1FLGFBQWE7SUFDeEIscUJBQ0UsOERBQUNMO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQXdCRzs7Ozs7Ozs7Ozs7QUFHN0MsRUFBRTtNQU5XQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL2luZGV4LnRzeD8yYjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZXhwZXJpZW5jZXMgPSBbXG4gIHtcbiAgICBkYXRlOiB7XG4gICAgICBzdGFydDogXCJBdWc6MjAyMlwiLFxuICAgICAgZW5kOiBcIkN1cnJlbnRcIixcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIEVuZ2luZWVyIC0gWm9wc21hcnRcIixcbiAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgZGVzY3JpcHRpb246IGBBcyBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyLCBJIGJ1aWx0IGEgcmV0YWlsIGtleSBtYW5hZ2VtZW50IHRvb2wgZnJvbSBzY3JhdGNoIGZvciBNY2FmZWUgdXNpbmcgUmVhY3QgYW5kIE5vZGUuanMuIFRoZSB0b29sIHByb3ZpZGVzIGZlYXR1cmVzIHRvIG1hbmFnZSBhbmQgZ2VuZXJhdGUga2V5cywgYmF0Y2hlcywgcGFydCBudW1iZXJzLCBhbmQgcmV0YWlsZXJzLiBJdCBhbHNvIGltcGxlbWVudHMgQXV0aDAgYXV0aGVudGljYXRpb24sIGNhY2hpbmcsIHRyYWNraW5nLCB0cmFjaW5nLCBNVUksIGdvdmVybmFuY2UgbW9kYWwsIGhlYWx0aCBjaGVjaywgQ1NWIGhhbmRsaW5nLCBhbmQgQVBJIGFnZ3JlZ2F0aW9uLiBJbiBhZGRpdGlvbiwgSSBtZW50b3JlZCBpbnRlcm5zIGFuZCBpbnRlcnZpZXdlZCBTREUgY2FuZGlkYXRlcy5gLFxuICAgIH0sXG4gICAgdGVjaFN0YWNrOiBbXG4gICAgICBcIlJlYWN0LmpzXCIsXG4gICAgICBcIk5vZGUuanNcIixcbiAgICAgIFwiS29hXCIsXG4gICAgICBcIkF1dGgwXCIsXG4gICAgICBcIk1VSVwiLFxuICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICBcIlRhaWx3aW5kQ3NzXCIsXG4gICAgICBcIlR5cGVzY3JpcHRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgZGF0ZToge1xuICAgICAgc3RhcnQ6IFwiQXVnOjIwMjJcIixcbiAgICAgIGVuZDogXCJGZWI6MjAyMlwiLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgRW5naW5lZXIgSW50ZXJuIC0gWm9wc21hcnRcIixcbiAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQXMgYSBGcm9udGVuZCBFbmdpbmVlciwgYnVpbHQgYW4gZW1wbG95ZWUgbWFuYWdlbWVudCBwb3J0YWwgY2FsbGVkIEVhenlVcGRhdGUgZnJvbSBzY3JhdGNoLiBJdCBoYXMgZmVhdHVyZXMgc3VjaCBhcyBtYWludGFpbmluZyBjb21wYW55IHByb2plY3RzLCB1c2VyIHRpbWVsaW5lcywgcHJvamVjdCBkZXRhaWxzIHBhZ2VzLCBBUEkgaW50ZWdyYXRpb24sIGFuZCBhdXRob3JpemF0aW9uLlwiLFxuICAgIH0sXG4gICAgdGVjaFN0YWNrOiBbXCJSZWFjdC5qc1wiLCBcIlR5cGVzY3JpcHRcIiwgXCJDc3NcIl0sXG4gIH0sXG5dO1xuXG5jb25zdCByZW5kZXJTa2lsbHMgPSAoc2tpbGxzOiBhbnkpID0+IHtcbiAgcmV0dXJuIHNraWxscy5tYXAoKHNraWxsOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlci0yIHAtMSB0ZXh0LXNtIHRleHQtYmxhY2sgYmctc2xhdGUtODAwXCI+XG4gICAgICAgIHtza2lsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgRXhwZXJpZW5jZUl0ZW0gPSAoeyBleHBlcmllbmNlIH06IHsgZXhwZXJpZW5jZTogYW55IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgc206dy1mdWxsIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCB0ZXh0LTJ4bFwiPntleHBlcmllbmNlLnJvbGUudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgd2hpdGVzcGFjZS1wcmUgc206dy1mdWxsIG1kOnctMS8zIGJvbGQgdGV4dC1zbGF0ZS0yMDBcIj5cbiAgICAgICAge2V4cGVyaWVuY2UuZGF0ZS5zdGFydH0te2V4cGVyaWVuY2UuZGF0ZS5lbmR9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+e2V4cGVyaWVuY2Uucm9sZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAge3JlbmRlclNraWxscyhleHBlcmllbmNlLnRlY2hTdGFjayl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSBleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2U6IGFueSkgPT4ge1xuICByZXR1cm4gPEV4cGVyaWVuY2VJdGVtIGV4cGVyaWVuY2U9e2V4cGVyaWVuY2V9IC8+O1xufSk7XG5cbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIG1kOnctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6dy1bNTUlXSBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTZcIj57cmVuZGVyRXhwZXJpZW5jZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJleHBlcmllbmNlcyIsImRhdGUiLCJzdGFydCIsImVuZCIsInJvbGUiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInRlY2hTdGFjayIsInJlbmRlclNraWxscyIsInNraWxscyIsIm1hcCIsInNraWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiRXhwZXJpZW5jZUl0ZW0iLCJleHBlcmllbmNlIiwicmVuZGVyRXhwZXJpZW5jZSIsIkV4cGVyaWVuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/index.tsx\n"));

/***/ })

});