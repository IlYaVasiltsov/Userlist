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
      const curPers = this.userService.userArr.find(perosn=>perosn.name ===name);
      const del = Number(sessionStorage.getItem(this.login.isLog))
      const idx = this.userService.userArr.findIndex(person => person.id === id);
      console.log(del);
      if(del != id) {
        this.userService.deletePers(id);
        console.log(this.userService.userArr);
      } else {
        console.log("error");
      }
  }
}
