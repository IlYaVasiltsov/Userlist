import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.scss']
})
export class DialogRemoveComponent implements OnInit {

  constructor(public userService: UserService,public dialog: MatDialog, public login : LoginComponent) { }


  ngOnInit(): void {
  }

  deleteUser(id,name,pass,i) {
      const del = Number(sessionStorage.getItem(this.login.isLog))
      console.log(del);
      if(del != id) {
        this.userService.deletePers(id);
        console.log(this.userService.userArr);
      } else {
        console.log("error");
      }
  }
}
