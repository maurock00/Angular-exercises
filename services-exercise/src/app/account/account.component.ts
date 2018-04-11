import { Component, Input  } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( /*private loggingService: LoggingService*/, 
              private accountService: AccountsService) {
    
  }

  onSetTo(status: string) {
    this.accountService.changeAccountStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
    //this.loggingService.logStatusChange('A server status changed, new status: ' + status);
  }
}
