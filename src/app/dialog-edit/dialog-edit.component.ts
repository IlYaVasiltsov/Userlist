import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  constructor(public userService: UserService) { }

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



  saveChanges(i,id,inputName,inputEmail,pass) {
        const idx = this.userService.userArr.findIndex(person=> person.email === inputEmail && person.name === inputName );
        const qwe = this.userService.userArr.find(person=> person.email === inputEmail && person.name === inputName );
        console.log(qwe);
        console.log(idx);
        if( qwe && idx !=  i) {
          console.log("us ex");
        } else  {
          console.log("reg new");
          const newarr = this.userService.userArr.splice(i,1,{id:id,name:inputName,email:inputEmail,pass:pass});
          }
      }

}
