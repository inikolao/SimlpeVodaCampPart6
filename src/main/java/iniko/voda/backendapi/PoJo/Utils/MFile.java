package iniko.voda.backendapi.PoJo.Utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class MFile implements Serializable {
    private int fileID;
    private String path;
}
