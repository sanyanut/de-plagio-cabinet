/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _pages_plagiarism_checker_plagiarism_checker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/plagiarism-checker/plagiarism-checker.component */ \"./src/pages/plagiarism-checker/plagiarism-checker.component.jsx\");\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, {\n    basename: window.location.pathname || ''\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    exact: true,\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_plagiarism_checker_plagiarism_checker_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/App.js?");

/***/ }),

/***/ "./src/components/plagiarism-block/plagiarism-block.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/plagiarism-block/plagiarism-block.component.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlagiarismBlock = function PlagiarismBlock() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"plagiarism-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"head\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text\"\n  }, \"Available balance: 0 characters (Pro Plan, more accurate results)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text\"\n  }, \"Free checks available today: 0 (up to 2000 symbols)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"length\"\n  }, \"Text length: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"0\"), \" (without spaces: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"0\"), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: \"textarea\",\n    placeholder: \"Your text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"plan\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"option active\"\n  }, \"Free\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"option\"\n  }, \"Pro\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"check\"\n  }, \"CHECK FOR PLAGIARISM\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cards\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card orange\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Package 200\\u041A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$5.00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"200 000 characters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$0,025 per 1 000 characters\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"button\"\n  }, \"Buy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card pumpkin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Package 200\\u041A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$5.00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"200 000 characters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$0,025 per 1 000 characters\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"button\"\n  }, \"Buy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card blue\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Package 200\\u041A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$5.00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"200 000 characters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$0,025 per 1 000 characters\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"button\"\n  }, \"Buy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card purple\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Package 200\\u041A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$5.00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"200 000 characters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$0,025 per 1 000 characters\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"button\"\n  }, \"Buy\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlagiarismBlock);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/components/plagiarism-block/plagiarism-block.component.jsx?");

/***/ }),

/***/ "./src/components/side-menu/side-menu.component.jsx":
/*!**********************************************************!*\
  !*** ./src/components/side-menu/side-menu.component.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/logo.png */ \"./src/assets/images/logo.png\");\n/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svg/dollar.svg */ \"./src/assets/svg/dollar.svg\");\n/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_svg_shopping_list_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/svg/shopping-list.svg */ \"./src/assets/svg/shopping-list.svg\");\n/* harmony import */ var _assets_svg_shopping_list_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_shopping_list_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_svg_reply_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/reply.svg */ \"./src/assets/svg/reply.svg\");\n/* harmony import */ var _assets_svg_reply_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_reply_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_svg_copyright_symbol_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/copyright-symbol.svg */ \"./src/assets/svg/copyright-symbol.svg\");\n/* harmony import */ var _assets_svg_copyright_symbol_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_copyright_symbol_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/svg/user.svg */ \"./src/assets/svg/user.svg\");\n/* harmony import */ var _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_svg_correct_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/svg/correct.svg */ \"./src/assets/svg/correct.svg\");\n/* harmony import */ var _assets_svg_correct_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_correct_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_svg_megaphone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/svg/megaphone.svg */ \"./src/assets/svg/megaphone.svg\");\n/* harmony import */ var _assets_svg_megaphone_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_megaphone_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_svg_cards_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/svg/cards.svg */ \"./src/assets/svg/cards.svg\");\n/* harmony import */ var _assets_svg_cards_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cards_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/svg/envelope.svg */ \"./src/assets/svg/envelope.svg\");\n/* harmony import */ var _assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar SideMenu = function SideMenu(_ref) {\n  var toggleMenu = _ref.toggleMenu;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"side-menu \".concat(toggleMenu ? 'side-menu-mobile' : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"logo-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"logo\",\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"logo\",\n    width: \"200\",\n    height: \"54\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"fa fa-times\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_shopping_list_svg__WEBPACK_IMPORTED_MODULE_3___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Current Orders\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_2___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Unpaid Orders\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_reply_svg__WEBPACK_IMPORTED_MODULE_4___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Previous Orders\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item active\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_copyright_symbol_svg__WEBPACK_IMPORTED_MODULE_5___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Plagiarism Checker\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_6___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_correct_svg__WEBPACK_IMPORTED_MODULE_7___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Verification\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_megaphone_svg__WEBPACK_IMPORTED_MODULE_8___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Referral Program\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_cards_svg__WEBPACK_IMPORTED_MODULE_9___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Credits\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"icon\",\n    alt: \"icon\",\n    src: (_assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_10___default())\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Contact us\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"line\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item item-mobile\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-plus\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"New Order\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"item item-mobile\",\n    href: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-edit\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"name\"\n  }, \"Inquiry\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"copyright\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"@ Copyright 2022 Pro-Papers.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"logout-mobile\",\n    href: \"#\"\n  }, \"LOG OUT\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/components/side-menu/side-menu.component.jsx?");

/***/ }),

/***/ "./src/components/top-menu/top-menu.component.jsx":
/*!********************************************************!*\
  !*** ./src/components/top-menu/top-menu.component.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_search_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/search-icon.png */ \"./src/assets/images/search-icon.png\");\n/* harmony import */ var _assets_images_profile_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/profile-placeholder.png */ \"./src/assets/images/profile-placeholder.png\");\n\n\n\n\nvar TopMenu = function TopMenu(_ref) {\n  var toggleMenu = _ref.toggleMenu;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"burger-button\",\n    onClick: toggleMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"top-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_images_search_icon_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"input\",\n    type: \"text\",\n    placeholder: \"Search...\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"order\",\n    href: \"#\"\n  }, \"New Order\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"inquiry\",\n    href: \"#\"\n  }, \"Inquiry\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"notification\",\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa fa-bell\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"profile\",\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"img-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_images_profile_placeholder_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"Profile icon\",\n    width: \"40\",\n    height: \"40\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"name\"\n  }, \"Alex\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"id\"\n  }, \"2555\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"logout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Log Out\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopMenu);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/components/top-menu/top-menu.component.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n\n\n\n\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))); // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n\n(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/index.js?");

/***/ }),

/***/ "./src/pages/plagiarism-checker/plagiarism-checker.component.jsx":
/*!***********************************************************************!*\
  !*** ./src/pages/plagiarism-checker/plagiarism-checker.component.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/side-menu/side-menu.component */ \"./src/components/side-menu/side-menu.component.jsx\");\n/* harmony import */ var _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/top-menu/top-menu.component */ \"./src/components/top-menu/top-menu.component.jsx\");\n/* harmony import */ var _components_plagiarism_block_plagiarism_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plagiarism-block/plagiarism-block.component */ \"./src/components/plagiarism-block/plagiarism-block.component.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar PlagiarismChecker = function PlagiarismChecker(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isMenuOpen = _useState2[0],\n      setMenuOpen = _useState2[1];\n\n  var toggleMenu = function toggleMenu() {\n    setMenuOpen(!isMenuOpen);\n  };\n\n  var closeMenu = function closeMenu() {\n    if (isMenuOpen) {\n      setMenuOpen(false);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"plagiarism-checker-wrapper\",\n    onClick: closeMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    toggleMenu: isMenuOpen\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"plagiarism-checker\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    toggleMenu: toggleMenu\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_plagiarism_block_plagiarism_block_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlagiarismChecker);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/pages/plagiarism-checker/plagiarism-checker.component.jsx?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reportWebVitals = function reportWebVitals(onPerfEntry) {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    __webpack_require__.e(/*! import() */ \"node_modules_web-vitals_dist_web-vitals_js\").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.js\")).then(function (_ref) {\n      var getCLS = _ref.getCLS,\n          getFID = _ref.getFID,\n          getFCP = _ref.getFCP,\n          getLCP = _ref.getLCP,\n          getTTFB = _ref.getTTFB;\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reportWebVitals);\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/reportWebVitals.js?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c5a1cb6436a3173bc3f69c5d3df60a53.png\");\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/profile-placeholder.png":
/*!***************************************************!*\
  !*** ./src/assets/images/profile-placeholder.png ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b43e701fb2fb5f47f1322aaaa8be8302.png\");\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/images/profile-placeholder.png?");

/***/ }),

/***/ "./src/assets/images/search-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/search-icon.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"780be330a4096a7afdc477dd84263587.png\");\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/images/search-icon.png?");

