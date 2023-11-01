package iniko.voda.backendapi.Services.Initialisers;

import iniko.voda.backendapi.DTO.*;
import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Services.DB.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Component
public class BasicInitialize {


    @Autowired
    private UserService userService;

    @Autowired
    private GenreService genreService;
    @Autowired
    private MfileService mfileService;
    @Autowired
    private MovieService movieService;
    @Autowired
    private RoomService roomService;
    @Autowired
    private MoviesShowService moviesShowService;
    @Autowired
    private CinemasService cinemasService;

    public BasicInitialize() {

    }

    public BasicInitialize(int prTps,int prCts,int ordCts,int flTps,int fils) {

        InitializeUsers();
        InitialiseGenres();
        InitialiseMovies();

    }
    private void InitialiseGenres()
    {
        System.out.println("Generating Genres\n");
        Genre genre;
        for (int i = 0; i < 10; i++) {
            genre=new Genre();
            genre.setName((GenRandomString());
            genreService.CreateGenrer(genre);

        }


    }
    private void InitialiseMovies()
    {
        System.out.println("Generating Movie\n");
        Movie movie;
        for (int i = 0; i <30 ; i++) {
            movie=new Movie();
            movie.setMovieGenre(CreateRandomGenreList(GenRandomInt(4)));
            movie.setDuration(GenRandomInt(200));
            movie.setDescription(GenRandomString());
            movie.setLanguage("EN");
            movie.setRating(GenRandomInt(6));
            movie.setPlot(GenRandomString());
            movie.setFiles(null);
            movie.setMoviesProps(new MoviesProps(1,"something"+GenRandomString()));
            movie.setFiles(createMfileList());
            movieService.CreateMovie(movie);

        }

    }
    private void InitialiseCinemas()
    {
        System.out.println("Generating Cinema\n");
        Cinema cinema;
        int rooms;
        for (int i = 0; i < 20; i++) {
            cinema=new Cinema();
            cinema.setName(GenRandomString()+"_PLex");
            cinema.setCity("someCity_"+GenRandomString());
            cinema.setAdress("cinemaDE"+GenRandomInt());
            int sv=GenRandomInt();
            rooms=sv==0?1:sv;
            cinema.setRoomsNum(rooms); //how many rooms has the cinema?
            cinema.setMoviesShows(CreateMovieshowList(rooms));//so the shows will correspond to rooms
            cinemasService.CreateCinema(cinema);

        }

    }
    private void InitialiseRooms()
    {
        System.out.println("Generating Rooms\n");
        Room room;
        for (int i = 0; i < 25; i++) {
            room=new Room();
            room.setSeats(65);
            room.setRoomCinemaNo(GenRandomInt(3));
            room.set

        }


    }
    private void InitialiseMovieShows()
    {
        System.out.println("Generating MovieShows\n");
        MoviesShow moviesShow;
        for (int i = 0; i < 20; i++) {
            Room room=roomService.GetRoomById(i);
            moviesShow=new MoviesShow();
            moviesShow.setMovie(GetRandomMovie());
            moviesShow.setDateTime(GetNowL());
            moviesShow.setSeatsBooked(0);
            moviesShow.setSeatsAvailable(65);
            moviesShow.setSeatStatusList(CreateSeatList(room.getRoomID()));
            moviesShow.setTicketPrice((float)GenRandomInt(16));
            moviesShow.setRoom(room);
            moviesShowService.CreateMovieShow(moviesShow);
        }

    }





    private List<MFile> createMfileList()
    {
        MFile file;
        List<MFile> files=new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            file =new MFile(1,GenRandomString());
            files.add(new MFile(1,GenRandomString()));
            mfileService.CreateMfile(file);
        }

        return files;

    }

