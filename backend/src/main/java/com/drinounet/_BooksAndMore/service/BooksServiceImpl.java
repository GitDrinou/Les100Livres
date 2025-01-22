package com.drinounet._BooksAndMore.service;

import com.drinounet._BooksAndMore.datas.Book;
import com.drinounet._BooksAndMore.datas.BooksDTO;
import com.drinounet._BooksAndMore.repository.BooksRepository;
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
    public List<BooksDTO> getAll100Books() {
        return booksRepository.findAllByType100("1")
                .stream()
                .toList();
    }

    @Override
    public List<BooksDTO> getAllOtherBooks() {
        return booksRepository.findAllByType100("0")
                .stream()
                .toList();
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

    /*
    *  @PutMapping("/{id}")
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setEmail(client.getEmail());
        currentClient = clientRepository.save(client);

        return ResponseEntity.ok(currentClient);
    }
    * */

    @Override
    public Book updateBook(int bookId, Book book) {
        BooksDTO bookDTO = convertToEntity(book);
        BooksDTO updatedBook = booksRepository.save(bookDTO);
        return convertToDTO(updatedBook);
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
    private Book convertToDTO(BooksDTO booksDTO) {
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
