package com.example.demo.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	// private String username;
	private String name;
	private String email;
	private int age;
	private long mobile;
	private String state;
	private String district;
	private String city;
	private String password;
	// private String retype_password;
	private String p1;
	private String p2;
	private String p3;
    // private String name;
    // private String email;
    // private String password;
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//    
}
