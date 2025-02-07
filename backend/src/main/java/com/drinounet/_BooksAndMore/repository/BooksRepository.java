package com.drinounet._BooksAndMore.repository;

import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<BooksDTO, Integer> {
    List<BooksDTO> findALLBooksByType100(String type100);
    Page<BooksDTO> findAllOtherBooksByType100(String type100, Pageable pageable);
}
