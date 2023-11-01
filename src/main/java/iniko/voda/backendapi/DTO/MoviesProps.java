package iniko.voda.backendapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "MProperties")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class MoviesProps {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int moviePropsID;

    private String someprops;
}
