import { Injectable } from '@angular/core';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private _members = [
    new Member('1', 'achref@gmail.com', 'achref', 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg', 'online'),
    new Member('2', 'benmmo@a.com', 'mohamed', 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', 'offline')
  ];

  constructor() { }
  get members() {
    return this._members;
  }
}
