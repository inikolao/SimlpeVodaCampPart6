package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.Repos.CinemaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CinemasService {

    @Autowired
    private CinemaRepo cinemaRepo;

    public List<Cinema> GetAllCinemas()
    {
        List<Cinema> cinemas=new ArrayList<>();
        cinemaRepo.findAll().forEach(cinemas::add);
        return cinemas;
    }
    public void CreateCinema(Cinema cinema)
    {
        cinemaRepo.save(cinema);
    }
}
