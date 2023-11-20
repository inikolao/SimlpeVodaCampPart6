package iniko.voda.backendapi.Controlers.Complex;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.DTO.Room;
import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Services.DB.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/complex")
public class MoviesRoomsShowsControler {

    @Autowired
    MovieService movieService;

    @Autowired
    RoomService roomService;

    @Autowired
    CinemasService cinemasService;
    @Autowired
    MoviesShowService moviesShowService;
    @Autowired
    SeatService seatService;

    @RequestMapping(value = "/moviebyID/{id}",method = RequestMethod.GET)
    public Movie GetMovieBySeatID(@PathVariable String id)
    {
        Seat seat=seatService.GetSeatById(Integer.parseInt(id));
        return moviesShowService.GetShowByRoomId(seat.getRoomSeat().getId()).getMovie();
    }
    @RequestMapping(value = "/cinemabyRoomID/{id}",method = RequestMethod.GET)
    public Cinema GetCinemaByRoomID(@PathVariable int id)
    {
       // Seat seat=seatService.GetSeatById(Integer.parseInt(ID));
        return cinemasService.getCinemaByRoomID(id);
    }

}
