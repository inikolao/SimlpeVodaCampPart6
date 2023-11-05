package iniko.voda.backendapi.DTO;

import iniko.voda.backendapi.DTO.Utils.Seat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity(name = "Rooms")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @OneToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    //@JoinColumn(name = "cinemas_cinemaid")
    private Cinema cinema;
    private int roomCinemaNo;
    private int seats;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Seat> seatStatusList;
    @OneToMany
    //@JoinColumn(name = "moviesShows_id")
    private Set<MoviesShow> moviesShowsRoom;
}
