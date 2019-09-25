import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  readonly appName = "Kochala Destiny";
  readonly serverUrl = "localhost:8080";

  constructor() { }
}
