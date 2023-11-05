package iniko.voda.backendapi.DTO;

import iniko.voda.backendapi.DTO.Utils.Action;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class LastActions {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @OneToMany
    private Set<Action> actions=new HashSet<>(10);
    private LocalDateTime LastUpdated;
}
