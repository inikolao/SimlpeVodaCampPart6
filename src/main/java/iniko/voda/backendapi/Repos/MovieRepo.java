package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepo extends JpaRepository<Movie,Integer> {

    Movie getMovieById(int id);

    List<Movie> findAllByOrderByRatingDesc();
    List<Movie> findAllByOrderByRatingAsc();
}
