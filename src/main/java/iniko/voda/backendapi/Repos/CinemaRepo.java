package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Cinema;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CinemaRepo extends JpaRepository<Cinema,Integer> {
}
