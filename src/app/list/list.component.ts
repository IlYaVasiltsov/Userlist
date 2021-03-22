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

  constructor(public userService: UserService,public dialog: MatDialog, public remove : DialogRemoveComponent) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  message = "Error , user already exist";


  id:string;
  userName:string;
  name:string;


  openDialog() {
    this.dialog.open(DialogRemoveComponent);
  }

  openSecDialog() {
    this.dialog.open(DialogEditComponent)
  }


}

