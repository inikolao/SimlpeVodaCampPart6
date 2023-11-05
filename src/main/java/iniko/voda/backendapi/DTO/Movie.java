package iniko.voda.backendapi.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Movies")
public class Movie {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String description;
    private String plot;
   @OneToMany//(mappedBy = "movie",cascade = CascadeType.ALL)
   @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Genre> movieGenre;
    @OneToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private MoviesProps moviesProps;
    private String language;
    private int duration; //in minutes
    private int rating;
    @OneToMany
    @JoinColumn(name = "movieFile_id")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<MFile> files;

}
