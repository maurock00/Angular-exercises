import { Component, OnInit } from '@angular/core';
import { UsersStateService } from './shared/users-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  activeUsers: string[]; 
  inactiveUsers: string[];

  constructor(private usersStateService: UsersStateService){ 

  }

  ngOnInit(){ 
    this.activeUsers = this.usersStateService.activeUsers;
    this.inactiveUsers = this.usersStateService.inactiveUsers;
  }
}
