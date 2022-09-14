import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() IncrementStarted = new EventEmitter<{number: Timer}>();
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startIncrement() {
     this.IncrementStarted.emit(   
      setInterval(()=>{
      this.number+=1;
   }, 1000))
  }

  stopIncrement() {
  clearInterval(()=>{

  })
  }

}
