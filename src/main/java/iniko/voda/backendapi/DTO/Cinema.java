package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name = "Cinemas")
public class Cinema {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int cinemaID;
    private String name;
    private String city;
    private int roomsNum;
}
