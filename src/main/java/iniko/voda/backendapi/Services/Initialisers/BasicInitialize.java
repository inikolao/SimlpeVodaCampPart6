package iniko.voda.backendapi.Services.Initialisers;

import iniko.voda.backendapi.DTO.*;
import iniko.voda.backendapi.DTO.Utils.Seat;
import iniko.voda.backendapi.Services.DB.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.*;

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
    @Autowired
    private SeatService seatService;

    public BasicInitialize() {


    }

    public BasicInitialize(int prTps,int prCts,int ordCts,int flTps,int fils) {

        InitializeUsers();
        InitialiseGenres();
        InitialiseMovies();
        InitialiseCinemas();
        InitialiseMovieShows();

    }

    public void InitialiseGenres()
    {
        System.out.println("Generating Genres\n");
        Genre genre;
        for (int i = 0; i < 10; i++) {
            genre=new Genre();
            genre.setName(GenRandomString());
            genreService.CreateGenrer(genre);
        }


    }

    public void InitialiseMovies()
    {
        System.out.println("Generating Movie\n");
        Movie movie;
        for (int i = 0; i < 10; i++) {
            movie=new Movie();
            movie.setDescription(GenRandomString());
            movie.setPlot(GenRandomString());
            Set<Genre> genres=new HashSet<>();
            for (int j = 0; j < GenRandomInt(4); j++) {
                genres.add(new Genre(GenRandomString(),movie));
            }
            movie.setMovieGenre(genres);
            movie.setMoviesProps(new MoviesProps());
            movie.setLanguage("US");
            movie.setDuration(GenRandomInt(250));
            movie.setRating(GenRandomInt(6));
            Set<MFile> files=new HashSet<>();
            for (int j = 0; j < 3; j++) {
                files.add(new MFile(GenRandomString()));
            }
            movie.setFiles(files);
            movieService.CreateMovie(movie);

        }


    }
    public void InitialiseCinemas()//crate cinemas no shows yet
    {
        System.out.println("Generating Cinema\n");
        Cinema cinema;
        for (int i = 0; i < 20; i++) {
            int sv=GenRandomInt(5);
            Set<MoviesShow> moviesShows = new HashSet<>();
            cinema=new Cinema(); //GenRandomString()+"_Plex","Athens",GenRandomString()+" 88 12234",sv==0?1:sv,new HashSet<>())
            cinema.setName(GenRandomString()+"_Plex");
            cinema.setCity("Athers");
            cinema.setAddress(GenRandomString()+" 88 12234");
            cinema.setRoomsNum(sv==0?1:sv);
            Room room;
            int dk=sv==0?1:sv;
            Set<Room> rooms=new HashSet<>();
            for (int j = 0; j < dk; j++) {
                Set<MoviesShow> moviesShowsr = new HashSet<>();
                room=new Room();
                room.setCinema(cinema);
                room.setRoomCinemaNo(j+1);
                room.setSeats(65);
                Seat seat;
                Set<Seat> seats=new HashSet<>();
                for (int k = 0; k < 65; k++) {
                    seat=new Seat();
                    seat=new Seat();
                    seat.setSeatNo(j+1);
                    seat.setReserved(false);
                    seat.setRoomSeat(room);
                    seats.add(seat);
                }
                room.setSeatStatusList(seats);
                room.setMoviesShowsRoom(moviesShowsr);
                rooms.add(room);
            }
            cinema.setRooms(rooms);
            cinema.setMoviesShows(moviesShows);
            cinemasService.CreateCinema(cinema);

        }


    }

    public void InitialiseMovieShows()
    {
        System.out.println("Generating MovieShows\n");
        MoviesShow moviesShow;
        List<Room> rooms=roomService.GetAllRoomsList();
        List<Movie> movies=movieService.GetAllMoviesList();
        for (int i = 0; i < rooms.size(); i++)
        {
            moviesShow=new MoviesShow();
            int sv=GenRandomInt(movies.size());
            moviesShow.setMovie(movies.get(sv==0?1:sv));
            moviesShow.setRoom(rooms.get(i));
            moviesShow.setDateTime(GetNowL());
            moviesShow.setTicketPrice((float)GenRandomInt(16));
            moviesShow.setSeatsBooked(0);
            moviesShow.setSeatsAvailable(65);
            moviesShow.setPublic(true);
            moviesShow.setComming(false);
            moviesShowService.CreateMovieShow(moviesShow);
        }
        Room room;
        Cinema cinema;
        List<Cinema> cinemas=cinemasService.GetAllCinemas();
        List<MoviesShow> moviesShows=moviesShowService.GetAllShows();
        for (int i = 0; i < moviesShows.size(); i++) {
            int mvR=moviesShows.get(i).getRoom().getId();

            for (int j = 0; j < rooms.size(); j++) {
                Set<MoviesShow> shows=new HashSet<>();
                if(mvR==)

            }

            room=moviesShows.get(i).getRoom();
            room.getMoviesShowsRoom().add(moviesShows.get(i));
            roomService.CreateRoom(room);
        }
        for (int i = 0; i <  moviesShows.size(); i++) {
            cinema=moviesShows.get(i).getRoom().getCinema();
            cinema.getMoviesShows().add(moviesShows.get(i));
            cinemasService.CreateCinema(cinema);
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
        return LocalDateTime.now();
    }
}

