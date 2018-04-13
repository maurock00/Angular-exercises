import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersStateService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  onSetToInactive = new EventEmitter();
  onSetToActive = new EventEmitter();

  constructor() { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveToActiveCounter++; 
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeToInactiveCounter++; 
  }

}
