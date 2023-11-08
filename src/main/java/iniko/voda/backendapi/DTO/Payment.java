package iniko.voda.backendapi.DTO;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private User paymentUser;
    private float amount;
    @OneToMany
    @JsonManagedReference
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Reservation> reservations;
}
