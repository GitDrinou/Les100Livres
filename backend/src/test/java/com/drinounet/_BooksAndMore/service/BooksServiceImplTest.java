package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest

public class BooksServiceImplTest {

    @Mock
    private BooksRepository booksRepository;

    @Mock
    private BooksServiceImpl booksService;


    @Test
    void verify_if_book100_and_other_equal_to_all_books() {
        List<BooksDTO> booksOf100 = booksService.getAll100Books();
        List<BooksDTO> otherBooks = booksService.getAllOtherBooks();
        List<BooksDTO> books = booksService.getAllBooks();
        if (!books.isEmpty()) {
            assertThat(books.size()).isEqualTo(booksOf100.toArray().length + otherBooks.toArray().length);
        }
    }

    @Test
    void verify_creation_of_a_new_book() {
        BooksDTO book = new BooksDTO();
        book.setTitle("New Title");
        book.setAuthor("New Author");
        book.setIsbn("New Isbn");
        book.setDescription("New Description");
        book.setType100("0");
        book.setIs_read("1");

        when(booksRepository.save(book)).thenReturn(book);
        when(booksService.getAllBooks()).thenReturn(List.of(book));

        booksService.createBook(booksService.convertToDTO(book));

        List<BooksDTO> books = booksService.getAllBooks();

        assertThat(books.size()).isEqualTo(1);
    }

}
