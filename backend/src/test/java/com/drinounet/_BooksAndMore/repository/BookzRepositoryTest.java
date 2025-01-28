package com.drinounet._BooksAndMore.repository;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class BookzRepositoryTest {

    @Autowired
    private BooksRepository booksRepository;

    @Test
    void findAllByType100() {
        List<BooksDTO> books = booksRepository.findAllByType100("1");
        Number numberOf100 = books.toArray().length;
        assertThat(numberOf100).isNotNull();
    }

}
