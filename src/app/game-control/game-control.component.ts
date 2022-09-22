import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncremented = new EventEmitter<{number: number}>();
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  startIncrement() {
    setInterval(()=>{
      this.number += 1;
      this.numberIncremented.emit({number: this.number})
    }, 1000);
  }

}
