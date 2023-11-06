package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.Repos.CinemaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CinemasService {

    @Autowired
    private CinemaRepo cinemaRepo;

    @Transactional
    public List<Cinema> GetAllCinemas()
    {
        return cinemaRepo.findAll();
    }
    public void CreateCinema(Cinema cinema)
    {
        cinemaRepo.save(cinema);
    }
}