/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Action\": function() { return /* binding */ Action; },\n/* harmony export */   \"createBrowserHistory\": function() { return /* binding */ createBrowserHistory; },\n/* harmony export */   \"createHashHistory\": function() { return /* binding */ createHashHistory; },\n/* harmony export */   \"createMemoryHistory\": function() { return /* binding */ createMemoryHistory; },\n/* harmony export */   \"createPath\": function() { return /* binding */ createPath; },\n/* harmony export */   \"parsePath\": function() { return /* binding */ parsePath; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js\");\n\n\n/**\r\n * Actions represent the type of change to a location value.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action\r\n */\nvar Action;\n\n(function (Action) {\n  /**\r\n   * A POP indicates a change to an arbitrary index in the history stack, such\r\n   * as a back or forward navigation. It does not describe the direction of the\r\n   * navigation, only that the current index changed.\r\n   *\r\n   * Note: This is the default action for newly created history objects.\r\n   */\n  Action[\"Pop\"] = \"POP\";\n  /**\r\n   * A PUSH indicates a new entry being added to the history stack, such as when\r\n   * a link is clicked and a new page loads. When this happens, all subsequent\r\n   * entries in the stack are lost.\r\n   */\n\n  Action[\"Push\"] = \"PUSH\";\n  /**\r\n   * A REPLACE indicates the entry at the current index in the history stack\r\n   * being replaced by a new one.\r\n   */\n\n  Action[\"Replace\"] = \"REPLACE\";\n})(Action || (Action = {}));\n\nvar readOnly =  true ? function (obj) {\n  return Object.freeze(obj);\n} : 0;\n\nfunction warning(cond, message) {\n  if (!cond) {\n    // eslint-disable-next-line no-console\n    if (typeof console !== 'undefined') console.warn(message);\n\n    try {\n      // Welcome to debugging history!\n      //\n      // This error is thrown as a convenience so you can more easily\n      // find the source for a warning that appears in the console by\n      // enabling \"pause on exceptions\" in your JavaScript debugger.\n      throw new Error(message); // eslint-disable-next-line no-empty\n    } catch (e) {}\n  }\n}\n\nvar BeforeUnloadEventType = 'beforeunload';\nvar HashChangeEventType = 'hashchange';\nvar PopStateEventType = 'popstate';\n/**\r\n * Browser history stores the location in regular URLs. This is the standard for\r\n * most web apps, but it requires some configuration on the server to ensure you\r\n * serve the same app at multiple URLs.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory\r\n */\n\nfunction createBrowserHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options = options,\n      _options$window = _options.window,\n      window = _options$window === void 0 ? document.defaultView : _options$window;\n  var globalHistory = window.history;\n\n  function getIndexAndLocation() {\n    var _window$location = window.location,\n        pathname = _window$location.pathname,\n        search = _window$location.search,\n        hash = _window$location.hash;\n    var state = globalHistory.state || {};\n    return [state.idx, readOnly({\n      pathname: pathname,\n      search: search,\n      hash: hash,\n      state: state.usr || null,\n      key: state.key || 'default'\n    })];\n  }\n\n  var blockedPopTx = null;\n\n  function handlePop() {\n    if (blockedPopTx) {\n      blockers.call(blockedPopTx);\n      blockedPopTx = null;\n    } else {\n      var nextAction = Action.Pop;\n\n      var _getIndexAndLocation = getIndexAndLocation(),\n          nextIndex = _getIndexAndLocation[0],\n          nextLocation = _getIndexAndLocation[1];\n\n      if (blockers.length) {\n        if (nextIndex != null) {\n          var delta = index - nextIndex;\n\n          if (delta) {\n            // Revert the POP\n            blockedPopTx = {\n              action: nextAction,\n              location: nextLocation,\n              retry: function retry() {\n                go(delta * -1);\n              }\n            };\n            go(delta);\n          }\n        } else {\n          // Trying to POP to a location with no index. We did not create\n          // this location, so we can't effectively block the navigation.\n           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in\n          // detail and link to it here so people can understand better what\n          // is going on and how to avoid it.\n          \"You are trying to block a POP navigation to a location that was not \" + \"created by the history library. The block will fail silently in \" + \"production, but in general you should do all navigation with the \" + \"history library (instead of using window.history.pushState directly) \" + \"to avoid this situation.\") : 0;\n        }\n      } else {\n        applyTx(nextAction);\n      }\n    }\n  }\n\n  window.addEventListener(PopStateEventType, handlePop);\n  var action = Action.Pop;\n\n  var _getIndexAndLocation2 = getIndexAndLocation(),\n      index = _getIndexAndLocation2[0],\n      location = _getIndexAndLocation2[1];\n\n  var listeners = createEvents();\n  var blockers = createEvents();\n\n  if (index == null) {\n    index = 0;\n    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, globalHistory.state, {\n      idx: index\n    }), '');\n  }\n\n  function createHref(to) {\n    return typeof to === 'string' ? to : createPath(to);\n  } // state defaults to `null` because `window.history.state` does\n\n\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      hash: '',\n      search: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n\n  function getHistoryStateAndUrl(nextLocation, index) {\n    return [{\n      usr: nextLocation.state,\n      key: nextLocation.key,\n      idx: index\n    }, createHref(nextLocation)];\n  }\n\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n\n  function applyTx(nextAction) {\n    action = nextAction;\n\n    var _getIndexAndLocation3 = getIndexAndLocation();\n\n    index = _getIndexAndLocation3[0];\n    location = _getIndexAndLocation3[1];\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      push(to, state);\n    }\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),\n          historyState = _getHistoryStateAndUr[0],\n          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading\n      // try...catch because iOS limits us to 100 pushState calls :/\n\n\n      try {\n        globalHistory.pushState(historyState, '', url);\n      } catch (error) {\n        // They are going to lose state here, but there is no real\n        // way to warn them about it since the page will refresh...\n        window.location.assign(url);\n      }\n\n      applyTx(nextAction);\n    }\n  }\n\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      replace(to, state);\n    }\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),\n          historyState = _getHistoryStateAndUr2[0],\n          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading\n\n\n      globalHistory.replaceState(historyState, '', url);\n      applyTx(nextAction);\n    }\n  }\n\n  function go(delta) {\n    globalHistory.go(delta);\n  }\n\n  var history = {\n    get action() {\n      return action;\n    },\n\n    get location() {\n      return location;\n    },\n\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      var unblock = blockers.push(blocker);\n\n      if (blockers.length === 1) {\n        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);\n      }\n\n      return function () {\n        unblock(); // Remove the beforeunload listener so the document may\n        // still be salvageable in the pagehide event.\n        // See https://html.spec.whatwg.org/#unloading-documents\n\n        if (!blockers.length) {\n          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);\n        }\n      };\n    }\n  };\n  return history;\n}\n/**\r\n * Hash history stores the location in window.location.hash. This makes it ideal\r\n * for situations where you don't want to send the location to the server for\r\n * some reason, either because you do cannot configure it or the URL space is\r\n * reserved for something else.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory\r\n */\n\nfunction createHashHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options2 = options,\n      _options2$window = _options2.window,\n      window = _options2$window === void 0 ? document.defaultView : _options2$window;\n  var globalHistory = window.history;\n\n  function getIndexAndLocation() {\n    var _parsePath = parsePath(window.location.hash.substr(1)),\n        _parsePath$pathname = _parsePath.pathname,\n        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,\n        _parsePath$search = _parsePath.search,\n        search = _parsePath$search === void 0 ? '' : _parsePath$search,\n        _parsePath$hash = _parsePath.hash,\n        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;\n\n    var state = globalHistory.state || {};\n    return [state.idx, readOnly({\n      pathname: pathname,\n      search: search,\n      hash: hash,\n      state: state.usr || null,\n      key: state.key || 'default'\n    })];\n  }\n\n  var blockedPopTx = null;\n\n  function handlePop() {\n    if (blockedPopTx) {\n      blockers.call(blockedPopTx);\n      blockedPopTx = null;\n    } else {\n      var nextAction = Action.Pop;\n\n      var _getIndexAndLocation4 = getIndexAndLocation(),\n          nextIndex = _getIndexAndLocation4[0],\n          nextLocation = _getIndexAndLocation4[1];\n\n      if (blockers.length) {\n        if (nextIndex != null) {\n          var delta = index - nextIndex;\n\n          if (delta) {\n            // Revert the POP\n            blockedPopTx = {\n              action: nextAction,\n              location: nextLocation,\n              retry: function retry() {\n                go(delta * -1);\n              }\n            };\n            go(delta);\n          }\n        } else {\n          // Trying to POP to a location with no index. We did not create\n          // this location, so we can't effectively block the navigation.\n           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in\n          // detail and link to it here so people can understand better\n          // what is going on and how to avoid it.\n          \"You are trying to block a POP navigation to a location that was not \" + \"created by the history library. The block will fail silently in \" + \"production, but in general you should do all navigation with the \" + \"history library (instead of using window.history.pushState directly) \" + \"to avoid this situation.\") : 0;\n        }\n      } else {\n        applyTx(nextAction);\n      }\n    }\n  }\n\n  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge\n  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event\n\n  window.addEventListener(HashChangeEventType, function () {\n    var _getIndexAndLocation5 = getIndexAndLocation(),\n        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.\n\n\n    if (createPath(nextLocation) !== createPath(location)) {\n      handlePop();\n    }\n  });\n  var action = Action.Pop;\n\n  var _getIndexAndLocation6 = getIndexAndLocation(),\n      index = _getIndexAndLocation6[0],\n      location = _getIndexAndLocation6[1];\n\n  var listeners = createEvents();\n  var blockers = createEvents();\n\n  if (index == null) {\n    index = 0;\n    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, globalHistory.state, {\n      idx: index\n    }), '');\n  }\n\n  function getBaseHref() {\n    var base = document.querySelector('base');\n    var href = '';\n\n    if (base && base.getAttribute('href')) {\n      var url = window.location.href;\n      var hashIndex = url.indexOf('#');\n      href = hashIndex === -1 ? url : url.slice(0, hashIndex);\n    }\n\n    return href;\n  }\n\n  function createHref(to) {\n    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));\n  }\n\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      hash: '',\n      search: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n\n  function getHistoryStateAndUrl(nextLocation, index) {\n    return [{\n      usr: nextLocation.state,\n      key: nextLocation.key,\n      idx: index\n    }, createHref(nextLocation)];\n  }\n\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n\n  function applyTx(nextAction) {\n    action = nextAction;\n\n    var _getIndexAndLocation7 = getIndexAndLocation();\n\n    index = _getIndexAndLocation7[0];\n    location = _getIndexAndLocation7[1];\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      push(to, state);\n    }\n\n     true ? warning(nextLocation.pathname.charAt(0) === '/', \"Relative pathnames are not supported in hash history.push(\" + JSON.stringify(to) + \")\") : 0;\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),\n          historyState = _getHistoryStateAndUr3[0],\n          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading\n      // try...catch because iOS limits us to 100 pushState calls :/\n\n\n      try {\n        globalHistory.pushState(historyState, '', url);\n      } catch (error) {\n        // They are going to lose state here, but there is no real\n        // way to warn them about it since the page will refresh...\n        window.location.assign(url);\n      }\n\n      applyTx(nextAction);\n    }\n  }\n\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      replace(to, state);\n    }\n\n     true ? warning(nextLocation.pathname.charAt(0) === '/', \"Relative pathnames are not supported in hash history.replace(\" + JSON.stringify(to) + \")\") : 0;\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),\n          historyState = _getHistoryStateAndUr4[0],\n          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading\n\n\n      globalHistory.replaceState(historyState, '', url);\n      applyTx(nextAction);\n    }\n  }\n\n  function go(delta) {\n    globalHistory.go(delta);\n  }\n\n  var history = {\n    get action() {\n      return action;\n    },\n\n    get location() {\n      return location;\n    },\n\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      var unblock = blockers.push(blocker);\n\n      if (blockers.length === 1) {\n        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);\n      }\n\n      return function () {\n        unblock(); // Remove the beforeunload listener so the document may\n        // still be salvageable in the pagehide event.\n        // See https://html.spec.whatwg.org/#unloading-documents\n\n        if (!blockers.length) {\n          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);\n        }\n      };\n    }\n  };\n  return history;\n}\n/**\r\n * Memory history stores the current location in memory. It is designed for use\r\n * in stateful non-browser environments like tests and React Native.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory\r\n */\n\nfunction createMemoryHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options3 = options,\n      _options3$initialEntr = _options3.initialEntries,\n      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,\n      initialIndex = _options3.initialIndex;\n  var entries = initialEntries.map(function (entry) {\n    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: '/',\n      search: '',\n      hash: '',\n      state: null,\n      key: createKey()\n    }, typeof entry === 'string' ? parsePath(entry) : entry));\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: \" + JSON.stringify(entry) + \")\") : 0;\n    return location;\n  });\n  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);\n  var action = Action.Pop;\n  var location = entries[index];\n  var listeners = createEvents();\n  var blockers = createEvents();\n\n  function createHref(to) {\n    return typeof to === 'string' ? to : createPath(to);\n  }\n\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      search: '',\n      hash: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n\n  function applyTx(nextAction, nextLocation) {\n    action = nextAction;\n    location = nextLocation;\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      push(to, state);\n    }\n\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in memory history.push(\" + JSON.stringify(to) + \")\") : 0;\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      index += 1;\n      entries.splice(index, entries.length, nextLocation);\n      applyTx(nextAction, nextLocation);\n    }\n  }\n\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n\n    function retry() {\n      replace(to, state);\n    }\n\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in memory history.replace(\" + JSON.stringify(to) + \")\") : 0;\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      entries[index] = nextLocation;\n      applyTx(nextAction, nextLocation);\n    }\n  }\n\n  function go(delta) {\n    var nextIndex = clamp(index + delta, 0, entries.length - 1);\n    var nextAction = Action.Pop;\n    var nextLocation = entries[nextIndex];\n\n    function retry() {\n      go(delta);\n    }\n\n    if (allowTx(nextAction, nextLocation, retry)) {\n      index = nextIndex;\n      applyTx(nextAction, nextLocation);\n    }\n  }\n\n  var history = {\n    get index() {\n      return index;\n    },\n\n    get action() {\n      return action;\n    },\n\n    get location() {\n      return location;\n    },\n\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      return blockers.push(blocker);\n    }\n  };\n  return history;\n} ////////////////////////////////////////////////////////////////////////////////\n// UTILS\n////////////////////////////////////////////////////////////////////////////////\n\nfunction clamp(n, lowerBound, upperBound) {\n  return Math.min(Math.max(n, lowerBound), upperBound);\n}\n\nfunction promptBeforeUnload(event) {\n  // Cancel the event.\n  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.\n\n  event.returnValue = '';\n}\n\nfunction createEvents() {\n  var handlers = [];\n  return {\n    get length() {\n      return handlers.length;\n    },\n\n    push: function push(fn) {\n      handlers.push(fn);\n      return function () {\n        handlers = handlers.filter(function (handler) {\n          return handler !== fn;\n        });\n      };\n    },\n    call: function call(arg) {\n      handlers.forEach(function (fn) {\n        return fn && fn(arg);\n      });\n    }\n  };\n}\n\nfunction createKey() {\n  return Math.random().toString(36).substr(2, 8);\n}\n/**\r\n * Creates a string URL path from the given pathname, search, and hash components.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath\r\n */\n\n\nfunction createPath(_ref) {\n  var _ref$pathname = _ref.pathname,\n      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,\n      _ref$search = _ref.search,\n      search = _ref$search === void 0 ? '' : _ref$search,\n      _ref$hash = _ref.hash,\n      hash = _ref$hash === void 0 ? '' : _ref$hash;\n  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;\n  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;\n  return pathname;\n}\n/**\r\n * Parses a string URL path into its separate pathname, search, and hash components.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath\r\n */\n\nfunction parsePath(path) {\n  var parsedPath = {};\n\n  if (path) {\n    var hashIndex = path.indexOf('#');\n\n    if (hashIndex >= 0) {\n      parsedPath.hash = path.substr(hashIndex);\n      path = path.substr(0, hashIndex);\n    }\n\n    var searchIndex = path.indexOf('?');\n\n    if (searchIndex >= 0) {\n      parsedPath.search = path.substr(searchIndex);\n      path = path.substr(0, searchIndex);\n    }\n\n    if (path) {\n      parsedPath.pathname = path;\n    }\n  }\n\n  return parsedPath;\n}\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/history/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout); // @ts-ignore\n\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\n\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src =\n      /** @type {HTMLScriptElement} */\n      document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\n\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split(\"?\")[0];\n  }\n\n  if (!isUrlRequest(\n  /** @type {string} */\n  url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\n\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\n\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n/**\n * @param {string} url\n * @returns {boolean}\n */\n\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\n\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n\n      case \".\":\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  },\n  /** @type {string[]} */\n  []).join(\"/\");\n}\n/**\n * @param {string} urlString\n * @returns {string}\n */\n\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1653568395703\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://de-plagio-cabinet/./src/index.css?");

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (true) {\n    // This branch is unreachable because this function is only called\n    // in production, but the condition is true only in development.\n    // Therefore if the branch is still here, dead code elimination wasn't\n    // properly applied.\n    // Don't change the message. React DevTools relies on it. Also make sure\n    // this message doesn't occur elsewhere in this function, or it will cause\n    // a false positive.\n    throw new Error('^_^');\n  }\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ \"./node_modules/react-dom/cjs/react-dom.development.js\");\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowserRouter\": function() { return /* binding */ BrowserRouter; },\n/* harmony export */   \"HashRouter\": function() { return /* binding */ HashRouter; },\n/* harmony export */   \"Link\": function() { return /* binding */ Link; },\n/* harmony export */   \"MemoryRouter\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Navigate\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate; },\n/* harmony export */   \"NavigationType\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action; },\n/* harmony export */   \"Outlet\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet; },\n/* harmony export */   \"Route\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route; },\n/* harmony export */   \"Router\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router; },\n/* harmony export */   \"Routes\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes; },\n/* harmony export */   \"UNSAFE_LocationContext\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext; },\n/* harmony export */   \"UNSAFE_NavigationContext\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext; },\n/* harmony export */   \"UNSAFE_RouteContext\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext; },\n/* harmony export */   \"createPath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath; },\n/* harmony export */   \"createRoutesFromChildren\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren; },\n/* harmony export */   \"createSearchParams\": function() { return /* binding */ createSearchParams; },\n/* harmony export */   \"generatePath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },\n/* harmony export */   \"matchPath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },\n/* harmony export */   \"matchRoutes\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },\n/* harmony export */   \"parsePath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath; },\n/* harmony export */   \"renderMatches\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.renderMatches; },\n/* harmony export */   \"resolvePath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },\n/* harmony export */   \"unstable_HistoryRouter\": function() { return /* binding */ HistoryRouter; },\n/* harmony export */   \"useHref\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref; },\n/* harmony export */   \"useInRouterContext\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext; },\n/* harmony export */   \"useLinkClickHandler\": function() { return /* binding */ useLinkClickHandler; },\n/* harmony export */   \"useLocation\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation; },\n/* harmony export */   \"useMatch\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch; },\n/* harmony export */   \"useNavigate\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate; },\n/* harmony export */   \"useNavigationType\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigationType; },\n/* harmony export */   \"useOutlet\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet; },\n/* harmony export */   \"useOutletContext\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutletContext; },\n/* harmony export */   \"useParams\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams; },\n/* harmony export */   \"useResolvedPath\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath; },\n/* harmony export */   \"useRoutes\": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes; },\n/* harmony export */   \"useSearchParams\": function() { return /* binding */ useSearchParams; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"./node_modules/history/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/index.js\");\n/**\n * React Router DOM v6.3.0\n *\n * Copyright (c) Remix Software Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.md file in the root directory of this source tree.\n *\n * @license MIT\n */\n\n\n\n\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nconst _excluded = [\"onClick\", \"reloadDocument\", \"replace\", \"state\", \"target\", \"to\"],\n      _excluded2 = [\"aria-current\", \"caseSensitive\", \"className\", \"end\", \"style\", \"to\", \"children\"];\n\nfunction warning(cond, message) {\n  if (!cond) {\n    // eslint-disable-next-line no-console\n    if (typeof console !== \"undefined\") console.warn(message);\n\n    try {\n      // Welcome to debugging React Router!\n      //\n      // This error is thrown as a convenience so you can more easily\n      // find the source for a warning that appears in the console by\n      // enabling \"pause on exceptions\" in your JavaScript debugger.\n      throw new Error(message); // eslint-disable-next-line no-empty\n    } catch (e) {}\n  }\n} ////////////////////////////////////////////////////////////////////////////////\n// COMPONENTS\n////////////////////////////////////////////////////////////////////////////////\n\n/**\n * A `<Router>` for use in web browsers. Provides the cleanest URLs.\n */\nfunction BrowserRouter(_ref) {\n  let {\n    basename,\n    children,\n    window\n  } = _ref;\n  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  if (historyRef.current == null) {\n    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({\n      window\n    });\n  }\n\n  let history = historyRef.current;\n  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    action: history.action,\n    location: history.location\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {\n    basename: basename,\n    children: children,\n    location: state.location,\n    navigationType: state.action,\n    navigator: history\n  });\n}\n\n/**\n * A `<Router>` for use in web browsers. Stores the location in the hash\n * portion of the URL so it is not sent to the server.\n */\nfunction HashRouter(_ref2) {\n  let {\n    basename,\n    children,\n    window\n  } = _ref2;\n  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  if (historyRef.current == null) {\n    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({\n      window\n    });\n  }\n\n  let history = historyRef.current;\n  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    action: history.action,\n    location: history.location\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {\n    basename: basename,\n    children: children,\n    location: state.location,\n    navigationType: state.action,\n    navigator: history\n  });\n}\n\n/**\n * A `<Router>` that accepts a pre-instantiated history object. It's important\n * to note that using your own history object is highly discouraged and may add\n * two versions of the history library to your bundles unless you use the same\n * version of the history library that React Router uses internally.\n */\nfunction HistoryRouter(_ref3) {\n  let {\n    basename,\n    children,\n    history\n  } = _ref3;\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    action: history.action,\n    location: history.location\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {\n    basename: basename,\n    children: children,\n    location: state.location,\n    navigationType: state.action,\n    navigator: history\n  });\n}\n\nif (true) {\n  HistoryRouter.displayName = \"unstable_HistoryRouter\";\n}\n\nfunction isModifiedEvent(event) {\n  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n}\n\n/**\n * The public API for rendering a history-aware <a>.\n */\nconst Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {\n  let {\n    onClick,\n    reloadDocument,\n    replace = false,\n    state,\n    target,\n    to\n  } = _ref4,\n      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);\n\n  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to);\n  let internalOnClick = useLinkClickHandler(to, {\n    replace,\n    state,\n    target\n  });\n\n  function handleClick(event) {\n    if (onClick) onClick(event);\n\n    if (!event.defaultPrevented && !reloadDocument) {\n      internalOnClick(event);\n    }\n  }\n\n  return (\n    /*#__PURE__*/\n    // eslint-disable-next-line jsx-a11y/anchor-has-content\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"a\", _extends({}, rest, {\n      href: href,\n      onClick: handleClick,\n      ref: ref,\n      target: target\n    }))\n  );\n});\n\nif (true) {\n  Link.displayName = \"Link\";\n}\n\n/**\n * A <Link> wrapper that knows if it's \"active\" or not.\n */\nconst NavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NavLinkWithRef(_ref5, ref) {\n  let {\n    \"aria-current\": ariaCurrentProp = \"page\",\n    caseSensitive = false,\n    className: classNameProp = \"\",\n    end = false,\n    style: styleProp,\n    to,\n    children\n  } = _ref5,\n      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);\n\n  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);\n  let locationPathname = location.pathname;\n  let toPathname = path.pathname;\n\n  if (!caseSensitive) {\n    locationPathname = locationPathname.toLowerCase();\n    toPathname = toPathname.toLowerCase();\n  }\n\n  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === \"/\";\n  let ariaCurrent = isActive ? ariaCurrentProp : undefined;\n  let className;\n\n  if (typeof classNameProp === \"function\") {\n    className = classNameProp({\n      isActive\n    });\n  } else {\n    // If the className prop is not a function, we use a default `active`\n    // class for <NavLink />s that are active. In v5 `active` was the default\n    // value for `activeClassName`, but we are removing that API and can still\n    // use the old default behavior for a cleaner upgrade path and keep the\n    // simple styling rules working as they currently do.\n    className = [classNameProp, isActive ? \"active\" : null].filter(Boolean).join(\" \");\n  }\n\n  let style = typeof styleProp === \"function\" ? styleProp({\n    isActive\n  }) : styleProp;\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, _extends({}, rest, {\n    \"aria-current\": ariaCurrent,\n    className: className,\n    ref: ref,\n    style: style,\n    to: to\n  }), typeof children === \"function\" ? children({\n    isActive\n  }) : children);\n});\n\nif (true) {\n  NavLink.displayName = \"NavLink\";\n} ////////////////////////////////////////////////////////////////////////////////\n// HOOKS\n////////////////////////////////////////////////////////////////////////////////\n\n/**\n * Handles the click behavior for router `<Link>` components. This is useful if\n * you need to create custom `<Link>` components with the same click behavior we\n * use in our exported `<Link>`.\n */\n\n\nfunction useLinkClickHandler(to, _temp) {\n  let {\n    target,\n    replace: replaceProp,\n    state\n  } = _temp === void 0 ? {} : _temp;\n  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {\n    if (event.button === 0 && ( // Ignore everything but left clicks\n    !target || target === \"_self\") && // Let browser handle \"target=_blank\" etc.\n    !isModifiedEvent(event) // Ignore clicks with modifier keys\n    ) {\n      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of\n      // a push, so do the same here.\n\n      let replace = !!replaceProp || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);\n      navigate(to, {\n        replace,\n        state\n      });\n    }\n  }, [location, navigate, path, replaceProp, state, target, to]);\n}\n/**\n * A convenient wrapper for reading and writing search parameters via the\n * URLSearchParams interface.\n */\n\nfunction useSearchParams(defaultInit) {\n   true ? warning(typeof URLSearchParams !== \"undefined\", \"You cannot use the `useSearchParams` hook in a browser that does not \" + \"support the URLSearchParams API. If you need to support Internet \" + \"Explorer 11, we recommend you load a polyfill such as \" + \"https://github.com/ungap/url-search-params\\n\\n\" + \"If you're unsure how to load polyfills, we recommend you check out \" + \"https://polyfill.io/v3/ which provides some recommendations about how \" + \"to load polyfills only for users that need them, instead of for every \" + \"user.\") : 0;\n  let defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));\n  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  let searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    let searchParams = createSearchParams(location.search);\n\n    for (let key of defaultSearchParamsRef.current.keys()) {\n      if (!searchParams.has(key)) {\n        defaultSearchParamsRef.current.getAll(key).forEach(value => {\n          searchParams.append(key, value);\n        });\n      }\n    }\n\n    return searchParams;\n  }, [location.search]);\n  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n  let setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextInit, navigateOptions) => {\n    navigate(\"?\" + createSearchParams(nextInit), navigateOptions);\n  }, [navigate]);\n  return [searchParams, setSearchParams];\n}\n\n/**\n * Creates a URLSearchParams object using the given initializer.\n *\n * This is identical to `new URLSearchParams(init)` except it also\n * supports arrays as values in the object form of the initializer\n * instead of just strings. This is convenient when you need multiple\n * values for a given key, but don't want to use an array initializer.\n *\n * For example, instead of:\n *\n *   let searchParams = new URLSearchParams([\n *     ['sort', 'name'],\n *     ['sort', 'price']\n *   ]);\n *\n * you can do:\n *\n *   let searchParams = createSearchParams({\n *     sort: ['name', 'price']\n *   });\n */\nfunction createSearchParams(init) {\n  if (init === void 0) {\n    init = \"\";\n  }\n\n  return new URLSearchParams(typeof init === \"string\" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {\n    let value = init[key];\n    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);\n  }, []));\n}\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react-router-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-router/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryRouter\": function() { return /* binding */ MemoryRouter; },\n/* harmony export */   \"Navigate\": function() { return /* binding */ Navigate; },\n/* harmony export */   \"NavigationType\": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.Action; },\n/* harmony export */   \"Outlet\": function() { return /* binding */ Outlet; },\n/* harmony export */   \"Route\": function() { return /* binding */ Route; },\n/* harmony export */   \"Router\": function() { return /* binding */ Router; },\n/* harmony export */   \"Routes\": function() { return /* binding */ Routes; },\n/* harmony export */   \"UNSAFE_LocationContext\": function() { return /* binding */ LocationContext; },\n/* harmony export */   \"UNSAFE_NavigationContext\": function() { return /* binding */ NavigationContext; },\n/* harmony export */   \"UNSAFE_RouteContext\": function() { return /* binding */ RouteContext; },\n/* harmony export */   \"createPath\": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.createPath; },\n/* harmony export */   \"createRoutesFromChildren\": function() { return /* binding */ createRoutesFromChildren; },\n/* harmony export */   \"generatePath\": function() { return /* binding */ generatePath; },\n/* harmony export */   \"matchPath\": function() { return /* binding */ matchPath; },\n/* harmony export */   \"matchRoutes\": function() { return /* binding */ matchRoutes; },\n/* harmony export */   \"parsePath\": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.parsePath; },\n/* harmony export */   \"renderMatches\": function() { return /* binding */ renderMatches; },\n/* harmony export */   \"resolvePath\": function() { return /* binding */ resolvePath; },\n/* harmony export */   \"useHref\": function() { return /* binding */ useHref; },\n/* harmony export */   \"useInRouterContext\": function() { return /* binding */ useInRouterContext; },\n/* harmony export */   \"useLocation\": function() { return /* binding */ useLocation; },\n/* harmony export */   \"useMatch\": function() { return /* binding */ useMatch; },\n/* harmony export */   \"useNavigate\": function() { return /* binding */ useNavigate; },\n/* harmony export */   \"useNavigationType\": function() { return /* binding */ useNavigationType; },\n/* harmony export */   \"useOutlet\": function() { return /* binding */ useOutlet; },\n/* harmony export */   \"useOutletContext\": function() { return /* binding */ useOutletContext; },\n/* harmony export */   \"useParams\": function() { return /* binding */ useParams; },\n/* harmony export */   \"useResolvedPath\": function() { return /* binding */ useResolvedPath; },\n/* harmony export */   \"useRoutes\": function() { return /* binding */ useRoutes; }\n/* harmony export */ });\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ \"./node_modules/history/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * React Router v6.3.0\n *\n * Copyright (c) Remix Software Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.md file in the root directory of this source tree.\n *\n * @license MIT\n */\n\n\n\n\nconst NavigationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n\nif (true) {\n  NavigationContext.displayName = \"Navigation\";\n}\n\nconst LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n\nif (true) {\n  LocationContext.displayName = \"Location\";\n}\n\nconst RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  outlet: null,\n  matches: []\n});\n\nif (true) {\n  RouteContext.displayName = \"Route\";\n}\n\nfunction invariant(cond, message) {\n  if (!cond) throw new Error(message);\n}\nfunction warning(cond, message) {\n  if (!cond) {\n    // eslint-disable-next-line no-console\n    if (typeof console !== \"undefined\") console.warn(message);\n\n    try {\n      // Welcome to debugging React Router!\n      //\n      // This error is thrown as a convenience so you can more easily\n      // find the source for a warning that appears in the console by\n      // enabling \"pause on exceptions\" in your JavaScript debugger.\n      throw new Error(message); // eslint-disable-next-line no-empty\n    } catch (e) {}\n  }\n}\nconst alreadyWarned = {};\nfunction warningOnce(key, cond, message) {\n  if (!cond && !alreadyWarned[key]) {\n    alreadyWarned[key] = true;\n     true ? warning(false, message) : 0;\n  }\n}\n\n/**\n * Returns a path with params interpolated.\n *\n * @see https://reactrouter.com/docs/en/v6/api#generatepath\n */\nfunction generatePath(path, params) {\n  if (params === void 0) {\n    params = {};\n  }\n\n  return path.replace(/:(\\w+)/g, (_, key) => {\n    !(params[key] != null) ?  true ? invariant(false, \"Missing \\\":\" + key + \"\\\" param\") : 0 : void 0;\n    return params[key];\n  }).replace(/\\/*\\*$/, _ => params[\"*\"] == null ? \"\" : params[\"*\"].replace(/^\\/*/, \"/\"));\n}\n/**\n * A RouteMatch contains info about how a route matched a URL.\n */\n\n/**\n * Matches the given routes to a location and returns the match data.\n *\n * @see https://reactrouter.com/docs/en/v6/api#matchroutes\n */\nfunction matchRoutes(routes, locationArg, basename) {\n  if (basename === void 0) {\n    basename = \"/\";\n  }\n\n  let location = typeof locationArg === \"string\" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;\n  let pathname = stripBasename(location.pathname || \"/\", basename);\n\n  if (pathname == null) {\n    return null;\n  }\n\n  let branches = flattenRoutes(routes);\n  rankRouteBranches(branches);\n  let matches = null;\n\n  for (let i = 0; matches == null && i < branches.length; ++i) {\n    matches = matchRouteBranch(branches[i], pathname);\n  }\n\n  return matches;\n}\n\nfunction flattenRoutes(routes, branches, parentsMeta, parentPath) {\n  if (branches === void 0) {\n    branches = [];\n  }\n\n  if (parentsMeta === void 0) {\n    parentsMeta = [];\n  }\n\n  if (parentPath === void 0) {\n    parentPath = \"\";\n  }\n\n  routes.forEach((route, index) => {\n    let meta = {\n      relativePath: route.path || \"\",\n      caseSensitive: route.caseSensitive === true,\n      childrenIndex: index,\n      route\n    };\n\n    if (meta.relativePath.startsWith(\"/\")) {\n      !meta.relativePath.startsWith(parentPath) ?  true ? invariant(false, \"Absolute route path \\\"\" + meta.relativePath + \"\\\" nested under path \" + (\"\\\"\" + parentPath + \"\\\" is not valid. An absolute child route path \") + \"must start with the combined path of all its parent routes.\") : 0 : void 0;\n      meta.relativePath = meta.relativePath.slice(parentPath.length);\n    }\n\n    let path = joinPaths([parentPath, meta.relativePath]);\n    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the\n    // route tree depth-first and child routes appear before their parents in\n    // the \"flattened\" version.\n\n    if (route.children && route.children.length > 0) {\n      !(route.index !== true) ?  true ? invariant(false, \"Index routes must not have child routes. Please remove \" + (\"all child routes from route path \\\"\" + path + \"\\\".\")) : 0 : void 0;\n      flattenRoutes(route.children, branches, routesMeta, path);\n    } // Routes without a path shouldn't ever match by themselves unless they are\n    // index routes, so don't add them to the list of possible branches.\n\n\n    if (route.path == null && !route.index) {\n      return;\n    }\n\n    branches.push({\n      path,\n      score: computeScore(path, route.index),\n      routesMeta\n    });\n  });\n  return branches;\n}\n\nfunction rankRouteBranches(branches) {\n  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first\n  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));\n}\n\nconst paramRe = /^:\\w+$/;\nconst dynamicSegmentValue = 3;\nconst indexRouteValue = 2;\nconst emptySegmentValue = 1;\nconst staticSegmentValue = 10;\nconst splatPenalty = -2;\n\nconst isSplat = s => s === \"*\";\n\nfunction computeScore(path, index) {\n  let segments = path.split(\"/\");\n  let initialScore = segments.length;\n\n  if (segments.some(isSplat)) {\n    initialScore += splatPenalty;\n  }\n\n  if (index) {\n    initialScore += indexRouteValue;\n  }\n\n  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === \"\" ? emptySegmentValue : staticSegmentValue), initialScore);\n}\n\nfunction compareIndexes(a, b) {\n  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);\n  return siblings ? // If two routes are siblings, we should try to match the earlier sibling\n  // first. This allows people to have fine-grained control over the matching\n  // behavior by simply putting routes with identical paths in the order they\n  // want them tried.\n  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,\n  // so they sort equally.\n  0;\n}\n\nfunction matchRouteBranch(branch, pathname) {\n  let {\n    routesMeta\n  } = branch;\n  let matchedParams = {};\n  let matchedPathname = \"/\";\n  let matches = [];\n\n  for (let i = 0; i < routesMeta.length; ++i) {\n    let meta = routesMeta[i];\n    let end = i === routesMeta.length - 1;\n    let remainingPathname = matchedPathname === \"/\" ? pathname : pathname.slice(matchedPathname.length) || \"/\";\n    let match = matchPath({\n      path: meta.relativePath,\n      caseSensitive: meta.caseSensitive,\n      end\n    }, remainingPathname);\n    if (!match) return null;\n    Object.assign(matchedParams, match.params);\n    let route = meta.route;\n    matches.push({\n      params: matchedParams,\n      pathname: joinPaths([matchedPathname, match.pathname]),\n      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),\n      route\n    });\n\n    if (match.pathnameBase !== \"/\") {\n      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);\n    }\n  }\n\n  return matches;\n}\n/**\n * A PathPattern is used to match on some portion of a URL pathname.\n */\n\n\n/**\n * Performs pattern matching on a URL pathname and returns information about\n * the match.\n *\n * @see https://reactrouter.com/docs/en/v6/api#matchpath\n */\nfunction matchPath(pattern, pathname) {\n  if (typeof pattern === \"string\") {\n    pattern = {\n      path: pattern,\n      caseSensitive: false,\n      end: true\n    };\n  }\n\n  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);\n  let match = pathname.match(matcher);\n  if (!match) return null;\n  let matchedPathname = match[0];\n  let pathnameBase = matchedPathname.replace(/(.)\\/+$/, \"$1\");\n  let captureGroups = match.slice(1);\n  let params = paramNames.reduce((memo, paramName, index) => {\n    // We need to compute the pathnameBase here using the raw splat value\n    // instead of using params[\"*\"] later because it will be decoded then\n    if (paramName === \"*\") {\n      let splatValue = captureGroups[index] || \"\";\n      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\\/+$/, \"$1\");\n    }\n\n    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || \"\", paramName);\n    return memo;\n  }, {});\n  return {\n    params,\n    pathname: matchedPathname,\n    pathnameBase,\n    pattern\n  };\n}\n\nfunction compilePath(path, caseSensitive, end) {\n  if (caseSensitive === void 0) {\n    caseSensitive = false;\n  }\n\n  if (end === void 0) {\n    end = true;\n  }\n\n   true ? warning(path === \"*\" || !path.endsWith(\"*\") || path.endsWith(\"/*\"), \"Route path \\\"\" + path + \"\\\" will be treated as if it were \" + (\"\\\"\" + path.replace(/\\*$/, \"/*\") + \"\\\" because the `*` character must \") + \"always follow a `/` in the pattern. To get rid of this warning, \" + (\"please change the route path to \\\"\" + path.replace(/\\*$/, \"/*\") + \"\\\".\")) : 0;\n  let paramNames = [];\n  let regexpSource = \"^\" + path.replace(/\\/*\\*?$/, \"\") // Ignore trailing / and /*, we'll handle it below\n  .replace(/^\\/*/, \"/\") // Make sure it has a leading /\n  .replace(/[\\\\.*+^$?{}|()[\\]]/g, \"\\\\$&\") // Escape special regex chars\n  .replace(/:(\\w+)/g, (_, paramName) => {\n    paramNames.push(paramName);\n    return \"([^\\\\/]+)\";\n  });\n\n  if (path.endsWith(\"*\")) {\n    paramNames.push(\"*\");\n    regexpSource += path === \"*\" || path === \"/*\" ? \"(.*)$\" // Already matched the initial /, just match the rest\n    : \"(?:\\\\/(.+)|\\\\/*)$\"; // Don't include the / in params[\"*\"]\n  } else {\n    regexpSource += end ? \"\\\\/*$\" // When matching to the end, ignore trailing slashes\n    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts\n    // parent routes to matching only their own words and nothing more, e.g. parent\n    // route \"/home\" should not match \"/home2\".\n    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,\n    // but do not consume the character in the matched path so they can match against\n    // nested paths.\n    \"(?:(?=[.~-]|%[0-9A-F]{2})|\\\\b|\\\\/|$)\";\n  }\n\n  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : \"i\");\n  return [matcher, paramNames];\n}\n\nfunction safelyDecodeURIComponent(value, paramName) {\n  try {\n    return decodeURIComponent(value);\n  } catch (error) {\n     true ? warning(false, \"The value for the URL param \\\"\" + paramName + \"\\\" will not be decoded because\" + (\" the string \\\"\" + value + \"\\\" is a malformed URL segment. This is probably\") + (\" due to a bad percent encoding (\" + error + \").\")) : 0;\n    return value;\n  }\n}\n/**\n * Returns a resolved path object relative to the given pathname.\n *\n * @see https://reactrouter.com/docs/en/v6/api#resolvepath\n */\n\n\nfunction resolvePath(to, fromPathname) {\n  if (fromPathname === void 0) {\n    fromPathname = \"/\";\n  }\n\n  let {\n    pathname: toPathname,\n    search = \"\",\n    hash = \"\"\n  } = typeof to === \"string\" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to) : to;\n  let pathname = toPathname ? toPathname.startsWith(\"/\") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;\n  return {\n    pathname,\n    search: normalizeSearch(search),\n    hash: normalizeHash(hash)\n  };\n}\n\nfunction resolvePathname(relativePath, fromPathname) {\n  let segments = fromPathname.replace(/\\/+$/, \"\").split(\"/\");\n  let relativeSegments = relativePath.split(\"/\");\n  relativeSegments.forEach(segment => {\n    if (segment === \"..\") {\n      // Keep the root \"\" segment so the pathname starts at /\n      if (segments.length > 1) segments.pop();\n    } else if (segment !== \".\") {\n      segments.push(segment);\n    }\n  });\n  return segments.length > 1 ? segments.join(\"/\") : \"/\";\n}\n\nfunction resolveTo(toArg, routePathnames, locationPathname) {\n  let to = typeof toArg === \"string\" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(toArg) : toArg;\n  let toPathname = toArg === \"\" || to.pathname === \"\" ? \"/\" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the\n  // route context. This is explained in `Note on `<Link to>` values` in our\n  // migration guide from v5 as a means of disambiguation between `to` values\n  // that begin with `/` and those that do not. However, this is problematic for\n  // `to` values that do not provide a pathname. `to` can simply be a search or\n  // hash string, in which case we should assume that the navigation is relative\n  // to the current location's pathname and *not* the route pathname.\n\n  let from;\n\n  if (toPathname == null) {\n    from = locationPathname;\n  } else {\n    let routePathnameIndex = routePathnames.length - 1;\n\n    if (toPathname.startsWith(\"..\")) {\n      let toSegments = toPathname.split(\"/\"); // Each leading .. segment means \"go up one route\" instead of \"go up one\n      // URL segment\".  This is a key difference from how <a href> works and a\n      // major reason we call this a \"to\" value instead of a \"href\".\n\n      while (toSegments[0] === \"..\") {\n        toSegments.shift();\n        routePathnameIndex -= 1;\n      }\n\n      to.pathname = toSegments.join(\"/\");\n    } // If there are more \"..\" segments than parent routes, resolve relative to\n    // the root / URL.\n\n\n    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : \"/\";\n  }\n\n  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.\n\n  if (toPathname && toPathname !== \"/\" && toPathname.endsWith(\"/\") && !path.pathname.endsWith(\"/\")) {\n    path.pathname += \"/\";\n  }\n\n  return path;\n}\nfunction getToPathname(to) {\n  // Empty strings should be treated the same as / paths\n  return to === \"\" || to.pathname === \"\" ? \"/\" : typeof to === \"string\" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to).pathname : to.pathname;\n}\nfunction stripBasename(pathname, basename) {\n  if (basename === \"/\") return pathname;\n\n  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {\n    return null;\n  }\n\n  let nextChar = pathname.charAt(basename.length);\n\n  if (nextChar && nextChar !== \"/\") {\n    // pathname does not start with basename/\n    return null;\n  }\n\n  return pathname.slice(basename.length) || \"/\";\n}\nconst joinPaths = paths => paths.join(\"/\").replace(/\\/\\/+/g, \"/\");\nconst normalizePathname = pathname => pathname.replace(/\\/+$/, \"\").replace(/^\\/*/, \"/\");\n\nconst normalizeSearch = search => !search || search === \"?\" ? \"\" : search.startsWith(\"?\") ? search : \"?\" + search;\n\nconst normalizeHash = hash => !hash || hash === \"#\" ? \"\" : hash.startsWith(\"#\") ? hash : \"#\" + hash;\n\n/**\n * Returns the full href for the given \"to\" value. This is useful for building\n * custom links that are also accessible and preserve right-click behavior.\n *\n * @see https://reactrouter.com/docs/en/v6/api#usehref\n */\n\nfunction useHref(to) {\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the\n  // router loaded. We can help them understand how to avoid that.\n  \"useHref() may be used only in the context of a <Router> component.\") : 0 : void 0;\n  let {\n    basename,\n    navigator\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);\n  let {\n    hash,\n    pathname,\n    search\n  } = useResolvedPath(to);\n  let joinedPathname = pathname;\n\n  if (basename !== \"/\") {\n    let toPathname = getToPathname(to);\n    let endsWithSlash = toPathname != null && toPathname.endsWith(\"/\");\n    joinedPathname = pathname === \"/\" ? basename + (endsWithSlash ? \"/\" : \"\") : joinPaths([basename, pathname]);\n  }\n\n  return navigator.createHref({\n    pathname: joinedPathname,\n    search,\n    hash\n  });\n}\n/**\n * Returns true if this component is a descendant of a <Router>.\n *\n * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext\n */\n\nfunction useInRouterContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext) != null;\n}\n/**\n * Returns the current location object, which represents the current URL in web\n * browsers.\n *\n * Note: If you're using this it may mean you're doing some of your own\n * \"routing\" in your app, and we'd like to know what your use case is. We may\n * be able to provide something higher-level to better suit your needs.\n *\n * @see https://reactrouter.com/docs/en/v6/api#uselocation\n */\n\nfunction useLocation() {\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the\n  // router loaded. We can help them understand how to avoid that.\n  \"useLocation() may be used only in the context of a <Router> component.\") : 0 : void 0;\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).location;\n}\n/**\n * Returns the current navigation action which describes how the router came to\n * the current location, either by a pop, push, or replace on the history stack.\n *\n * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype\n */\n\nfunction useNavigationType() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).navigationType;\n}\n/**\n * Returns true if the URL for the given \"to\" value matches the current URL.\n * This is useful for components that need to know \"active\" state, e.g.\n * <NavLink>.\n *\n * @see https://reactrouter.com/docs/en/v6/api#usematch\n */\n\nfunction useMatch(pattern) {\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the\n  // router loaded. We can help them understand how to avoid that.\n  \"useMatch() may be used only in the context of a <Router> component.\") : 0 : void 0;\n  let {\n    pathname\n  } = useLocation();\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);\n}\n/**\n * The interface for the navigate() function returned from useNavigate().\n */\n\n/**\n * Returns an imperative method for changing the location. Used by <Link>s, but\n * may also be used by other elements to change the location.\n *\n * @see https://reactrouter.com/docs/en/v6/api#usenavigate\n */\nfunction useNavigate() {\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the\n  // router loaded. We can help them understand how to avoid that.\n  \"useNavigate() may be used only in the context of a <Router> component.\") : 0 : void 0;\n  let {\n    basename,\n    navigator\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);\n  let {\n    matches\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);\n  let {\n    pathname: locationPathname\n  } = useLocation();\n  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));\n  let activeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    activeRef.current = true;\n  });\n  let navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (to, options) {\n    if (options === void 0) {\n      options = {};\n    }\n\n     true ? warning(activeRef.current, \"You should call navigate() in a React.useEffect(), not when \" + \"your component is first rendered.\") : 0;\n    if (!activeRef.current) return;\n\n    if (typeof to === \"number\") {\n      navigator.go(to);\n      return;\n    }\n\n    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);\n\n    if (basename !== \"/\") {\n      path.pathname = joinPaths([basename, path.pathname]);\n    }\n\n    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);\n  }, [basename, navigator, routePathnamesJson, locationPathname]);\n  return navigate;\n}\nconst OutletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/**\n * Returns the context (if provided) for the child route at this level of the route\n * hierarchy.\n * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext\n */\n\nfunction useOutletContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OutletContext);\n}\n/**\n * Returns the element for the child route at this level of the route\n * hierarchy. Used internally by <Outlet> to render child routes.\n *\n * @see https://reactrouter.com/docs/en/v6/api#useoutlet\n */\n\nfunction useOutlet(context) {\n  let outlet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext).outlet;\n\n  if (outlet) {\n    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(OutletContext.Provider, {\n      value: context\n    }, outlet);\n  }\n\n  return outlet;\n}\n/**\n * Returns an object of key/value pairs of the dynamic params from the current\n * URL that were matched by the route path.\n *\n * @see https://reactrouter.com/docs/en/v6/api#useparams\n */\n\nfunction useParams() {\n  let {\n    matches\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);\n  let routeMatch = matches[matches.length - 1];\n  return routeMatch ? routeMatch.params : {};\n}\n/**\n * Resolves the pathname of the given `to` value against the current location.\n *\n * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath\n */\n\nfunction useResolvedPath(to) {\n  let {\n    matches\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);\n  let {\n    pathname: locationPathname\n  } = useLocation();\n  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);\n}\n/**\n * Returns the element of the route that matched the current location, prepared\n * with the correct context to render the remainder of the route tree. Route\n * elements in the tree must render an <Outlet> to render their child route's\n * element.\n *\n * @see https://reactrouter.com/docs/en/v6/api#useroutes\n */\n\nfunction useRoutes(routes, locationArg) {\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the\n  // router loaded. We can help them understand how to avoid that.\n  \"useRoutes() may be used only in the context of a <Router> component.\") : 0 : void 0;\n  let {\n    matches: parentMatches\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);\n  let routeMatch = parentMatches[parentMatches.length - 1];\n  let parentParams = routeMatch ? routeMatch.params : {};\n  let parentPathname = routeMatch ? routeMatch.pathname : \"/\";\n  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : \"/\";\n  let parentRoute = routeMatch && routeMatch.route;\n\n  if (true) {\n    // You won't get a warning about 2 different <Routes> under a <Route>\n    // without a trailing *, but this is a best-effort warning anyway since we\n    // cannot even give the warning unless they land at the parent route.\n    //\n    // Example:\n    //\n    // <Routes>\n    //   {/* This route path MUST end with /* because otherwise\n    //       it will never match /blog/post/123 */}\n    //   <Route path=\"blog\" element={<Blog />} />\n    //   <Route path=\"blog/feed\" element={<BlogFeed />} />\n    // </Routes>\n    //\n    // function Blog() {\n    //   return (\n    //     <Routes>\n    //       <Route path=\"post/:id\" element={<Post />} />\n    //     </Routes>\n    //   );\n    // }\n    let parentPath = parentRoute && parentRoute.path || \"\";\n    warningOnce(parentPathname, !parentRoute || parentPath.endsWith(\"*\"), \"You rendered descendant <Routes> (or called `useRoutes()`) at \" + (\"\\\"\" + parentPathname + \"\\\" (under <Route path=\\\"\" + parentPath + \"\\\">) but the \") + \"parent route path has no trailing \\\"*\\\". This means if you navigate \" + \"deeper, the parent won't match anymore and therefore the child \" + \"routes will never render.\\n\\n\" + (\"Please change the parent <Route path=\\\"\" + parentPath + \"\\\"> to <Route \") + (\"path=\\\"\" + (parentPath === \"/\" ? \"*\" : parentPath + \"/*\") + \"\\\">.\"));\n  }\n\n  let locationFromContext = useLocation();\n  let location;\n\n  if (locationArg) {\n    var _parsedLocationArg$pa;\n\n    let parsedLocationArg = typeof locationArg === \"string\" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;\n    !(parentPathnameBase === \"/\" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? invariant(false, \"When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, \" + \"the location pathname must begin with the portion of the URL pathname that was \" + (\"matched by all parent routes. The current pathname base is \\\"\" + parentPathnameBase + \"\\\" \") + (\"but pathname \\\"\" + parsedLocationArg.pathname + \"\\\" was given in the `location` prop.\")) : 0 : void 0;\n    location = parsedLocationArg;\n  } else {\n    location = locationFromContext;\n  }\n\n  let pathname = location.pathname || \"/\";\n  let remainingPathname = parentPathnameBase === \"/\" ? pathname : pathname.slice(parentPathnameBase.length) || \"/\";\n  let matches = matchRoutes(routes, {\n    pathname: remainingPathname\n  });\n\n  if (true) {\n     true ? warning(parentRoute || matches != null, \"No routes matched location \\\"\" + location.pathname + location.search + location.hash + \"\\\" \") : 0;\n     true ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, \"Matched leaf route at location \\\"\" + location.pathname + location.search + location.hash + \"\\\" does not have an element. \" + \"This means it will render an <Outlet /> with a null value by default resulting in an \\\"empty\\\" page.\") : 0;\n  }\n\n  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {\n    params: Object.assign({}, parentParams, match.params),\n    pathname: joinPaths([parentPathnameBase, match.pathname]),\n    pathnameBase: match.pathnameBase === \"/\" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])\n  })), parentMatches);\n}\nfunction _renderMatches(matches, parentMatches) {\n  if (parentMatches === void 0) {\n    parentMatches = [];\n  }\n\n  if (matches == null) return null;\n  return matches.reduceRight((outlet, match, index) => {\n    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(RouteContext.Provider, {\n      children: match.route.element !== undefined ? match.route.element : outlet,\n      value: {\n        outlet,\n        matches: parentMatches.concat(matches.slice(0, index + 1))\n      }\n    });\n  }, null);\n}\n\n/**\n * A <Router> that stores all entries in memory.\n *\n * @see https://reactrouter.com/docs/en/v6/api#memoryrouter\n */\nfunction MemoryRouter(_ref) {\n  let {\n    basename,\n    children,\n    initialEntries,\n    initialIndex\n  } = _ref;\n  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  if (historyRef.current == null) {\n    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({\n      initialEntries,\n      initialIndex\n    });\n  }\n\n  let history = historyRef.current;\n  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    action: history.action,\n    location: history.location\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => history.listen(setState), [history]);\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Router, {\n    basename: basename,\n    children: children,\n    location: state.location,\n    navigationType: state.action,\n    navigator: history\n  });\n}\n\n/**\n * Changes the current location.\n *\n * Note: This API is mostly useful in React.Component subclasses that are not\n * able to use hooks. In functional components, we recommend you use the\n * `useNavigate` hook instead.\n *\n * @see https://reactrouter.com/docs/en/v6/api#navigate\n */\nfunction Navigate(_ref2) {\n  let {\n    to,\n    replace,\n    state\n  } = _ref2;\n  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of\n  // the router loaded. We can help them understand how to avoid that.\n  \"<Navigate> may be used only in the context of a <Router> component.\") : 0 : void 0;\n   true ? warning(!(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext).static, \"<Navigate> must not be used on the initial render in a <StaticRouter>. \" + \"This is a no-op, but you should modify your code so the <Navigate> is \" + \"only ever rendered in response to some user interaction or state change.\") : 0;\n  let navigate = useNavigate();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    navigate(to, {\n      replace,\n      state\n    });\n  });\n  return null;\n}\n\n/**\n * Renders the child route's element, if there is one.\n *\n * @see https://reactrouter.com/docs/en/v6/api#outlet\n */\nfunction Outlet(props) {\n  return useOutlet(props.context);\n}\n\n/**\n * Declares an element that should be rendered at a certain URL path.\n *\n * @see https://reactrouter.com/docs/en/v6/api#route\n */\nfunction Route(_props) {\n    true ? invariant(false, \"A <Route> is only ever to be used as the child of <Routes> element, \" + \"never rendered directly. Please wrap your <Route> in a <Routes>.\") : 0 ;\n}\n\n/**\n * Provides location context for the rest of the app.\n *\n * Note: You usually won't render a <Router> directly. Instead, you'll render a\n * router that is more specific to your environment such as a <BrowserRouter>\n * in web browsers or a <StaticRouter> for server rendering.\n *\n * @see https://reactrouter.com/docs/en/v6/api#router\n */\nfunction Router(_ref3) {\n  let {\n    basename: basenameProp = \"/\",\n    children = null,\n    location: locationProp,\n    navigationType = history__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,\n    navigator,\n    static: staticProp = false\n  } = _ref3;\n  !!useInRouterContext() ?  true ? invariant(false, \"You cannot render a <Router> inside another <Router>.\" + \" You should never have more than one in your app.\") : 0 : void 0;\n  let basename = normalizePathname(basenameProp);\n  let navigationContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n    basename,\n    navigator,\n    static: staticProp\n  }), [basename, navigator, staticProp]);\n\n  if (typeof locationProp === \"string\") {\n    locationProp = (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);\n  }\n\n  let {\n    pathname = \"/\",\n    search = \"\",\n    hash = \"\",\n    state = null,\n    key = \"default\"\n  } = locationProp;\n  let location = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {\n    let trailingPathname = stripBasename(pathname, basename);\n\n    if (trailingPathname == null) {\n      return null;\n    }\n\n    return {\n      pathname: trailingPathname,\n      search,\n      hash,\n      state,\n      key\n    };\n  }, [basename, pathname, search, hash, state, key]);\n   true ? warning(location != null, \"<Router basename=\\\"\" + basename + \"\\\"> is not able to match the URL \" + (\"\\\"\" + pathname + search + hash + \"\\\" because it does not start with the \") + \"basename, so the <Router> won't render anything.\") : 0;\n\n  if (location == null) {\n    return null;\n  }\n\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavigationContext.Provider, {\n    value: navigationContext\n  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(LocationContext.Provider, {\n    children: children,\n    value: {\n      location,\n      navigationType\n    }\n  }));\n}\n\n/**\n * A container for a nested tree of <Route> elements that renders the branch\n * that best matches the current location.\n *\n * @see https://reactrouter.com/docs/en/v6/api#routes\n */\nfunction Routes(_ref4) {\n  let {\n    children,\n    location\n  } = _ref4;\n  return useRoutes(createRoutesFromChildren(children), location);\n} ///////////////////////////////////////////////////////////////////////////////\n// UTILS\n///////////////////////////////////////////////////////////////////////////////\n\n/**\n * Creates a route config from a React \"children\" object, which is usually\n * either a `<Route>` element or an array of them. Used internally by\n * `<Routes>` to create a route config from its children.\n *\n * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren\n */\n\nfunction createRoutesFromChildren(children) {\n  let routes = [];\n  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, element => {\n    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element)) {\n      // Ignore non-elements. This allows people to more easily inline\n      // conditionals in their route config.\n      return;\n    }\n\n    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {\n      // Transparently support React.Fragment and its children.\n      routes.push.apply(routes, createRoutesFromChildren(element.props.children));\n      return;\n    }\n\n    !(element.type === Route) ?  true ? invariant(false, \"[\" + (typeof element.type === \"string\" ? element.type : element.type.name) + \"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>\") : 0 : void 0;\n    let route = {\n      caseSensitive: element.props.caseSensitive,\n      element: element.props.element,\n      index: element.props.index,\n      path: element.props.path\n    };\n\n    if (element.props.children) {\n      route.children = createRoutesFromChildren(element.props.children);\n    }\n\n    routes.push(route);\n  });\n  return routes;\n}\n/**\n * Renders the result of `matchRoutes()` into a React element.\n */\n\nfunction renderMatches(matches) {\n  return _renderMatches(matches);\n}\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react-router/index.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * @license React\n * react.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n\n          'use strict';\n\n/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\nif (\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===\n    'function'\n) {\n  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\n}\n          var ReactVersion = '18.1.0';\n\n// -----------------------------------------------------------------------------\n\nvar enableScopeAPI = false; // Experimental Create Event Handle API.\nvar enableCacheElement = false;\nvar enableTransitionTracing = false; // No known bugs, but needs performance testing\n\nvar enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber\n// stuff. Intended to enable React core members to more easily debug scheduling\n// issues in DEV builds.\n\nvar enableDebugTracing = false; // Track which Fiber(s) schedule render work.\n\n// ATTENTION\n\nvar REACT_ELEMENT_TYPE =  Symbol.for('react.element');\nvar REACT_PORTAL_TYPE =  Symbol.for('react.portal');\nvar REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');\nvar REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');\nvar REACT_PROFILER_TYPE =  Symbol.for('react.profiler');\nvar REACT_PROVIDER_TYPE =  Symbol.for('react.provider');\nvar REACT_CONTEXT_TYPE =  Symbol.for('react.context');\nvar REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');\nvar REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');\nvar REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');\nvar REACT_MEMO_TYPE =  Symbol.for('react.memo');\nvar REACT_LAZY_TYPE =  Symbol.for('react.lazy');\nvar REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');\nvar MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;\nvar FAUX_ITERATOR_SYMBOL = '@@iterator';\nfunction getIteratorFn(maybeIterable) {\n  if (maybeIterable === null || typeof maybeIterable !== 'object') {\n    return null;\n  }\n\n  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n\n  if (typeof maybeIterator === 'function') {\n    return maybeIterator;\n  }\n\n  return null;\n}\n\n/**\n * Keeps track of the current dispatcher.\n */\nvar ReactCurrentDispatcher = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\n/**\n * Keeps track of the current batch's configuration such as how long an update\n * should suspend for if it needs to.\n */\nvar ReactCurrentBatchConfig = {\n  transition: null\n};\n\nvar ReactCurrentActQueue = {\n  current: null,\n  // Used to reproduce behavior of `batchedUpdates` in legacy mode.\n  isBatchingLegacy: false,\n  didScheduleLegacyUpdate: false\n};\n\n/**\n * Keeps track of the current owner.\n *\n * The current owner is the component who should own any components that are\n * currently being constructed.\n */\nvar ReactCurrentOwner = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\nvar ReactDebugCurrentFrame = {};\nvar currentExtraStackFrame = null;\nfunction setExtraStackFrame(stack) {\n  {\n    currentExtraStackFrame = stack;\n  }\n}\n\n{\n  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {\n    {\n      currentExtraStackFrame = stack;\n    }\n  }; // Stack implementation injected by the current renderer.\n\n\n  ReactDebugCurrentFrame.getCurrentStack = null;\n\n  ReactDebugCurrentFrame.getStackAddendum = function () {\n    var stack = ''; // Add an extra top frame while an element is being validated\n\n    if (currentExtraStackFrame) {\n      stack += currentExtraStackFrame;\n    } // Delegate to the injected renderer-specific implementation\n\n\n    var impl = ReactDebugCurrentFrame.getCurrentStack;\n\n    if (impl) {\n      stack += impl() || '';\n    }\n\n    return stack;\n  };\n}\n\nvar ReactSharedInternals = {\n  ReactCurrentDispatcher: ReactCurrentDispatcher,\n  ReactCurrentBatchConfig: ReactCurrentBatchConfig,\n  ReactCurrentOwner: ReactCurrentOwner\n};\n\n{\n  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;\n  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;\n}\n\n// by calls to these methods by a Babel plugin.\n//\n// In PROD (or in packages without access to React internals),\n// they are left as they are instead.\n\nfunction warn(format) {\n  {\n    {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      printWarning('warn', format, args);\n    }\n  }\n}\nfunction error(format) {\n  {\n    {\n      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      printWarning('error', format, args);\n    }\n  }\n}\n\nfunction printWarning(level, format, args) {\n  // When changing this logic, you might want to also\n  // update consoleWithStackDev.www.js as well.\n  {\n    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n    var stack = ReactDebugCurrentFrame.getStackAddendum();\n\n    if (stack !== '') {\n      format += '%s';\n      args = args.concat([stack]);\n    } // eslint-disable-next-line react-internal/safe-string-coercion\n\n\n    var argsWithFormat = args.map(function (item) {\n      return String(item);\n    }); // Careful: RN currently depends on this prefix\n\n    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\n    // breaks IE9: https://github.com/facebook/react/issues/13610\n    // eslint-disable-next-line react-internal/no-production-logging\n\n    Function.prototype.apply.call(console[level], console, argsWithFormat);\n  }\n}\n\nvar didWarnStateUpdateForUnmountedComponent = {};\n\nfunction warnNoop(publicInstance, callerName) {\n  {\n    var _constructor = publicInstance.constructor;\n    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\n    var warningKey = componentName + \".\" + callerName;\n\n    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\n      return;\n    }\n\n    error(\"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\n\n    didWarnStateUpdateForUnmountedComponent[warningKey] = true;\n  }\n}\n/**\n * This is the abstract API for an update queue.\n */\n\n\nvar ReactNoopUpdateQueue = {\n  /**\n   * Checks whether or not this composite component is mounted.\n   * @param {ReactClass} publicInstance The instance we want to test.\n   * @return {boolean} True if mounted, false otherwise.\n   * @protected\n   * @final\n   */\n  isMounted: function (publicInstance) {\n    return false;\n  },\n\n  /**\n   * Forces an update. This should only be invoked when it is known with\n   * certainty that we are **not** in a DOM transaction.\n   *\n   * You may want to call this when you know that some deeper aspect of the\n   * component's state has changed but `setState` was not called.\n   *\n   * This will not invoke `shouldComponentUpdate`, but it will invoke\n   * `componentWillUpdate` and `componentDidUpdate`.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueForceUpdate: function (publicInstance, callback, callerName) {\n    warnNoop(publicInstance, 'forceUpdate');\n  },\n\n  /**\n   * Replaces all of the state. Always use this or `setState` to mutate state.\n   * You should treat `this.state` as immutable.\n   *\n   * There is no guarantee that `this.state` will be immediately updated, so\n   * accessing `this.state` after calling this method may return the old value.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} completeState Next state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\n    warnNoop(publicInstance, 'replaceState');\n  },\n\n  /**\n   * Sets a subset of the state. This only exists because _pendingState is\n   * internal. This provides a merging strategy that is not available to deep\n   * properties which is confusing. TODO: Expose pendingState or don't use it\n   * during the merge.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} partialState Next partial state to be merged with state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} Name of the calling function in the public API.\n   * @internal\n   */\n  enqueueSetState: function (publicInstance, partialState, callback, callerName) {\n    warnNoop(publicInstance, 'setState');\n  }\n};\n\nvar assign = Object.assign;\n\nvar emptyObject = {};\n\n{\n  Object.freeze(emptyObject);\n}\n/**\n * Base class helpers for the updating state of a component.\n */\n\n\nfunction Component(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the\n  // renderer.\n\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nComponent.prototype.isReactComponent = {};\n/**\n * Sets a subset of the state. Always use this to mutate\n * state. You should treat `this.state` as immutable.\n *\n * There is no guarantee that `this.state` will be immediately updated, so\n * accessing `this.state` after calling this method may return the old value.\n *\n * There is no guarantee that calls to `setState` will run synchronously,\n * as they may eventually be batched together.  You can provide an optional\n * callback that will be executed when the call to setState is actually\n * completed.\n *\n * When a function is provided to setState, it will be called at some point in\n * the future (not synchronously). It will be called with the up to date\n * component arguments (state, props, context). These values can be different\n * from this.* because your function may be called after receiveProps but before\n * shouldComponentUpdate, and this new state, props, and context will not yet be\n * assigned to this.\n *\n * @param {object|function} partialState Next partial state or function to\n *        produce next partial state to be merged with current state.\n * @param {?function} callback Called after state is updated.\n * @final\n * @protected\n */\n\nComponent.prototype.setState = function (partialState, callback) {\n  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {\n    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');\n  }\n\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n/**\n * Forces an update. This should only be invoked when it is known with\n * certainty that we are **not** in a DOM transaction.\n *\n * You may want to call this when you know that some deeper aspect of the\n * component's state has changed but `setState` was not called.\n *\n * This will not invoke `shouldComponentUpdate`, but it will invoke\n * `componentWillUpdate` and `componentDidUpdate`.\n *\n * @param {?function} callback Called after update is complete.\n * @final\n * @protected\n */\n\n\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n};\n/**\n * Deprecated APIs. These APIs used to exist on classic React classes but since\n * we would like to deprecate them, we're not going to move them over to this\n * modern base class. Instead, we define a getter that warns if it's accessed.\n */\n\n\n{\n  var deprecatedAPIs = {\n    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\n    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\n  };\n\n  var defineDeprecationWarning = function (methodName, info) {\n    Object.defineProperty(Component.prototype, methodName, {\n      get: function () {\n        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\n\n        return undefined;\n      }\n    });\n  };\n\n  for (var fnName in deprecatedAPIs) {\n    if (deprecatedAPIs.hasOwnProperty(fnName)) {\n      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    }\n  }\n}\n\nfunction ComponentDummy() {}\n\nComponentDummy.prototype = Component.prototype;\n/**\n * Convenience component with default shallow equality check for sCU.\n */\n\nfunction PureComponent(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nvar pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\npureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.\n\nassign(pureComponentPrototype, Component.prototype);\npureComponentPrototype.isPureReactComponent = true;\n\n// an immutable object with a single mutable value\nfunction createRef() {\n  var refObject = {\n    current: null\n  };\n\n  {\n    Object.seal(refObject);\n  }\n\n  return refObject;\n}\n\nvar isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare\n\nfunction isArray(a) {\n  return isArrayImpl(a);\n}\n\n/*\n * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol\n * and Temporal.* types. See https://github.com/facebook/react/pull/22064.\n *\n * The functions in this module will throw an easier-to-understand,\n * easier-to-debug exception with a clear errors message message explaining the\n * problem. (Instead of a confusing exception thrown inside the implementation\n * of the `value` object).\n */\n// $FlowFixMe only called in DEV, so void return is not possible.\nfunction typeName(value) {\n  {\n    // toStringTag is needed for namespaced types like Temporal.Instant\n    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;\n    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';\n    return type;\n  }\n} // $FlowFixMe only called in DEV, so void return is not possible.\n\n\nfunction willCoercionThrow(value) {\n  {\n    try {\n      testStringCoercion(value);\n      return false;\n    } catch (e) {\n      return true;\n    }\n  }\n}\n\nfunction testStringCoercion(value) {\n  // If you ended up here by following an exception call stack, here's what's\n  // happened: you supplied an object or symbol value to React (as a prop, key,\n  // DOM attribute, CSS property, string ref, etc.) and when React tried to\n  // coerce it to a string using `'' + value`, an exception was thrown.\n  //\n  // The most common types that will cause this exception are `Symbol` instances\n  // and Temporal objects like `Temporal.Instant`. But any object that has a\n  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this\n  // exception. (Library authors do this to prevent users from using built-in\n  // numeric operators like `+` or comparison operators like `>=` because custom\n  // methods are needed to perform accurate arithmetic or comparison.)\n  //\n  // To fix the problem, coerce this object or symbol value to a string before\n  // passing it to React. The most reliable way is usually `String(value)`.\n  //\n  // To find which value is throwing, check the browser or debugger console.\n  // Before this exception was thrown, there should be `console.error` output\n  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the\n  // problem and how that type was used: key, atrribute, input value prop, etc.\n  // In most cases, this console output also shows the component and its\n  // ancestor components where the exception happened.\n  //\n  // eslint-disable-next-line react-internal/safe-string-coercion\n  return '' + value;\n}\nfunction checkKeyStringCoercion(value) {\n  {\n    if (willCoercionThrow(value)) {\n      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));\n\n      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)\n    }\n  }\n}\n\nfunction getWrappedName(outerType, innerType, wrapperName) {\n  var displayName = outerType.displayName;\n\n  if (displayName) {\n    return displayName;\n  }\n\n  var functionName = innerType.displayName || innerType.name || '';\n  return functionName !== '' ? wrapperName + \"(\" + functionName + \")\" : wrapperName;\n} // Keep in sync with react-reconciler/getComponentNameFromFiber\n\n\nfunction getContextName(type) {\n  return type.displayName || 'Context';\n} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.\n\n\nfunction getComponentNameFromType(type) {\n  if (type == null) {\n    // Host root, text node or just invalid type.\n    return null;\n  }\n\n  {\n    if (typeof type.tag === 'number') {\n      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');\n    }\n  }\n\n  if (typeof type === 'function') {\n    return type.displayName || type.name || null;\n  }\n\n  if (typeof type === 'string') {\n    return type;\n  }\n\n  switch (type) {\n    case REACT_FRAGMENT_TYPE:\n      return 'Fragment';\n\n    case REACT_PORTAL_TYPE:\n      return 'Portal';\n\n    case REACT_PROFILER_TYPE:\n      return 'Profiler';\n\n    case REACT_STRICT_MODE_TYPE:\n      return 'StrictMode';\n\n    case REACT_SUSPENSE_TYPE:\n      return 'Suspense';\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return 'SuspenseList';\n\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_CONTEXT_TYPE:\n        var context = type;\n        return getContextName(context) + '.Consumer';\n\n      case REACT_PROVIDER_TYPE:\n        var provider = type;\n        return getContextName(provider._context) + '.Provider';\n\n      case REACT_FORWARD_REF_TYPE:\n        return getWrappedName(type, type.render, 'ForwardRef');\n\n      case REACT_MEMO_TYPE:\n        var outerName = type.displayName || null;\n\n        if (outerName !== null) {\n          return outerName;\n        }\n\n        return getComponentNameFromType(type.type) || 'Memo';\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            return getComponentNameFromType(init(payload));\n          } catch (x) {\n            return null;\n          }\n        }\n\n      // eslint-disable-next-line no-fallthrough\n    }\n  }\n\n  return null;\n}\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\n\nvar RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true\n};\nvar specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;\n\n{\n  didWarnAboutStringRefs = {};\n}\n\nfunction hasValidRef(config) {\n  {\n    if (hasOwnProperty.call(config, 'ref')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.ref !== undefined;\n}\n\nfunction hasValidKey(config) {\n  {\n    if (hasOwnProperty.call(config, 'key')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.key !== undefined;\n}\n\nfunction defineKeyPropWarningGetter(props, displayName) {\n  var warnAboutAccessingKey = function () {\n    {\n      if (!specialPropKeyWarningShown) {\n        specialPropKeyWarningShown = true;\n\n        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingKey.isReactWarning = true;\n  Object.defineProperty(props, 'key', {\n    get: warnAboutAccessingKey,\n    configurable: true\n  });\n}\n\nfunction defineRefPropWarningGetter(props, displayName) {\n  var warnAboutAccessingRef = function () {\n    {\n      if (!specialPropRefWarningShown) {\n        specialPropRefWarningShown = true;\n\n        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingRef.isReactWarning = true;\n  Object.defineProperty(props, 'ref', {\n    get: warnAboutAccessingRef,\n    configurable: true\n  });\n}\n\nfunction warnIfStringRefCannotBeAutoConverted(config) {\n  {\n    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {\n      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);\n\n      if (!didWarnAboutStringRefs[componentName]) {\n        error('Component \"%s\" contains the string ref \"%s\". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);\n\n        didWarnAboutStringRefs[componentName] = true;\n      }\n    }\n  }\n}\n/**\n * Factory method to create a new React element. This no longer adheres to\n * the class pattern, so do not use new to call it. Also, instanceof check\n * will not work. Instead test $$typeof field against Symbol.for('react.element') to check\n * if something is a React Element.\n *\n * @param {*} type\n * @param {*} props\n * @param {*} key\n * @param {string|object} ref\n * @param {*} owner\n * @param {*} self A *temporary* helper to detect places where `this` is\n * different from the `owner` when React.createElement is called, so that we\n * can warn. We want to get rid of owner and replace string `ref`s with arrow\n * functions, and as long as `this` and owner are the same, there will be no\n * change in behavior.\n * @param {*} source An annotation object (added by a transpiler or otherwise)\n * indicating filename, line number, and/or other information.\n * @internal\n */\n\n\nvar ReactElement = function (type, key, ref, self, source, owner, props) {\n  var element = {\n    // This tag allows us to uniquely identify this as a React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n    // Built-in properties that belong on the element\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n    // Record the component responsible for creating this element.\n    _owner: owner\n  };\n\n  {\n    // The validation flag is currently mutative. We put it on\n    // an external backing store so that we can freeze the whole object.\n    // This can be replaced with a WeakMap once they are implemented in\n    // commonly used development environments.\n    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\n    // the validation flag non-enumerable (where possible, which should\n    // include every environment we run tests in), so the test framework\n    // ignores it.\n\n    Object.defineProperty(element._store, 'validated', {\n      configurable: false,\n      enumerable: false,\n      writable: true,\n      value: false\n    }); // self and source are DEV only properties.\n\n    Object.defineProperty(element, '_self', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: self\n    }); // Two elements created in two different places should be considered\n    // equal for testing purposes and therefore we hide it from enumeration.\n\n    Object.defineProperty(element, '_source', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: source\n    });\n\n    if (Object.freeze) {\n      Object.freeze(element.props);\n      Object.freeze(element);\n    }\n  }\n\n  return element;\n};\n/**\n * Create and return a new ReactElement of the given type.\n * See https://reactjs.org/docs/react-api.html#createelement\n */\n\nfunction createElement(type, config, children) {\n  var propName; // Reserved names are extracted\n\n  var props = {};\n  var key = null;\n  var ref = null;\n  var self = null;\n  var source = null;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      ref = config.ref;\n\n      {\n        warnIfStringRefCannotBeAutoConverted(config);\n      }\n    }\n\n    if (hasValidKey(config)) {\n      {\n        checkKeyStringCoercion(config.key);\n      }\n\n      key = '' + config.key;\n    }\n\n    self = config.__self === undefined ? null : config.__self;\n    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        props[propName] = config[propName];\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    {\n      if (Object.freeze) {\n        Object.freeze(childArray);\n      }\n    }\n\n    props.children = childArray;\n  } // Resolve default props\n\n\n  if (type && type.defaultProps) {\n    var defaultProps = type.defaultProps;\n\n    for (propName in defaultProps) {\n      if (props[propName] === undefined) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  }\n\n  {\n    if (key || ref) {\n      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n\n      if (key) {\n        defineKeyPropWarningGetter(props, displayName);\n      }\n\n      if (ref) {\n        defineRefPropWarningGetter(props, displayName);\n      }\n    }\n  }\n\n  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n}\nfunction cloneAndReplaceKey(oldElement, newKey) {\n  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\n  return newElement;\n}\n/**\n * Clone and return a new ReactElement using element as the starting point.\n * See https://reactjs.org/docs/react-api.html#cloneelement\n */\n\nfunction cloneElement(element, config, children) {\n  if (element === null || element === undefined) {\n    throw new Error(\"React.cloneElement(...): The argument must be a React element, but you passed \" + element + \".\");\n  }\n\n  var propName; // Original props are copied\n\n  var props = assign({}, element.props); // Reserved names are extracted\n\n  var key = element.key;\n  var ref = element.ref; // Self is preserved since the owner is preserved.\n\n  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a\n  // transpiler, and the original source is probably a better indicator of the\n  // true owner.\n\n  var source = element._source; // Owner will be preserved, unless ref is overridden\n\n  var owner = element._owner;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      // Silently steal the ref from the parent.\n      ref = config.ref;\n      owner = ReactCurrentOwner.current;\n    }\n\n    if (hasValidKey(config)) {\n      {\n        checkKeyStringCoercion(config.key);\n      }\n\n      key = '' + config.key;\n    } // Remaining properties override existing props\n\n\n    var defaultProps;\n\n    if (element.type && element.type.defaultProps) {\n      defaultProps = element.type.defaultProps;\n    }\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        if (config[propName] === undefined && defaultProps !== undefined) {\n          // Resolve default props\n          props[propName] = defaultProps[propName];\n        } else {\n          props[propName] = config[propName];\n        }\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    props.children = childArray;\n  }\n\n  return ReactElement(element.type, key, ref, self, source, owner, props);\n}\n/**\n * Verifies the object is a ReactElement.\n * See https://reactjs.org/docs/react-api.html#isvalidelement\n * @param {?object} object\n * @return {boolean} True if `object` is a ReactElement.\n * @final\n */\n\nfunction isValidElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\n\nvar SEPARATOR = '.';\nvar SUBSEPARATOR = ':';\n/**\n * Escape and wrap key so it is safe to use as a reactid\n *\n * @param {string} key to be escaped.\n * @return {string} the escaped key.\n */\n\nfunction escape(key) {\n  var escapeRegex = /[=:]/g;\n  var escaperLookup = {\n    '=': '=0',\n    ':': '=2'\n  };\n  var escapedString = key.replace(escapeRegex, function (match) {\n    return escaperLookup[match];\n  });\n  return '$' + escapedString;\n}\n/**\n * TODO: Test that a single child and an array with one item have the same key\n * pattern.\n */\n\n\nvar didWarnAboutMaps = false;\nvar userProvidedKeyEscapeRegex = /\\/+/g;\n\nfunction escapeUserProvidedKey(text) {\n  return text.replace(userProvidedKeyEscapeRegex, '$&/');\n}\n/**\n * Generate a key string that identifies a element within a set.\n *\n * @param {*} element A element that could contain a manual key.\n * @param {number} index Index that is used if a manual key is not provided.\n * @return {string}\n */\n\n\nfunction getElementKey(element, index) {\n  // Do some typechecking here since we call this blindly. We want to ensure\n  // that we don't block potential future ES APIs.\n  if (typeof element === 'object' && element !== null && element.key != null) {\n    // Explicit key\n    {\n      checkKeyStringCoercion(element.key);\n    }\n\n    return escape('' + element.key);\n  } // Implicit key determined by the index in the set\n\n\n  return index.toString(36);\n}\n\nfunction mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n  var type = typeof children;\n\n  if (type === 'undefined' || type === 'boolean') {\n    // All of the above are perceived as null.\n    children = null;\n  }\n\n  var invokeCallback = false;\n\n  if (children === null) {\n    invokeCallback = true;\n  } else {\n    switch (type) {\n      case 'string':\n      case 'number':\n        invokeCallback = true;\n        break;\n\n      case 'object':\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = true;\n        }\n\n    }\n  }\n\n  if (invokeCallback) {\n    var _child = children;\n    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array\n    // so that it's consistent if the number of children grows:\n\n    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;\n\n    if (isArray(mappedChild)) {\n      var escapedChildKey = '';\n\n      if (childKey != null) {\n        escapedChildKey = escapeUserProvidedKey(childKey) + '/';\n      }\n\n      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {\n        return c;\n      });\n    } else if (mappedChild != null) {\n      if (isValidElement(mappedChild)) {\n        {\n          // The `if` statement here prevents auto-disabling of the safe\n          // coercion ESLint rule, so we must manually disable it below.\n          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key\n          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {\n            checkKeyStringCoercion(mappedChild.key);\n          }\n        }\n\n        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as\n        // traverseAllChildren used to do for objects as children\n        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key\n        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number\n        // eslint-disable-next-line react-internal/safe-string-coercion\n        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);\n      }\n\n      array.push(mappedChild);\n    }\n\n    return 1;\n  }\n\n  var child;\n  var nextName;\n  var subtreeCount = 0; // Count of children found in the current subtree.\n\n  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\n\n  if (isArray(children)) {\n    for (var i = 0; i < children.length; i++) {\n      child = children[i];\n      nextName = nextNamePrefix + getElementKey(child, i);\n      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n    }\n  } else {\n    var iteratorFn = getIteratorFn(children);\n\n    if (typeof iteratorFn === 'function') {\n      var iterableChildren = children;\n\n      {\n        // Warn about using Maps as children\n        if (iteratorFn === iterableChildren.entries) {\n          if (!didWarnAboutMaps) {\n            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');\n          }\n\n          didWarnAboutMaps = true;\n        }\n      }\n\n      var iterator = iteratorFn.call(iterableChildren);\n      var step;\n      var ii = 0;\n\n      while (!(step = iterator.next()).done) {\n        child = step.value;\n        nextName = nextNamePrefix + getElementKey(child, ii++);\n        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n      }\n    } else if (type === 'object') {\n      // eslint-disable-next-line react-internal/safe-string-coercion\n      var childrenString = String(children);\n      throw new Error(\"Objects are not valid as a React child (found: \" + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + \"). \" + 'If you meant to render a collection of children, use an array ' + 'instead.');\n    }\n  }\n\n  return subtreeCount;\n}\n\n/**\n * Maps children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenmap\n *\n * The provided mapFunction(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} func The map function.\n * @param {*} context Context for mapFunction.\n * @return {object} Object containing the ordered map of results.\n */\nfunction mapChildren(children, func, context) {\n  if (children == null) {\n    return children;\n  }\n\n  var result = [];\n  var count = 0;\n  mapIntoArray(children, result, '', '', function (child) {\n    return func.call(context, child, count++);\n  });\n  return result;\n}\n/**\n * Count the number of children that are typically specified as\n * `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrencount\n *\n * @param {?*} children Children tree container.\n * @return {number} The number of children.\n */\n\n\nfunction countChildren(children) {\n  var n = 0;\n  mapChildren(children, function () {\n    n++; // Don't return anything\n  });\n  return n;\n}\n\n/**\n * Iterates through children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} forEachFunc\n * @param {*} forEachContext Context for forEachContext.\n */\nfunction forEachChildren(children, forEachFunc, forEachContext) {\n  mapChildren(children, function () {\n    forEachFunc.apply(this, arguments); // Don't return anything.\n  }, forEachContext);\n}\n/**\n * Flatten a children object (typically specified as `props.children`) and\n * return an array with appropriately re-keyed children.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\n */\n\n\nfunction toArray(children) {\n  return mapChildren(children, function (child) {\n    return child;\n  }) || [];\n}\n/**\n * Returns the first child in a collection of children and verifies that there\n * is only one child in the collection.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenonly\n *\n * The current implementation of this function assumes that a single child gets\n * passed without a wrapper, but the purpose of this helper function is to\n * abstract away the particular structure of children.\n *\n * @param {?object} children Child collection structure.\n * @return {ReactElement} The first and only `ReactElement` contained in the\n * structure.\n */\n\n\nfunction onlyChild(children) {\n  if (!isValidElement(children)) {\n    throw new Error('React.Children.only expected to receive a single React element child.');\n  }\n\n  return children;\n}\n\nfunction createContext(defaultValue) {\n  // TODO: Second argument used to be an optional `calculateChangedBits`\n  // function. Warn to reserve for future use?\n  var context = {\n    $$typeof: REACT_CONTEXT_TYPE,\n    // As a workaround to support multiple concurrent renderers, we categorize\n    // some renderers as primary and others as secondary. We only expect\n    // there to be two concurrent renderers at most: React Native (primary) and\n    // Fabric (secondary); React DOM (primary) and React ART (secondary).\n    // Secondary renderers store their context values on separate fields.\n    _currentValue: defaultValue,\n    _currentValue2: defaultValue,\n    // Used to track how many concurrent renderers this context currently\n    // supports within in a single renderer. Such as parallel server rendering.\n    _threadCount: 0,\n    // These are circular\n    Provider: null,\n    Consumer: null,\n    // Add these to use same hidden class in VM as ServerContext\n    _defaultValue: null,\n    _globalName: null\n  };\n  context.Provider = {\n    $$typeof: REACT_PROVIDER_TYPE,\n    _context: context\n  };\n  var hasWarnedAboutUsingNestedContextConsumers = false;\n  var hasWarnedAboutUsingConsumerProvider = false;\n  var hasWarnedAboutDisplayNameOnConsumer = false;\n\n  {\n    // A separate object, but proxies back to the original context object for\n    // backwards compatibility. It has a different $$typeof, so we can properly\n    // warn for the incorrect usage of Context as a Consumer.\n    var Consumer = {\n      $$typeof: REACT_CONTEXT_TYPE,\n      _context: context\n    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here\n\n    Object.defineProperties(Consumer, {\n      Provider: {\n        get: function () {\n          if (!hasWarnedAboutUsingConsumerProvider) {\n            hasWarnedAboutUsingConsumerProvider = true;\n\n            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');\n          }\n\n          return context.Provider;\n        },\n        set: function (_Provider) {\n          context.Provider = _Provider;\n        }\n      },\n      _currentValue: {\n        get: function () {\n          return context._currentValue;\n        },\n        set: function (_currentValue) {\n          context._currentValue = _currentValue;\n        }\n      },\n      _currentValue2: {\n        get: function () {\n          return context._currentValue2;\n        },\n        set: function (_currentValue2) {\n          context._currentValue2 = _currentValue2;\n        }\n      },\n      _threadCount: {\n        get: function () {\n          return context._threadCount;\n        },\n        set: function (_threadCount) {\n          context._threadCount = _threadCount;\n        }\n      },\n      Consumer: {\n        get: function () {\n          if (!hasWarnedAboutUsingNestedContextConsumers) {\n            hasWarnedAboutUsingNestedContextConsumers = true;\n\n            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');\n          }\n\n          return context.Consumer;\n        }\n      },\n      displayName: {\n        get: function () {\n          return context.displayName;\n        },\n        set: function (displayName) {\n          if (!hasWarnedAboutDisplayNameOnConsumer) {\n            warn('Setting `displayName` on Context.Consumer has no effect. ' + \"You should set it directly on the context with Context.displayName = '%s'.\", displayName);\n\n            hasWarnedAboutDisplayNameOnConsumer = true;\n          }\n        }\n      }\n    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty\n\n    context.Consumer = Consumer;\n  }\n\n  {\n    context._currentRenderer = null;\n    context._currentRenderer2 = null;\n  }\n\n  return context;\n}\n\nvar Uninitialized = -1;\nvar Pending = 0;\nvar Resolved = 1;\nvar Rejected = 2;\n\nfunction lazyInitializer(payload) {\n  if (payload._status === Uninitialized) {\n    var ctor = payload._result;\n    var thenable = ctor(); // Transition to the next state.\n    // This might throw either because it's missing or throws. If so, we treat it\n    // as still uninitialized and try again next time. Which is the same as what\n    // happens if the ctor or any wrappers processing the ctor throws. This might\n    // end up fixing it if the resolution was a concurrency bug.\n\n    thenable.then(function (moduleObject) {\n      if (payload._status === Pending || payload._status === Uninitialized) {\n        // Transition to the next state.\n        var resolved = payload;\n        resolved._status = Resolved;\n        resolved._result = moduleObject;\n      }\n    }, function (error) {\n      if (payload._status === Pending || payload._status === Uninitialized) {\n        // Transition to the next state.\n        var rejected = payload;\n        rejected._status = Rejected;\n        rejected._result = error;\n      }\n    });\n\n    if (payload._status === Uninitialized) {\n      // In case, we're still uninitialized, then we're waiting for the thenable\n      // to resolve. Set it as pending in the meantime.\n      var pending = payload;\n      pending._status = Pending;\n      pending._result = thenable;\n    }\n  }\n\n  if (payload._status === Resolved) {\n    var moduleObject = payload._result;\n\n    {\n      if (moduleObject === undefined) {\n        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\\n\\nYour code should look like: \\n  ' + // Break up imports to avoid accidentally parsing them as dependencies.\n        'const MyComponent = lazy(() => imp' + \"ort('./MyComponent'))\\n\\n\" + 'Did you accidentally put curly braces around the import?', moduleObject);\n      }\n    }\n\n    {\n      if (!('default' in moduleObject)) {\n        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\\n\\nYour code should look like: \\n  ' + // Break up imports to avoid accidentally parsing them as dependencies.\n        'const MyComponent = lazy(() => imp' + \"ort('./MyComponent'))\", moduleObject);\n      }\n    }\n\n    return moduleObject.default;\n  } else {\n    throw payload._result;\n  }\n}\n\nfunction lazy(ctor) {\n  var payload = {\n    // We use these fields to store the result.\n    _status: Uninitialized,\n    _result: ctor\n  };\n  var lazyType = {\n    $$typeof: REACT_LAZY_TYPE,\n    _payload: payload,\n    _init: lazyInitializer\n  };\n\n  {\n    // In production, this would just set it on the object.\n    var defaultProps;\n    var propTypes; // $FlowFixMe\n\n    Object.defineProperties(lazyType, {\n      defaultProps: {\n        configurable: true,\n        get: function () {\n          return defaultProps;\n        },\n        set: function (newDefaultProps) {\n          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          defaultProps = newDefaultProps; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'defaultProps', {\n            enumerable: true\n          });\n        }\n      },\n      propTypes: {\n        configurable: true,\n        get: function () {\n          return propTypes;\n        },\n        set: function (newPropTypes) {\n          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          propTypes = newPropTypes; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'propTypes', {\n            enumerable: true\n          });\n        }\n      }\n    });\n  }\n\n  return lazyType;\n}\n\nfunction forwardRef(render) {\n  {\n    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {\n      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');\n    } else if (typeof render !== 'function') {\n      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\n    } else {\n      if (render.length !== 0 && render.length !== 2) {\n        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');\n      }\n    }\n\n    if (render != null) {\n      if (render.defaultProps != null || render.propTypes != null) {\n        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');\n      }\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_FORWARD_REF_TYPE,\n    render: render\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name; // The inner component shouldn't inherit this display name in most cases,\n        // because the component may be used elsewhere.\n        // But it's nice for anonymous functions to inherit the name,\n        // so that our component-stack generation logic will display their frames.\n        // An anonymous function generally suggests a pattern like:\n        //   React.forwardRef((props, ref) => {...});\n        // This kind of inner function is not used elsewhere so the side effect is okay.\n\n        if (!render.name && !render.displayName) {\n          render.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\nvar REACT_MODULE_REFERENCE;\n\n{\n  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');\n}\n\nfunction isValidElementType(type) {\n  if (typeof type === 'string' || typeof type === 'function') {\n    return true;\n  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n\n\n  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {\n    return true;\n  }\n\n  if (typeof type === 'object' && type !== null) {\n    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object\n    // types supported by any Flight configuration anywhere since\n    // we don't know which Flight build this will end up being used\n    // with.\n    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction memo(type, compare) {\n  {\n    if (!isValidElementType(type)) {\n      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: compare === undefined ? null : compare\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name; // The inner component shouldn't inherit this display name in most cases,\n        // because the component may be used elsewhere.\n        // But it's nice for anonymous functions to inherit the name,\n        // so that our component-stack generation logic will display their frames.\n        // An anonymous function generally suggests a pattern like:\n        //   React.memo((props) => {...});\n        // This kind of inner function is not used elsewhere so the side effect is okay.\n\n        if (!type.name && !type.displayName) {\n          type.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\nfunction resolveDispatcher() {\n  var dispatcher = ReactCurrentDispatcher.current;\n\n  {\n    if (dispatcher === null) {\n      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\\n' + '2. You might be breaking the Rules of Hooks\\n' + '3. You might have more than one copy of React in the same app\\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');\n    }\n  } // Will result in a null access error if accessed outside render phase. We\n  // intentionally don't throw our own error because this is in a hot path.\n  // Also helps ensure this is inlined.\n\n\n  return dispatcher;\n}\nfunction useContext(Context) {\n  var dispatcher = resolveDispatcher();\n\n  {\n    // TODO: add a more generic warning for invalid values.\n    if (Context._context !== undefined) {\n      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs\n      // and nobody should be using this in existing code.\n\n      if (realContext.Consumer === Context) {\n        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');\n      } else if (realContext.Provider === Context) {\n        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');\n      }\n    }\n  }\n\n  return dispatcher.useContext(Context);\n}\nfunction useState(initialState) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useState(initialState);\n}\nfunction useReducer(reducer, initialArg, init) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useReducer(reducer, initialArg, init);\n}\nfunction useRef(initialValue) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useRef(initialValue);\n}\nfunction useEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useEffect(create, deps);\n}\nfunction useInsertionEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useInsertionEffect(create, deps);\n}\nfunction useLayoutEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useLayoutEffect(create, deps);\n}\nfunction useCallback(callback, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useCallback(callback, deps);\n}\nfunction useMemo(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useMemo(create, deps);\n}\nfunction useImperativeHandle(ref, create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useImperativeHandle(ref, create, deps);\n}\nfunction useDebugValue(value, formatterFn) {\n  {\n    var dispatcher = resolveDispatcher();\n    return dispatcher.useDebugValue(value, formatterFn);\n  }\n}\nfunction useTransition() {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useTransition();\n}\nfunction useDeferredValue(value) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useDeferredValue(value);\n}\nfunction useId() {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useId();\n}\nfunction useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);\n}\n\n// Helpers to patch console.logs to avoid logging during side-effect free\n// replaying on render function. This currently only patches the object\n// lazily which won't cover if the log function was extracted eagerly.\n// We could also eagerly patch the method.\nvar disabledDepth = 0;\nvar prevLog;\nvar prevInfo;\nvar prevWarn;\nvar prevError;\nvar prevGroup;\nvar prevGroupCollapsed;\nvar prevGroupEnd;\n\nfunction disabledLog() {}\n\ndisabledLog.__reactDisabledLog = true;\nfunction disableLogs() {\n  {\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      prevLog = console.log;\n      prevInfo = console.info;\n      prevWarn = console.warn;\n      prevError = console.error;\n      prevGroup = console.group;\n      prevGroupCollapsed = console.groupCollapsed;\n      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099\n\n      var props = {\n        configurable: true,\n        enumerable: true,\n        value: disabledLog,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        info: props,\n        log: props,\n        warn: props,\n        error: props,\n        group: props,\n        groupCollapsed: props,\n        groupEnd: props\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    disabledDepth++;\n  }\n}\nfunction reenableLogs() {\n  {\n    disabledDepth--;\n\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      var props = {\n        configurable: true,\n        enumerable: true,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        log: assign({}, props, {\n          value: prevLog\n        }),\n        info: assign({}, props, {\n          value: prevInfo\n        }),\n        warn: assign({}, props, {\n          value: prevWarn\n        }),\n        error: assign({}, props, {\n          value: prevError\n        }),\n        group: assign({}, props, {\n          value: prevGroup\n        }),\n        groupCollapsed: assign({}, props, {\n          value: prevGroupCollapsed\n        }),\n        groupEnd: assign({}, props, {\n          value: prevGroupEnd\n        })\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    if (disabledDepth < 0) {\n      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n    }\n  }\n}\n\nvar ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;\nvar prefix;\nfunction describeBuiltInComponentFrame(name, source, ownerFn) {\n  {\n    if (prefix === undefined) {\n      // Extract the VM specific prefix used by each line.\n      try {\n        throw Error();\n      } catch (x) {\n        var match = x.stack.trim().match(/\\n( *(at )?)/);\n        prefix = match && match[1] || '';\n      }\n    } // We use the prefix to ensure our stacks line up with native stack frames.\n\n\n    return '\\n' + prefix + name;\n  }\n}\nvar reentry = false;\nvar componentFrameCache;\n\n{\n  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;\n  componentFrameCache = new PossiblyWeakMap();\n}\n\nfunction describeNativeComponentFrame(fn, construct) {\n  // If something asked for a stack inside a fake render, it should get ignored.\n  if ( !fn || reentry) {\n    return '';\n  }\n\n  {\n    var frame = componentFrameCache.get(fn);\n\n    if (frame !== undefined) {\n      return frame;\n    }\n  }\n\n  var control;\n  reentry = true;\n  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.\n\n  Error.prepareStackTrace = undefined;\n  var previousDispatcher;\n\n  {\n    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function\n    // for warnings.\n\n    ReactCurrentDispatcher$1.current = null;\n    disableLogs();\n  }\n\n  try {\n    // This should throw.\n    if (construct) {\n      // Something should be setting the props in the constructor.\n      var Fake = function () {\n        throw Error();\n      }; // $FlowFixMe\n\n\n      Object.defineProperty(Fake.prototype, 'props', {\n        set: function () {\n          // We use a throwing setter instead of frozen or non-writable props\n          // because that won't throw in a non-strict mode function.\n          throw Error();\n        }\n      });\n\n      if (typeof Reflect === 'object' && Reflect.construct) {\n        // We construct a different control for this case to include any extra\n        // frames added by the construct call.\n        try {\n          Reflect.construct(Fake, []);\n        } catch (x) {\n          control = x;\n        }\n\n        Reflect.construct(fn, [], Fake);\n      } else {\n        try {\n          Fake.call();\n        } catch (x) {\n          control = x;\n        }\n\n        fn.call(Fake.prototype);\n      }\n    } else {\n      try {\n        throw Error();\n      } catch (x) {\n        control = x;\n      }\n\n      fn();\n    }\n  } catch (sample) {\n    // This is inlined manually because closure doesn't do it for us.\n    if (sample && control && typeof sample.stack === 'string') {\n      // This extracts the first frame from the sample that isn't also in the control.\n      // Skipping one frame that we assume is the frame that calls the two.\n      var sampleLines = sample.stack.split('\\n');\n      var controlLines = control.stack.split('\\n');\n      var s = sampleLines.length - 1;\n      var c = controlLines.length - 1;\n\n      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {\n        // We expect at least one stack frame to be shared.\n        // Typically this will be the root most one. However, stack frames may be\n        // cut off due to maximum stack limits. In this case, one maybe cut off\n        // earlier than the other. We assume that the sample is longer or the same\n        // and there for cut off earlier. So we should find the root most frame in\n        // the sample somewhere in the control.\n        c--;\n      }\n\n      for (; s >= 1 && c >= 0; s--, c--) {\n        // Next we find the first one that isn't the same which should be the\n        // frame that called our sample function and the control.\n        if (sampleLines[s] !== controlLines[c]) {\n          // In V8, the first line is describing the message but other VMs don't.\n          // If we're about to return the first line, and the control is also on the same\n          // line, that's a pretty good indicator that our sample threw at same line as\n          // the control. I.e. before we entered the sample frame. So we ignore this result.\n          // This can happen if you passed a class to function component, or non-function.\n          if (s !== 1 || c !== 1) {\n            do {\n              s--;\n              c--; // We may still have similar intermediate frames from the construct call.\n              // The next one that isn't the same should be our match though.\n\n              if (c < 0 || sampleLines[s] !== controlLines[c]) {\n                // V8 adds a \"new\" prefix for native classes. Let's remove it to make it prettier.\n                var _frame = '\\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled \"<anonymous>\"\n                // but we have a user-provided \"displayName\"\n                // splice it in to make the stack more readable.\n\n\n                if (fn.displayName && _frame.includes('<anonymous>')) {\n                  _frame = _frame.replace('<anonymous>', fn.displayName);\n                }\n\n                {\n                  if (typeof fn === 'function') {\n                    componentFrameCache.set(fn, _frame);\n                  }\n                } // Return the line we found.\n\n\n                return _frame;\n              }\n            } while (s >= 1 && c >= 0);\n          }\n\n          break;\n        }\n      }\n    }\n  } finally {\n    reentry = false;\n\n    {\n      ReactCurrentDispatcher$1.current = previousDispatcher;\n      reenableLogs();\n    }\n\n    Error.prepareStackTrace = previousPrepareStackTrace;\n  } // Fallback to just using the name if we couldn't make it throw.\n\n\n  var name = fn ? fn.displayName || fn.name : '';\n  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';\n\n  {\n    if (typeof fn === 'function') {\n      componentFrameCache.set(fn, syntheticFrame);\n    }\n  }\n\n  return syntheticFrame;\n}\nfunction describeFunctionComponentFrame(fn, source, ownerFn) {\n  {\n    return describeNativeComponentFrame(fn, false);\n  }\n}\n\nfunction shouldConstruct(Component) {\n  var prototype = Component.prototype;\n  return !!(prototype && prototype.isReactComponent);\n}\n\nfunction describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {\n\n  if (type == null) {\n    return '';\n  }\n\n  if (typeof type === 'function') {\n    {\n      return describeNativeComponentFrame(type, shouldConstruct(type));\n    }\n  }\n\n  if (typeof type === 'string') {\n    return describeBuiltInComponentFrame(type);\n  }\n\n  switch (type) {\n    case REACT_SUSPENSE_TYPE:\n      return describeBuiltInComponentFrame('Suspense');\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return describeBuiltInComponentFrame('SuspenseList');\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_FORWARD_REF_TYPE:\n        return describeFunctionComponentFrame(type.render);\n\n      case REACT_MEMO_TYPE:\n        // Memo may contain any component type so we recursively resolve it.\n        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            // Lazy may contain any component type so we recursively resolve it.\n            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);\n          } catch (x) {}\n        }\n    }\n  }\n\n  return '';\n}\n\nvar loggedTypeFailures = {};\nvar ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;\n\nfunction setCurrentlyValidatingElement(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);\n    } else {\n      ReactDebugCurrentFrame$1.setExtraStackFrame(null);\n    }\n  }\n}\n\nfunction checkPropTypes(typeSpecs, values, location, componentName, element) {\n  {\n    // $FlowFixMe This is okay but Flow doesn't know it.\n    var has = Function.call.bind(hasOwnProperty);\n\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            // eslint-disable-next-line react-internal/prod-error-codes\n            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n\n          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');\n        } catch (ex) {\n          error$1 = ex;\n        }\n\n        if (error$1 && !(error$1 instanceof Error)) {\n          setCurrentlyValidatingElement(element);\n\n          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);\n\n          setCurrentlyValidatingElement(null);\n        }\n\n        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error$1.message] = true;\n          setCurrentlyValidatingElement(element);\n\n          error('Failed %s type: %s', location, error$1.message);\n\n          setCurrentlyValidatingElement(null);\n        }\n      }\n    }\n  }\n}\n\nfunction setCurrentlyValidatingElement$1(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      setExtraStackFrame(stack);\n    } else {\n      setExtraStackFrame(null);\n    }\n  }\n}\n\nvar propTypesMisspellWarningShown;\n\n{\n  propTypesMisspellWarningShown = false;\n}\n\nfunction getDeclarationErrorAddendum() {\n  if (ReactCurrentOwner.current) {\n    var name = getComponentNameFromType(ReactCurrentOwner.current.type);\n\n    if (name) {\n      return '\\n\\nCheck the render method of `' + name + '`.';\n    }\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendum(source) {\n  if (source !== undefined) {\n    var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n    var lineNumber = source.lineNumber;\n    return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendumForProps(elementProps) {\n  if (elementProps !== null && elementProps !== undefined) {\n    return getSourceInfoErrorAddendum(elementProps.__source);\n  }\n\n  return '';\n}\n/**\n * Warn if there's no key explicitly set on dynamic arrays of children or\n * object keys are not valid. This allows us to keep track of children between\n * updates.\n */\n\n\nvar ownerHasKeyUseWarning = {};\n\nfunction getCurrentComponentErrorInfo(parentType) {\n  var info = getDeclarationErrorAddendum();\n\n  if (!info) {\n    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n\n    if (parentName) {\n      info = \"\\n\\nCheck the top-level render call using <\" + parentName + \">.\";\n    }\n  }\n\n  return info;\n}\n/**\n * Warn if the element doesn't have an explicit key assigned to it.\n * This element is in an array. The array could grow and shrink or be\n * reordered. All children that haven't already been validated are required to\n * have a \"key\" property assigned to it. Error statuses are cached so a warning\n * will only be shown once.\n *\n * @internal\n * @param {ReactElement} element Element that requires a key.\n * @param {*} parentType element's parent's type.\n */\n\n\nfunction validateExplicitKey(element, parentType) {\n  if (!element._store || element._store.validated || element.key != null) {\n    return;\n  }\n\n  element._store.validated = true;\n  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n\n  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n    return;\n  }\n\n  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\n  // property, it may be the creator of the child that's responsible for\n  // assigning it a key.\n\n  var childOwner = '';\n\n  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\n    // Give the component that originally created this child.\n    childOwner = \" It was passed a child from \" + getComponentNameFromType(element._owner.type) + \".\";\n  }\n\n  {\n    setCurrentlyValidatingElement$1(element);\n\n    error('Each child in a list should have a unique \"key\" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);\n\n    setCurrentlyValidatingElement$1(null);\n  }\n}\n/**\n * Ensure that every element either is passed in a static location, in an\n * array with an explicit keys property defined, or in an object literal\n * with valid key property.\n *\n * @internal\n * @param {ReactNode} node Statically passed child of any type.\n * @param {*} parentType node's parent's type.\n */\n\n\nfunction validateChildKeys(node, parentType) {\n  if (typeof node !== 'object') {\n    return;\n  }\n\n  if (isArray(node)) {\n    for (var i = 0; i < node.length; i++) {\n      var child = node[i];\n\n      if (isValidElement(child)) {\n        validateExplicitKey(child, parentType);\n      }\n    }\n  } else if (isValidElement(node)) {\n    // This element was passed in a valid location.\n    if (node._store) {\n      node._store.validated = true;\n    }\n  } else if (node) {\n    var iteratorFn = getIteratorFn(node);\n\n    if (typeof iteratorFn === 'function') {\n      // Entry iterators used to provide implicit keys,\n      // but now we print a separate warning for them later.\n      if (iteratorFn !== node.entries) {\n        var iterator = iteratorFn.call(node);\n        var step;\n\n        while (!(step = iterator.next()).done) {\n          if (isValidElement(step.value)) {\n            validateExplicitKey(step.value, parentType);\n          }\n        }\n      }\n    }\n  }\n}\n/**\n * Given an element, validate that its props follow the propTypes definition,\n * provided by the type.\n *\n * @param {ReactElement} element\n */\n\n\nfunction validatePropTypes(element) {\n  {\n    var type = element.type;\n\n    if (type === null || type === undefined || typeof type === 'string') {\n      return;\n    }\n\n    var propTypes;\n\n    if (typeof type === 'function') {\n      propTypes = type.propTypes;\n    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.\n    // Inner props are checked in the reconciler.\n    type.$$typeof === REACT_MEMO_TYPE)) {\n      propTypes = type.propTypes;\n    } else {\n      return;\n    }\n\n    if (propTypes) {\n      // Intentionally inside to avoid triggering lazy initializers:\n      var name = getComponentNameFromType(type);\n      checkPropTypes(propTypes, element.props, 'prop', name, element);\n    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:\n\n      var _name = getComponentNameFromType(type);\n\n      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');\n    }\n\n    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {\n      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');\n    }\n  }\n}\n/**\n * Given a fragment, validate that it can only be provided with fragment props\n * @param {ReactElement} fragment\n */\n\n\nfunction validateFragmentProps(fragment) {\n  {\n    var keys = Object.keys(fragment.props);\n\n    for (var i = 0; i < keys.length; i++) {\n      var key = keys[i];\n\n      if (key !== 'children' && key !== 'key') {\n        setCurrentlyValidatingElement$1(fragment);\n\n        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n\n        setCurrentlyValidatingElement$1(null);\n        break;\n      }\n    }\n\n    if (fragment.ref !== null) {\n      setCurrentlyValidatingElement$1(fragment);\n\n      error('Invalid attribute `ref` supplied to `React.Fragment`.');\n\n      setCurrentlyValidatingElement$1(null);\n    }\n  }\n}\nfunction createElementWithValidation(type, props, children) {\n  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\n  // succeed and there will likely be errors in render.\n\n  if (!validType) {\n    var info = '';\n\n    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n      info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n    }\n\n    var sourceInfo = getSourceInfoErrorAddendumForProps(props);\n\n    if (sourceInfo) {\n      info += sourceInfo;\n    } else {\n      info += getDeclarationErrorAddendum();\n    }\n\n    var typeString;\n\n    if (type === null) {\n      typeString = 'null';\n    } else if (isArray(type)) {\n      typeString = 'array';\n    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n      typeString = \"<\" + (getComponentNameFromType(type.type) || 'Unknown') + \" />\";\n      info = ' Did you accidentally export a JSX literal instead of a component?';\n    } else {\n      typeString = typeof type;\n    }\n\n    {\n      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n    }\n  }\n\n  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.\n  // TODO: Drop this when these are no longer allowed as the type argument.\n\n  if (element == null) {\n    return element;\n  } // Skip key warning if the type isn't valid since our key validation logic\n  // doesn't expect a non-string/function type and can throw confusing errors.\n  // We don't want exception behavior to differ between dev and prod.\n  // (Rendering will throw with a helpful message and as soon as the type is\n  // fixed, the key warnings will appear.)\n\n\n  if (validType) {\n    for (var i = 2; i < arguments.length; i++) {\n      validateChildKeys(arguments[i], type);\n    }\n  }\n\n  if (type === REACT_FRAGMENT_TYPE) {\n    validateFragmentProps(element);\n  } else {\n    validatePropTypes(element);\n  }\n\n  return element;\n}\nvar didWarnAboutDeprecatedCreateFactory = false;\nfunction createFactoryWithValidation(type) {\n  var validatedFactory = createElementWithValidation.bind(null, type);\n  validatedFactory.type = type;\n\n  {\n    if (!didWarnAboutDeprecatedCreateFactory) {\n      didWarnAboutDeprecatedCreateFactory = true;\n\n      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');\n    } // Legacy hook: remove it\n\n\n    Object.defineProperty(validatedFactory, 'type', {\n      enumerable: false,\n      get: function () {\n        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\n\n        Object.defineProperty(this, 'type', {\n          value: type\n        });\n        return type;\n      }\n    });\n  }\n\n  return validatedFactory;\n}\nfunction cloneElementWithValidation(element, props, children) {\n  var newElement = cloneElement.apply(this, arguments);\n\n  for (var i = 2; i < arguments.length; i++) {\n    validateChildKeys(arguments[i], newElement.type);\n  }\n\n  validatePropTypes(newElement);\n  return newElement;\n}\n\nfunction startTransition(scope, options) {\n  var prevTransition = ReactCurrentBatchConfig.transition;\n  ReactCurrentBatchConfig.transition = {};\n  var currentTransition = ReactCurrentBatchConfig.transition;\n\n  {\n    ReactCurrentBatchConfig.transition._updatedFibers = new Set();\n  }\n\n  try {\n    scope();\n  } finally {\n    ReactCurrentBatchConfig.transition = prevTransition;\n\n    {\n      if (prevTransition === null && currentTransition._updatedFibers) {\n        var updatedFibersCount = currentTransition._updatedFibers.size;\n\n        if (updatedFibersCount > 10) {\n          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');\n        }\n\n        currentTransition._updatedFibers.clear();\n      }\n    }\n  }\n}\n\nvar didWarnAboutMessageChannel = false;\nvar enqueueTaskImpl = null;\nfunction enqueueTask(task) {\n  if (enqueueTaskImpl === null) {\n    try {\n      // read require off the module object to get around the bundlers.\n      // we don't want them to detect a require and bundle a Node polyfill.\n      var requireString = ('require' + Math.random()).slice(0, 7);\n      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's\n      // version of setImmediate, bypassing fake timers if any.\n\n      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;\n    } catch (_err) {\n      // we're in a browser\n      // we can't use regular timers because they may still be faked\n      // so we try MessageChannel+postMessage instead\n      enqueueTaskImpl = function (callback) {\n        {\n          if (didWarnAboutMessageChannel === false) {\n            didWarnAboutMessageChannel = true;\n\n            if (typeof MessageChannel === 'undefined') {\n              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');\n            }\n          }\n        }\n\n        var channel = new MessageChannel();\n        channel.port1.onmessage = callback;\n        channel.port2.postMessage(undefined);\n      };\n    }\n  }\n\n  return enqueueTaskImpl(task);\n}\n\nvar actScopeDepth = 0;\nvar didWarnNoAwaitAct = false;\nfunction act(callback) {\n  {\n    // `act` calls can be nested, so we track the depth. This represents the\n    // number of `act` scopes on the stack.\n    var prevActScopeDepth = actScopeDepth;\n    actScopeDepth++;\n\n    if (ReactCurrentActQueue.current === null) {\n      // This is the outermost `act` scope. Initialize the queue. The reconciler\n      // will detect the queue and use it instead of Scheduler.\n      ReactCurrentActQueue.current = [];\n    }\n\n    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;\n    var result;\n\n    try {\n      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only\n      // set to `true` while the given callback is executed, not for updates\n      // triggered during an async event, because this is how the legacy\n      // implementation of `act` behaved.\n      ReactCurrentActQueue.isBatchingLegacy = true;\n      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,\n      // which flushed updates immediately after the scope function exits, even\n      // if it's an async function.\n\n      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {\n        var queue = ReactCurrentActQueue.current;\n\n        if (queue !== null) {\n          ReactCurrentActQueue.didScheduleLegacyUpdate = false;\n          flushActQueue(queue);\n        }\n      }\n    } catch (error) {\n      popActScope(prevActScopeDepth);\n      throw error;\n    } finally {\n      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;\n    }\n\n    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {\n      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait\n      // for it to resolve before exiting the current scope.\n\n      var wasAwaited = false;\n      var thenable = {\n        then: function (resolve, reject) {\n          wasAwaited = true;\n          thenableResult.then(function (returnValue) {\n            popActScope(prevActScopeDepth);\n\n            if (actScopeDepth === 0) {\n              // We've exited the outermost act scope. Recursively flush the\n              // queue until there's no remaining work.\n              recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n            } else {\n              resolve(returnValue);\n            }\n          }, function (error) {\n            // The callback threw an error.\n            popActScope(prevActScopeDepth);\n            reject(error);\n          });\n        }\n      };\n\n      {\n        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {\n          // eslint-disable-next-line no-undef\n          Promise.resolve().then(function () {}).then(function () {\n            if (!wasAwaited) {\n              didWarnNoAwaitAct = true;\n\n              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');\n            }\n          });\n        }\n      }\n\n      return thenable;\n    } else {\n      var returnValue = result; // The callback is not an async function. Exit the current scope\n      // immediately, without awaiting.\n\n      popActScope(prevActScopeDepth);\n\n      if (actScopeDepth === 0) {\n        // Exiting the outermost act scope. Flush the queue.\n        var _queue = ReactCurrentActQueue.current;\n\n        if (_queue !== null) {\n          flushActQueue(_queue);\n          ReactCurrentActQueue.current = null;\n        } // Return a thenable. If the user awaits it, we'll flush again in\n        // case additional work was scheduled by a microtask.\n\n\n        var _thenable = {\n          then: function (resolve, reject) {\n            // Confirm we haven't re-entered another `act` scope, in case\n            // the user does something weird like await the thenable\n            // multiple times.\n            if (ReactCurrentActQueue.current === null) {\n              // Recursively flush the queue until there's no remaining work.\n              ReactCurrentActQueue.current = [];\n              recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n            } else {\n              resolve(returnValue);\n            }\n          }\n        };\n        return _thenable;\n      } else {\n        // Since we're inside a nested `act` scope, the returned thenable\n        // immediately resolves. The outer scope will flush the queue.\n        var _thenable2 = {\n          then: function (resolve, reject) {\n            resolve(returnValue);\n          }\n        };\n        return _thenable2;\n      }\n    }\n  }\n}\n\nfunction popActScope(prevActScopeDepth) {\n  {\n    if (prevActScopeDepth !== actScopeDepth - 1) {\n      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');\n    }\n\n    actScopeDepth = prevActScopeDepth;\n  }\n}\n\nfunction recursivelyFlushAsyncActWork(returnValue, resolve, reject) {\n  {\n    var queue = ReactCurrentActQueue.current;\n\n    if (queue !== null) {\n      try {\n        flushActQueue(queue);\n        enqueueTask(function () {\n          if (queue.length === 0) {\n            // No additional work was scheduled. Finish.\n            ReactCurrentActQueue.current = null;\n            resolve(returnValue);\n          } else {\n            // Keep flushing work until there's none left.\n            recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n          }\n        });\n      } catch (error) {\n        reject(error);\n      }\n    } else {\n      resolve(returnValue);\n    }\n  }\n}\n\nvar isFlushing = false;\n\nfunction flushActQueue(queue) {\n  {\n    if (!isFlushing) {\n      // Prevent re-entrance.\n      isFlushing = true;\n      var i = 0;\n\n      try {\n        for (; i < queue.length; i++) {\n          var callback = queue[i];\n\n          do {\n            callback = callback(true);\n          } while (callback !== null);\n        }\n\n        queue.length = 0;\n      } catch (error) {\n        // If something throws, leave the remaining callbacks on the queue.\n        queue = queue.slice(i + 1);\n        throw error;\n      } finally {\n        isFlushing = false;\n      }\n    }\n  }\n}\n\nvar createElement$1 =  createElementWithValidation ;\nvar cloneElement$1 =  cloneElementWithValidation ;\nvar createFactory =  createFactoryWithValidation ;\nvar Children = {\n  map: mapChildren,\n  forEach: forEachChildren,\n  count: countChildren,\n  toArray: toArray,\n  only: onlyChild\n};\n\nexports.Children = Children;\nexports.Component = Component;\nexports.Fragment = REACT_FRAGMENT_TYPE;\nexports.Profiler = REACT_PROFILER_TYPE;\nexports.PureComponent = PureComponent;\nexports.StrictMode = REACT_STRICT_MODE_TYPE;\nexports.Suspense = REACT_SUSPENSE_TYPE;\nexports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;\nexports.cloneElement = cloneElement$1;\nexports.createContext = createContext;\nexports.createElement = createElement$1;\nexports.createFactory = createFactory;\nexports.createRef = createRef;\nexports.forwardRef = forwardRef;\nexports.isValidElement = isValidElement;\nexports.lazy = lazy;\nexports.memo = memo;\nexports.startTransition = startTransition;\nexports.unstable_act = act;\nexports.useCallback = useCallback;\nexports.useContext = useContext;\nexports.useDebugValue = useDebugValue;\nexports.useDeferredValue = useDeferredValue;\nexports.useEffect = useEffect;\nexports.useId = useId;\nexports.useImperativeHandle = useImperativeHandle;\nexports.useInsertionEffect = useInsertionEffect;\nexports.useLayoutEffect = useLayoutEffect;\nexports.useMemo = useMemo;\nexports.useReducer = useReducer;\nexports.useRef = useRef;\nexports.useState = useState;\nexports.useSyncExternalStore = useSyncExternalStore;\nexports.useTransition = useTransition;\nexports.version = ReactVersion;\n          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\nif (\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===\n    'function'\n) {\n  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\n}\n        \n  })();\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("/**\n * @license React\n * scheduler.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n\n          'use strict';\n\n/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\nif (\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===\n    'function'\n) {\n  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\n}\n          var enableSchedulerDebugging = false;\nvar enableProfiling = false;\nvar frameYieldMs = 5;\n\nfunction push(heap, node) {\n  var index = heap.length;\n  heap.push(node);\n  siftUp(heap, node, index);\n}\nfunction peek(heap) {\n  return heap.length === 0 ? null : heap[0];\n}\nfunction pop(heap) {\n  if (heap.length === 0) {\n    return null;\n  }\n\n  var first = heap[0];\n  var last = heap.pop();\n\n  if (last !== first) {\n    heap[0] = last;\n    siftDown(heap, last, 0);\n  }\n\n  return first;\n}\n\nfunction siftUp(heap, node, i) {\n  var index = i;\n\n  while (index > 0) {\n    var parentIndex = index - 1 >>> 1;\n    var parent = heap[parentIndex];\n\n    if (compare(parent, node) > 0) {\n      // The parent is larger. Swap positions.\n      heap[parentIndex] = node;\n      heap[index] = parent;\n      index = parentIndex;\n    } else {\n      // The parent is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction siftDown(heap, node, i) {\n  var index = i;\n  var length = heap.length;\n  var halfLength = length >>> 1;\n\n  while (index < halfLength) {\n    var leftIndex = (index + 1) * 2 - 1;\n    var left = heap[leftIndex];\n    var rightIndex = leftIndex + 1;\n    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.\n\n    if (compare(left, node) < 0) {\n      if (rightIndex < length && compare(right, left) < 0) {\n        heap[index] = right;\n        heap[rightIndex] = node;\n        index = rightIndex;\n      } else {\n        heap[index] = left;\n        heap[leftIndex] = node;\n        index = leftIndex;\n      }\n    } else if (rightIndex < length && compare(right, node) < 0) {\n      heap[index] = right;\n      heap[rightIndex] = node;\n      index = rightIndex;\n    } else {\n      // Neither child is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction compare(a, b) {\n  // Compare sort index first, then task id.\n  var diff = a.sortIndex - b.sortIndex;\n  return diff !== 0 ? diff : a.id - b.id;\n}\n\n// TODO: Use symbols?\nvar ImmediatePriority = 1;\nvar UserBlockingPriority = 2;\nvar NormalPriority = 3;\nvar LowPriority = 4;\nvar IdlePriority = 5;\n\nfunction markTaskErrored(task, ms) {\n}\n\n/* eslint-disable no-var */\n\nvar hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';\n\nif (hasPerformanceNow) {\n  var localPerformance = performance;\n\n  exports.unstable_now = function () {\n    return localPerformance.now();\n  };\n} else {\n  var localDate = Date;\n  var initialTime = localDate.now();\n\n  exports.unstable_now = function () {\n    return localDate.now() - initialTime;\n  };\n} // Max 31 bit integer. The max integer size in V8 for 32-bit systems.\n// Math.pow(2, 30) - 1\n// 0b111111111111111111111111111111\n\n\nvar maxSigned31BitInt = 1073741823; // Times out immediately\n\nvar IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out\n\nvar USER_BLOCKING_PRIORITY_TIMEOUT = 250;\nvar NORMAL_PRIORITY_TIMEOUT = 5000;\nvar LOW_PRIORITY_TIMEOUT = 10000; // Never times out\n\nvar IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap\n\nvar taskQueue = [];\nvar timerQueue = []; // Incrementing id counter. Used to maintain insertion order.\n\nvar taskIdCounter = 1; // Pausing the scheduler is useful for debugging.\nvar currentTask = null;\nvar currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.\n\nvar isPerformingWork = false;\nvar isHostCallbackScheduled = false;\nvar isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.\n\nvar localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;\nvar localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;\nvar localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom\n\nvar isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;\n\nfunction advanceTimers(currentTime) {\n  // Check for tasks that are no longer delayed and add them to the queue.\n  var timer = peek(timerQueue);\n\n  while (timer !== null) {\n    if (timer.callback === null) {\n      // Timer was cancelled.\n      pop(timerQueue);\n    } else if (timer.startTime <= currentTime) {\n      // Timer fired. Transfer to the task queue.\n      pop(timerQueue);\n      timer.sortIndex = timer.expirationTime;\n      push(taskQueue, timer);\n    } else {\n      // Remaining timers are pending.\n      return;\n    }\n\n    timer = peek(timerQueue);\n  }\n}\n\nfunction handleTimeout(currentTime) {\n  isHostTimeoutScheduled = false;\n  advanceTimers(currentTime);\n\n  if (!isHostCallbackScheduled) {\n    if (peek(taskQueue) !== null) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    } else {\n      var firstTimer = peek(timerQueue);\n\n      if (firstTimer !== null) {\n        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n      }\n    }\n  }\n}\n\nfunction flushWork(hasTimeRemaining, initialTime) {\n\n\n  isHostCallbackScheduled = false;\n\n  if (isHostTimeoutScheduled) {\n    // We scheduled a timeout but it's no longer needed. Cancel it.\n    isHostTimeoutScheduled = false;\n    cancelHostTimeout();\n  }\n\n  isPerformingWork = true;\n  var previousPriorityLevel = currentPriorityLevel;\n\n  try {\n    if (enableProfiling) {\n      try {\n        return workLoop(hasTimeRemaining, initialTime);\n      } catch (error) {\n        if (currentTask !== null) {\n          var currentTime = exports.unstable_now();\n          markTaskErrored(currentTask, currentTime);\n          currentTask.isQueued = false;\n        }\n\n        throw error;\n      }\n    } else {\n      // No catch in prod code path.\n      return workLoop(hasTimeRemaining, initialTime);\n    }\n  } finally {\n    currentTask = null;\n    currentPriorityLevel = previousPriorityLevel;\n    isPerformingWork = false;\n  }\n}\n\nfunction workLoop(hasTimeRemaining, initialTime) {\n  var currentTime = initialTime;\n  advanceTimers(currentTime);\n  currentTask = peek(taskQueue);\n\n  while (currentTask !== null && !(enableSchedulerDebugging )) {\n    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {\n      // This currentTask hasn't expired, and we've reached the deadline.\n      break;\n    }\n\n    var callback = currentTask.callback;\n\n    if (typeof callback === 'function') {\n      currentTask.callback = null;\n      currentPriorityLevel = currentTask.priorityLevel;\n      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;\n\n      var continuationCallback = callback(didUserCallbackTimeout);\n      currentTime = exports.unstable_now();\n\n      if (typeof continuationCallback === 'function') {\n        currentTask.callback = continuationCallback;\n      } else {\n\n        if (currentTask === peek(taskQueue)) {\n          pop(taskQueue);\n        }\n      }\n\n      advanceTimers(currentTime);\n    } else {\n      pop(taskQueue);\n    }\n\n    currentTask = peek(taskQueue);\n  } // Return whether there's additional work\n\n\n  if (currentTask !== null) {\n    return true;\n  } else {\n    var firstTimer = peek(timerQueue);\n\n    if (firstTimer !== null) {\n      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n    }\n\n    return false;\n  }\n}\n\nfunction unstable_runWithPriority(priorityLevel, eventHandler) {\n  switch (priorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n    case LowPriority:\n    case IdlePriority:\n      break;\n\n    default:\n      priorityLevel = NormalPriority;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_next(eventHandler) {\n  var priorityLevel;\n\n  switch (currentPriorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n      // Shift down to normal priority\n      priorityLevel = NormalPriority;\n      break;\n\n    default:\n      // Anything lower than normal priority should remain at the current level.\n      priorityLevel = currentPriorityLevel;\n      break;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_wrapCallback(callback) {\n  var parentPriorityLevel = currentPriorityLevel;\n  return function () {\n    // This is a fork of runWithPriority, inlined for performance.\n    var previousPriorityLevel = currentPriorityLevel;\n    currentPriorityLevel = parentPriorityLevel;\n\n    try {\n      return callback.apply(this, arguments);\n    } finally {\n      currentPriorityLevel = previousPriorityLevel;\n    }\n  };\n}\n\nfunction unstable_scheduleCallback(priorityLevel, callback, options) {\n  var currentTime = exports.unstable_now();\n  var startTime;\n\n  if (typeof options === 'object' && options !== null) {\n    var delay = options.delay;\n\n    if (typeof delay === 'number' && delay > 0) {\n      startTime = currentTime + delay;\n    } else {\n      startTime = currentTime;\n    }\n  } else {\n    startTime = currentTime;\n  }\n\n  var timeout;\n\n  switch (priorityLevel) {\n    case ImmediatePriority:\n      timeout = IMMEDIATE_PRIORITY_TIMEOUT;\n      break;\n\n    case UserBlockingPriority:\n      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;\n      break;\n\n    case IdlePriority:\n      timeout = IDLE_PRIORITY_TIMEOUT;\n      break;\n\n    case LowPriority:\n      timeout = LOW_PRIORITY_TIMEOUT;\n      break;\n\n    case NormalPriority:\n    default:\n      timeout = NORMAL_PRIORITY_TIMEOUT;\n      break;\n  }\n\n  var expirationTime = startTime + timeout;\n  var newTask = {\n    id: taskIdCounter++,\n    callback: callback,\n    priorityLevel: priorityLevel,\n    startTime: startTime,\n    expirationTime: expirationTime,\n    sortIndex: -1\n  };\n\n  if (startTime > currentTime) {\n    // This is a delayed task.\n    newTask.sortIndex = startTime;\n    push(timerQueue, newTask);\n\n    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {\n      // All tasks are delayed, and this is the task with the earliest delay.\n      if (isHostTimeoutScheduled) {\n        // Cancel an existing timeout.\n        cancelHostTimeout();\n      } else {\n        isHostTimeoutScheduled = true;\n      } // Schedule a timeout.\n\n\n      requestHostTimeout(handleTimeout, startTime - currentTime);\n    }\n  } else {\n    newTask.sortIndex = expirationTime;\n    push(taskQueue, newTask);\n    // wait until the next time we yield.\n\n\n    if (!isHostCallbackScheduled && !isPerformingWork) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    }\n  }\n\n  return newTask;\n}\n\nfunction unstable_pauseExecution() {\n}\n\nfunction unstable_continueExecution() {\n\n  if (!isHostCallbackScheduled && !isPerformingWork) {\n    isHostCallbackScheduled = true;\n    requestHostCallback(flushWork);\n  }\n}\n\nfunction unstable_getFirstCallbackNode() {\n  return peek(taskQueue);\n}\n\nfunction unstable_cancelCallback(task) {\n  // remove from the queue because you can't remove arbitrary nodes from an\n  // array based heap, only the first one.)\n\n\n  task.callback = null;\n}\n\nfunction unstable_getCurrentPriorityLevel() {\n  return currentPriorityLevel;\n}\n\nvar isMessageLoopRunning = false;\nvar scheduledHostCallback = null;\nvar taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main\n// thread, like user events. By default, it yields multiple times per frame.\n// It does not attempt to align with frame boundaries, since most tasks don't\n// need to be frame aligned; for those that do, use requestAnimationFrame.\n\nvar frameInterval = frameYieldMs;\nvar startTime = -1;\n\nfunction shouldYieldToHost() {\n  var timeElapsed = exports.unstable_now() - startTime;\n\n  if (timeElapsed < frameInterval) {\n    // The main thread has only been blocked for a really short amount of time;\n    // smaller than a single frame. Don't yield yet.\n    return false;\n  } // The main thread has been blocked for a non-negligible amount of time. We\n\n\n  return true;\n}\n\nfunction requestPaint() {\n\n}\n\nfunction forceFrameRate(fps) {\n  if (fps < 0 || fps > 125) {\n    // Using console['error'] to evade Babel and ESLint\n    console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');\n    return;\n  }\n\n  if (fps > 0) {\n    frameInterval = Math.floor(1000 / fps);\n  } else {\n    // reset the framerate\n    frameInterval = frameYieldMs;\n  }\n}\n\nvar performWorkUntilDeadline = function () {\n  if (scheduledHostCallback !== null) {\n    var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread\n    // has been blocked.\n\n    startTime = currentTime;\n    var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the\n    // error can be observed.\n    //\n    // Intentionally not using a try-catch, since that makes some debugging\n    // techniques harder. Instead, if `scheduledHostCallback` errors, then\n    // `hasMoreWork` will remain true, and we'll continue the work loop.\n\n    var hasMoreWork = true;\n\n    try {\n      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);\n    } finally {\n      if (hasMoreWork) {\n        // If there's more work, schedule the next message event at the end\n        // of the preceding one.\n        schedulePerformWorkUntilDeadline();\n      } else {\n        isMessageLoopRunning = false;\n        scheduledHostCallback = null;\n      }\n    }\n  } else {\n    isMessageLoopRunning = false;\n  } // Yielding to the browser will give it a chance to paint, so we can\n};\n\nvar schedulePerformWorkUntilDeadline;\n\nif (typeof localSetImmediate === 'function') {\n  // Node.js and old IE.\n  // There's a few reasons for why we prefer setImmediate.\n  //\n  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.\n  // (Even though this is a DOM fork of the Scheduler, you could get here\n  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)\n  // https://github.com/facebook/react/issues/20756\n  //\n  // But also, it runs earlier which is the semantic we want.\n  // If other browsers ever implement it, it's better to use it.\n  // Although both of these would be inferior to native scheduling.\n  schedulePerformWorkUntilDeadline = function () {\n    localSetImmediate(performWorkUntilDeadline);\n  };\n} else if (typeof MessageChannel !== 'undefined') {\n  // DOM and Worker environments.\n  // We prefer MessageChannel because of the 4ms setTimeout clamping.\n  var channel = new MessageChannel();\n  var port = channel.port2;\n  channel.port1.onmessage = performWorkUntilDeadline;\n\n  schedulePerformWorkUntilDeadline = function () {\n    port.postMessage(null);\n  };\n} else {\n  // We should only fallback here in non-browser environments.\n  schedulePerformWorkUntilDeadline = function () {\n    localSetTimeout(performWorkUntilDeadline, 0);\n  };\n}\n\nfunction requestHostCallback(callback) {\n  scheduledHostCallback = callback;\n\n  if (!isMessageLoopRunning) {\n    isMessageLoopRunning = true;\n    schedulePerformWorkUntilDeadline();\n  }\n}\n\nfunction requestHostTimeout(callback, ms) {\n  taskTimeoutID = localSetTimeout(function () {\n    callback(exports.unstable_now());\n  }, ms);\n}\n\nfunction cancelHostTimeout() {\n  localClearTimeout(taskTimeoutID);\n  taskTimeoutID = -1;\n}\n\nvar unstable_requestPaint = requestPaint;\nvar unstable_Profiling =  null;\n\nexports.unstable_IdlePriority = IdlePriority;\nexports.unstable_ImmediatePriority = ImmediatePriority;\nexports.unstable_LowPriority = LowPriority;\nexports.unstable_NormalPriority = NormalPriority;\nexports.unstable_Profiling = unstable_Profiling;\nexports.unstable_UserBlockingPriority = UserBlockingPriority;\nexports.unstable_cancelCallback = unstable_cancelCallback;\nexports.unstable_continueExecution = unstable_continueExecution;\nexports.unstable_forceFrameRate = forceFrameRate;\nexports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;\nexports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;\nexports.unstable_next = unstable_next;\nexports.unstable_pauseExecution = unstable_pauseExecution;\nexports.unstable_requestPaint = unstable_requestPaint;\nexports.unstable_runWithPriority = unstable_runWithPriority;\nexports.unstable_scheduleCallback = unstable_scheduleCallback;\nexports.unstable_shouldYield = shouldYieldToHost;\nexports.unstable_wrapCallback = unstable_wrapCallback;\n          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\nif (\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\n  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===\n    'function'\n) {\n  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\n}\n        \n  })();\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/scheduler/cjs/scheduler.development.js?");

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ \"./node_modules/scheduler/cjs/scheduler.development.js\");\n}\n\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/scheduler/index.js?");

