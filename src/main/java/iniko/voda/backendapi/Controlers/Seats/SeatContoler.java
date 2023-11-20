package iniko.voda.backendapi.Controlers.Seats;

import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Services.DB.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/seats")
public class SeatContoler {
    @Autowired
    SeatService seatService;

    @GetMapping("/all")
    public List<Seat> GetAllSeats() {
        return seatService.GetAllSeats();
    }
    @GetMapping("/{id}")
    public Seat GetSeatByid(@PathVariable String id) {
        return seatService.GetSeatById(Integer.parseInt(id));
    }
    @GetMapping("/List")
    public List<Seat> GetSeatsList(@RequestParam(name = "roomid") int roomid) {
        return seatService.GetSeatByRoommId(roomid);
    }
}
