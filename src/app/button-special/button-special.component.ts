import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-special',
  templateUrl: './button-special.component.html',
  styleUrls: ['./button-special.component.css']
})
export class ButtonSpecialComponent implements OnInit {

  name: string = 'Defecto';

  constructor() { }

  ngOnInit(): void {
  }

}
