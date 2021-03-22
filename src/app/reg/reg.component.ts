import { DialogAlertComponent } from './../dialog-alert/dialog-alert.component';
import {FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})

export class RegComponent implements OnInit {

  constructor(private router: Router ,public userService: UserService,public dialog: MatDialog) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  name = "";
  pass = "";
  err = false;
  message = "User already exist!";
  error = "Invalid email addres"



  addUser(name,email,pass) {
    const secObj = this.userService.userArr.find(person=> person.email === email || person.name === name);
    // const secObj = this.userService.userArr.find(person=> person.email === email || person.name === name);
    // const secObj = this.userService.userArr.find(person=> person.email === email || person.name === name);
    if(secObj) {
      this.err = true;
      console.log(secObj);
    } else {
      this.userService.addUser(name,email,pass);
      console.log(this.userService.userArr);
      this.dialog.open(DialogAlertComponent);
      this.err = false;
    }

  }

  ngOnInit(): void {
  }

}
