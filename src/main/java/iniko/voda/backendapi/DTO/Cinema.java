package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name = "Cinemas")
public class Cinema {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String name;
    private String city;
    private String address;
    private int roomsNum;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Room> rooms;

}
