import {Component, OnInit} from '@angular/core';
import {ElementRef, NgZone, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public place: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public types: string [];
  public mapView = 'roadMap';

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      //   types: ["address"]
      // });
      // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: this.types || [],
        componentRestrictions: {country: 'BY'}
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  markerMoved(e) { const geocoder = new google.maps.Geocoder();
  geocoder.geocode({'location': e.coords}, (res, status) => {
    if (status === google.maps.GeocoderStatus.OK && res.length) {
      this.ngZone.run(() => this.setLocation(res[0])); } });
  }
  setLocation(place) {
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
  }

  switchMapView(value): void {
    this.mapView = value;
  }
}

