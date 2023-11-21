package iniko.voda.backendapi.PoJo.Utils.special;


import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class SearchRequest implements Serializable {
    private String name;
    private String rattingRange;
    private String genre;
}
