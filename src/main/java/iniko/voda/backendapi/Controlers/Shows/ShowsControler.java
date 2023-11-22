package iniko.voda.backendapi.Controlers.Shows;

import iniko.voda.backendapi.DTO.MoviesShow;
import iniko.voda.backendapi.Services.DB.MoviesShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @RequestMapping(value = "/bymovie/{mId}", method = RequestMethod.GET)
    public List<MoviesShow> GetShowsByMovieId(@PathVariable String mId)
    {
        return moviesShowService.GetShowsByMovieId(Integer.parseInt(mId));
    }
}
