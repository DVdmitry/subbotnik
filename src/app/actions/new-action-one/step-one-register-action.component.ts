import {Component, OnInit} from '@angular/core';
// import { Action} from '../action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'step-one-register-action',
  templateUrl: 'step-one-register-action.html',
  styleUrls: ['step-one-register-action.css']
})

export class StepOneRegisterActionComponent implements OnInit {
  isLinear = false;
  basicInfoFormGroup: FormGroup;
  eventName = '';
  exactDate = '';
  startTime = '';
  finishTime = '';
  eventStartInterval: any;
  eventFinishInterval = '';
  showInterval = false;
  minDate = new Date();
  maxDate = new Date(+this.minDate + 31536000000);
  citizenFormGroup: FormGroup;
  citizenName: string;
  tels: any = [];
  sites: any = [];
  companyFormGroup: FormGroup;
  companyName: string;
  telNumberPrime: number;
  telNumberAdd1: string;
  telNumberAdd2: string;
  usersEmail: string;
  sitePrime: string;
  siteAdd1: string;
  siteAdd2: string;
  siteAdd3: string;
  siteAdd4: string;
  aboutEvent: string;
  personToContact: string;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // this.service.getAction().then(response => this.userAction = response);
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
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  addPost(post): void {
    this.eventName = post.eventName;
    this.exactDate = post.exactDate;
    this.startTime = post.startTime;
    this.finishTime = post.finishTime;
    this.eventStartInterval = post.eventStartInterval;
    this.eventFinishInterval = post.eventFinishInterval;
    console.log(post);
  }
  addFormDataCompany(post): void {
    this.companyName = post.companyName;
    this.telNumberPrime = post.telNumberPrime;
    this.telNumberAdd1 = post.telNumberAdd1;
    this.telNumberAdd2 = post.telNumberAdd2;
    this.usersEmail = post.usersEmail;
    this.sitePrime = post.sitePrime;
    this.siteAdd1 = post.siteAdd1;
    this.siteAdd2 = post.siteAdd2;
    this.siteAdd3 = post.siteAdd3;
    this.siteAdd4 = post.siteAdd4;
    this.aboutEvent = post.aboutEvent;
    this.personToContact = post.personToContact;
    console.log(post);
  }

  addFormDataCitizen(post): void {
    this.citizenName = post.citizenName;
    this.telNumberPrime = post.telNumberPrime;
    this.telNumberAdd1 = post.telNumberAdd1;
    this.telNumberAdd2 = post.telNumberAdd2;
    this.usersEmail = post.usersEmail;
    this.sitePrime = post.sitePrime;
    this.siteAdd1 = post.siteAdd1;
    this.siteAdd2 = post.siteAdd2;
    this.siteAdd3 = post.siteAdd3;
    this.siteAdd4 = post.siteAdd4;
    this.aboutEvent = post.aboutEvent;
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
    this.eventStartInterval = new Date(+date.eventStartInterval + 86400000);
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
}
