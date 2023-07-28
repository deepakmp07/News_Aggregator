package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "news_saved")
public class NewsSaved {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;
    private String email;
    private String author;

    @Column(length = 1000)
    private String title;

    @Column(columnDefinition = "TEXT") // Use TEXT data type for larger text data
    private String description;

    @Column(length = 1000)
    private String url;

    @Column(length = 10000)
    private String img_url;

    private String p_date;

    @Column(columnDefinition = "TEXT")
    private String content;

    private boolean islikes = false;
    private boolean isSaved = false;
    public void setIsSaved(boolean b) {
    }

    
}
