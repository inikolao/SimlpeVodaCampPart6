package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name = "Cinemas")
public class Cinema {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int cinemaID;
    private String name;
    private String city;
    private String adress;
    private int roomsNum;
    @OneToMany
    private List<MoviesShow> moviesShows;
}
