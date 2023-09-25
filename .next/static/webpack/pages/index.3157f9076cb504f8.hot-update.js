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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [lat, setLat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [long, setLong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                // get user location\n                const position = await new Promise((resolve, reject)=>{\n                    navigator.geolocation.getCurrentPosition(resolve, reject);\n                });\n                const userLat = position.coords.latitude;\n                const userLong = position.coords.longitude;\n                // Set state\n                setLat(userLat);\n                setLong(userLong);\n                // get environment variables\n                const apiBaseUrl = \"https://api.openweathermap.org/data/2.5\";\n                const apiKey = \"c45cb34bc0ba954b0d31c3a7cda23ba0\";\n                // fetch weather data\n                const response = await fetch(\"\".concat(apiBaseUrl, \"/weather/?lat=\").concat(userLat, \"&lon=\").concat(userLong, \"&units=metric&APPID=\").concat(apiKey));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const result = await response.json();\n                setData(result);\n            // console.log(result);\n            } catch (error) {\n                console.error(\"Error fetching weather data: \", error);\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().weather) - display,\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Weather in \",\n                        data.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Temperature: \",\n                        data.main.temp,\n                        \"\\xb0C\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cai.py/Documents/Apps/weather-app/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n} ////////// Code Graveyard //////////\n // useEffect(() => {\n //   // get user's location\n //   navigator.geolocation.getCurrentPosition(function(position) {\n //     const userLat = position.coords.latitude;\n //     const userLong = position.coords.longitude;\n //     setLat(userLat);\n //     setLong(userLong);\n //     fetchWeatherData(userLat,userLong);\n //   });\n // },[]);\n // const fetchWeatherData = () => {\n //   // fetch weather data when location is found\n //   const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`\n //   console.log('API URL', apiUrl);\n //   fetch(apiUrl)\n //     .then(res => res.json())\n //     .then(result => {\n //       setData(restult);\n //       console.log(result)\n //     })\n //     .catch(error => {\n //       console.error(\"Error fetching Weather data: \", error);\n //     })\n // };\n_s(Home, \"W/jxR5MNukpv4THBvYzkvoYEDrQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSTtBQUVwQyxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVM7WUFDYixJQUFJO2dCQUNGLG9CQUFvQjtnQkFDcEIsTUFBTUMsV0FBVyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7b0JBQzNDQyxVQUFVQyxXQUFXLENBQUNDLGtCQUFrQixDQUFDSixTQUFTQztnQkFDcEQ7Z0JBRUEsTUFBTUksVUFBVVAsU0FBU1EsTUFBTSxDQUFDQyxRQUFRO2dCQUN4QyxNQUFNQyxXQUFXVixTQUFTUSxNQUFNLENBQUNHLFNBQVM7Z0JBRTFDLFlBQVk7Z0JBQ1pqQixPQUFPYTtnQkFDUFgsUUFBUWM7Z0JBRVIsNEJBQTRCO2dCQUM1QixNQUFNRSxhQUFhQyx5Q0FBK0I7Z0JBQ2xELE1BQU1HLFNBQVNILGtDQUErQjtnQkFFOUMscUJBQXFCO2dCQUNyQixNQUFNSyxXQUFXLE1BQU1DLE1BQU0sR0FBOEJaLE9BQTNCSyxZQUFXLGtCQUErQkYsT0FBZkgsU0FBUSxTQUFzQ1MsT0FBL0JOLFVBQVMsd0JBQTZCLE9BQVBNO2dCQUN6RyxJQUFJLENBQUNFLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxTQUFTLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2xDekIsUUFBUXdCO1lBQ1IsdUJBQXVCO1lBQ3pCLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDakQ7UUFDRjtRQUNBekI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzJCO1FBQUlDLFdBQVd2Qyx3RUFBYyxHQUFDeUM7a0JBRTVCaEMscUJBQ0MsOERBQUM2Qjs7OEJBQ0MsOERBQUNJOzt3QkFBRzt3QkFBWWpDLEtBQUtrQyxJQUFJOzs7Ozs7OzhCQUN6Qiw4REFBQ0M7O3dCQUFFO3dCQUFjbkMsS0FBS29DLElBQUksQ0FBQ0MsSUFBSTt3QkFBQzs7Ozs7Ozs7Ozs7O2lDQUdsQyw4REFBQ0Y7c0JBQUU7Ozs7Ozs7Ozs7O0FBSVgsRUFLQSxvQ0FBb0M7Q0FDcEMsb0JBQW9CO0NBQ2xCLDJCQUEyQjtDQUMzQixrRUFBa0U7Q0FDbEUsZ0RBQWdEO0NBQ2hELGtEQUFrRDtDQUVsRCx1QkFBdUI7Q0FDdkIseUJBQXlCO0NBRXpCLDBDQUEwQztDQUMxQyxRQUFRO0NBR1IsU0FBUztDQUVULG1DQUFtQztDQUNuQyxpREFBaUQ7Q0FDakQsMElBQTBJO0NBQzFJLG9DQUFvQztDQUVwQyxrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLHdCQUF3QjtDQUN4QiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLFNBQVM7Q0FDVCx3QkFBd0I7Q0FDeEIsK0RBQStEO0NBQy9ELFNBQVM7Q0FDVCxLQUFLO0dBeEZpQnhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsYXQsIHNldExhdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvbmcsIHNldExvbmddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZ2V0IHVzZXIgbG9jYXRpb25cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHVzZXJMYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUgXG4gICAgICAgIGNvbnN0IHVzZXJMb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcblxuICAgICAgICAvLyBTZXQgc3RhdGVcbiAgICAgICAgc2V0TGF0KHVzZXJMYXQpO1xuICAgICAgICBzZXRMb25nKHVzZXJMb25nKTtcblxuICAgICAgICAvLyBnZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuICAgICAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xuXG4gICAgICAgIC8vIGZldGNoIHdlYXRoZXIgZGF0YVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUJhc2VVcmx9L3dlYXRoZXIvP2xhdD0ke3VzZXJMYXR9Jmxvbj0ke3VzZXJMb25nfSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHthcGlLZXl9YCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKHJlc3VsdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2VhdGhlci1kaXNwbGF5fT5cbiAgICAgIHsvKiBEaXNwbGF5IHdlYXRoZXIgZGF0YSBvciBsb2FkaW5nIG1lc3NhZ2UgKi99XG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+V2VhdGhlciBpbiB7ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgPHA+VGVtcGVyYXR1cmU6IHtkYXRhLm1haW4udGVtcH3CsEM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cblxuLy8vLy8vLy8vLyBDb2RlIEdyYXZleWFyZCAvLy8vLy8vLy8vXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIGdldCB1c2VyJ3MgbG9jYXRpb25cbiAgLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gIC8vICAgICBjb25zdCB1c2VyTGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAvLyAgICAgY29uc3QgdXNlckxvbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuXG4gIC8vICAgICBzZXRMYXQodXNlckxhdCk7XG4gIC8vICAgICBzZXRMb25nKHVzZXJMb25nKTtcblxuICAvLyAgICAgZmV0Y2hXZWF0aGVyRGF0YSh1c2VyTGF0LHVzZXJMb25nKTtcbiAgLy8gICB9KTtcblxuXG4gIC8vIH0sW10pO1xuXG4gIC8vIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSAoKSA9PiB7XG4gIC8vICAgLy8gZmV0Y2ggd2VhdGhlciBkYXRhIHdoZW4gbG9jYXRpb24gaXMgZm91bmRcbiAgLy8gICBjb25zdCBhcGlVcmwgPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTH0vd2VhdGhlci8/bGF0PSR7bGF0fSZsb249JHtsb25nfSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWX1gXG4gIC8vICAgY29uc29sZS5sb2coJ0FQSSBVUkwnLCBhcGlVcmwpO1xuXG4gIC8vICAgZmV0Y2goYXBpVXJsKVxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC8vICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAvLyAgICAgICBzZXREYXRhKHJlc3R1bHQpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIC8vICAgICB9KVxuICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFdlYXRoZXIgZGF0YTogXCIsIGVycm9yKTtcbiAgLy8gICAgIH0pXG4gIC8vIH07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJsYXQiLCJzZXRMYXQiLCJsb25nIiwic2V0TG9uZyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicG9zaXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwidXNlckxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwidXNlckxvbmciLCJsb25naXR1ZGUiLCJhcGlCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGlLZXkiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwid2VhdGhlciIsImRpc3BsYXkiLCJoMSIsIm5hbWUiLCJwIiwibWFpbiIsInRlbXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});