/***/ }),

/***/ "./src/assets/svg/cards.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/cards.svg ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 44.557 44.557'%3e%3cpath d='M42.313 20.889L22.592 1.166C21.815.389 20.797 0 19.779 0s-2.037.389-2.813 1.166l-10.8 10.798c-1.554 1.554-1.554 4.122 0 5.676l1.79 1.839h4.129l-3.854-3.904c-.27-.271-.31-.61-.31-.774s.04-.491.31-.761l1.426-1.382 6.777 6.821h6.501L12.907 9.401l6.123-6.147c.27-.27.585-.321.749-.321s.479.034.749.303l19.722 19.72c.271.271.312.583.312.748 0 .164-.07.478-.341.749l-1.118 1.091v4.129l3.184-3.155c1.553-1.557 1.581-4.075.026-5.629z' data-original='%23000000' class='active-path' data-old_color='%23FDFAFA' fill='%23FFFEFE'/%3e%3cpath d='M33.06 21.328H5.167c-2.197 0-4.076 1.77-4.076 3.967v10.55h35.898v-10.55c0-2.197-1.732-3.967-3.929-3.967zM10.839 32.253c-.779 0-1.484-.31-2.004-.81-.52.5-1.226.81-2.003.81a2.895 2.895 0 112.003-4.982 2.895 2.895 0 112.004 4.982zm-9.748 8.313c0 2.197 1.878 3.99 4.076 3.99H33.06c2.197 0 3.93-1.793 3.93-3.99v-.234H1.091v.234z' data-original='%23000000' class='active-path' data-old_color='%23FDFAFA' fill='%23FFFEFE'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/cards.svg?");

