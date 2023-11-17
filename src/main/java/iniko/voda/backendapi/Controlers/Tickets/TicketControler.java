package iniko.voda.backendapi.Controlers.Tickets;

import iniko.voda.backendapi.DTO.Reservation;
import iniko.voda.backendapi.Services.DB.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/tickets")
public class TicketControler {

    @Autowired
    private ReservationService reservationService;

    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public List<Reservation> GetAllReservations(){return reservationService.GetReservations();}

}
