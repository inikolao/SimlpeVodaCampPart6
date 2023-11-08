package iniko.voda.backendapi.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity(name = "Genres")
public class Genre {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;

/*    @ManyToOne//(mappedBy = "Genres")
    @JoinTable(name = "movies_genres")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Movie movie;*/

    public Genre(String name) {
        this.name = name;
        //this.movie = movie;
    }
}
