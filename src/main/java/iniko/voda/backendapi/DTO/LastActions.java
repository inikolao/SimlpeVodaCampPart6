package iniko.voda.backendapi.DTO;

import iniko.voda.backendapi.DTO.Utils.Action;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class LastActions {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int actionsID;
    @OneToMany
    private List<Action> actions=new ArrayList<>(10);
    private LocalDateTime LastUpdated;
}
