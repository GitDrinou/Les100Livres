export const sortedByTitleByIsRead = (items) => {
    return items.sort((a, b) => {
        if (a.is_read !== b.is_read) {
            return b.is_read - a.is_read;
        }

        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

        return 0;
    })
}