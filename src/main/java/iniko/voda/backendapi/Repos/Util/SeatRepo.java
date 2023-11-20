package iniko.voda.backendapi.Repos.Util;

import iniko.voda.backendapi.DTO.Utils.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepo extends JpaRepository<Seat,Integer> {

    List<Seat> getSeatByRoomSeat(int roomid);
    Seat getSeatByRoomSeat_IdAndSeatNo(int roomseat,int seatno);

    Seat getSeatById(int seatId);
}
