package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.Repos.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class MovieService {

    @Autowired
    private MovieRepo movieRepo;

    public void CreateMovie(Movie movie){ movieRepo.save(movie);}

    public Set<Movie> GetAllMovies()
    {
        Set<Movie> movies=new HashSet<>();
        movieRepo.findAll().forEach(movies::add);
        return movies;
    }
    public List<Movie> GetAllMoviesList()
    {
        List<Movie> movies=new ArrayList<>();
        movieRepo.findAll().forEach(movies::add);
        return movies;
    }
}
