import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-special',
  templateUrl: './button-special.component.html',
  styleUrls: ['./button-special.component.css']
})
export class ButtonSpecialComponent implements OnInit {

  @Input() name: string = 'Defecto';

  edad = 50;

  @Output() special = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seHizoClick(): void {
    this.special.emit(this.edad);
  }

}
