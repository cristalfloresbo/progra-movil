import { Component, OnInit } from '@angular/core';
import { TuristicPlaceServiceService } from '../services/turistic-place-service.service';

@Component({
  selector: 'app-places',
  templateUrl: 'places.page.html',
  styleUrls: ['places.page.scss']
})
export class PlacesPage implements OnInit {
  places = [];

  constructor(private touristicPlaceService : TuristicPlaceServiceService) { }

  ngOnInit() {
    this.touristicPlaceService.getAllTouristicPlaces().subscribe(
      data => {
        this.places = data.map( response => response.payload.doc.data());
      }
    );
    }
}