/***/ }),

/***/ "./src/assets/svg/copyright-symbol.svg":
/*!*********************************************!*\
  !*** ./src/assets/svg/copyright-symbol.svg ***!
  \*********************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 367.467 367.467' style='enable-background:new 0 0 367.467 367.467;' xml:space='preserve'%3e %3cg%3e %3cpath fill='%23ffffff' d='M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716 c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518 c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817 C326.536,262.466,262.481,326.518,183.73,326.518z'/%3e %3cpath fill='%23ffffff' d='M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915 c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129 c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982 c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154 l2.658-7.133h-44.28L244.036,217.014z'/%3e %3c/g%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/copyright-symbol.svg?");

/***/ }),

/***/ "./src/assets/svg/correct.svg":
/*!************************************!*\
  !*** ./src/assets/svg/correct.svg ***!
  \************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='512' viewBox='-44 1 511 511.999' width='512'%3e%3cpath d='M351.234 71.79h62.903l-62.903-62.9zm0 0' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFF'/%3e%3cpath d='M336.059 102.14c-8.38 0-15.172-6.792-15.172-15.175V0H67.516c-8.38 0-15.172 6.793-15.172 15.176V285.64c15.797-6.598 33.12-10.25 51.285-10.25 8.973 0 17.738.894 26.219 2.59a15.063 15.063 0 01-1.602-6.75c0-8.38 6.797-15.172 15.176-15.172h182.773c8.38 0 15.176 6.793 15.176 15.171 0 8.383-6.797 15.176-15.176 15.176H156.703c47.27 20.567 80.406 67.715 80.406 122.465 0 21.254-5 41.356-13.875 59.211H408.07c8.383 0 15.176-6.797 15.176-15.176V102.141zm-64.496 49.712c0 8.382-6.793 15.175-15.176 15.175H143.422c-8.379 0-15.176-6.793-15.176-15.175 0-8.38 6.797-15.176 15.176-15.176h112.965c8.383 0 15.175 6.793 15.175 15.176zm54.632 74.867H143.422c-8.379 0-15.176-6.797-15.176-15.176 0-8.383 6.797-15.176 15.176-15.176h182.773c8.38 0 15.176 6.793 15.176 15.176 0 8.379-6.797 15.176-15.176 15.176zm0 0' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFF'/%3e%3cpath d='M206.762 408.871c0-56.867-46.266-103.129-103.133-103.129C46.766 305.742.5 352.004.5 408.872.5 465.733 46.762 512 103.629 512c56.867 0 103.133-46.266 103.133-103.129zm-111.36 41.18a15.106 15.106 0 01-9.574 3.406 15.16 15.16 0 01-11.473-5.234L43.06 412.129c-5.493-6.332-4.809-15.914 1.523-21.406 6.332-5.489 15.914-4.809 21.406 1.523l21.66 24.98 51.579-41.992c6.5-5.289 16.058-4.312 21.347 2.188 5.293 6.5 4.313 16.058-2.187 21.351zm0 0' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFF'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/correct.svg?");

/***/ }),

