package iniko.voda.backendapi.DTO.Utils;

import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ShowDetails implements Serializable {

    private String movieName;
    private int seatsAvaliable;
    private float price;
    private String cinemaName;
    private String roomNo;
    private int cinemaId;
    private int roomID;

}
