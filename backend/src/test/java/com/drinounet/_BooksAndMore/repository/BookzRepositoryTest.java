package com.drinounet._BooksAndMore.repository;

import com.drinounet._BooksAndMore.datas.BooksDTO;
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
    void findAllByType100() {
        Pageable pageable = PageRequest.of(0, 5, Sort.by("title"));

        Page<BooksDTO> books = booksRepository.findALLBooksByType100("1", pageable);
        Number numberOf100 = books.getTotalElements();
        assertThat(numberOf100).isNotNull();
    }

   @Test
    void findAllOtherBooks() {
        Pageable pageable = PageRequest.of(0, 5, Sort.by("title"));

        Page<BooksDTO> books = booksRepository.findAllOtherBooksByType100("0", pageable);
        Number numberOfOther = books.getTotalElements();
        assertThat(numberOfOther).isNotNull();
    }

}
