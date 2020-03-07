import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {    
  }

  change_form(){
    var sign_in = document.getElementById("signin");
    var sign_up = document.getElementById("signup");
    var confPass = document.getElementById("confpass");
    var LogIn = document.getElementById("LogIn");
    // var login = document.getElementById("login");
    // var password = document.getElementById("password");
    var currentClass1 = sign_in.className;
    if (currentClass1 == "active") { // Check the current class name
        sign_in.className = "inactive underlineHover"; 
        sign_up.className = "active";
        confPass.style.display = "inline"; 
        LogIn.setAttribute('value', "Sign Up");
        // login.setAttribute('placeholder', "Password");

          // Set other class name
    } else {
        sign_up.className = "inactive underlineHover"; 
        sign_in.className = "active"; // Otherwise, use `second_name`
        confPass.style.display = "none"; 
        LogIn.setAttribute('value', "Log In");
    }
    }   

}
