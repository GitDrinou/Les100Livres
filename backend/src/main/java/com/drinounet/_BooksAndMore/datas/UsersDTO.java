package com.drinounet._BooksAndMore.datas;

import jakarta.persistence.*;

@Entity
@Table(name = "tusers")
public class UsersDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tusers_id_gen")
    @SequenceGenerator(name = "tusers_id_gen", sequenceName = "tusers_book_id_seq", allocationSize = 1)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @Column(name = "username", length = 200, unique = true, nullable = false)
    private String username;

    @Column(name = "password", length = 75, nullable = false)
    private String password;

    @Column(name = "email", length = 200, nullable = true)
    private String email;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}