package iniko.voda.backendapi.PoJo;

import iniko.voda.backendapi.PoJo.Utils.Seat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class MovieShow implements Serializable {

    private int movieShowsID;
    private Movie movie;
    private Room room;
    private LocalDateTime dateTime;
    private float ticketPrice;
    private int seatsBooked;
    private int seatsAvailable;
    private List<Seat> seatStatusList;

}
