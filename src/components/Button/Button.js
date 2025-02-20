"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "px-4 py-2 rounded ".concat(variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"), children: children }));
};
exports.default = Button;
