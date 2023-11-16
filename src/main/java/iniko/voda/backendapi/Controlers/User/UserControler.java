package iniko.voda.backendapi.Controlers.User;


import iniko.voda.backendapi.DTO.LastActions;
import iniko.voda.backendapi.DTO.User;
import iniko.voda.backendapi.PoJo.Userp;
import iniko.voda.backendapi.PoJo.Utils.special.Playload;
import iniko.voda.backendapi.Services.DB.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserControler {

    @Autowired
    UserService userService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('USER')")
    public List<User> GetAllUsers()
    {
        return userService.findAll();
    }

    @GetMapping("/{username}")
    @PreAuthorize("hasRole('USER')")
    public User GetUserByUsername(@PathVariable String username)
    {
        return userService.findByUsername(username);
    }
    @GetMapping("/")
    @PreAuthorize("hasRole('USER')")
    public User GetUserByUsernameG(@RequestParam(value = "username") String username)
    {
        return userService.findByUsername(username);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping(value = "/register",consumes = MediaType.APPLICATION_JSON_VALUE)
    public Playload CreateUser(@RequestBody Userp user, @RequestHeader HttpHeaders headers)
    {
        System.out.println("Received Headers: " + headers);
        System.out.println(user.toString());
        String plainPassword = user.getPassword();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encryptedPassword = encoder.encode(plainPassword);
        user.setPassword(encryptedPassword);
        User userSubmit = new User();
        userSubmit.setUsername(user.getUsername());
        userSubmit.setPassword(user.getPassword());
        userSubmit.setName(user.getName());
        userSubmit.setSurname(user.getSurname());
        userSubmit.setMobile(user.getMobile());
        userSubmit.setEmail(user.getEmail());
        userSubmit.setAdmin(false);
        userSubmit.setActive(true);
        userSubmit.setDateCreated(Date.from(java.time.Clock.systemUTC().instant()));
       // userSubmit.setLastActions(new LastActions());
       // userSubmit.setPayments(new HashSet<>());
       // userSubmit.setReservations(new HashSet<>());
        try {
            userService.CreateUser(userSubmit);
            return new Playload(LocalDateTime.now(),"OK",null,0);
        } catch (Exception e) {
            return new Playload(LocalDateTime.now(),HttpStatus.INTERNAL_SERVER_ERROR.toString(),"Exception to insert",1);
        }

    }

}
