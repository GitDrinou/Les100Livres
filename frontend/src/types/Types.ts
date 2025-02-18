import {Dispatch, SetStateAction} from "react";

export interface Book {
    id: number;
    title: string;
    author: string;
    publicationDate: string;
    isbn: string;
    description: string;
    type100: string;
    is_read: string;
}

export type CallAPIParams = {
    url: string;
    apiMethod: string;
    body?: string | Book | null;
    headers?: {};
    setData?: Dispatch<SetStateAction<Book[]>> |  Dispatch<SetStateAction<Book>>;
    setTotalPages?: (totalPages: number) => void;
    setTotalBooks?: (totalBooks: number) => void;
    setLoading?: (loading: boolean) => void;
    setError?: (error: boolean) => void;
};