    private List<Genre> CreateRandomGenreList(int size)
    {
        List<Genre> genres= genreService.GetALlGenrer();
        List<Genre> rgenres=new ArrayList<>();
        for (int siz = 0; siz < size; siz++) {
            rgenres.add(genres.get(GenRandomInt(genres.size())));

        }
        return rgenres;
    }
    private Movie GetRandomMovie()
    {
        return movieService.GetAllMovies().get(GenRandomInt(movieService.GetAllMovies().size()));
    }
    private List<Seat> CreateSeatList(int roomID)
    {
        Seat seat;
        List <Seat> seats=new ArrayList<>();
        Room room=roomService.GetRoomById(roomID);
        for (int i = 0; i < room.getSeats(); i++) {
            seat=new Seat(i,i,false,roomService.GetRoomById(roomID));
            seats.add(seat);

        }
        return seats;
    }
    private List<MoviesShow> CreateMovieshowList(int CinemaRooms)
    {
        MoviesShow moviesShow;
        List<MoviesShow> moviesShows=new ArrayList<>();
        for (int i = 0; i < CinemaRooms; i++) {
            moviesShow=new MoviesShow();
            moviesShow.setMovie(GetRandomMovie());
            moviesShow.setDateTime(GetNowL());
            moviesShow.setSeatsBooked(0);
            moviesShow.setSeatsAvailable(65);
        }
    }






    public void InitializeUsers()
    {
        System.out.println("Generating Users\n");
        System.out.println("Generating Admin\n");
        createAdmin();
        System.out.println("Generating Test User\n");
        createMainTest();
        createGuest();
        User user;
        for (int i = 0; i < 10; i++) {
            user=new User();
            user.setUsername(GenRandomString()+"_TEST");
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            user.setPassword(passwordEncoder.encode("SR"+GenRandomString()));
            user.setAdmin(false);
            user.setActive(true);
            user.setMobile("012345678910");
            user.setDateCreated(GetNow());
            user.setName(GenRandomString());
            user.setSurname(GenRandomString());
            user.setLastLogIn(null);
            userService.CreateUser(user);
        }
    }
    private void createAdmin()
    {
        User admin=new User();
        admin.setUsername("admin");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        admin.setPassword(passwordEncoder.encode("sa"));
        admin.setAdmin(true);
        admin.setActive(true);
        admin.setMobile("012345678910");
        admin.setDateCreated(GetNow());
        admin.setName(GenRandomString());
        admin.setSurname(GenRandomString());
        admin.setLastLogIn(null);
        userService.CreateUser(admin);
    }

    private void createGuest()
    {
        User guest=new User();
        guest.setUsername("guest");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        guest.setPassword(passwordEncoder.encode("xxxxxxx"));
        guest.setAdmin(false);
        guest.setActive(false);
        guest.setMobile("012345678910");
        guest.setDateCreated(GetNow());
        guest.setName(GenRandomString());
        guest.setSurname(GenRandomString());
        guest.setLastLogIn(null);
        userService.CreateUser(guest);
    }
    private void createMainTest()
    {
        User test=new User();
        test.setUsername("user");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        test.setPassword(passwordEncoder.encode("sa"));
        test.setAdmin(false);
        test.setActive(true);
        test.setMobile("012345678910");
        test.setDateCreated(GetNow());
        test.setName(GenRandomString());
        test.setSurname(GenRandomString());
        test.setLastLogIn(null);
        userService.CreateUser(test);
    }
    /*private List<Object> SetObjectsNum(Object obj, Class obj.Class, int Interations)
    {
        List<Object> objectList;
        for (int i = 0; i < Interations; i++) {

        }
    }*/

    private String GenRandomString()
    {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        return (random.ints(leftLimit, rightLimit + 1)
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString());
    }



    private Integer GenRandomInt()
    {
        Random rand = new Random();
        // Setting the upper bound to generate the
        // random numbers in specific range
        int upperbound = 6;
        // Generating random values from 0 - 24
        // using nextInt()
        return rand.nextInt(upperbound);
    }
    private Integer GenRandomInt(int upperbound)
    {
        Random rand = new Random();
        // Setting the upper bound to generate the
        // random numbers in specific range
        //int upperbound = uperbound;
        // Generating random values from 0 - 24
        // using nextInt()
        return rand.nextInt(upperbound);
    }
    private Integer GenRandomPrice()
    {
        Random rand = new Random();
        // Setting the upper bound to generate the
        // random numbers in specific range
        int upperbound = 100;
        // Generating random values from 0 - 24
        // using nextInt()
        return rand.nextInt(upperbound);
    }
    private Date GetNow()
    {
        Date dateOne = new Date();
        Instant inst = Instant.now();
        return dateOne.from(inst);
    }
    private LocalDateTime GetNowL()
    {
        Instant inst = Instant.now();
        return LocalDateTime.from(inst);
    }
}

