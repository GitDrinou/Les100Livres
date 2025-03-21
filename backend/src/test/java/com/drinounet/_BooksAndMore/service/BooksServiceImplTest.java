package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.*;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@SpringBootTest
public class BooksServiceImplTest {

    @Mock
    private BooksRepository booksRepository;

    @InjectMocks
    private BooksServiceImpl booksService;

    private BooksDTO book;
    private BooksDTO book2;
    private BooksDTO book3;

    @BeforeEach
    public void setup() {
        book = new BooksDTO();
        book.setId(1);
        book.setTitle("New Title");
        book.setAuthor("New Author");
        book.setIsbn("New Isbn");
        book.setDescription("New Description");
        book.setType100("1");
        book.setIsRead("0");

        book2 = new BooksDTO();
        book2.setId(2);
        book2.setTitle("New Title 2");
        book2.setAuthor("New Author 2");
        book2.setIsbn("New Isbn 2");
        book2.setDescription("New Description 2");
        book2.setType100("1");
        book2.setIsRead("1");

        book3 = new BooksDTO();
        book3.setId(3);
        book3.setTitle("New Title 3");
        book3.setAuthor("New Author 3");
        book3.setIsbn("New Isbn 3");
        book3.setDescription("New Description 3");
        book3.setType100("0");
        book3.setIsRead("1");
    }

    @Test
    void should_return_2_books_with_type100_equal_to_1() {
        // Given
        List<BooksDTO> books = List.of(book, book2);
        Page<BooksDTO> mockPage = new PageImpl<>(books);
        Pageable pageable = PageRequest.of(0, 5);

        when(booksRepository.findALLBooksByType100("1", pageable)).thenReturn(mockPage);

        // When
        Page<BooksDTO> result = booksService.getAll100Books(pageable);

        // Then
        verify(booksRepository).findALLBooksByType100("1", pageable);
        assertNotNull(result);
        assertThat(result.getSize()).isEqualTo(2);
    }

    @Test
    void should_return_the_detail_of_an_identified_book() {
        // Given
        when(booksRepository.save(book)).thenReturn(book);

        // When
        booksRepository.findById(book.getId());

        // Then
        assertThat(book.getTitle()).isEqualTo("New Title");
    }

    @Test
    void should_return_the_identified_book_xith_updated_details() {
        // Given
        when(booksRepository.existsById(2)).thenReturn(true);

        // When
        booksRepository.findById(2);
        book2.setTitle("Nouveau Titre 2");
        booksRepository.save(book2);

        // Then
        assertThat(book2.getTitle()).isEqualTo("Nouveau Titre 2");
    }

   @Test
    void should_delete_an_identified_book() {
        // Given
        BooksDTO book4 = new BooksDTO();
        book3.setId(4);

        when(booksRepository.existsById(4)).thenReturn(true);

        // When
       booksService.deleteBook(book3.getId());

       // Then
       verify(booksRepository).deleteById(book3.getId());
    }

    @Test
    void should_return_all_saved_books(){
        // Given
        List<BooksDTO> books = List.of(book, book2, book3);

        when(booksRepository.findAll()).thenReturn(books);

        // When
        List<BooksDTO> result = booksService.getAllBooksWithoutPagination();

        // Then
        verify(booksRepository).findAll();
        assertThat(result.size()).isEqualTo(3);
    }
}
