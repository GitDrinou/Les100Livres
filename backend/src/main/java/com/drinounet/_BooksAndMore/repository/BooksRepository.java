package com.drinounet._BooksAndMore.repository;

import com.drinounet._BooksAndMore.datas.BooksDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<BooksDTO, Integer> {
    List<BooksDTO> findAllByType100(String type100);
}
