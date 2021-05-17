import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  inputName = "";
  inputPass = "";
  logErr = false;
  logSucc = false;
  message = "Error, user dont exist, go to";
  secMessage = "Succes";
  isLog:string;

  login(inputName,inputPass) {
    const log = this.userService.userArr.find(person=> person.name === inputName)
    const logUser = this.userService.logUser(inputName,inputPass);
    if (!logUser ) {
      this.logErr = true;
      this.logSucc = false;
      console.log("not login");
    } else {
      this.logSucc = true;
      this.logErr = false;
      console.log("login");
      const currId = String(logUser.id)
      sessionStorage.setItem(this.isLog,currId);
      console.log(currId);
      this.router.navigate(['/userlist']);
    }
  }

  ngOnInit(): void {
  }

}
