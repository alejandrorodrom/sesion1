import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Se inicio componente 2')
  }

  ngOnDestroy(): void {
    console.log('Se inicio componente 3');
  }

}
