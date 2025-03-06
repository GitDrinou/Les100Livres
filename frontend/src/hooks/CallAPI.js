"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CallAPI = ({ url, apiMethod, body, headers = {}, setData, setDataAllBooks, setTotalPages, setTotalBooks, setLoading, setError }) => {
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        if (setLoading)
            setLoading(true);
        if (body)
            body = JSON.stringify(body);
        const options = {
            method: apiMethod,
            headers: Object.assign({ "Content-Type": "application/json" }, headers),
            body: body,
        };
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (apiMethod != "DELETE") {
                const data = yield response.json();
                setData === null || setData === void 0 ? void 0 : setData(data.content ? data.content : data);
                setDataAllBooks === null || setDataAllBooks === void 0 ? void 0 : setDataAllBooks(data.content ? data.content : data);
                setTotalPages === null || setTotalPages === void 0 ? void 0 : setTotalPages(data.totalPages);
                setTotalBooks === null || setTotalBooks === void 0 ? void 0 : setTotalBooks(data.totalElements);
            }
        }
        catch (error) {
            console.error(error);
            if (setError)
                setError(true);
        }
        finally {
            if (setLoading)
                setLoading(false);
        }
    });
    fetchData();
};
exports.default = CallAPI;
