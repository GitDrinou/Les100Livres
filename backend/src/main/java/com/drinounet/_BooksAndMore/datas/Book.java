package com.drinounet._BooksAndMore.datas;

public record Book(
        Integer id,
        String title,
        String author,
        String publicationDate,
        String isbn,
        String description,
        String type100,
        String is_read
) {
}
