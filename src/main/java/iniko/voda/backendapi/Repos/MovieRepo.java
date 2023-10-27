package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepo extends JpaRepository<Movie,Integer> {
}
