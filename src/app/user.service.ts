import { Injectable } from '@angular/core';

export interface users {
  id:number
  name:string
  email:string
  pass:string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  state = false;
  undf:undefined;


  userArr:users[] = [
    {id:0,name:"ilya",email:"ilya@mail.com",pass:"12345"},
    {id:1,name:"4e4en",email:"4e4en@mail.com",pass:"123456"},
    {id:2,name:"bshlyk",email:"bshlyk@mail.com",pass:"1234567"}
  ]

  deletePers(id) {
    this.userArr = this.userArr.filter(person => person.id !== id );
    console.log(this.userArr);
  }

  addUser(name,email,pass) {
    const newUser = this.userArr.push({id:Date.now(),name:name,email:email,pass:pass});
    // console.log(this.userArr);
  }

  logUser(inputName,inputPass) {
    const person = this.userArr.find(person=>person.name === inputName && person.pass === inputPass);
    //console.log(person);
    return person;
  }

  findIdx(name) {
    const idx = this.userArr.findIndex(person=>person.name === name);
    console.log(idx);
  }

  openDialog() {
    // const idx = this.userArr.findIndex(person=> person.id === id);
    // console.log(idx);
  }

  openSecDialog() {
    // const idx = this.userArr.findIndex(person=> person.id === id);
    // console.log(idx);
  }
}
