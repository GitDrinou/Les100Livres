"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Pagination_module_css_1 = require("./Pagination.module.css");
const Pagination = (props) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: Pagination_module_css_1.default.container, children: [(0, jsx_runtime_1.jsx)("button", { disabled: props.actualPage === 0, onClick: () => props.setPage(props.actualPage - 1), children: "Pr\u00E9c\u00E9dent" }), (0, jsx_runtime_1.jsxs)("span", { children: ["Page ", props.actualPage + 1, " / ", props.totalPages] }), (0, jsx_runtime_1.jsx)("button", { disabled: props.actualPage + 1 >= props.totalPages, onClick: () => props.setPage(props.actualPage + 1), children: "Suivant" })] }) }));
};
exports.default = Pagination;
