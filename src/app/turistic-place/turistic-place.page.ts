import { Component, OnInit } from '@angular/core';
import { TuristicPlaceServiceService } from '../services/turistic-place-service.service';

@Component({
  selector: 'app-turistic-place',
  templateUrl: './turistic-place.page.html',
  styleUrls: ['./turistic-place.page.scss'],
})
export class TuristicPlacePage implements OnInit {

  places;

  constructor(private touristicPlaceService : TuristicPlaceServiceService) { }

  ngOnInit() {
    this.touristicPlaceService.getAllTouristicPlaces().subscribe(
      data => {
        this.places = data.map( response => response.payload.doc.data());
      }
    );
  }

}
