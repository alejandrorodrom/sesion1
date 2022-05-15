import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  // template: `<p>xyz works dentrol del componente!</p>`,
  styleUrls: ['./xyz.component.css'],
  // styles: ['']
})
export class XyzComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Se inicio componente');
  }

  ngOnDestroy(): void {
    console.log('Se destruyo componente');
  }

  goPage2(): void {
    this.router.navigateByUrl('componente2');
  }

}
