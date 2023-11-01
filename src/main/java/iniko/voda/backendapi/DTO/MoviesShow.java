package iniko.voda.backendapi.DTO;

import iniko.voda.backendapi.DTO.Utils.Seat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity(name = "MovieShows")
public class MoviesShow {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int movieShowsID;

    @OneToOne
    private Movie movie;
    @OneToOne
    private Room room;
    private LocalDateTime dateTime;
    private float ticketPrice;
    private int seatsBooked;
    private int seatsAvailable;
    @OneToMany
    private List<Seat> seatStatusList;
}
