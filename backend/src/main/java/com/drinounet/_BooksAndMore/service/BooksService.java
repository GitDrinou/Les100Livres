package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface BooksService {
   List<BooksDTO> getAllBooks();
   //-- PAGE VERSION -- Page<BooksDTO> getAll100Books(Pageable pageable);
   List<BooksDTO> getAll100Books();
   Page<BooksDTO> getAllOtherBooks(Pageable pageable);
   Optional<BooksDTO> getBookById(int id);
   Book createBook(Book book);
   ResponseEntity<BooksDTO> updateBook(int id, Book book);
   void deleteBook(Integer bookId);
}
