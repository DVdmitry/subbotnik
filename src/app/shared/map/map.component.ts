import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {ElementRef, NgZone, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() placeOfEvent: any[];
  @Input() placeOfMeeting: any[];
  @Output() getEventLat = new EventEmitter<any[]>();
  @Output() getMeetingLat = new EventEmitter<any[]>();
  public place: string;
  public latitude: number;
  public longitude: number;
  public coordinates: any[] = [];
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
      this.latitude = 53.9095161;
      this.longitude = 27.54966079999997;

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
            this.coordinates[0] = this.latitude;
            this.coordinates[1] = this.longitude;
            this.coordinates[2] = place;
            this.eventLat(this.coordinates);
            this.meetingLat(this.coordinates);
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
        this.coordinates[0] = this.latitude;
        this.coordinates[1] = this.longitude;
        this.coordinates[2] = this.place;
        this.eventLat(this.coordinates);
        this.meetingLat(this.coordinates);
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
    this.coordinates[0] = this.latitude;
    this.coordinates[1] = this.longitude;
    this.coordinates[2] = this.place;
    this.eventLat(this.coordinates);
    this.meetingLat(this.coordinates);
  }

  switchMapView(value, data): void {
    data.preventDefault();
    this.mapView = value;
  }

  eventLat(data: any[]) {
    this.getEventLat.emit(data);
  }
  meetingLat(data: any[]) {
    this.getMeetingLat.emit(data);
  }
  preventEnter(data: any) {
    if (data.key === 'Enter') {
      data.preventDefault();
    };
  }
}
