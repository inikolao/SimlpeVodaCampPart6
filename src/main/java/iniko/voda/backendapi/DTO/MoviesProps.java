package iniko.voda.backendapi.DTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "MProperties")
public class MoviesProps {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int moviePropsID;

    private String someprops;
}
