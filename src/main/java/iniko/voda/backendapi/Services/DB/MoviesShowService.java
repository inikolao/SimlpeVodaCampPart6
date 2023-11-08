package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.MoviesShow;
import iniko.voda.backendapi.Repos.MoviesShowRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class MoviesShowService {

    @Autowired
    private MoviesShowRepo moviesShowRepo;

    @Transactional
    public List<MoviesShow> GetAllShows()
    {
        List<MoviesShow> moviesShows= new ArrayList<>();
        moviesShowRepo.findAll().forEach(moviesShows::add);
        return moviesShows;
    }

    @Transactional
    public void CreateMovieShow(MoviesShow moviesShow)
    {
        moviesShowRepo.save(moviesShow);
    }

    public MoviesShow GetShowByRoomId(int id)
    {
        return moviesShowRepo.findMoviesShowByRoom_Id(id);
    }
    public float GetTicketPriceByrShowId(int id)
    {
        MoviesShow show=moviesShowRepo.findMoviesShowByRoom_Id(id);
        return moviesShowRepo.findMoviesShowByRoom_Id(id).getTicketPrice();
    }
}
