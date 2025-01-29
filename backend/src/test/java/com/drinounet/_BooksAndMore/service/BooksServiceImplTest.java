package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
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

    private BooksDTO book;
    private BooksDTO book2;

    @BeforeEach
    public void setup() {
        book = new BooksDTO();
        book.setId(1);
        book.setTitle("New Title");
        book.setAuthor("New Author");
        book.setIsbn("New Isbn");
        book.setDescription("New Description");
        book.setType100("0");
        book.setIs_read("0");

        book2 = new BooksDTO();
        book2.setTitle("New Title 2");
        book2.setAuthor("New Author 2");
        book2.setIsbn("New Isbn 2");
        book2.setDescription("New Description 2");
        book2.setType100("1");
        book2.setIs_read("1");
    }
    @Test
    void verify_creation_of_a_new_book() {

        when(booksRepository.save(book)).thenReturn(book);
        when(booksService.getAllBooks()).thenReturn(List.of(book));

        booksService.createBook(booksService.convertToDTO(book));

        List<BooksDTO> books = booksService.getAllBooks();

        assertThat(books.size()).isEqualTo(1);
    }

    @Test
    void verify_integration_of_2_new_books_from_100() {

        when(booksRepository.save(book)).thenReturn(book);
        when(booksRepository.save(book)).thenReturn(book2);

        when(booksService.getAll100Books()).thenReturn(List.of(book,book2));

        booksService.createBook(booksService.convertToDTO(book));
        booksService.createBook(booksService.convertToDTO(book2));

        List<BooksDTO> booksOf100 = booksService.getAll100Books();

        assertThat(booksOf100.size()).isEqualTo(2);

    }

}
