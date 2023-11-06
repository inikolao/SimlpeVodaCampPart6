package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation,Integer> {
}
