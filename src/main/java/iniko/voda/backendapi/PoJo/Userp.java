package iniko.voda.backendapi.PoJo;

import iniko.voda.backendapi.DTO.LastActions;
import iniko.voda.backendapi.DTO.Payment;
import iniko.voda.backendapi.DTO.Reservation;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Userp implements Serializable {

    private int userID;
    private String username;
    private String Password;
    private String Name;
    private String Surname;
    private String Mobile;
    private String email;
    private Boolean isAdmin;
    private Boolean IsActive;
    private Date LastLogIn;
    private Date DateCreated;
    private LastActions lastActions;

}
