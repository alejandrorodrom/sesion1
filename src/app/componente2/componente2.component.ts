import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit, OnDestroy {

  nombre = 'Alejandro Rodriguez';

  constructor(
    private logService: LogsService
  ) { }

  ngOnInit(): void {
    console.log('Se inicio componente 2')
  }

  ngOnDestroy(): void {
    console.log('Se destruye componente 2');
  }

  imprimir(evento: number): void {
    console.log(evento);
  }

  emitirLog(): void {
    this.logService.saveLogs('LOG: SE EJECUTO CORRECTAMENTE');
  }

  mostrar(): void {
    this.logService.showLogs();
  }

}
