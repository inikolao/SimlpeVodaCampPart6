package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Repos.Util.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
    @Autowired
    SeatRepo seatRepo;

    public void CreateSeat(Seat seat)
    {
        seatRepo.save(seat);
    }
}
