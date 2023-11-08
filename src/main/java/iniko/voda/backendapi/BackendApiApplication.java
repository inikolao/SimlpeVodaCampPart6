package iniko.voda.backendapi;

import iniko.voda.backendapi.Services.Initialisers.BasicInitialize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApiApplication {

    @Autowired
    BasicInitialize initialize;

    public static void main(String[] args) {
        SpringApplication.run(BackendApiApplication.class, args);
    }

   /* @Bean
    public void setUp() {
        //BasicInitialize initialize=new BasicInitialize(20,15,15,30,40);


        initialize.InitialiseGenres();
        initialize.InitialiseMovies();
        initialize.InitialiseCinemas();
        initialize.InitialiseMovieShows();
        initialize.InitializeUsers();
    }*/

}
