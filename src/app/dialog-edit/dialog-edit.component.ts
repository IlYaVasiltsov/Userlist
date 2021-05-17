import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  constructor(public userService: UserService,@Inject(MAT_DIALOG_DATA) public data: {id,pass}) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-z]*")
  ]);
  name = "";
  pass="";
  id:number;
  idx:number;
  reg:boolean;
  number = 1;
  undf:undefined;

  ngOnInit(): void {
  }



  saveChanges(inputName,inputEmail) {
        const idx2 = this.userService.userArr.findIndex(person=> person.email === inputEmail && person.name === inputName );
        const idx = this.userService.userArr.findIndex(perosn=> perosn.id === this.data.id);
        const qwe = this.userService.userArr.find(person=> person.email === inputEmail && person.name === inputName );
        console.log(qwe);
        console.log(idx);
        console.log(idx2);
        if( idx != idx2 && qwe ){
          console.log("us ex");
        } else  {
          console.log("reg new");
          const newarr = this.userService.userArr.splice(idx,1,{id:this.data.id,name:inputName,email:inputEmail,pass:this.data.pass});
          console.log(this.userService.userArr);
          }
      }

}
