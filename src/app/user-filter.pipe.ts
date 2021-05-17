import { users } from './../../training/src/app/user.service';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'userFilter'
})

export class UserFilterPipe implements PipeTransform {

  transform(userArr: users[], filter: string=''): users[] {

    if(!filter.trim()) {
      return userArr
    }

    return userArr.filter(user=> {
      return user.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    })

  }

}
