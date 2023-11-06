package iniko.voda.backendapi.Controlers.Shows;

import iniko.voda.backendapi.DTO.MoviesShow;
import iniko.voda.backendapi.Services.DB.MoviesShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Shows")
public class ShowsControler {

    @Autowired
    private MoviesShowService moviesShowService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<MoviesShow> GetAllShows()
    {
        return moviesShowService.GetAllShows();
    }
}
