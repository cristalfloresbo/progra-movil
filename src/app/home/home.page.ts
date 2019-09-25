import { Component } from '@angular/core';
import { AppConstantsService } from '../services/app-constants.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private appConstantsService : AppConstantsService) {}

}
