package iniko.voda.backendapi.Repos.Util;

import iniko.voda.backendapi.DTO.Utils.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeatRepo extends JpaRepository<Seat,Integer> {
}
