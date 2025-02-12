package com.drinounet._BooksAndMore.controller;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.service.BooksService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
@Tag(name = "Books", description = "Gestion des livres")
public class BooksController {

    private final BooksService booksService;

    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    @CrossOrigin
    @GetMapping
    @Operation(summary = "Récupérer la liste de l'ensemble des livres (les 100 et les autres)", description = "Retourne tous les livres enregistrés")
    public List<BooksDTO> getAllBooks() {
        return booksService.getAllBooks();
    }

    @CrossOrigin
    @GetMapping("/100")
    @Operation(summary = "Récupérer la liste des 100 livres à lire dans une vie", description = "Retourne tous les 100 livres enregistrés")
     public Page<BooksDTO> getAll100Books(Pageable pageable) {
        Sort sort = Sort.by(
                Sort.Order.desc("isRead"),
                Sort.Order.asc("title")
        );
        Pageable sortedPageable = PageRequest.of(
                pageable.getPageNumber(),
                pageable.getPageSize(),
                sort
        );
            return booksService.getAll100Books(sortedPageable);
    }

    @CrossOrigin
    @GetMapping("/others")
    @Operation(summary = "Récupérer la liste des autrss livres", description = "Retourne tous les autres livres enregistrés")
    public Page<BooksDTO> getAllOtherBooks(@PageableDefault(size = 5, sort = "title", direction = Sort.Direction.ASC) Pageable pageable) {
        return booksService.getAllOtherBooks(pageable);
    }

    @CrossOrigin
    @GetMapping("/{bookId}")
    @Operation(summary = "Récupérer le détail d'un livre donné (par son identifiant)", description = "Retourne toutes les infos d'un livre enregistré")
    public Optional<BooksDTO> getABook(@PathVariable Integer bookId) {
        return booksService.getBookById(bookId);
    }

    @CrossOrigin
    @PostMapping
    @Operation(summary = "Enregistre les informations d'un livre", description = "Retourne toutes les infos du livre enregistré")
    public Book createBook(@RequestBody Book book) {
        return booksService.createBook(book);
    }

    @CrossOrigin
    @PutMapping("/{bookId}")
    @Operation(summary = "Mets à jour les informations d'un livre", description = "Retourne toutes les infos du livre modifié")
    public ResponseEntity<BooksDTO> updateBook(@PathVariable Integer bookId, @RequestBody Book book) {
        return booksService.updateBook(bookId, book);
    }

    @DeleteMapping("/{bookId}")
    @Operation(summary = "Supprime un livre (par son identifiant)")
    public void deleteBook(@PathVariable Integer bookId) {
        booksService.deleteBook(bookId);
    }

}
