package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Payment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private LocalDateTime paymentTimestamp;
    @ManyToOne
    private User paymentUser;
    private float amount;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Reservation> reservations;
}
