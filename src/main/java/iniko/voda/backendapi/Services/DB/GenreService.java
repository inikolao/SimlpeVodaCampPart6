package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Genre;
import iniko.voda.backendapi.Repos.GenreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GenreService {

    @Autowired
    private GenreRepo genreRepo;

    @Transactional
    public List<Genre> GetALlGenrer()
    {
        return genreRepo.findAll();
    }

    public void CreateGenrer(Genre genre)
    {
        genreRepo.save(genre);
    }
}
