package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Repos.Util.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SeatService {
    @Autowired
    SeatRepo seatRepo;

    public void CreateSeat(Seat seat)
    {
        seatRepo.save(seat);
    }

    @Transactional
    public List<Seat> GetAllSeats()
    {
        return seatRepo.findAll();
    }
    public List<Seat> GetSeatByRoommId(int id)
    {
        return seatRepo.getSeatByRoomSeat(id);
    }
    @Transactional
    public Seat GetSeatByRoomAndNo(int roomid,int seatno)
    {
        return seatRepo.getSeatByRoomSeat_IdAndSeatNo(roomid, seatno);
    }
    @Transactional
    public  Seat GetSeatById(int seatid)
    {
        return seatRepo.getSeatById(seatid);
    }

}
