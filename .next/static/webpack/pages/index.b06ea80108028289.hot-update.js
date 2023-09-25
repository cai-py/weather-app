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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [lat, setLat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [long, setLong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                // get user location\n                const position = await new Promise((resolve, reject)=>{\n                    navigator.geolocation.getCurrentPosition(resolve, reject);\n                });\n                const userLat = position.coords.latitude;\n                const userLong = position.coords.longitude;\n                // Set state\n                setLat(userLat);\n                setLong(userLong);\n                // get environment variables\n                const apiBaseUrl = \"https://api.openweathermap.org/data/2.5\";\n                const apiKey = \"c45cb34bc0ba954b0d31c3a7cda23ba0\";\n                // fetch weather data\n                const response = await fetch(\"\".concat(apiBaseUrl, \"/weather/?lat=\").concat(userLat, \"&lon=\").concat(userLong, \"&units=metric&APPID=\").concat(apiKey));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const result = await response.json();\n                setData(result);\n                console.log(result);\n            } catch (error) {\n                console.error(\"Error fetching weather data: \", error);\n            }\n        }\n        fetchData();\n    }, []);\n    // Format Time\n    const formatTime = (timestamp)=>{\n        const date = new Date(timestamp * 1000);\n        const hours = date.getHours();\n        const minutes = \"0\".concat(date.getMinutes()).slice(-2);\n        return \"\".concat(hours, \":\").concat(minutes);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().weatherDisplay),\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().weatherCondition),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Current Condition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Temperature:\",\n                                data.main.temp,\n                                \"\\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Weather Info\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Sunrise: \",\n                                formatTime(data.sys.sunrise)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Sunset: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n} ////////// Code Graveyard //////////\n // useEffect(() => {\n //   // get user's location\n //   navigator.geolocation.getCurrentPosition(function(position) {\n //     const userLat = position.coords.latitude;\n //     const userLong = position.coords.longitude;\n //     setLat(userLat);\n //     setLong(userLong);\n //     fetchWeatherData(userLat,userLong);\n //   });\n // },[]);\n // const fetchWeatherData = () => {\n //   // fetch weather data when location is found\n //   const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`\n //   console.log('API URL', apiUrl);\n //   fetch(apiUrl)\n //     .then(res => res.json())\n //     .then(result => {\n //       setData(restult);\n //       console.log(result)\n //     })\n //     .catch(error => {\n //       console.error(\"Error fetching Weather data: \", error);\n //     })\n // };\n_s(Home, \"W/jxR5MNukpv4THBvYzkvoYEDrQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbGF0LCBzZXRMYXRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb25nLCBzZXRMb25nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGdldCB1c2VyIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB1c2VyTGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlIFxuICAgICAgICBjb25zdCB1c2VyTG9uZyA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG5cbiAgICAgICAgLy8gU2V0IHN0YXRlXG4gICAgICAgIHNldExhdCh1c2VyTGF0KTtcbiAgICAgICAgc2V0TG9uZyh1c2VyTG9uZyk7XG5cbiAgICAgICAgLy8gZ2V0IGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBhcGlCYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcblxuICAgICAgICAvLyBmZXRjaCB3ZWF0aGVyIGRhdGFcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlCYXNlVXJsfS93ZWF0aGVyLz9sYXQ9JHt1c2VyTGF0fSZsb249JHt1c2VyTG9uZ30mdW5pdHM9bWV0cmljJkFQUElEPSR7YXBpS2V5fWApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShyZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKVxuXG4gIC8vIEZvcm1hdCBUaW1lXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YC5zbGljZSgtMik7XG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyRGlzcGxheX0+XG4gICAgICB7LyogRGlzcGxheSB3ZWF0aGVyIGRhdGEgb3IgbG9hZGluZyBtZXNzYWdlICovfVxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyQ29uZGl0aW9ufT5cbiAgICAgICAgICAgIDxoMj5DdXJyZW50IENvbmRpdGlvbjwvaDI+XG4gICAgICAgICAgICA8cD5UZW1wZXJhdHVyZTp7ZGF0YS5tYWluLnRlbXB9wrBDPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+V2VhdGhlciBJbmZvPC9oMj5cbiAgICAgICAgICAgIDxwPlN1bnJpc2U6IHtmb3JtYXRUaW1lKGRhdGEuc3lzLnN1bnJpc2UpfTwvcD5cbiAgICAgICAgICAgIDxwPlN1bnNldDoge308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cblxuLy8vLy8vLy8vLyBDb2RlIEdyYXZleWFyZCAvLy8vLy8vLy8vXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIGdldCB1c2VyJ3MgbG9jYXRpb25cbiAgLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gIC8vICAgICBjb25zdCB1c2VyTGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAvLyAgICAgY29uc3QgdXNlckxvbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuXG4gIC8vICAgICBzZXRMYXQodXNlckxhdCk7XG4gIC8vICAgICBzZXRMb25nKHVzZXJMb25nKTtcblxuICAvLyAgICAgZmV0Y2hXZWF0aGVyRGF0YSh1c2VyTGF0LHVzZXJMb25nKTtcbiAgLy8gICB9KTtcblxuXG4gIC8vIH0sW10pO1xuXG4gIC8vIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSAoKSA9PiB7XG4gIC8vICAgLy8gZmV0Y2ggd2VhdGhlciBkYXRhIHdoZW4gbG9jYXRpb24gaXMgZm91bmRcbiAgLy8gICBjb25zdCBhcGlVcmwgPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTH0vd2VhdGhlci8/bGF0PSR7bGF0fSZsb249JHtsb25nfSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWX1gXG4gIC8vICAgY29uc29sZS5sb2coJ0FQSSBVUkwnLCBhcGlVcmwpO1xuXG4gIC8vICAgZmV0Y2goYXBpVXJsKVxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC8vICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAvLyAgICAgICBzZXREYXRhKHJlc3R1bHQpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIC8vICAgICB9KVxuICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFdlYXRoZXIgZGF0YTogXCIsIGVycm9yKTtcbiAgLy8gICAgIH0pXG4gIC8vIH07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJsYXQiLCJzZXRMYXQiLCJsb25nIiwic2V0TG9uZyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicG9zaXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwidXNlckxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwidXNlckxvbmciLCJsb25naXR1ZGUiLCJhcGlCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGlLZXkiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZm9ybWF0VGltZSIsInRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ3ZWF0aGVyRGlzcGxheSIsIndlYXRoZXJDb25kaXRpb24iLCJoMiIsInAiLCJtYWluIiwidGVtcCIsInN5cyIsInN1bnJpc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});