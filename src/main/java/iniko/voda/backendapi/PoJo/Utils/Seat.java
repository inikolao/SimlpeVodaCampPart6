package iniko.voda.backendapi.PoJo.Utils;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Seat implements Serializable {

    private int seatID;
    private int seatNo;
    private boolean isReserved;
}
