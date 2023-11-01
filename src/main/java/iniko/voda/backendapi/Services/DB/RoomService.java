package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Room;
import iniko.voda.backendapi.Repos.RoomsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomsRepo roomsRepo;

    public List<Room> GetAllRooms()
    {
        List<Room> rooms=new ArrayList<>();
        roomsRepo.findAll().forEach(rooms::add);
        return rooms;
    }

    public void CreateRoom(Room room)
    {
        roomsRepo.save(room);
    }

    public Room GetRoomById(int id)
    {
        return roomsRepo.getRoomByRoomID(id);
    }
}
