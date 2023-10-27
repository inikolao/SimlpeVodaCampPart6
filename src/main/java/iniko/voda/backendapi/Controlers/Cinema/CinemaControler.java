package iniko.voda.backendapi.Controlers.Cinema;

import iniko.voda.backendapi.DTO.Cinema;
import iniko.voda.backendapi.Services.DB.CinemasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cinemas")
public class CinemaControler {

    @Autowired
    private CinemasService cinemasService;

    //public List<Cinema> GetAllCinemas(){return cinemasService.GetAllCinemas();}

    @RequestMapping("/all")
    public List<Cinema> GetAllCinemas(){return cinemasService.GetAllCinemas();}
}
