package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomsRepo extends JpaRepository<Room,Integer> {

    Room getRoomByRoomID(int id);
}
