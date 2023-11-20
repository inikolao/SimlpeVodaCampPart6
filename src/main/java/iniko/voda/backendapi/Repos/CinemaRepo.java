package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.DTO.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface CinemaRepo extends JpaRepository<Cinema,Integer> {

    Cinema getCinemaByRooms(int roomID);
}
