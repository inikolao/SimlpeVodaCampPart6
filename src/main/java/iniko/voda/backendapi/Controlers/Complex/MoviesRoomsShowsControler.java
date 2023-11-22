package iniko.voda.backendapi.Controlers.Complex;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.DTO.Movie;
import iniko.voda.backendapi.DTO.MoviesShow;
import iniko.voda.backendapi.DTO.Room;
import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.DTO.Utils.ShowDetails;
import iniko.voda.backendapi.Services.DB.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    public Cinema GetCinemaByRoomIDcn(@PathVariable int id)
    {
       // Seat seat=seatService.GetSeatById(Integer.parseInt(ID));
        return GetCinemaByRoomID(id);
    }
    @RequestMapping(value = "/showDetailsByMovie/{id}",method = RequestMethod.GET)
    public List<ShowDetails> GetShowDetailsByMovieID(@PathVariable int id)
    {
        // Seat seat=seatService.GetSeatById(Integer.parseInt(ID));
        List<MoviesShow> moviesShowsPLayable=moviesShowService.GetShowsByMovieId(id);
        List<ShowDetails> showDetailsList=new ArrayList<>();
        for (MoviesShow show:moviesShowsPLayable ) {

            ShowDetails showDetails=new ShowDetails();
            showDetails.setMovieName(show.getMovie().getTitle());
            showDetails.setSeatsAvaliable(show.getSeatsAvailable());
            showDetails.setPrice(show.getTicketPrice());
            showDetails.setCinemaName(GetCinemaByRoomID(show.getRoom().getId()).getName());
            showDetails.setCinemaId(GetCinemaByRoomID(show.getRoom().getId()).getId());
            showDetails.setRoomNo(String.valueOf(show.getRoom().getRoomCinemaNo()));
            showDetails.setRoomID(show.getRoom().getId());
            showDetailsList.add(showDetails);



        }

        return showDetailsList;
    }

    private Cinema GetCinemaByRoomID(int id)
    {
        Room room=roomService.GetRoomById(id);
        List<Cinema> cinemas=cinemasService.GetAllCinemas();
        Cinema rcinema=new Cinema();
        for (Cinema cn:cinemas ) {

            Set<Room> cnrooms=cn.getRooms();
            for (Room rm: cnrooms) {
                if(rm.getId()==room.getId())
                {
                    rcinema=cn;
                }

            }


        }

        return rcinema;
    }

}
