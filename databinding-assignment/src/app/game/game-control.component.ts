import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<{counter: number}>(); 
  @Output() cleanBoard = new EventEmitter(); 
  private ref;  

  constructor() { }

  ngOnInit() {
  }

  onStartGame() { 
    var aux = 0 ;
    this.ref = setInterval( () => { 
      this.startGame.emit({ counter: aux }); 
      aux++; 
    }, 1000)
  }

  onStopGame() { 
    clearInterval(this.ref);   
  }

  onCleanBoard(){ 
    this.cleanBoard.emit(); 
  }

}
