package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.*;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
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
        book.setType100("1");
        book.setIs_read("0");

        book2 = new BooksDTO();
        book2.setId(2);
        book2.setTitle("New Title 2");
        book2.setAuthor("New Author 2");
        book2.setIsbn("New Isbn 2");
        book2.setDescription("New Description 2");
        book2.setType100("1");
        book2.setIs_read("1");

        when(booksRepository.save(book)).thenReturn(book);
        when(booksRepository.save(book2)).thenReturn(book2);
    }

    @Test
    void verify_creation_of_a_new_book() {

        booksService.createBook(booksService.convertToDTO(book));

        List<BooksDTO> books = booksService.getAllBooks();

        assertThat(books.size()).isEqualTo(1);
    }

    @Test
    void verify_integration_of_2_new_books_from_100() {

        Pageable pageable = PageRequest.of(0, 5, Sort.by("title"));
        List<BooksDTO> books = booksService.getAllBooks();
        Page<BooksDTO> bookPage = new PageImpl<>(books, pageable, books.size());

        when(booksService.getAll100Books(pageable)).thenReturn(bookPage);

        booksService.createBook(booksService.convertToDTO(book));
        booksService.createBook(booksService.convertToDTO(book2));

        Page<BooksDTO> booksOf100 = booksService.getAll100Books(pageable);

        assertNotNull(booksOf100);
        assertEquals(0, booksOf100.getNumber());
        assertEquals(5, booksOf100.getSize());
    }

    @Test
    void verify_the_detail_of_an_identified_book() {

        when(booksService.getBookById(1)).thenReturn(Optional.ofNullable(book));

        booksService.createBook(booksService.convertToDTO(book));

        assertThat(book.getId()).isEqualTo(1);
        assertThat(book.getTitle()).isNotEqualTo("New Title 2");
    }

    @Test
    void verify_the_update_of_an_identified_book() {

        when(booksService.getBookById(2)).thenReturn(Optional.ofNullable(book2));

        booksService.createBook(booksService.convertToDTO(book2));

        assertThat(book2.getTitle()).isEqualTo("New Title 2");

        book2.setTitle("Nouveau Titre 2");

        when(booksRepository.save(book2)).thenReturn(book2);

        booksService.updateBook(2, booksService.convertToDTO(book2));

        assertThat(book2.getTitle()).isEqualTo("Nouveau Titre 2");

    }
}
