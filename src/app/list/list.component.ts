import { DialogaddComponent } from './../dialogadd/dialogadd.component';
import { LoginComponent } from './../login/login.component';
import { DialogEditComponent } from './../dialog-edit/dialog-edit.component';
import { UserService } from './../user.service';
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent {

  constructor(public userService: UserService,public dialog: MatDialog, public remove : DialogRemoveComponent, public login : LoginComponent) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  message = "Error , user already exist";


  id:string;
  userName:string;
  name:string;
  filter = '';


  removeUser(id) {
    const del = Number(sessionStorage.getItem(this.login.isLog))
    console.log(del);
    if(del != id) {
      this.userService.deletePers(id);
      console.log(this.userService.userArr);
    } else {
      console.log("error");
    }
}

openAddDialog() {
  const dialog = this.dialog.open(DialogaddComponent)
}

openSecDialog(id,pass) {
  const dialog = this.dialog.open(DialogEditComponent, {
    data:{id, pass},
  });
 }
}



