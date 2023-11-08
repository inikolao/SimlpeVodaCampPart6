package iniko.voda.backendapi.Controlers.Genres;

import iniko.voda.backendapi.DTO.Genre;
import iniko.voda.backendapi.Services.DB.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/genre")
public class GenreControler {

    @Autowired
    GenreService genreService;

    @GetMapping("/all")
    public List<Genre> GetAllGenres()
    {
        return genreService.GetALlGenrer();
    }

}
