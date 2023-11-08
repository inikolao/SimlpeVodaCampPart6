package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.MoviesShow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesShowRepo extends JpaRepository<MoviesShow,Integer> {
    MoviesShow findMoviesShowByRoom_Id(int id);
}
