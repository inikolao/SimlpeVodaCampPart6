package iniko.voda.backendapi.Controlers.Rooms;

import iniko.voda.backendapi.DTO.Room;
import iniko.voda.backendapi.Services.DB.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rooms")
public class RoomsControler {

    @Autowired
    RoomService roomService;

    @GetMapping("/{id}")
    public Room GetRoomByID(@PathVariable String id)
    {
        return  roomService.GetRoomById(Integer.parseInt(id));
    }
}
