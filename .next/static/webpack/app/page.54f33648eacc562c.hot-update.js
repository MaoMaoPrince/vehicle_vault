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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VehicleForm: () => (/* binding */ VehicleForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _RegInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegInput */ \"(app-pages-browser)/./src/app/components/RegInput.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ VehicleForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction VehicleForm() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const onSubmit = (data)=>{\n        if (step === 1) {\n            const { registration, mileage } = data;\n            setStep(2);\n            reset({\n                registration,\n                mileage\n            });\n        } else {\n            console.log('Form submitted:', data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-16 p-8 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 pl-8 md:pl-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    className: \"space-y-12 max-w-xl py-12\",\n                    children: step === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: \"Enter some details to get a quote today\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegInput__WEBPACK_IMPORTED_MODULE_2__.RegInput, {\n                                                value: watch('registration'),\n                                                onChange: (value)=>setValue('registration', value)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Mileage\",\n                                                ...register('mileage', {\n                                                    required: true\n                                                }),\n                                                className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pt-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors shadow-sm\",\n                                                children: \"Get Started →\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: \"Enter some details about yourself\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Name\",\n                                                ...register('name', {\n                                                    required: true\n                                                }),\n                                                className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                placeholder: \"Email\",\n                                                ...register('email', {\n                                                    required: true\n                                                }),\n                                                className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"tel\",\n                                                placeholder: \"Phone Number\",\n                                                ...register('phone', {\n                                                    required: true\n                                                }),\n                                                className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Post Code\",\n                                                ...register('postcode', {\n                                                    required: true\n                                                }),\n                                                className: \"w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pt-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors shadow-sm\",\n                                                children: \"Submit →\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-shadow duration-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-12 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold mb-3\",\n                                children: \"Vehcile Vault\"\n                            }, void 0, false, {\n                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-[400px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/car-hero.jpeg\",\n                                    alt: \"Car with cow\",\n                                    fill: true,\n                                    className: \"object-cover rounded-[2rem]\",\n                                    quality: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/king_rombus/Documents/projects/vehicle_vault/src/app/components/VehicleForm.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(VehicleForm, \"A8yt319O2pvZU2N12kERhe6riks=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = VehicleForm;\nvar _c;\n$RefreshReg$(_c, \"VehicleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9WZWhpY2xlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ0U7QUFDSjtBQUNQO0FBV3ZCLFNBQVNLOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLEVBQUVPLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUFFLEdBQUdaLHdEQUFPQTtJQUV6RixNQUFNYSxXQUFXLENBQUNDO1FBQ2hCLElBQUlWLFNBQVMsR0FBRztZQUNkLE1BQU0sRUFBRVcsWUFBWSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Y7WUFDbENULFFBQVE7WUFDUkssTUFBTTtnQkFBRUs7Z0JBQWNDO1lBQVE7UUFDaEMsT0FBTztZQUNMQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSjtRQUNqQztJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUtSLFVBQVVOLGFBQWFNO29CQUFXTyxXQUFVOzhCQUMvQ2hCLFNBQVMsa0JBQ1I7a0NBQ0UsNEVBQUNlOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQXFCOzs7Ozs7OENBQ25DLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDbkIsK0NBQVFBO2dEQUNQc0IsT0FBT2YsTUFBTTtnREFDYmdCLFVBQVUsQ0FBQ0QsUUFBVWQsU0FBUyxnQkFBZ0JjOzs7Ozs7Ozs7OztzREFHbEQsOERBQUNKOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDSztnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWCxHQUFHckIsU0FBUyxXQUFXO29EQUFFc0IsVUFBVTtnREFBSyxFQUFFO2dEQUMzQ1IsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFDQ0gsTUFBSztnREFDTE4sV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUVQ7a0NBQ0UsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQXFCOzs7Ozs7OENBQ25DLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDSztnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWCxHQUFHckIsU0FBUyxRQUFRO29EQUFFc0IsVUFBVTtnREFBSyxFQUFFO2dEQUN4Q1IsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDSztnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWCxHQUFHckIsU0FBUyxTQUFTO29EQUFFc0IsVUFBVTtnREFBSyxFQUFFO2dEQUN6Q1IsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDSztnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWCxHQUFHckIsU0FBUyxTQUFTO29EQUFFc0IsVUFBVTtnREFBSyxFQUFFO2dEQUN6Q1IsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDSztnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWCxHQUFHckIsU0FBUyxZQUFZO29EQUFFc0IsVUFBVTtnREFBSyxFQUFFO2dEQUM1Q1IsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFDQ0gsTUFBSztnREFDTE4sV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFXZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUEwQjs7Ozs7OzBDQUN4Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsQixrREFBS0E7b0NBQ0o0QixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKWixXQUFVO29DQUNWYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0F0SGdCOUI7O1FBRW9FSCxvREFBT0E7OztLQUYzRUciLCJzb3VyY2VzIjpbIi9Vc2Vycy9raW5nX3JvbWJ1cy9Eb2N1bWVudHMvcHJvamVjdHMvdmVoaWNsZV92YXVsdC9zcmMvYXBwL2NvbXBvbmVudHMvVmVoaWNsZUZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgeyBSZWdJbnB1dCB9IGZyb20gJy4vUmVnSW5wdXQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxudHlwZSBGb3JtRGF0YSA9IHtcbiAgcmVnaXN0cmF0aW9uOiBzdHJpbmdcbiAgbWlsZWFnZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIHBob25lOiBzdHJpbmdcbiAgcG9zdGNvZGU6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmVoaWNsZUZvcm0oKSB7XG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIHNldFZhbHVlLCByZXNldCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtPEZvcm1EYXRhPigpXG4gIFxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICBjb25zdCB7IHJlZ2lzdHJhdGlvbiwgbWlsZWFnZSB9ID0gZGF0YVxuICAgICAgc2V0U3RlcCgyKVxuICAgICAgcmVzZXQoeyByZWdpc3RyYXRpb24sIG1pbGVhZ2UgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Zvcm0gc3VibWl0dGVkOicsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgdy1mdWxsIG1heC13LTd4bCBteC1hdXRvIGdhcC0xNiBwLTggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwbC04IG1kOnBsLTE2XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTEyIG1heC13LXhsIHB5LTEyXCI+XG4gICAgICAgICAge3N0ZXAgPT09IDEgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+RW50ZXIgc29tZSBkZXRhaWxzIHRvIGdldCBhIHF1b3RlIHRvZGF5PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2F0Y2goJ3JlZ2lzdHJhdGlvbicpfSBcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRWYWx1ZSgncmVnaXN0cmF0aW9uJywgdmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbGVhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbWlsZWFnZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiB0ZXh0LXhsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIGZvY3VzOm91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTYgcHgtOCByb3VuZGVkLXhsIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWQg4oaSXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5FbnRlciBzb21lIGRldGFpbHMgYWJvdXQgeW91cnNlbGY8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IHRleHQteGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgdGV4dC14bCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeS81MCBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bob25lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IHRleHQteGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkvNTAgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3N0IENvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncG9zdGNvZGUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgdGV4dC14bCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeS81MCBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS02IHB4LTggcm91bmRlZC14bCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCDihpJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsycmVtXSBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgc2hhZG93LVswXzhweF8zMHB4X3JnYigwLDAsMCwwLjEyKV0gaG92ZXI6c2hhZG93LVswXzhweF80MHB4X3JnYigwLDAsMCwwLjE2KV0gdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTNcIj5WZWhjaWxlIFZhdWx0PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzQwMHB4XVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FyLWhlcm8uanBlZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiQ2FyIHdpdGggY293XCJcbiAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtWzJyZW1dXCJcbiAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJSZWdJbnB1dCIsIkltYWdlIiwiVmVoaWNsZUZvcm0iLCJzdGVwIiwic2V0U3RlcCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJzZXRWYWx1ZSIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwicmVnaXN0cmF0aW9uIiwibWlsZWFnZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaDIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInNyYyIsImFsdCIsImZpbGwiLCJxdWFsaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/VehicleForm.tsx\n"));

/***/ })

});