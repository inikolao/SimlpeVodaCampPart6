package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepo extends JpaRepository<Genre,Integer> {
}
