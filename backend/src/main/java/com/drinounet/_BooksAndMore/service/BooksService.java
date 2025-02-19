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
   Page<BooksDTO> getAll100Books(Pageable pageable);
   Page<BooksDTO> getAllOtherBooks(Pageable pageable);
   Optional<BooksDTO> getBookById(Integer id);
   Book createBook(Book book);
   ResponseEntity<BooksDTO> updateBook(int id, Book book);
   void deleteBook(Integer bookId);
   void uploadBooks(List<Book> books);
}
