package iniko.voda.backendapi.DTO;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Cascade;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int userID;

    @Column(name="Username")
    private String username;
    private String Password;
    private String Name;
    private String Surname;
    private String Mobile;
    private String email;
    /*@OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Order> Orders;*/

    @Column(name="IsAdmin")
    private Boolean isAdmin;
    private Boolean IsActive;
    private Date LastLogIn;
    private Date DateCreated;
    @OneToOne
    private LastActions lastActions;
    @OneToMany
    @JsonManagedReference
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Payment> payments;
    @OneToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Reservation> reservations;

    public User() {
    }

    public User(int userID, String username, String password, String name, String surname, String mobile, /*List<Order> orders,*/ Boolean isAdmin, Boolean isActive, Date lastLogIn, Date dateCreated) {
        this.userID = userID;
        this.username = username;
        Password = password;
        Name = name;
        Surname = surname;
        Mobile = mobile;
        //Orders = orders;
        this.isAdmin = isAdmin;
        IsActive = isActive;
        LastLogIn = lastLogIn;
        DateCreated = dateCreated;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }

    public String getMobile() {
        return Mobile;
    }

    public void setMobile(String mobile) {
        Mobile = mobile;
    }

   /* public List<Order> getOrders() {
        return Orders;
    }

    public void setOrders(List<Order> orders) {
        Orders = orders;
    }*/

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public Boolean getActive() {
        return IsActive;
    }

    public void setActive(Boolean active) {
        IsActive = active;
    }

    public Date getLastLogIn() {
        return LastLogIn;
    }

    public void setLastLogIn(Date lastLogIn) {
        LastLogIn = lastLogIn;
    }

    public Date getDateCreated() {
        return DateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        DateCreated = dateCreated;
    }

    public LastActions getLastActions() {
        return lastActions;
    }

    public void setLastActions(LastActions lastActions) {
        this.lastActions = lastActions;
    }

    public Set<Payment> getPayments() {
        return payments;
    }

    public void setPayments(Set<Payment> payments) {
        this.payments = payments;
    }

    public Set<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservations = reservations;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", username='" + username + '\'' +
                ", Password='" + Password + '\'' +
                ", Name='" + Name + '\'' +
                ", Surname='" + Surname + '\'' +
                ", Mobile='" + Mobile + '\'' +
                ", email='" + email + '\'' +
                ", isAdmin=" + isAdmin +
                ", IsActive=" + IsActive +
                ", LastLogIn=" + LastLogIn +
                ", DateCreated=" + DateCreated +
                ", lastActions=" + lastActions +
                ", payments=" + payments +
                ", reservations=" + reservations +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        if (isAdmin) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return IsActive;
    }
}

