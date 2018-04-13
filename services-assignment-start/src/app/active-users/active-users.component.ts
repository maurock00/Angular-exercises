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
    this.usersStateService.onSetToActive.subscribe( (id: number) => { 
      this.usersStateService.activeUsers.push(this.usersStateService.inactiveUsers[id]);
    }); 
  }

  setToInactive(id: number) {
    this.usersStateService.onSetToInactive.emit(id);
    this.users.splice(id, 1);
  }
}
