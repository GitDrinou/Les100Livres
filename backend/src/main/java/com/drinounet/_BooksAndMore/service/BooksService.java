package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;

import java.util.List;
import java.util.Optional;

public interface BooksService {
   List<BooksDTO> getAllBooks();
   Optional<BooksDTO> getBookById(int id);
   Book createBook(Book book);
   Book updateBook(Book book);
   void deleteBook(Integer bookId);
}
