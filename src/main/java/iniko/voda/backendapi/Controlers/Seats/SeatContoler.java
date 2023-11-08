package iniko.voda.backendapi.Controlers.Seats;

import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Services.DB.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/seats")
public class SeatContoler {
    @Autowired
    SeatService seatService;

    @GetMapping("/all")
    public List<Seat> GetAllSeats() {
        return seatService.GetAllSeats();
    }
    @GetMapping("/List")
    public List<Seat> GetSeatsList(@RequestParam(name = "roomid") int roomid) {
        return seatService.GetSeatByRoommId(roomid);
    }
}
