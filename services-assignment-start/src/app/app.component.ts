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
  activeToInactiveCounter: number;
  inactiveToActiveCounter: number;

  constructor(private usersStateService: UsersStateService){ 

  }

  ngOnInit(){ 
    this.activeUsers = this.usersStateService.activeUsers;
    this.inactiveUsers = this.usersStateService.inactiveUsers;
    this.activeToInactiveCounter = this.usersStateService.activeToInactiveCounter;
    this.inactiveToActiveCounter = this.usersStateService.inactiveToActiveCounter;

    this.usersStateService.onSetToActive.subscribe( () =>{ 
      this.inactiveToActiveCounter++;
    })

    this.usersStateService.onSetToInactive.subscribe( () =>{ 
      this.activeToInactiveCounter++;
    })

  }
}
