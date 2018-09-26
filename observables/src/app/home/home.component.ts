import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const intNumbers = Observable.interval(1000);
    // intNumbers.subscribe( (number: number) => {
    //   console.log(number); 
    // });

    const myObs = Observable.create((observer: Observer<string>) => { 
      setTimeout(
        () => { 
          observer.next('First package');
        },2000); 
      setTimeout(
        () => { 
          observer.next('Second package');
        },4000); 
      setTimeout(
        () => { 
          observer.error('Error ocurred');
        },5000); 
    }); 

    myObs.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); }, 
      () => { console.log('Completed'); }
    );
  }

}
