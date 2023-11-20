package iniko.voda.backendapi.Controlers.Movies;

import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.Services.DB.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @GetMapping("/{id}")
    public Movie GetMovieBYId(@PathVariable String movieID)
    {
        return movieService.GetMovieBYid(Integer.parseInt(movieID));
    }
}
