import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private evenNumbers: number[] = []; 
  private oddNumbers: number[] = []; 

  onGameStart(dataFromEvent: {counter: number}) { 
    if( dataFromEvent.counter % 2 == 0 )
      this.evenNumbers.unshift(dataFromEvent.counter); 
    else
      this.oddNumbers.unshift(dataFromEvent.counter); 
  }

  onGameStop() {

  }

  onClean() { 
    this.evenNumbers = []; 
    this.oddNumbers = []; 
  }

}
