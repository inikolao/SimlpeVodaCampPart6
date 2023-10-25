package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.util.Pair;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

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
    private List<Map<Integer,Boolean>> seatList;
}
