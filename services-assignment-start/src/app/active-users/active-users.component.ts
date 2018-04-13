import { Component, EventEmitter, OnInit } from '@angular/core';
import { UsersStateService } from '../shared/users-state.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersStateService: UsersStateService){
    
  }

  ngOnInit(){
    this.users = this.usersStateService.activeUsers;
  }

  setToInactive(id: number) {
    this.usersStateService.setToInactive(id);
    this.usersStateService.onSetToInactive.emit();
  }
}
