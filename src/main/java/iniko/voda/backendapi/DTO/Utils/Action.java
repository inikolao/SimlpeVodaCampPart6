package iniko.voda.backendapi.DTO.Utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Action {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String Action;
    private String Ticket;
    private int TicketId;
}
