package iniko.voda.backendapi.DTO;

import javax.persistence.*;

@Entity(name = "Rooms")
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
