import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  // template: `<p>xyz works dentrol del componente!</p>`,
  styleUrls: ['./xyz.component.css'],
  // styles: ['']
})
export class XyzComponent implements OnInit, OnDestroy {

  name = 'Galaxy Training';

  imagen = 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg';

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
