import {Book} from "../types/Types";

export const sortedByTitleByIsRead = (items) => {
    return items.sort((a, b) => {
        if (a.isRead !== b.isRead) {
            return b.isRead - a.isRead;
        }

        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

        return 0;
    })
}

export const sortedByAuthor = (items: Book[]) => {
    const authors: string[] =  [];
    items.map((item) => (
      authors.push(item.author)
    ));

    return authors.reduce((acc, value) => {
        if (!acc.includes(value)) {
            acc.push(value);
        }
        return acc.sort();
    }, []);
}

export const sortedByTitle = (items: Book[]) => {
    return items.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

        return 0;
    })
}