/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ProductsContext.js":
/*!***************************************!*\
  !*** ./components/ProductsContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsContext: () => (/* binding */ ProductsContext),\n/* harmony export */   ProductsContextProvider: () => (/* binding */ ProductsContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ProductsContextProvider({ children }) {\n    const [selectedProducts, setSelectedProducts] = use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default()(\"cart\", {\n        defaultValue: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsContext.Provider, {\n        value: {\n            selectedProducts,\n            setSelectedProducts\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwame\\\\Documents\\\\localProjects\\\\E-commerce\\\\components\\\\ProductsContext.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0M7QUFDdUI7QUFFcEQsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBQyxDQUFDLEdBQUc7QUFFMUMsU0FBU0csd0JBQXdCLEVBQUNDLFFBQVEsRUFBQztJQUNoRCxNQUFNLENBQUNDLGtCQUFpQkMsb0JBQW9CLEdBQUdMLDhEQUFvQkEsQ0FBQyxRQUFRO1FBQUNNLGNBQWEsRUFBRTtJQUFBO0lBQzVGLHFCQUNFLDhEQUFDTCxnQkFBZ0JNLFFBQVE7UUFBQ0MsT0FBTztZQUFDSjtZQUFpQkM7UUFBbUI7a0JBQUlGOzs7Ozs7QUFFOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dC5qcz8yNGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSAndXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0c0NvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLHNldFNlbGVjdGVkUHJvZHVjdHNdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoJ2NhcnQnLCB7ZGVmYXVsdFZhbHVlOltdfSk7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NlbGVjdGVkUHJvZHVjdHMsc2V0U2VsZWN0ZWRQcm9kdWN0c319PntjaGlsZHJlbn08L1Byb2R1Y3RzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiUHJvZHVjdHNDb250ZXh0IiwiUHJvZHVjdHNDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNlbGVjdGVkUHJvZHVjdHMiLCJzZXRTZWxlY3RlZFByb2R1Y3RzIiwiZGVmYXVsdFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductsContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContext */ \"./components/ProductsContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__.ProductsContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kwame\\\\Documents\\\\localProjects\\\\E-commerce\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwame\\\\Documents\\\\localProjects\\\\E-commerce\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0M7QUFFdEUsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsZ0ZBQXVCQTtrQkFDdEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7UHJvZHVjdHNDb250ZXh0UHJvdmlkZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm9kdWN0c0NvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm9kdWN0c0NvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-local-storage-state":
/*!******************************************!*\
  !*** external "use-local-storage-state" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-local-storage-state");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();