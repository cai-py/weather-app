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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [lat, setLat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [long, setLong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                // get user location\n                const position = await new Promise((resolve, reject)=>{\n                    navigator.geolocation.getCurrentPosition(resolve, reject);\n                });\n                const userLat = position.coords.latitude;\n                const userLong = position.coords.longitude;\n                // Set state\n                setLat(userLat);\n                setLong(userLong);\n                // get environment variables\n                const apiBaseUrl = \"https://api.openweathermap.org/data/2.5\";\n                const apiKey = \"c45cb34bc0ba954b0d31c3a7cda23ba0\";\n                // fetch weather data\n                const response = await fetch(\"\".concat(apiBaseUrl, \"/weather/?lat=\").concat(userLat, \"&lon=\").concat(userLong, \"&units=metric&APPID=\").concat(apiKey));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const result = await response.json();\n                setData(result);\n            // console.log(result);\n            } catch (error) {\n                console.error(\"Error fetching weather data: \", error);\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().weatherDisplay),\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().weatherCondition),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Current Condition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Temperature:\",\n                            data.main.temp,\n                            \"\\xb0C\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n} ////////// Code Graveyard //////////\n // useEffect(() => {\n //   // get user's location\n //   navigator.geolocation.getCurrentPosition(function(position) {\n //     const userLat = position.coords.latitude;\n //     const userLong = position.coords.longitude;\n //     setLat(userLat);\n //     setLong(userLong);\n //     fetchWeatherData(userLat,userLong);\n //   });\n // },[]);\n // const fetchWeatherData = () => {\n //   // fetch weather data when location is found\n //   const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`\n //   console.log('API URL', apiUrl);\n //   fetch(apiUrl)\n //     .then(res => res.json())\n //     .then(result => {\n //       setData(restult);\n //       console.log(result)\n //     })\n //     .catch(error => {\n //       console.error(\"Error fetching Weather data: \", error);\n //     })\n // };\n_s(Home, \"W/jxR5MNukpv4THBvYzkvoYEDrQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSTtBQUVwQyxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVM7WUFDYixJQUFJO2dCQUNGLG9CQUFvQjtnQkFDcEIsTUFBTUMsV0FBVyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7b0JBQzNDQyxVQUFVQyxXQUFXLENBQUNDLGtCQUFrQixDQUFDSixTQUFTQztnQkFDcEQ7Z0JBRUEsTUFBTUksVUFBVVAsU0FBU1EsTUFBTSxDQUFDQyxRQUFRO2dCQUN4QyxNQUFNQyxXQUFXVixTQUFTUSxNQUFNLENBQUNHLFNBQVM7Z0JBRTFDLFlBQVk7Z0JBQ1pqQixPQUFPYTtnQkFDUFgsUUFBUWM7Z0JBRVIsNEJBQTRCO2dCQUM1QixNQUFNRSxhQUFhQyx5Q0FBK0I7Z0JBQ2xELE1BQU1HLFNBQVNILGtDQUErQjtnQkFFOUMscUJBQXFCO2dCQUNyQixNQUFNSyxXQUFXLE1BQU1DLE1BQU0sR0FBOEJaLE9BQTNCSyxZQUFXLGtCQUErQkYsT0FBZkgsU0FBUSxTQUFzQ1MsT0FBL0JOLFVBQVMsd0JBQTZCLE9BQVBNO2dCQUN6RyxJQUFJLENBQUNFLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxTQUFTLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2xDekIsUUFBUXdCO1lBQ1IsdUJBQXVCO1lBQ3pCLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDakQ7UUFDRjtRQUNBekI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzJCO1FBQUlDLFdBQVd2QywrRUFBcUI7a0JBRWxDUyxxQkFDQyw4REFBQzZCO3NCQUNDLDRFQUFDQTtnQkFBSUMsV0FBV3ZDLGlGQUF1Qjs7a0NBQ3JDLDhEQUFDMEM7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7OzRCQUFFOzRCQUFhbEMsS0FBS21DLElBQUksQ0FBQ0MsSUFBSTs0QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBS25DLDhEQUFDRjtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWCxFQUtBLG9DQUFvQztDQUNwQyxvQkFBb0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGtFQUFrRTtDQUNsRSxnREFBZ0Q7Q0FDaEQsa0RBQWtEO0NBRWxELHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FFekIsMENBQTBDO0NBQzFDLFFBQVE7Q0FHUixTQUFTO0NBRVQsbUNBQW1DO0NBQ25DLGlEQUFpRDtDQUNqRCwwSUFBMEk7Q0FDMUksb0NBQW9DO0NBRXBDLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0Isd0JBQXdCO0NBQ3hCLDBCQUEwQjtDQUMxQiw0QkFBNEI7Q0FDNUIsU0FBUztDQUNULHdCQUF3QjtDQUN4QiwrREFBK0Q7Q0FDL0QsU0FBUztDQUNULEtBQUs7R0EzRmlCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xhdCwgc2V0TGF0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9uZywgc2V0TG9uZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBnZXQgdXNlciBsb2NhdGlvblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdXNlckxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSBcbiAgICAgICAgY29uc3QgdXNlckxvbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuXG4gICAgICAgIC8vIFNldCBzdGF0ZVxuICAgICAgICBzZXRMYXQodXNlckxhdCk7XG4gICAgICAgIHNldExvbmcodXNlckxvbmcpO1xuXG4gICAgICAgIC8vIGdldCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgYXBpQmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG4gICAgICAgIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG5cbiAgICAgICAgLy8gZmV0Y2ggd2VhdGhlciBkYXRhXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZVVybH0vd2VhdGhlci8/bGF0PSR7dXNlckxhdH0mbG9uPSR7dXNlckxvbmd9JnVuaXRzPW1ldHJpYyZBUFBJRD0ke2FwaUtleX1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldERhdGEocmVzdWx0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyRGlzcGxheX0+XG4gICAgICB7LyogRGlzcGxheSB3ZWF0aGVyIGRhdGEgb3IgbG9hZGluZyBtZXNzYWdlICovfVxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyQ29uZGl0aW9ufT5cbiAgICAgICAgICAgIDxoMj5DdXJyZW50IENvbmRpdGlvbjwvaDI+XG4gICAgICAgICAgICA8cD5UZW1wZXJhdHVyZTp7ZGF0YS5tYWluLnRlbXB9wrBDPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG5cbi8vLy8vLy8vLy8gQ29kZSBHcmF2ZXlhcmQgLy8vLy8vLy8vL1xuLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAvLyBnZXQgdXNlcidzIGxvY2F0aW9uXG4gIC8vICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xuICAvLyAgICAgY29uc3QgdXNlckxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgLy8gICAgIGNvbnN0IHVzZXJMb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcblxuICAvLyAgICAgc2V0TGF0KHVzZXJMYXQpO1xuICAvLyAgICAgc2V0TG9uZyh1c2VyTG9uZyk7XG5cbiAgLy8gICAgIGZldGNoV2VhdGhlckRhdGEodXNlckxhdCx1c2VyTG9uZyk7XG4gIC8vICAgfSk7XG5cblxuICAvLyB9LFtdKTtcblxuICAvLyBjb25zdCBmZXRjaFdlYXRoZXJEYXRhID0gKCkgPT4ge1xuICAvLyAgIC8vIGZldGNoIHdlYXRoZXIgZGF0YSB3aGVuIGxvY2F0aW9uIGlzIGZvdW5kXG4gIC8vICAgY29uc3QgYXBpVXJsID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkx9L3dlYXRoZXIvP2xhdD0ke2xhdH0mbG9uPSR7bG9uZ30mdW5pdHM9bWV0cmljJkFQUElEPSR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVl9YFxuICAvLyAgIGNvbnNvbGUubG9nKCdBUEkgVVJMJywgYXBpVXJsKTtcblxuICAvLyAgIGZldGNoKGFwaVVybClcbiAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAvLyAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgLy8gICAgICAgc2V0RGF0YShyZXN0dWx0KTtcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAvLyAgICAgfSlcbiAgLy8gICAgIC5jYXRjaChlcnJvciA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBXZWF0aGVyIGRhdGE6IFwiLCBlcnJvcik7XG4gIC8vICAgICB9KVxuICAvLyB9O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwibGF0Iiwic2V0TGF0IiwibG9uZyIsInNldExvbmciLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInBvc2l0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInVzZXJMYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsInVzZXJMb25nIiwibG9uZ2l0dWRlIiwiYXBpQmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYXBpS2V5IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwicmVzdWx0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIndlYXRoZXJEaXNwbGF5Iiwid2VhdGhlckNvbmRpdGlvbiIsImgyIiwicCIsIm1haW4iLCJ0ZW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});