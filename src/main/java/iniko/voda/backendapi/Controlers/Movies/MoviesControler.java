package iniko.voda.backendapi.Controlers.Movies;

import iniko.voda.backendapi.DTO.Genre;
import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.PoJo.Utils.special.Playload;
import iniko.voda.backendapi.PoJo.Utils.special.SearchRequest;
import iniko.voda.backendapi.Services.DB.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
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
    public Movie GetMovieBYId(@PathVariable String id)
    {
        return movieService.GetMovieBYid(Integer.parseInt(id));
    }
    @RequestMapping(value = "/bygenre/{genre}",method = RequestMethod.GET)
    public List<Movie> GetMoviesByGenre(@PathVariable String genre)
    {
        List<Movie> rmovies=new ArrayList<>();
        List<Movie> movies=new ArrayList<>(movieService.GetAllMovies());
        for (Movie movie:movies) {
            Set<Genre> genres=movie.getMovieGenre();
            for (Genre gen:genres) {
                if(gen.getName().contains(genre))
                {
                    rmovies.add(movie);
                }

            }


        }
        return rmovies;
    }
    @RequestMapping(value = "/byRating/{type}",method = RequestMethod.GET)
    public List<Movie> GetMoviesByRatingShort(@PathVariable String type)
    {
        List<Movie> rmovies=new ArrayList<>();
        if(type.contains("asc"))
        {
            return movieService.GetMoviesOrderByRatingAsc();

        }
        else if (type.contains("desc"))
        {
            return movieService.GetMoviesOrderByRatingDesc();
        }
        else
        {
            return null;
        }

    }
    @PostMapping(value = "/search",consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> GetMoviesResult(@RequestBody SearchRequest search,@RequestHeader HttpHeaders headers)
    {
        List<Movie> rmovies=new ArrayList<>();
        List<Movie> movies=new ArrayList<>(movieService.GetAllMovies());
        List<Character> rate=new ArrayList<>();

        for (char ch : search.getRattingRange().toCharArray()) {

            rate.add(ch);
        }


        System.out.println(rate.size());

        for (Movie movie:movies) {
            Set<Genre> genres=movie.getMovieGenre();
            if (rate.size()==2) {
                if (movie.getTitle().contains(search.getName())&& movie.getRating()>Integer.parseInt(rate.get(0).toString())&& movie.getRating()<Integer.parseInt(rate.get(1).toString()))
                {

                    for (Genre gen:genres) {
                        if(gen.getName().contains(search.getGenre()))
                        {
                            rmovies.add(movie);
                        }

                    }

                }
            } else {
                if (movie.getTitle().contains(search.getName())&& movie.getRating()>Integer.parseInt(rate.get(0).toString())&& movie.getRating()<Integer.parseInt(rate.get(1).toString()+rate.get(2).toString()))
                {
                    for (Genre gen:genres) {
                        if(gen.getName().contains(search.getGenre()))
                        {
                            rmovies.add(movie);
                        }

                    }

                }

            }

        }
        return rmovies;
    }
}
