import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersStateService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  onSetToInactive = new EventEmitter<number>();
  onSetToActive = new EventEmitter<number>();

  constructor() { }

}