/***/ "./src/assets/svg/dollar.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/dollar.svg ***!
  \***********************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='182.026px' height='182.026px' viewBox='0 0 182.026 182.026' style='enable-background:new 0 0 182.026 182.026;' xml:space='preserve'%3e %3cg%3e %3cg%3e %3cpath fill='%23fff' d='M31.859,91.005c0-29.508,21.753-53.977,50.061-58.382v12.881l36.396-22.755L81.913,0v14.222 c-38.388,4.545-68.266,37.218-68.266,76.784c0,27.809,14.789,52.153,36.849,65.778l17.853-11.141 C46.939,136.717,31.859,115.602,31.859,91.005z'/%3e %3cpath fill='%23fff' d='M131.525,25.237l-17.851,11.157c21.418,8.892,36.499,30.012,36.499,54.611c0,29.532-21.749,53.985-50.058,58.396v-12.887 l-36.402,22.764l36.402,22.747v-14.244c38.386-4.53,68.263-37.199,68.263-76.776C168.379,63.207,153.59,38.865,131.525,25.237z'/%3e %3cpath fill='%23fff' d='M95.401,130.802v-9.942c11.204-1.953,17.362-9.362,17.362-18.041c0-8.777-4.679-14.134-16.275-18.241 c-8.298-3.121-11.716-5.166-11.716-8.383c0-2.733,2.045-5.464,8.395-5.464c7.015,0,11.496,2.235,14.041,3.319l2.819-11.023 c-3.203-1.557-7.602-2.919-14.131-3.208v-8.586h-9.562v9.261c-10.42,2.041-16.473,8.777-16.473,17.355 c0,9.458,7.123,14.344,17.568,17.846c7.204,2.441,10.323,4.782,10.323,8.493c0,3.896-3.796,6.041-9.354,6.041 c-6.336,0-12.093-2.048-16.183-4.29l-2.925,11.411c3.693,2.148,10.041,3.899,16.569,4.189v9.264H95.401z'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/dollar.svg?");

