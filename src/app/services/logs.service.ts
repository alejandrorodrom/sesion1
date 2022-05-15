import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  data: string[] = [];

  constructor() { }

  saveLogs(log: string): void {
    console.log(log);
    this.data.push(log);
  }

  showLogs(): void {
    console.log(this.data);
  }
}
