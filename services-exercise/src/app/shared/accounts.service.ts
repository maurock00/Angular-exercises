import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  createAccount(accName: string, accStatus: string) { 
    this.accounts.push( { name: accName, status: accStatus});
    this.loggingService.logStatusChange(accStatus);
  }

  changeAccountStatus(id: number, accStatus: string){
    this.accounts[id].status = accStatus;
    this.loggingService.logStatusChange(accStatus);
  }

}
