package com.drinounet._BooksAndMore.controller;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.service.BooksService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BooksController {

    private final BooksService booksService;

    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    @CrossOrigin
    @GetMapping
    public List<BooksDTO> getAllBooks(BooksDTO books) {
        return booksService.getAllBooks();
    }

    @GetMapping("/{bookId}")
    public Optional<BooksDTO> getABook(@PathVariable Integer bookId) {
        return booksService.getBookById(bookId);
    }

    @PostMapping
   public Book createBook(@RequestBody Book book) {
        return booksService.createBook(book);
    }

    @PatchMapping("/{bookId}")
    public Book updateBook(@PathVariable Integer bookId, @RequestBody Book book) {
        return booksService.updateBook(book);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Integer bookId) {
        booksService.deleteBook(bookId);
    }

}
