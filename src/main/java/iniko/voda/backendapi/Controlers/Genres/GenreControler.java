package iniko.voda.backendapi.Controlers.Genres;

import iniko.voda.backendapi.DTO.Genre;
import iniko.voda.backendapi.PoJo.Utils.special.Playload;
import iniko.voda.backendapi.Services.DB.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PostMapping(value = "/create",consumes = MediaType.APPLICATION_JSON_VALUE)
    public Playload CreateGenre(@RequestBody Genre genre)
    {
        try {
            genreService.CreateGenrer(genre);
            return new Playload(LocalDateTime.now(),"OK",null,0);
        } catch (Exception e) {
            return new Playload(LocalDateTime.now(), HttpStatus.INTERNAL_SERVER_ERROR.toString(),"Exception to insert",1);

        }
    }

}
