package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Reservation;
import iniko.voda.backendapi.Repos.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;

    public List<Reservation> GetReservations()
    {
        return new ArrayList<>(reservationRepo.findAll());
    }
    public void CreateReservation(Reservation reservation)
    {
        reservationRepo.save(reservation);
    }
}
