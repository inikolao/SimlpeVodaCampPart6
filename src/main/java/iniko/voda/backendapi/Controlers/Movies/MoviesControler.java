package iniko.voda.backendapi.Controlers.Movies;

import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.Services.DB.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/movie")
public class MoviesControler {

    @Autowired
    MovieService movieService;

    @GetMapping("/all")
    public Set<Movie> GetAllMovies()
    {
        return movieService.GetAllMovies();
    }
}
