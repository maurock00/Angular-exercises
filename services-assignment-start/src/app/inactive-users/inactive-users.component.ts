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
  }

  setToActive(id: number) {
    this.usersStateService.setToActive(id);
    this.usersStateService.onSetToActive.emit();
  }
}
