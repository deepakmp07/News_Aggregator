
package com.example.demo.entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import org.springframework.data.annotation.Id;
//import jakarta.persistence.*;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "inewsuserdetails")
public class iNewsUserDetails implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	private String username;
	private String name;
	private String email;
	private int age;
	private long mobile;
	private String state;
	private String district;
	private String city;
	private String password;
	private String retype_password;
	private String p1;
	private String p2;
	private String p3;
	private boolean isSubscribed = false;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }


    // public iNewsUserDetails() {
        
    // }
    public iNewsUserDetails(long user_id, String username, String name, String email, int age, long mobile,
            String state, String district, String city, String password, String retype_password, String p1, String p2,
            String p3, boolean isSubscribed) {
        this.user_id = user_id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.age = age;
        this.mobile = mobile;
        this.state = state;
        this.district = district;
        this.city = city;
        this.password = password;
        this.retype_password = retype_password;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.isSubscribed = isSubscribed;
    }


    public long getUser_id() {
        return user_id;
    }


    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }


    public String getUsername() {
        return email;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        this.age = age;
    }


    public long getMobile() {
        return mobile;
    }


    public void setMobile(long mobile) {
        this.mobile = mobile;
    }


    public String getState() {
        return state;
    }


    public void setState(String state) {
        this.state = state;
    }


    public String getDistrict() {
        return district;
    }


    public void setDistrict(String district) {
        this.district = district;
    }


    public String getCity() {
        return city;
    }


    public void setCity(String city) {
        this.city = city;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getRetype_password() {
        return retype_password;
    }


    public void setRetype_password(String retype_password) {
        this.retype_password = retype_password;
    }


    public String getP1() {
        return p1;
    }


    public void setP1(String p1) {
        this.p1 = p1;
    }


    public String getP2() {
        return p2;
    }


    public void setP2(String p2) {
        this.p2 = p2;
    }


    public String getP3() {
        return p3;
    }


    public void setP3(String p3) {
        this.p3 = p3;
    }


    public boolean isSubscribed() {
        return isSubscribed;
    }


    public void setSubscribed(boolean isSubscribed) {
        this.isSubscribed = isSubscribed;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isAccountNonExpired'");
    }


    @Override
    public boolean isAccountNonLocked() {
        return true;
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isAccountNonLocked'");
    }


    @Override
    public boolean isCredentialsNonExpired() {
        return true;
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isCredentialsNonExpired'");
    }


    @Override
    public boolean isEnabled() {
        return true;
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
    }
    


    

    
}