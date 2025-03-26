package com.drinounet._BooksAndMore.datas;

public record User(
        Long id,
        String username,
        String password,
        String email
) {
}
