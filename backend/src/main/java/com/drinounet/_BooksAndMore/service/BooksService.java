package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface BooksService {
   List<BooksDTO> getAllBooks();
   List<BooksDTO> getAll100Books();
   List<BooksDTO> getAllOtherBooks();
   Optional<BooksDTO> getBookById(int id);
   Book createBook(Book book);
   ResponseEntity<BooksDTO> updateBook(int id, Book book);
   void deleteBook(Integer bookId);
}
