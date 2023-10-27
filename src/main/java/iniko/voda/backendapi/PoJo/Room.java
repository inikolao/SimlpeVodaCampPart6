package iniko.voda.backendapi.PoJo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Room implements Serializable {

    private int roomID;
    private Cinema cinema;
    private int roomCinemaNo;
    private int seats;
    private MovieShow moviesShow;
}
