import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  // template: `<p>xyz works dentrol del componente!</p>`,
  styleUrls: ['./xyz.component.css'],
  // styles: ['']
})
export class XyzComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Se inicio componente');
  }

  ngOnDestroy(): void {
    console.log('Se destruyo componente');
  }

}
