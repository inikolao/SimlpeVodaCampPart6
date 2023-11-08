package iniko.voda.backendapi.Controlers.User;


import iniko.voda.backendapi.DTO.LastActions;
import iniko.voda.backendapi.DTO.User;
import iniko.voda.backendapi.Services.DB.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.time.Instant;
import java.util.Date;
import java.util.List;

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
    @PostMapping("/register")
    @PreAuthorize("hasRole('USER')")
    public void CreateUser(User user)
    {
        String plainPassword = user.getPassword();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encryptedPassword = encoder.encode(plainPassword);
        user.setPassword(encryptedPassword);
        user.setActive(true);
        user.setAdmin(false);
        user.setDateCreated(Date.from(java.time.Clock.systemUTC().instant()));
        user.setLastActions(new LastActions());
        userService.CreateUser(user);
    }

}
