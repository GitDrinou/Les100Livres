package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BooksServiceImpl  implements BooksService {

    private final BooksRepository booksRepository;

    public BooksServiceImpl(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @Override
    public List<BooksDTO> getAllBooks() {
        return booksRepository.findAll()
                .stream()
                .toList();
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
    public Optional<BooksDTO> getBookById(int bookId) {
        return Optional.ofNullable(booksRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book id " + bookId)));
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
        BooksDTO currentBook = booksRepository.findById(bookId).orElseThrow(() -> new IllegalArgumentException("Invalid book id " + bookId));
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

    private boolean isBookExist(Book book) {
        List<BooksDTO> books =  getAllBooks();
        for (BooksDTO existedBook : books) {
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
        booksDTO.setIs_read(book.isRead());
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
                booksDTO.getIs_read()
                );
    }

}
