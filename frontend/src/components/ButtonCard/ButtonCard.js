"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ButtonCard_module_css_1 = require("./ButtonCard.module.css");
const ButtonCard = (props) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: ButtonCard_module_css_1.default.card, children: [(0, jsx_runtime_1.jsx)("p", { className: ButtonCard_module_css_1.default['button-description'], children: props.description }), (0, jsx_runtime_1.jsx)("button", { className: ButtonCard_module_css_1.default["button-link"], onClick: props.actionButton, children: props.label })] }) }));
};
exports.default = ButtonCard;
