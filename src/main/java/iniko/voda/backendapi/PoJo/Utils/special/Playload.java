package iniko.voda.backendapi.PoJo.Utils.special;

import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Playload implements Serializable {

    private LocalDateTime dateTime;
    private String status;
    private String errorDesc;
    private int errorId;

}