/***/ }),

/***/ "./src/assets/svg/envelope.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/envelope.svg ***!
  \*************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' width='512' height='512'%3e%3cpath d='M7 9L5.268 7.484.316 11.729c.18.167.423.271.691.271h11.986c.267 0 .509-.104.688-.271L8.732 7.484 7 9z' data-original='%23030104' class='active-path' data-old_color='%23030104' fill='%23FFF'/%3e%3cpath d='M13.684 2.271A1.007 1.007 0 0012.993 2H1.007c-.267 0-.509.104-.689.273L7 8l6.684-5.729zM0 2.878v8.308l4.833-4.107zm9.167 4.201L14 11.186V2.875z' data-original='%23030104' class='active-path' data-old_color='%23030104' fill='%23FFF'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/envelope.svg?");

/***/ }),

/***/ "./src/assets/svg/megaphone.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/megaphone.svg ***!
  \**************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.032 512.032' width='512' height='512'%3e%3cpath d='M256.016 321.632V126.368c-5.536.512-11.008 1.376-16.576 1.632H80.016c-8.832 0-16 7.168-16 16v16h-48c-8.832 0-16 7.168-16 16v96c0 8.832 7.168 16 16 16h48v16c0 8.832 7.168 16 16 16h9.696l64.32 171.456c3.936 10.272 12.736 17.728 23.552 19.904 2.144.448 4.288.672 6.4.672 8.544 0 16.672-3.392 22.496-9.472l38.432-38.112c9.824-9.824 12.16-25.152 5.888-37.024L197.104 320H239.6c5.504.256 10.944 1.12 16.416 1.632zM509.392 7.744c-.32-.544-.608-.992-1.024-1.504-1.76-2.24-3.968-4.064-6.688-5.12-.096-.032-.16-.16-.256-.192-.32-.096-.608.064-.928-.032-1.44-.416-2.88-.896-4.48-.896-1.088 0-2.048.416-3.104.64-.608.128-1.184.16-1.792.352-2.752.896-5.12 2.432-7.008 4.544-.128.128-.32.16-.448.288C433.776 66.4 364.208 106.912 288.016 121.76v204.512c76.192 14.848 145.76 55.328 195.648 115.904.128.16.352.224.512.416 1.12 1.248 2.496 2.24 3.968 3.072.48.288.864.704 1.344.928 2.016.864 4.192 1.408 6.528 1.408 1.824 0 3.616-.32 5.408-.928.096-.032.16-.16.256-.192 2.72-1.056 4.928-2.848 6.688-5.12.384-.512.672-.96 1.024-1.504 1.536-2.464 2.624-5.184 2.624-8.256V16c0-3.072-1.088-5.792-2.624-8.256z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFF'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/megaphone.svg?");

