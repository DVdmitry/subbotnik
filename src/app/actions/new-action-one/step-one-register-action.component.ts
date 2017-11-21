import {Component, OnInit} from '@angular/core';
import {Action} from '../action';
import {AppService} from '../../app-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ElementRef, NgZone, ViewChild} from '@angular/core';

import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'step-one-register-action',
  templateUrl: 'step-one-register-action.html',
  styleUrls: ['step-one-register-action.css']
})

export class StepOneRegisterActionComponent implements OnInit {
  isLinear = false;
  correct = false;
  changeEventPlace = false;
  changeMeetingPlace = false;
  citizenName: string;
  dateValidation = false;
  incrementedEventStartInterval: any;
  basicInfoFormGroup: FormGroup;
  userAction: Action;
  meetingLatitude = false;
  eventLatitude = false;
  placePict: string;
  eventCoordinates: any[] = [];
  meetingCoordinates: any[] = [];
  addressTest: string[] = [];
  getToPlace: string;
  showInterval = false;
  minDate = new Date();
  maxDate = new Date(+this.minDate + 31536000000);
  citizenFormGroup: FormGroup;
  companyFormGroup: FormGroup;
  eventDetailFormGroup: FormGroup;
  tels: any = [];
  sites: any = [];
  max = 100;
  min = 0;
  step = 1;
  minValue = 0;
  maxValue = 0;
  minThumbLabel = true;
  maxThumbLabel = true;
  preview = false;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private service: AppService, private _formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.service.getAction().then(response => this.userAction = response);
    this.basicInfoFormGroup = this._formBuilder.group({
      eventName: ['', Validators.compose([Validators.required,
        Validators.minLength(2)])],
      exactDate: [{value:'', disabled: true}, Validators.nullValidator],
      startTime: ['', Validators.nullValidator],
      finishTime: ['', Validators.nullValidator],
      eventStartInterval: [{value:'', disabled: true}, Validators.nullValidator],
      eventFinishInterval: [{value:'', disabled: true}, Validators.nullValidator],
      showInterval: false
    });
    this.citizenFormGroup = this._formBuilder.group({
      citizenName: ['', Validators.compose([Validators.required, Validators.minLength(5),
        Validators.maxLength(40)])],
      citizenPhoto: [''],
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd2: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd3: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      usersEmail: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5),
        Validators.maxLength(35)])],
      sitePrime: ['', Validators.minLength(4)],
      siteAdd1: ['', Validators.minLength(4)],
      siteAdd2: ['', Validators.minLength(4)],
      siteAdd3: ['', Validators.minLength(4)],
      siteAdd4: ['', Validators.minLength(4)],
      aboutEvent: ['', Validators.maxLength(700)],
    });
    this.companyFormGroup = this._formBuilder.group({
      companyName: ['', Validators.compose([Validators.required, Validators.minLength(5),
        Validators.maxLength(40)])],
      companyLogo: [''],
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd2: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      telNumberAdd3: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
      usersEmail: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5),
        Validators.maxLength(35)])],
      sitePrime: ['', Validators.minLength(4)],
      siteAdd1: ['', Validators.minLength(4)],
      siteAdd2: ['', Validators.minLength(4)],
      siteAdd3: ['', Validators.minLength(4)],
      siteAdd4: ['', Validators.minLength(4)],
      personToContact: ['', Validators.minLength(4)],
      aboutEvent: ['', Validators.maxLength(700)],
    });
    this.eventDetailFormGroup = this._formBuilder.group({
      getToPlace: [''],
      whatToDo: [''],
      equipment: [''],
      smthElse: [''],
      placePicture: ['']
    });

  }

  addBasicInfo(post): void {
    this.userAction.eventName = post.eventName;
    if (this.userAction.exactDate && post.startTime) {
      // this.userAction.exactDate = post.exactDate;
      this.userAction.startTime = post.startTime;
      this.userAction.finishTime = post.finishTime;
      this.userAction.eventStartInterval = null;
      this.userAction.eventFinishInterval = null;
    } else {
      this.userAction.exactDate = null;
      this.userAction.startTime = null;
      this.userAction.finishTime = null;
      // this.userAction.eventStartInterval = post.eventStartInterval;
      // this.userAction.eventFinishInterval = post.eventFinishInterval;
    }
  }

  addFormDataCompany(post): void {
    this.userAction.companyName = post.companyName;
    this.userAction.companyLogo = post.companyLogo;
    this.userAction.telNumberPrime = post.telNumberPrime;
    this.userAction.telNumberAdd1 = post.telNumberAdd1;
    this.userAction.telNumberAdd2 = post.telNumberAdd2;
    this.userAction.usersEmail = post.usersEmail;
    this.userAction.sitePrime = post.sitePrime;
    this.userAction.siteAdd1 = post.siteAdd1;
    this.userAction.siteAdd2 = post.siteAdd2;
    this.userAction.siteAdd3 = post.siteAdd3;
    this.userAction.siteAdd4 = post.siteAdd4;
    this.userAction.aboutEvent = post.aboutEvent;
    this.userAction.personToContact = post.personToContact;
  }

  addFormDataCitizen(post): void {
    this.userAction.citizenName = post.citizenName;
    this.userAction.telNumberPrime = post.telNumberPrime;
    this.userAction.telNumberAdd1 = post.telNumberAdd1;
    this.userAction.telNumberAdd2 = post.telNumberAdd2;
    this.userAction.usersEmail = post.usersEmail;
    this.userAction.sitePrime = post.sitePrime;
    this.userAction.siteAdd1 = post.siteAdd1;
    this.userAction.siteAdd2 = post.siteAdd2;
    this.userAction.siteAdd3 = post.siteAdd3;
    this.userAction.siteAdd4 = post.siteAdd4;
    this.userAction.aboutEvent = post.aboutEvent;
  }

  customInterval(): void {
    this.showInterval = this.showInterval ? false : true;
  }

  addTelField(data): void {
    if (this.tels.length < 3) {
      this.tels = [];
      this.tels.push(data.telNumberPrime);
      if (data.telNumberAdd1) {
        this.tels.push(data.telNumberAdd1);
      }
      if (data.telNumberAdd2) {
        this.tels.push(data.telNumberAdd2);
      }
    }
  }

  addSiteField(data): void {
    if (this.sites.length < 5) {
      this.sites = [];
      this.sites.push(data.sitePrime);
      if (data.siteAdd1) {
        this.sites.push(data.telSiteAdd1);
      }
      if (data.siteAdd2) {
        this.sites.push(data.telSiteAdd2);
      }
      if (data.siteAdd3) {
        this.sites.push(data.telSiteAdd2);
      }
      if (data.siteAdd4) {
        this.sites.push(data.telSiteAdd2);
      }
    }
  }

  getMinPeople(data): void {
    if (!this.userAction.maxPeople) {
      this.minThumbLabel = true;
      this.userAction.minPeople = data.value;
      this.minValue = data.value;
      this.userAction.maxPeople = data.value + 1;
      this.maxValue = this.userAction.maxPeople;
    }
    if (data.value < this.userAction.maxPeople) {
      this.minThumbLabel = true;
      this.userAction.minPeople = data.value;
      this.minValue = data.value;
      // this.userAction.maxPeople = data.value + 1;
    }
    if (this.userAction.maxPeople && data.value > this.userAction.maxPeople) {
      this.minValue = this.userAction.maxPeople - 1;
      this.userAction.minPeople = this.minValue;
      this.minThumbLabel = false;
    }
  }
  getMaxPeople(data): void {
    if (this.userAction.minPeople && data.value < this.userAction.minPeople) {
      this.maxThumbLabel = false;
      this.userAction.maxPeople = this.userAction.minPeople + 1;
    } else {
      this.maxThumbLabel = true;
      this.userAction.maxPeople = data.value;
    }
  }
  addFormDataDetails(post): void {
    this.userAction.placePicture = post.placePicture;
    this.userAction.getToPlace = post.getToPlace;
    this.userAction.whatToDo = post.whatToDo;
    this.userAction.equipment = post.equipment;
    this.userAction.smthElse = post.smthElse;
    this.getToPlace = post.getToPlace;
    this.preview = true;
  }
  getEventLat(coordinates: any[]) {
    if (this.userAction !== undefined && coordinates !== undefined ) {
      this.eventCoordinates = coordinates;
      this.addressTest.length = 0;
      this.userAction.addressLatitude = coordinates[0];
      this.eventLatitude = true;
      this.userAction.addressLongitude = coordinates[1];
      coordinates[2].address_components.forEach(address =>
        this.addressTest.unshift(address.long_name)
      );
      this.userAction.addressOfEvent = this.addressTest.join();
    }
  }
  getMeetingLat(coordinates: any[]) {
    if (this.userAction !== undefined && coordinates !== undefined && coordinates[2].length !== 0) {
      this.meetingCoordinates = coordinates;
      this.addressTest.length = 0;
      this.userAction.meetingPlaceLatitude = coordinates[0];
      this.meetingLatitude = true;
      this.userAction.meetingPlaceLongitude = coordinates[1];
      coordinates[2].address_components.forEach(address =>
        this.addressTest.unshift(address.long_name)
      );
      this.userAction.meetingPlace = this.addressTest.join();
    }
  }
  correction(): void {
    this.preview = false;
    this.correct = true;
  }
  goPreview(): void {
    this.preview = true;
    this.correct = false;
  }
  addExactDate(date) {
    this.userAction.exactDate = date.value;
  }
  addStartTime(time) {
    this.userAction.startTime = time.timeStamp;
    if (this.userAction.exactDate && this.userAction.startTime) {
      this.userAction.eventStartInterval = null;
      this.dateValidation = true;
    }
  }
  minInterval(date): void {
    console.log(date.value);
    this.incrementedEventStartInterval = new Date(+date.value + 86400000);
    this.userAction.eventStartInterval = date.value;
    if (this.userAction.eventStartInterval && !this.userAction.startTime) {
      this.dateValidation = true;
    }
  }
  maxInterval(date): void {
    this.userAction.eventFinishInterval = date.value;
  }
}
