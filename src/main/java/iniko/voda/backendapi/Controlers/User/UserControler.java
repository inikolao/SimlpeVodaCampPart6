package iniko.voda.backendapi.Controlers.User;


import iniko.voda.backendapi.DTO.User;
import iniko.voda.backendapi.Services.DB.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
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
}
