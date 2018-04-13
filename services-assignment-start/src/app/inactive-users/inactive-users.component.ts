import { Component, EventEmitter, OnInit } from '@angular/core';
import { UsersStateService } from '../shared/users-state.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersStateService: UsersStateService){

  }

  ngOnInit(){
    this.users = this.usersStateService.inactiveUsers;
    this.usersStateService.onSetToInactive.subscribe( (id: number) => { 
        this.usersStateService.inactiveUsers.push(this.usersStateService.activeUsers[id]);
    })
  }

  setToActive(id: number) {
    this.usersStateService.onSetToActive.emit(id);
    this.users.splice(id, 1);
  }
}