/***/ }),

/***/ "./src/assets/svg/reply.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/reply.svg ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 511.63 511.631'%3e%3cpath d='M496.5 233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85-3.617-3.617-7.896-5.426-12.847-5.426-4.952 0-9.235 1.809-12.85 5.426L5.424 179.021C1.809 182.641 0 186.922 0 191.871c0 4.948 1.809 9.229 5.424 12.847L151.604 350.9c3.619 3.613 7.902 5.428 12.85 5.428 4.947 0 9.229-1.814 12.847-5.428 3.616-3.614 5.424-7.898 5.424-12.848v-73.094h63.953c18.649 0 35.349.568 50.099 1.708a361.232 361.232 0 0143.968 6.143c14.564 2.95 27.224 6.991 37.979 12.135 10.753 5.144 20.794 11.756 30.122 19.842 9.329 8.094 16.943 17.7 22.847 28.839 5.896 11.136 10.513 24.311 13.846 39.539 3.326 15.229 4.997 32.456 4.997 51.675 0 10.466-.479 22.176-1.428 35.118 0 1.137-.236 3.375-.715 6.708-.473 3.333-.712 5.852-.712 7.562 0 2.851.808 5.232 2.423 7.136 1.622 1.902 3.86 2.851 6.714 2.851 3.046 0 5.708-1.615 7.994-4.853 1.328-1.711 2.561-3.806 3.71-6.283a503.014 503.014 0 003.854-8.562 641.239 641.239 0 002.998-6.848c24.17-54.238 36.258-97.158 36.258-128.756-.002-37.873-5.043-69.568-15.132-95.07z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFF'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/reply.svg?");

