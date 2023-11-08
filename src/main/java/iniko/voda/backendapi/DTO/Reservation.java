package iniko.voda.backendapi.DTO;

import com.fasterxml.jackson.annotation.JsonBackReference;
import iniko.voda.backendapi.DTO.Utils.Seat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Reservation {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private LocalDateTime creationTimestamp;
    @ManyToOne
    @JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    //@JoinColumn(name = "owner_id")
    private User owner;
    @OneToOne
    private Seat seat;
    private float cost;
/*    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Payment payment;*/

}
