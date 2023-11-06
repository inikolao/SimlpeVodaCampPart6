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
    private int roomCinemaNo;
    private int seats;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Seat> seatStatusList;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<MoviesShow> moviesShowsRoom;
}
