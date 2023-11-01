package iniko.voda.backendapi.DTO.Utils;

import iniko.voda.backendapi.DTO.Room;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Seat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int seatID;
    private int seatNo;
    private boolean isReserved;
    @OneToOne
    private Room roomSeat;

}