/***/ }),

/***/ "./src/assets/svg/shopping-list.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/shopping-list.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3e%3cpath d='M336 32h-34.752C294.656 13.376 276.864 0 256 0s-38.656 13.376-45.28 32H176c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h160c8.832 0 16-7.168 16-16V48c0-8.832-7.168-16-16-16z' data-original='%23000000' class='active-path' data-old_color='%23AF9999' fill='%23FFFEFE'/%3e%3cpath d='M416 64h-32v48c0 26.464-21.536 48-48 48H176c-26.464 0-48-21.536-48-48V64H96c-17.632 0-32 14.368-32 32v384c0 17.952 14.048 32 32 32h320c17.952 0 32-14.048 32-32V96c0-17.952-14.048-32-32-32zM251.328 347.328l-64 64a16.07 16.07 0 01-22.656 0l-32-32c-6.24-6.24-6.24-16.384 0-22.624s16.384-6.24 22.624 0L176 377.376l52.672-52.672c6.24-6.24 16.384-6.24 22.624 0s6.272 16.352.032 22.624zm0-128l-64 64a16.07 16.07 0 01-22.656 0l-32-32c-6.24-6.24-6.24-16.384 0-22.624s16.384-6.24 22.624 0L176 249.376l52.672-52.672c6.24-6.24 16.384-6.24 22.624 0 6.24 6.24 6.272 16.352.032 22.624zM368 384h-64c-8.832 0-16-7.168-16-16s7.168-16 16-16h64c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0-128h-64c-8.832 0-16-7.168-16-16s7.168-16 16-16h64c8.832 0 16 7.168 16 16s-7.168 16-16 16z' data-original='%23000000' class='active-path' data-old_color='%23AF9999' fill='%23FFFEFE'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/shopping-list.svg?");

/***/ }),

/***/ "./src/assets/svg/user.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/user.svg ***!
  \*********************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 299.997 299.997' width='512' height='512'%3e%3cpath d='M149.996 0C67.157 0 .001 67.158.001 149.997c0 82.837 67.156 150 149.995 150s150-67.163 150-150C299.996 67.156 232.835 0 149.996 0zm.457 220.763v-.002H85.465c0-46.856 41.152-46.845 50.284-59.097l1.045-5.587c-12.83-6.502-21.887-22.178-21.887-40.512 0-24.154 15.712-43.738 35.089-43.738s35.089 19.584 35.089 43.738c0 18.178-8.896 33.756-21.555 40.361l1.19 6.349c10.019 11.658 49.802 12.418 49.802 58.488h-64.069z' data-original='%23000000' class='active-path' data-old_color='%23FFFEFE' fill='%23FFF'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://de-plagio-cabinet/./src/assets/svg/user.svg?");

/***/ }),

/***/ "./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _extends; }\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://de-plagio-cabinet/./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "87d6a8eb984b45446b18"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "de-plagio-cabinet:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatede_plagio_cabinet"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkde_plagio_cabinet"] = self["webpackChunkde_plagio_cabinet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;