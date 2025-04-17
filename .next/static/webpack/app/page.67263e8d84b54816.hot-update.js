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

/***/ "(app-pages-browser)/./src/app/components/VehicleForm.tsx":
/*!********************************************!*\
  !*** ./src/app/components/VehicleForm.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VehicleForm: () => (/* binding */ VehicleForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _RegInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegInput */ \"(app-pages-browser)/./src/app/components/RegInput.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ VehicleForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction VehicleForm() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const onSubmit = (data)=>{\n        if (step === 1) {\n            // Store step 1 data and move to step 2\n            const { registration, mileage } = data;\n            setStep(2);\n            // Reset form but preserve step 1 data\n            reset({\n                registration,\n                mileage\n            });\n        } else {\n            console.log('Form submitted:', data);\n        // Handle form submission\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12 p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 pl-8 md:pl-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    className: \"space-y-8 max-w-xl\",\n                    children: step === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: \"Enter some details to get a quote today\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegInput__WEBPACK_IMPORTED_MODULE_2__.RegInput, {\n                                            value: watch('registration'),\n                                            onChange: (value)=>setValue('registration', value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Mileage\",\n                                            ...register('mileage', {\n                                                required: true\n                                            }),\n                                            className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors\",\n                                            children: \"Get Started →\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: \"Enter some details about yourself\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Name\",\n                                            ...register('name', {\n                                                required: true\n                                            }),\n                                            className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            placeholder: \"Email\",\n                                            ...register('email', {\n                                                required: true\n                                            }),\n                                            className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"tel\",\n                                            placeholder: \"Phone Number\",\n                                            ...register('phone', {\n                                                required: true\n                                            }),\n                                            className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Post Code\",\n                                            ...register('postcode', {\n                                                required: true\n                                            }),\n                                            className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pt-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors\",\n                                                children: \"Submit →\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-[2rem] overflow-hidden bg-white shadow-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-8 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold mb-2\",\n                                children: \"Turn your car into\"\n                            }, void 0, false, {\n                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl text-blue-500 font-bold mb-8\",\n                                children: \"a cash cow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-[400px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/car-hero.jpeg\",\n                                    alt: \"Car with cow\",\n                                    fill: true,\n                                    className: \"object-cover rounded-[2rem]\",\n                                    quality: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(VehicleForm, \"A8yt319O2pvZU2N12kERhe6riks=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = VehicleForm;\nvar _c;\n$RefreshReg$(_c, \"VehicleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9WZWhpY2xlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ0U7QUFDSjtBQUNQO0FBV3ZCLFNBQVNLOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLEVBQUVPLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUFFLEdBQUdaLHdEQUFPQTtJQUV6RixNQUFNYSxXQUFXLENBQUNDO1FBQ2hCLElBQUlWLFNBQVMsR0FBRztZQUNkLHVDQUF1QztZQUN2QyxNQUFNLEVBQUVXLFlBQVksRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1lBQ2xDVCxRQUFRO1lBQ1Isc0NBQXNDO1lBQ3RDSyxNQUFNO2dCQUFFSztnQkFBY0M7WUFBUTtRQUNoQyxPQUFPO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJKO1FBQy9CLHlCQUF5QjtRQUMzQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUtSLFVBQVVOLGFBQWFNO29CQUFXTyxXQUFVOzhCQUMvQ2hCLFNBQVMsa0JBQ1I7a0NBQ0UsNEVBQUNlOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQXFCOzs7Ozs7OENBQ25DLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNuQiwrQ0FBUUE7NENBQ1BzQixPQUFPZixNQUFNOzRDQUNiZ0IsVUFBVSxDQUFDRCxRQUFVZCxTQUFTLGdCQUFnQmM7Ozs7OztzREFFaEQsOERBQUNFOzRDQUNDQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNYLEdBQUdyQixTQUFTLFdBQVc7Z0RBQUVzQixVQUFVOzRDQUFLLEVBQUU7NENBQzNDUixXQUFVOzs7Ozs7c0RBRVosOERBQUNTOzRDQUNDSCxNQUFLOzRDQUNMTixXQUFVO3NEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT1A7a0NBQ0UsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQXFCOzs7Ozs7OENBQ25DLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNYLEdBQUdyQixTQUFTLFFBQVE7Z0RBQUVzQixVQUFVOzRDQUFLLEVBQUU7NENBQ3hDUixXQUFVOzs7Ozs7c0RBRVosOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNYLEdBQUdyQixTQUFTLFNBQVM7Z0RBQUVzQixVQUFVOzRDQUFLLEVBQUU7NENBQ3pDUixXQUFVOzs7Ozs7c0RBRVosOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNYLEdBQUdyQixTQUFTLFNBQVM7Z0RBQUVzQixVQUFVOzRDQUFLLEVBQUU7NENBQ3pDUixXQUFVOzs7Ozs7c0RBRVosOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNYLEdBQUdyQixTQUFTLFlBQVk7Z0RBQUVzQixVQUFVOzRDQUFLLEVBQUU7NENBQzVDUixXQUFVOzs7Ozs7c0RBRVosOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFDQ0gsTUFBSztnREFDTE4sV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFXZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUEwQjs7Ozs7OzBDQUN4Qyw4REFBQ1U7Z0NBQUdWLFdBQVU7MENBQXdDOzs7Ozs7MENBQ3RELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2xCLGtEQUFLQTtvQ0FDSjZCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLElBQUk7b0NBQ0piLFdBQVU7b0NBQ1ZjLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QjtHQTVHZ0IvQjs7UUFFb0VILG9EQUFPQTs7O0tBRjNFRyIsInNvdXJjZXMiOlsiL1VzZXJzL2tpbmdfcm9tYnVzL0RvY3VtZW50cy9wcm9qZWN0cy92ZWhpY2xlX3ZhdWx0L3NyYy9hcHAvY29tcG9uZW50cy9WZWhpY2xlRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IFJlZ0lucHV0IH0gZnJvbSAnLi9SZWdJbnB1dCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG50eXBlIEZvcm1EYXRhID0ge1xuICByZWdpc3RyYXRpb246IHN0cmluZ1xuICBtaWxlYWdlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmU6IHN0cmluZ1xuICBwb3N0Y29kZTogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWZWhpY2xlRm9ybSgpIHtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgc2V0VmFsdWUsIHJlc2V0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm08Rm9ybURhdGE+KClcbiAgXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IEZvcm1EYXRhKSA9PiB7XG4gICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgIC8vIFN0b3JlIHN0ZXAgMSBkYXRhIGFuZCBtb3ZlIHRvIHN0ZXAgMlxuICAgICAgY29uc3QgeyByZWdpc3RyYXRpb24sIG1pbGVhZ2UgfSA9IGRhdGFcbiAgICAgIHNldFN0ZXAoMilcbiAgICAgIC8vIFJlc2V0IGZvcm0gYnV0IHByZXNlcnZlIHN0ZXAgMSBkYXRhXG4gICAgICByZXNldCh7IHJlZ2lzdHJhdGlvbiwgbWlsZWFnZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQ6JywgZGF0YSlcbiAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB3LWZ1bGwgbWF4LXctN3hsIG14LWF1dG8gZ2FwLTEyIHAtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcGwtOCBtZDpwbC0xNlwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS04IG1heC13LXhsXCI+XG4gICAgICAgICAge3N0ZXAgPT09IDEgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5FbnRlciBzb21lIGRldGFpbHMgdG8gZ2V0IGEgcXVvdGUgdG9kYXk8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8UmVnSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YXRjaCgncmVnaXN0cmF0aW9uJyl9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRWYWx1ZSgncmVnaXN0cmF0aW9uJywgdmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbGVhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ21pbGVhZ2UnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IHRleHQteGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS02IHB4LTggcm91bmRlZC14bCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZCDihpJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5FbnRlciBzb21lIGRldGFpbHMgYWJvdXQgeW91cnNlbGY8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IHRleHQteGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IHRleHQteGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwaG9uZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgdGV4dC14bCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeS81MCBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdCBDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwb3N0Y29kZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgdGV4dC14bCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeS81MCBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktNiBweC04IHJvdW5kZWQteGwgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCDihpJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsycmVtXSBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgc2hhZG93LXhsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItMlwiPlR1cm4geW91ciBjYXIgaW50bzwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ibHVlLTUwMCBmb250LWJvbGQgbWItOFwiPmEgY2FzaCBjb3c8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1bNDAwcHhdXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXItaGVyby5qcGVnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDYXIgd2l0aCBjb3dcIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1bMnJlbV1cIlxuICAgICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIlJlZ0lucHV0IiwiSW1hZ2UiLCJWZWhpY2xlRm9ybSIsInN0ZXAiLCJzZXRTdGVwIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsInNldFZhbHVlIiwicmVzZXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWdpc3RyYXRpb24iLCJtaWxlYWdlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJoMiIsInZhbHVlIiwib25DaGFuZ2UiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwiaDMiLCJzcmMiLCJhbHQiLCJmaWxsIiwicXVhbGl0eSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/VehicleForm.tsx\n"));

/***/ })

});