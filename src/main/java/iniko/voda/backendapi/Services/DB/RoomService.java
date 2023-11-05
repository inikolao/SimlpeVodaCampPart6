package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Room;
import iniko.voda.backendapi.Repos.RoomsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RoomService {

    @Autowired
    private RoomsRepo roomsRepo;

    public Set<Room> GetAllRooms()
    {
        Set<Room> rooms=new HashSet<>();
        roomsRepo.findAll().forEach(rooms::add);
        return rooms;
    }
    public List<Room> GetAllRoomsList()
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
        return roomsRepo.getRoomById(id);
    }
}
