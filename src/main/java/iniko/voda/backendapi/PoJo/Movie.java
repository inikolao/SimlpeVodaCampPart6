package iniko.voda.backendapi.PoJo;

import iniko.voda.backendapi.PoJo.Utils.MFile;
import iniko.voda.backendapi.PoJo.Utils.MoviesProps;
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
public class Movie implements Serializable {


    private int movieID;
    private String description;
    private String plot;
    private List<Genre> movieGenre;
    private MoviesProps moviesProps;
    private String language;
    private int duration; //in minutes
    private int rating;
    private List<MFile> files;
}
