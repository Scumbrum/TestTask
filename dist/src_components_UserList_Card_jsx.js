"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_components_UserList_Card_jsx"],{

/***/ "./src/components/UserList/Card.jsx":
/*!******************************************!*\
  !*** ./src/components/UserList/Card.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tooltip_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.jsx */ \"./src/components/UserList/Tooltip.jsx\");\n\n\nfunction Card(_ref) {\n  var email = _ref.email,\n      photo = _ref.photo,\n      phone = _ref.phone,\n      position = _ref.position,\n      name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: photo,\n    alt: \"\",\n    className: \"card__image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card__name\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tooltip_jsx__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {\n    value: name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card__info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tooltip_jsx__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {\n    value: position\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tooltip_jsx__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {\n    value: email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tooltip_jsx__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {\n    value: phone\n  })));\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/UserList/Card.jsx?");

/***/ }),

/***/ "./src/components/UserList/Tooltip.jsx":
/*!*********************************************!*\
  !*** ./src/components/UserList/Tooltip.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Tooltip = function Tooltip(_ref) {\n  var value = _ref.value;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"tooltip\",\n    title: value\n  }, value);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/UserList/Tooltip.jsx?");

/***/ })

}]);