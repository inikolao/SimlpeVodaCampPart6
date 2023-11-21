package iniko.voda.backendapi.DTO.Utils;

import com.fasterxml.jackson.annotation.JsonBackReference;
import iniko.voda.backendapi.DTO.Room;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name="Seats")
public class Seat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private int seatNo;
    private boolean isReserved;
    @OneToOne
    @JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @JoinColumn(name = "rooms_id")
    //@Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private Room roomSeat;

}