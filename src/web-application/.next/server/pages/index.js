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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"camControl\": \"Home_camControl__QVx0M\",\n\t\"carControl\": \"Home_carControl__IPWrQ\",\n\t\"middleButton\": \"Home_middleButton__dK0QB\",\n\t\"stop\": \"Home_stop__tg1HT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9iMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcImNhbUNvbnRyb2xcIjogXCJIb21lX2NhbUNvbnRyb2xfX1FWeDBNXCIsXG5cdFwiY2FyQ29udHJvbFwiOiBcIkhvbWVfY2FyQ29udHJvbF9fSVBXclFcIixcblx0XCJtaWRkbGVCdXR0b25cIjogXCJIb21lX21pZGRsZUJ1dHRvbl9fZEswUUJcIixcblx0XCJzdG9wXCI6IFwiSG9tZV9zdG9wX190ZzFIVFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socketio */ \"./services/socketio.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_joystick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-joystick-component */ \"react-joystick-component\");\n/* harmony import */ var react_joystick_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_joystick_component__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socketio__WEBPACK_IMPORTED_MODULE_2__]);\n_services_socketio__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"carrinho\", (data)=>{\n            console.log(data);\n        });\n    }, []);\n    function sendSocket(comando) {\n        console.log(comando);\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"comando\", comando);\n    }\n    let intervalRef = null;\n    function onMouseDown(p1, p2) {\n        intervalRef = setInterval(()=>{\n            // console.log(e.type);\n            sendSocket([\n                p1,\n                p2\n            ]);\n        }, 50);\n    }\n    function onMouseUp(e) {\n        if (intervalRef != null) {\n            clearInterval(intervalRef);\n            sendSocket([\n                \"P\",\n                \"P\"\n            ]);\n        }\n    }\n    let sentidoAtual = \"\";\n    function handleMove(e) {\n        // if (!e) return;\n        if (sentidoAtual == e.direction) return;\n        if (e.direction == \"RIGHT\") {\n            sendSocket([\n                \"F\",\n                \"P\"\n            ]);\n        }\n        if (e.direction == \"LEFT\") {\n            sendSocket([\n                \"P\",\n                \"F\"\n            ]);\n        }\n        if (e.direction == \"FORWARD\") {\n            sendSocket([\n                \"F\",\n                \"F\"\n            ]);\n        }\n        if (e.direction == \"BACKWARD\") {\n            sendSocket([\n                \"T\",\n                \"T\"\n            ]);\n        }\n        sentidoAtual = e.direction;\n    }\n    function handleStop(e) {\n        sendSocket([\n            \"P\",\n            \"P\"\n        ]);\n        sentidoAtual = \"P\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rob\\xf4 - Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().camControl),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"http://192.168.0.104/\",\n                    frameborder: \"0\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_joystick_component__WEBPACK_IMPORTED_MODULE_4__.Joystick, {\n                size: 100,\n                sticky: true,\n                baseColor: \"red\",\n                stickColor: \"blue\",\n                move: handleMove,\n                stop: handleStop\n            }, void 0, false, {\n                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().carControl),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().upperButton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseDown: ()=>onMouseDown(\"F\", \"F\")\n                            ,\n                            onMouseUp: onMouseUp,\n                            children: \"FRENTE\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().middleButton),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onMouseDown: ()=>onMouseDown(\"P\", \"F\")\n                                ,\n                                onMouseUp: onMouseUp,\n                                onTouchStart: ()=>onMouseDown(\"P\", \"F\")\n                                ,\n                                onTouchEnd: onMouseUp,\n                                children: \"ESQUERDA\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onMouseDown: ()=>onMouseDown(\"F\", \"P\")\n                                ,\n                                onMouseUp: onMouseUp,\n                                children: \"DIREITA\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().lowerButton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseDown: ()=>onMouseDown(\"T\", \"T\")\n                            ,\n                            onMouseUp: onMouseUp,\n                            children: \"TR\\xc1S\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().stop),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>sendSocket([\n                            \"P\",\n                            \"P\"\n                        ])\n                    ,\n                    children: \"Para\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\User\\\\Documents\\\\Codes\\\\Ufes\\\\PIC2\\\\Emerson\\\\PIC2HWSW\\\\car\\\\site\\\\pages\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hDLDRFQUFDK0MsUUFBTTs0QkFDTGpDLFdBQVcsRUFBRSxJQUFNQSxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs0QkFBQTs0QkFDeENJLFNBQVMsRUFBRUEsU0FBUztzQ0FDckIsU0FFRDs7Ozs7Z0NBQVM7Ozs7OzRCQUNMOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTFCLHFFQUFXOzBCQUN6Qiw0RUFBQytDLFFBQU07b0JBQUNLLE9BQU8sRUFBRSxJQUFNMUMsVUFBVSxDQUFDOzRCQUFDLEdBQUc7NEJBQUUsR0FBRzt5QkFBQyxDQUFDO29CQUFBOzhCQUFFLE1BQUk7Ozs7O3dCQUFTOzs7OztvQkFDeEQ7Ozs7OztZQUNGLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgc29ja2V0IGZyb20gXCIuLi9zZXJ2aWNlcy9zb2NrZXRpb1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEpveXN0aWNrIH0gZnJvbSBcInJlYWN0LWpveXN0aWNrLWNvbXBvbmVudFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJjYXJyaW5ob1wiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gc2VuZFNvY2tldChjb21hbmRvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb21hbmRvKTtcclxuICAgIHNvY2tldC5lbWl0KFwiY29tYW5kb1wiLCBjb21hbmRvKTtcclxuICB9XHJcblxyXG4gIGxldCBpbnRlcnZhbFJlZiA9IG51bGw7XHJcblxyXG4gIGZ1bmN0aW9uIG9uTW91c2VEb3duKHAxLCBwMikge1xyXG4gICAgaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgIHNlbmRTb2NrZXQoW3AxLCBwMl0pO1xyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcclxuICAgIGlmIChpbnRlcnZhbFJlZiAhPSBudWxsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYpO1xyXG4gICAgICBzZW5kU29ja2V0KFtcIlBcIiwgXCJQXCJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzZW50aWRvQXR1YWwgPSBcIlwiO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZSkge1xyXG4gICAgLy8gaWYgKCFlKSByZXR1cm47XHJcbiAgICBpZiAoc2VudGlkb0F0dWFsID09IGUuZGlyZWN0aW9uKSByZXR1cm47XHJcbiAgICBpZiAoZS5kaXJlY3Rpb24gPT0gXCJSSUdIVFwiKSB7XHJcbiAgICAgIHNlbmRTb2NrZXQoW1wiRlwiLCBcIlBcIl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuZGlyZWN0aW9uID09IFwiTEVGVFwiKSB7XHJcbiAgICAgIHNlbmRTb2NrZXQoW1wiUFwiLCBcIkZcIl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuZGlyZWN0aW9uID09IFwiRk9SV0FSRFwiKSB7XHJcbiAgICAgIHNlbmRTb2NrZXQoW1wiRlwiLCBcIkZcIl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuZGlyZWN0aW9uID09IFwiQkFDS1dBUkRcIikge1xyXG4gICAgICBzZW5kU29ja2V0KFtcIlRcIiwgXCJUXCJdKTtcclxuICAgIH1cclxuICAgIHNlbnRpZG9BdHVhbCA9IGUuZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3RvcChlKSB7XHJcbiAgICBzZW5kU29ja2V0KFtcIlBcIiwgXCJQXCJdKTtcclxuICAgIHNlbnRpZG9BdHVhbCA9IFwiUFwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Um9iw7QgLSBTaXRlPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FtQ29udHJvbH0+XHJcbiAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwOi8vMTkyLjE2OC4wLjEwNC9cIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxKb3lzdGlja1xyXG4gICAgICAgIHNpemU9ezEwMH1cclxuICAgICAgICBzdGlja3k9e3RydWV9XHJcbiAgICAgICAgYmFzZUNvbG9yPVwicmVkXCJcclxuICAgICAgICBzdGlja0NvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgbW92ZT17aGFuZGxlTW92ZX1cclxuICAgICAgICBzdG9wPXtoYW5kbGVTdG9wfVxyXG4gICAgICA+PC9Kb3lzdGljaz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyQ29udHJvbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cHBlckJ1dHRvbn0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBvbk1vdXNlRG93bihcIkZcIiwgXCJGXCIpfVxyXG4gICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRlJFTlRFXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGVCdXR0b259PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gb25Nb3VzZURvd24oXCJQXCIsIFwiRlwiKX1cclxuICAgICAgICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XHJcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4gb25Nb3VzZURvd24oXCJQXCIsIFwiRlwiKX1cclxuICAgICAgICAgICAgb25Ub3VjaEVuZD17b25Nb3VzZVVwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFU1FVRVJEQVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBvbk1vdXNlRG93bihcIkZcIiwgXCJQXCIpfVxyXG4gICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRElSRUlUQVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG93ZXJCdXR0b259PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gb25Nb3VzZURvd24oXCJUXCIsIFwiVFwiKX1cclxuICAgICAgICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRSw4FTXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcH0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIlBcIiwgXCJQXCJdKX0+UGFyYTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkpveXN0aWNrIiwiSG9tZSIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU29ja2V0IiwiY29tYW5kbyIsImVtaXQiLCJpbnRlcnZhbFJlZiIsIm9uTW91c2VEb3duIiwicDEiLCJwMiIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiZSIsImNsZWFySW50ZXJ2YWwiLCJzZW50aWRvQXR1YWwiLCJoYW5kbGVNb3ZlIiwiZGlyZWN0aW9uIiwiaGFuZGxlU3RvcCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjYW1Db250cm9sIiwiaWZyYW1lIiwic3JjIiwiZnJhbWVib3JkZXIiLCJzaXplIiwic3RpY2t5IiwiYmFzZUNvbG9yIiwic3RpY2tDb2xvciIsIm1vdmUiLCJzdG9wIiwiY2FyQ29udHJvbCIsInVwcGVyQnV0dG9uIiwiYnV0dG9uIiwibWlkZGxlQnV0dG9uIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsImxvd2VyQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./services/socketio.js":
/*!******************************!*\
  !*** ./services/socketio.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"192.168.0.112:4000\");\n// const socket = socketIOClient(\"server-telemeapp.herokuapp.com\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zb2NrZXRpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxNQUFNLEdBQUdELDREQUFjLENBQUMsb0JBQW9CLENBQUM7QUFDbkQsbUVBQW1FO0FBRW5FLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vc2VydmljZXMvc29ja2V0aW8uanM/MWE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KFwiMTkyLjE2OC4wLjExMjo0MDAwXCIpO1xyXG4vLyBjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChcInNlcnZlci10ZWxlbWVhcHAuaGVyb2t1YXBwLmNvbVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvY2tldDtcclxuIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50Iiwic29ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/socketio.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-joystick-component":
/*!*******************************************!*\
  !*** external "react-joystick-component" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-joystick-component");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();