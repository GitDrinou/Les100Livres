package com.drinounet._BooksAndMore.repository;

import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.hibernate.sql.ast.tree.cte.CteStatement;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class BookzRepositoryTest {

    @Autowired
    private BooksRepository booksRepository;

    @Test
    void should_return_all_books_with_type_100_equal_to_1() {
        // Given
        Pageable pageable = PageRequest.of(0, 5, Sort.by("title"));

        // When
        Page<BooksDTO> books = booksRepository.findALLBooksByType100("1", pageable);

        // Then
        assertThat(books).isNotNull();
    }

   @Test
    void should_return_all_books_with_type_100_equal_to_0() {
        // Given
        Pageable pageable = PageRequest.of(0, 5, Sort.by("title"));

        // When
        Page<BooksDTO> books = booksRepository.findAllOtherBooksByType100("0", pageable);

        // Then
        assertThat(books).isNotNull();
    }

}
