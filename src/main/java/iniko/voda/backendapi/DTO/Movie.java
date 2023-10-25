package iniko.voda.backendapi.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Movies")
public class Movie {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int movieID;

    private String description;
    private String plot;
    @OneToMany
    @JoinColumn(name = "movieGenres_id")
    private List<Genre> movieGenre;
    @OneToOne
    private MoviesProps moviesProps;
    private String language;
    private int duration; //in minutes
    private int rating;
    @OneToMany
    @JoinColumn(name = "movieFile_id")
    private List<MFile> files;

}
