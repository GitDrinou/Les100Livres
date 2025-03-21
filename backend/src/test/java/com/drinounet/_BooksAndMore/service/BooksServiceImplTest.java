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
    }

    @Test
    void verify_the_size_of_the_100_list_when_adding_2_new_books() {
        // Given
        List<BooksDTO> books = List.of(book, book2);
        Page<BooksDTO> mockPage = new PageImpl<>(books);
        Pageable pageable = PageRequest.of(0, 5);

        when(booksRepository.findALLBooksByType100("1", pageable)).thenReturn(mockPage);

        // When
        Page<BooksDTO> result = booksService.getAll100Books(pageable);

        // Then
        assertNotNull(result);
        assertEquals(2, result.getTotalElements());
        assertEquals("New Title", result.getContent().getFirst().getTitle());

        verify(booksRepository).findALLBooksByType100("1", pageable);
    }

    @Test
    void verify_the_detail_of_an_identified_book() {
        // Given
        when(booksRepository.save(book)).thenReturn(book);

        // When
        booksRepository.findById(book.getId());

        // Then
        assertThat(book.getTitle()).isEqualTo("New Title");
    }

    @Test
    void verify_the_update_of_an_identified_book() {
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
    void verify_the_delete_of_an_identified_book() {
        // Given
        BooksDTO book3 = new BooksDTO();
        book3.setId(3);

        when(booksRepository.existsById(3)).thenReturn(true);

        // When
       booksService.deleteBook(book3.getId());

       // Then
       verify(booksRepository).deleteById(book3.getId());
    }
}
