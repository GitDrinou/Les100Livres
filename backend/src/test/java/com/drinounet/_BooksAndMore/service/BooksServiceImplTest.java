package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class BooksServiceImplTest {

    @Autowired
    private BooksServiceImpl booksService;

    @Autowired
    private BooksRepository booksRepository;

    @Test
    void checkAllBooks() {
        List<BooksDTO> booksOf100 = booksService.getAll100Books();
        List<BooksDTO> otherBooks = booksService.getAllOtherBooks();
        List<BooksDTO> books = booksService.getAllBooks();
        if (!books.isEmpty()) {
            assertThat(books.size()).isEqualTo(booksOf100.toArray().length + otherBooks.toArray().length);
        }
    }
}
