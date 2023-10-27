package iniko.voda.backendapi.PoJo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Cinema implements Serializable {

    private int cinemaID;
    private String name;
    private String city;
    private String adress;
    private int roomsNum;
    private List<MovieShow> moviesShows;

}
