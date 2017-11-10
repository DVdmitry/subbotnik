import {Component, OnInit} from '@angular/core';
import { Action} from '../action';
import { AppService } from '../../app-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'step-one-register-action',
  templateUrl: 'step-one-register-action.html',
  styleUrls: ['step-one-register-action.css']
})

export class StepOneRegisterActionComponent implements OnInit {
  isLinear = false;
  basicInfoFormGroup: FormGroup;
  userAction: Action;
  addressOfEventValidation: number;
  addressOfMeetingValidation: number;
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
  value = 0;
  thumbLabel = true;

  constructor(private service: AppService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.service.getAction().then(response => this.userAction = response);
    this.basicInfoFormGroup = this._formBuilder.group({
      eventName: ['', Validators.compose([Validators.required,
        Validators.minLength(2)])],
      exactDate: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      startTime: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      finishTime: ['', Validators.nullValidator],
      showInterval: false
    });
    this.citizenFormGroup = this._formBuilder.group({
      citizenName: ['', Validators.compose([Validators.required, Validators.minLength(5),
        Validators.maxLength(40)])],
      citizenPhoto: [''],
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      telNumberAdd1: ['', Validators.min(5)],
      telNumberAdd2: ['', Validators.min(5)],
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
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      telNumberAdd1: ['', Validators.min(5)],
      telNumberAdd2: ['', Validators.min(5)],
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
      // placePicture: [''],
      getToPlace: [''],
      whatToDo: [''],
      equipment: [''],
      smthElse: ['']
    });
  }

  addPost(post): void {
    this.userAction.eventName = post.eventName;
    this.userAction.citizenPhoto = post.citizenPhoto;
    this.userAction.exactDate = post.exactDate;
    this.userAction.startTime = post.startTime;
    this.userAction.finishTime = post.finishTime;
    this.userAction.eventStartInterval = post.eventStartInterval;
    this.userAction.eventFinishInterval = post.eventFinishInterval;
    console.log(post);
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
    console.log(post);
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
    console.log(post);
  }

  customInterval(): void {
    if (!this.showInterval) {
      this.showInterval = true;
      this.basicInfoFormGroup = this._formBuilder.group({
        eventName: ['', Validators.compose([Validators.required,
          Validators.minLength(2)])],
        eventStartInterval: ['', Validators.compose([Validators.required, Validators.nullValidator])],
        eventFinishInterval: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      });
    } else {
      this.showInterval = false;
      this.basicInfoFormGroup = this._formBuilder.group({
        eventName: ['', Validators.compose([Validators.required,
          Validators.minLength(4)])],
        exactDate: ['', Validators.compose([Validators.required, Validators.nullValidator])],
        startTime: ['', Validators.compose([Validators.required, Validators.nullValidator])],
        finishTime: ['', Validators.nullValidator],
        showInterval: false
      });
    }
  }

  minInterval(date): void {
    this.userAction.eventStartInterval = new Date(+date.eventStartInterval + 86400000);
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
    this.userAction.minPeople = data.value;
  }
  getMaxPeople(data): void {
    this.userAction.maxPeople = data.value;
  }
  addFormDataDetails(post): void {
    this.userAction.placePicture = post.placePicture;
    this.userAction.getToPlace = post.getToPlace;
    this.userAction.whatToDo = post.whatToDo;
    this.userAction.equipment = post.equipment;
    this.userAction.smthElse = post.smthElse;
    console.log(post);
  }

  getEventAddress(data): void {
    this.userAction.addressOfEvent = data.target.value;
    if (this.userAction.addressOfEvent) {
      this.addressOfEventValidation = 1;
    }
    console.log(data);
  }
  getMeetingAddress(data): void {
    this.userAction.meetingPlace = data.target.value;
    if (this.userAction.meetingPlace) {
      this.addressOfMeetingValidation = 1;
    }
    console.log(data);
  }
}
