"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BookCard_module_css_1 = require("./BookCard.module.css");
const ico_check_png_1 = require("../../assets/icons/ico-check.png");
const ico_uncheck_png_1 = require("../../assets/icons/ico-uncheck.png");
const ico_update_png_1 = require("../../assets/icons/ico-update.png");
const ico_delete_png_1 = require("../../assets/icons/ico-delete.png");
const CallAPI_ts_1 = require("../../hooks/CallAPI.ts");
const BookCard = (props) => {
    const url = "http://localhost:8080/books/" + props.bookId;
    let apiMethod = "DELETE";
    const isRead = () => props.isRead == "1" ? (0, jsx_runtime_1.jsx)("img", { src: ico_check_png_1.default, alt: "Status: lu", title: "Livre lu" }) : (0, jsx_runtime_1.jsx)("img", { src: ico_uncheck_png_1.default, alt: "Status: non lu", title: "Livre non lu" });
    const displayReadIcon = () => props.type == "1" ? isRead() : null;
    const handleClickUpdate = () => {
        document.location.href = `/update-book/${props.bookId}`;
    };
    const handleClickDelete = () => {
        const body = null;
        (0, CallAPI_ts_1.default)({ url, apiMethod, body });
        document.location.href = '/other-books';
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: BookCard_module_css_1.default.card, children: [(0, jsx_runtime_1.jsx)("p", { className: BookCard_module_css_1.default["book-title"], children: props.title }), (0, jsx_runtime_1.jsx)("p", { className: BookCard_module_css_1.default["book-author"], children: props.author }), (0, jsx_runtime_1.jsx)("p", { className: BookCard_module_css_1.default["book-date"], children: props.publication }), (0, jsx_runtime_1.jsx)("p", { className: BookCard_module_css_1.default['book-description'], children: props.description }), (0, jsx_runtime_1.jsxs)("p", { className: BookCard_module_css_1.default["book-isbn"], children: ["Code ISBN: ", props.isbn] }), props.type === "1" &&
                    (0, jsx_runtime_1.jsxs)("div", { className: BookCard_module_css_1.default["block-status"], children: [displayReadIcon(), props.isRead === "0" && (0, jsx_runtime_1.jsx)("img", { src: ico_update_png_1.default, id: "icon_update", alt: "Modifier les \u00E9lements du livre", title: "Modifier", onClick: handleClickUpdate })] }), props.type === "0" &&
                    (0, jsx_runtime_1.jsx)("div", { className: BookCard_module_css_1.default["block-status"], children: (0, jsx_runtime_1.jsx)("img", { src: ico_delete_png_1.default, id: "icon_delete", alt: "Supprimer le livre", title: "Supprimer", onClick: handleClickDelete }) })] }) }));
};
exports.default = BookCard;
