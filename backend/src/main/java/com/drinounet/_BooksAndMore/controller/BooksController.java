package com.drinounet._BooksAndMore.controller;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.service.BooksService;
import org.springframework.http.ResponseEntity;
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
    public List<BooksDTO> getAllBooks() {
        return booksService.getAllBooks();
    }

    @CrossOrigin
    @GetMapping("/100")
    public List<BooksDTO> getAll100Books() {
        return booksService.getAll100Books();
    }

    @CrossOrigin
    @GetMapping("/others")
    public List<BooksDTO> getAllOtherBooks() {
        return booksService.getAllOtherBooks();
    }

    @GetMapping("/{bookId}")
    public Optional<BooksDTO> getABook(@PathVariable Integer bookId) {
        return booksService.getBookById(bookId);
    }

    @CrossOrigin
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return booksService.createBook(book);
    }

    @PutMapping("/{bookId}")
    public ResponseEntity<BooksDTO> updateBook(@PathVariable Integer bookId, @RequestBody Book book) {
        return booksService.updateBook(bookId, book);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Integer bookId) {
        booksService.deleteBook(bookId);
    }

}
