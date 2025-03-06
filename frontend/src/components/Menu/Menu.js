"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Menu_module_css_1 = require("./Menu.module.css");
const img_books_webp_1 = require("../../assets/images/img-books.webp");
const Menu = () => {
    const pathname = document.location.pathname;
    const displayAdmin = pathname != "/admin" ? (0, jsx_runtime_1.jsx)("a", { href: "/admin", children: "Administration" }) : null;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("nav", { className: Menu_module_css_1.default['nav-header'], children: [(0, jsx_runtime_1.jsx)("div", { className: Menu_module_css_1.default.logo, children: (0, jsx_runtime_1.jsx)("a", { href: "/", children: (0, jsx_runtime_1.jsx)("img", { src: img_books_webp_1.default, alt: "Logo-retour \u00E0 l'accueil" }) }) }), (0, jsx_runtime_1.jsx)("a", { href: "/100-books", children: "Les 100 livres \u00E0 lire" }), (0, jsx_runtime_1.jsx)("a", { href: "/other-books", children: "D'autres livres" })] }), (0, jsx_runtime_1.jsx)("div", { className: Menu_module_css_1.default["admin-link"], children: displayAdmin })] }) }));
};
exports.default = Menu;
