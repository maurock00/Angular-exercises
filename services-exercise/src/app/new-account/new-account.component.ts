import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(/*private logginService: LoggingService,*/ 
              private accountService: AccountsService){

    this.accountService.statusUpdated.subscribe( (status: string) => {
      alert('New status: ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.createAccount(accountName, accountStatus);
    //this.logginService.logStatusChange(accountStatus);
  }

}
