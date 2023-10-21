"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/portfolio/work.tsx":
/*!*******************************************!*\
  !*** ./app/components/portfolio/work.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ \"(app-pages-browser)/./app/components/portfolio/page.tsx\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/sanity */ \"(app-pages-browser)/./lib/sanity.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function getProjects() {\n    const query = \"*[_type == 'project']{\\n                        title,\\n                            description,\\n                            link,\\n                            github,\\n                            \\\"imageUrl\\\": image.asset->url,\\n                            _id}\";\n    const data = await _lib_sanity__WEBPACK_IMPORTED_MODULE_3__.client.fetch(query);\n    return data;\n}\nconst Work = async ()=>{\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"0 0\"\n        ]\n    });\n    const data = await getProjects();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        id: \"work\",\n        className: \"px-5 md:px-36 mt-20 pt-10\",\n        ref: ref,\n        style: {\n            opacity: scrollYProgress\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-end md:text-start justify-start w-full font-mono text-3xl dark:text-blue-500 light:text-[#0a192f] mb-10\",\n                children: \"02. My Work\"\n            }, void 0, false, {\n                fileName: \"/project/home/riade-bg/workspace/portfolio/app/components/portfolio/work.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: item.title,\n                    link: item.link,\n                    github: item.github,\n                    desc: item.description,\n                    imgUrl: item.imageUrl\n                }, item._id, false, {\n                    fileName: \"/project/home/riade-bg/workspace/portfolio/app/components/portfolio/work.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/project/home/riade-bg/workspace/portfolio/app/components/portfolio/work.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Work, \"u2weSeTti91IB/gkEb3kdMvK5B4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll\n    ];\n});\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby93b3JrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWdFO0FBQ2pDO0FBQ0Q7QUFDZTtBQUNwQjtBQUN6QixlQUFlTTtJQUNiLE1BQU1DLFFBQVM7SUFRZixNQUFNQyxPQUFPLE1BQU1KLCtDQUFNQSxDQUFDSyxLQUFLLENBQUNGO0lBQ2hDLE9BQU9DO0FBQ1Q7QUFXQSxNQUFNRSxPQUFPOztJQUNYLE1BQU1DLE1BQU1ULDZDQUFNQSxDQUFpQjtJQUVuQyxNQUFNLEVBQUVVLGVBQWUsRUFBRSxHQUFHWCx3REFBU0EsQ0FBQztRQUNwQ1ksUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQU87U0FBTTtJQUN4QjtJQUNBLE1BQU1OLE9BQWUsTUFBTUY7SUFDM0IscUJBQ0UsOERBQUNOLGlEQUFNQSxDQUFDZSxHQUFHO1FBQ1RDLElBQUc7UUFDSEMsV0FBVTtRQUNWTixLQUFLQTtRQUNMTyxPQUFPO1lBQUVDLFNBQVNQO1FBQWdCOzswQkFFbEMsOERBQUNRO2dCQUNDSCxXQUFVOzBCQUdYOzs7Ozs7WUFHQVQsS0FBS2EsR0FBRyxDQUFDQyxDQUFBQSxxQkFDUiw4REFBQ25CLDZDQUFRQTtvQkFFUG9CLE9BQU9ELEtBQUtDLEtBQUs7b0JBQ2pCQyxNQUFNRixLQUFLRSxJQUFJO29CQUNmQyxRQUFRSCxLQUFLRyxNQUFNO29CQUNuQkMsTUFBTUosS0FBS0ssV0FBVztvQkFDdEJDLFFBQVFOLEtBQUtPLFFBQVE7bUJBTGhCUCxLQUFLUSxHQUFHOzs7Ozs7Ozs7OztBQVd2QjtHQW5DTXBCOztRQUd3QlQsb0RBQVNBOzs7S0FIakNTO0FBcUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby93b3JrLnRzeD9mY2U3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSAncHJvamVjdCdde1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBpbWFnZS5hc3NldC0+dXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZH1gO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuaW50ZXJmYWNlIERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIGdpdGh1Yjogc3RyaW5nO1xuICBfaWQ6IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbn1cblxuY29uc3QgV29yayA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IHJlZixcbiAgICBvZmZzZXQ6IFtcIjAgMVwiLCBcIjAgMFwiXVxuICB9KTtcbiAgY29uc3QgZGF0YTogRGF0YVtdID0gYXdhaXQgZ2V0UHJvamVjdHMoKTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaWQ9XCJ3b3JrXCJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTUgbWQ6cHgtMzYgbXQtMjAgcHQtMTBcIlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBzY3JvbGxZUHJvZ3Jlc3MgfX1cbiAgICA+XG4gICAgICA8aDFcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgbWQ6dGV4dC1zdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zdGFydCB3LWZ1bGwgZm9udC1tb25vXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LTN4bCBkYXJrOnRleHQtYmx1ZS01MDAgbGlnaHQ6dGV4dC1bIzBhMTkyZl0gbWItMTBcIlxuICAgICAgPlxuICAgICAgICAwMi4gTXkgV29ya1xuICAgICAgPC9oMT5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgPFByb2plY3RzXG4gICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICBsaW5rPXtpdGVtLmxpbmt9XG4gICAgICAgICAgZ2l0aHViPXtpdGVtLmdpdGh1Yn1cbiAgICAgICAgICBkZXNjPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGltZ1VybD17aXRlbS5pbWFnZVVybH1cbiAgICAgICAgICAvLyB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVJlZiIsIlByb2plY3RzIiwiY2xpZW50IiwiUmVhY3QiLCJnZXRQcm9qZWN0cyIsInF1ZXJ5IiwiZGF0YSIsImZldGNoIiwiV29yayIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvcGFjaXR5IiwiaDEiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJsaW5rIiwiZ2l0aHViIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwiaW1hZ2VVcmwiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/portfolio/work.tsx\n"));

/***/ })

});