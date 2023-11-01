package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "Rooms")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int roomID;
    @OneToOne
    private Cinema cinema;
    private int roomCinemaNo;
    private int seats;
    @OneToOne
    private MoviesShow moviesShow;
}
