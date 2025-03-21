package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
public class BooksServiceImpl  implements BooksService {

    private final BooksRepository booksRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public BooksServiceImpl(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @Override
    public List<BooksDTO> getAllBooksWithoutPagination() {
        return booksRepository.findAll()
                .stream()
                .toList();
    }

    @Override
    public Page<BooksDTO> getAllBooks(Pageable pageable) {
        return booksRepository.findAll(pageable);
    }

    @Override
    public Page<BooksDTO> getAll100Books(Pageable pageable) {
        return booksRepository.findALLBooksByType100("1", pageable);
    }

    @Override
    public Page<BooksDTO> getAllOtherBooks(Pageable pageable) {
        return booksRepository.findAllOtherBooksByType100("0", pageable);
    }

    @Override
    public Optional<BooksDTO> getBookById(Integer bookId) {
        return Optional.ofNullable(booksRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book id " + bookId)));
    }

    @Override
    public List<BooksDTO> getBookByAuthor(String author) {
        return booksRepository.findAllBooksByAuthor(author).stream().toList();
    }

    @Override
    public Book createBook(Book book) {
        if (!isBookExist(book)) {
            BooksDTO bookDTO = convertToEntity(book);
            BooksDTO createdBook = booksRepository.save(bookDTO);
            return convertToDTO(createdBook);
        }
        else {
            return null;
        }
    }

    @Override
    public ResponseEntity<BooksDTO> updateBook(int bookId, Book book) {
        BooksDTO currentBook;
        currentBook = convertToEntity(book);

        BooksDTO updatedBook = booksRepository.save(currentBook);
        return new ResponseEntity<>(updatedBook, HttpStatus.OK);

    }

    @Override
    public void deleteBook(Integer bookId) {
       if (booksRepository.existsById(bookId)) {
            booksRepository.deleteById(bookId);
       }
    }

    @Override
    public List<BooksDTO> uploadBooks() throws IOException {
        InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("data/books.json");
        if (inputStream == null) {
            return null;
        }
        return objectMapper.readValue(inputStream, new TypeReference<>() {});

    }

    private boolean isBookExist(Book book) {
        Page<BooksDTO> allBooks = this.getAllBooks(PageRequest.of(0, 5));
//        List<BooksDTO> books =  getAllBooks();
        for (BooksDTO existedBook : allBooks.getContent()) {
            BooksDTO bookDTO = convertToEntity(book);
            if (bookDTO.getIsbn().equals((existedBook.getIsbn()))) {
               return true;
            }
        }
        return false;
    }

    // Convert Book to BooksDTO
    private BooksDTO  convertToEntity(Book book) {
        BooksDTO booksDTO = new BooksDTO();
        booksDTO.setId(book.id());
        booksDTO.setTitle(book.title());
        booksDTO.setAuthor(book.author());
        booksDTO.setPublicationDate(book.publicationDate());
        booksDTO.setIsbn(book.isbn());
        booksDTO.setDescription(book.description());
        booksDTO.setType100(book.type100());
        booksDTO.setIsRead(book.isRead());
        return booksDTO;
    }

    // conversion de BooksDTO to Book
    public Book convertToDTO(BooksDTO booksDTO) {
        return new Book(booksDTO.getId(),
                booksDTO.getTitle(),
                booksDTO.getAuthor(),
                booksDTO.getPublicationDate(),
                booksDTO.getIsbn(),
                booksDTO.getDescription(),
                booksDTO.getType100(),
                booksDTO.getIsRead()
                );
    }

}
