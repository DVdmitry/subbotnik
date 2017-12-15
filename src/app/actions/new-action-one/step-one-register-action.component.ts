import {Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Action} from '../action';
import {AppService} from '../../app-service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'step-one-register-action',
  templateUrl: 'step-one-register-action.html',
  styleUrls: ['step-one-register-action.css']
})

export class StepOneRegisterActionComponent implements OnInit {
  @ViewChild('citizenPhoto') citizenPhotoVariable: any;
  @ViewChild('companyLogo') companyLogoVariable: any;
  @ViewChild('placePicture') placePictVariable: any;
  @ViewChild('telField') telFieldVar: any;
  isLinear = false;
  correct = false;
  changeEventPlace = false;
  changeMeetingPlace = false;
  isCitizenName = false;
  isCompanyName = false;
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
  finishDate: any;
  // primeTel : any;
  startTime: any;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  // formConrols - formatting form
  eventName: any;
  exactDate: any;
  startInterval: any;
  finishInterval: any;
  citizenName: any;
  citizenPhoto: any;
  companyName: any;
  telNumberPrime: any;
  email: any;

  // flag for tel addition icon
  showIcon = false;
  showAddIcon = false;

  // flags for correction form
  isCitizenPhoto = false;
  isCompanyLogo = false;
  isPlacePicture = false;
  telNumberAdd1: number;
  telNumberAdd2: number;
  sitePrime: any;
  siteAdd1: any;
  siteAdd2: any;
  siteAdd3: any;
  siteAdd4: any;
  aboutEvent: any;
  personToContact: any;
  whatToDo: any;
  equipment: any;
  smthElse: any;

  constructor(private service: AppService, private _formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.service.getAction().then(response => this.userAction = response);

    this.eventName = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.exactDate = new FormControl({value: '', disabled: true});
    this.startInterval = new FormControl({value: '', disabled: true});
    this.finishInterval = new FormControl({value: '', disabled: true});
    this.citizenName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]);
    this.companyName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]);
    this.telNumberPrime = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.basicInfoFormGroup = this._formBuilder.group({
      eventName: ['', Validators.compose([Validators.required,
        Validators.minLength(2)])],
      exactDate: [{value: '', disabled: true}, Validators.nullValidator],
      startTime: ['', Validators.compose([Validators.nullValidator])],
      finishTime: ['', Validators.nullValidator],
      eventStartInterval: [{value: '', disabled: true}, Validators.nullValidator],
      eventFinishInterval: [{value: '', disabled: true}, Validators.nullValidator],
      showInterval: false
    });
    this.citizenFormGroup = this._formBuilder.group({
      citizenName: ['', Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(40)])],
      citizenPhoto: [''],
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd1: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd2: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd3: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
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
      companyName: ['', Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(40)])],
      companyLogo: [''],
      telNumberPrime: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd1: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd2: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      telNumberAdd3: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      usersEmail: ['', Validators.compose([Validators.required, Validators.email])],
      sitePrime: ['', Validators.minLength(4)],
      siteAdd1: ['', Validators.minLength(4)],
      siteAdd2: ['', Validators.minLength(4)],
      siteAdd3: ['', Validators.minLength(4)],
      siteAdd4: ['', Validators.minLength(4)],
      personToContact: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
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
    if (this.showInterval) {
      this.userAction.exactDate = null;
      this.userAction.startTime = null;
      this.userAction.finishTime = null;
    }
    if (!this.showInterval) {
      this.userAction.startTime = post.startTime;
      this.userAction.finishTime = post.finishTime;
      this.userAction.eventStartInterval = null;
      this.userAction.eventFinishInterval = null;
    }
  }

  addFormDataCompany(post): void {
    this.userAction.companyName = post.companyName;
    this.userAction.telNumberPrime = post.telNumberPrime;
    this.userAction.telNumberAdd1 = this.tels[0];
    this.userAction.telNumberAdd2 = this.tels[1];
    this.userAction.usersEmail = post.usersEmail;
    this.userAction.sitePrime = post.sitePrime;
    this.userAction.siteAdd1 = post.siteAdd1;
    this.userAction.siteAdd2 = post.siteAdd2;
    this.userAction.siteAdd3 = post.siteAdd3;
    this.userAction.siteAdd4 = post.siteAdd4;
    this.userAction.aboutEvent = post.aboutEvent;
    this.userAction.personToContact = post.personToContact;
    this.telNumberAdd1 = this.userAction.telNumberAdd1;
    this.telNumberAdd2 = this.userAction.telNumberAdd2;
    this.sitePrime = this.userAction.sitePrime;
    this.siteAdd1 = this.userAction.siteAdd1;
    this.siteAdd2 = this.userAction.siteAdd2;
    this.siteAdd3 = this.userAction.siteAdd3;
    this.siteAdd4 = this.userAction.siteAdd4;
    this.aboutEvent = this.userAction.aboutEvent;
    this.personToContact = this.userAction.personToContact;
  }

  addFormDataCitizen(post): void {
    this.userAction.citizenName = post.citizenName;
    this.userAction.telNumberPrime = post.telNumberPrime;
    this.userAction.telNumberAdd1 = this.tels[0];
    this.userAction.telNumberAdd2 = this.tels[1];
    this.userAction.usersEmail = post.usersEmail;
    this.userAction.sitePrime  = post.sitePrime;
    this.userAction.siteAdd1 = post.siteAdd1;
    this.userAction.siteAdd2 = post.siteAdd2;
    this.userAction.siteAdd3 = post.siteAdd3;
    this.userAction.siteAdd4 = post.siteAdd4;
    this.userAction.aboutEvent = post.aboutEvent;
    this.telNumberAdd1 = this.userAction.telNumberAdd1;
    this.telNumberAdd2 = this.userAction.telNumberAdd2;
    this.sitePrime = this.userAction.sitePrime;
    this.siteAdd1 = this.userAction.siteAdd1;
    this.siteAdd2 = this.userAction.siteAdd2;
    this.siteAdd3 = this.userAction.siteAdd3;
    this.siteAdd4 = this.userAction.siteAdd4;
    this.aboutEvent = this.userAction.aboutEvent;
  }

  customInterval(): void {
    this.showInterval = this.showInterval ? false : true;
  }

  showTelIcon(data) {
    if (data.target.value.length === 9 && this.tels.length < 3) {
      this.showIcon = true;
    }
  }

  showAddTelIcon(data, index) {
    if (data.target.value.length === 9 && this.tels.length < 3) {
      this.showAddIcon = true;
      this.tels[index] = data.target.value;
    }
  }

  addTelField(data): void {
    if (data.length === 9) {
      this.tels.push(data);
   } else {
      this.tels.push(data.target.parentNode.parentNode.parentNode.parentNode.children[0].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.value);
    }
  }

  removeTelField(data, index) {
    this.tels.splice(index, 1);
    // data.target.parentNode.parentNode.parentNode.parentNode.children[index].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.value = null;
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
  };

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
    this.userAction.getToPlace = post.getToPlace;
    this.userAction.whatToDo = post.whatToDo;
    this.userAction.equipment = post.equipment;
    this.userAction.smthElse = post.smthElse;
    this.getToPlace = post.getToPlace;
    this.whatToDo = post.whatToDo;
    this.equipment = post.equipment;
    this.smthElse = post.smthElse;
    this.preview = true;
  }

  getEventLat(coordinates: any[]) {
    if (this.userAction !== undefined && coordinates !== undefined) {
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
    if (this.userAction.exactDate && this.userAction.startTime && !this.showInterval) {
      this.userAction.eventStartInterval = null;
      this.dateValidation = true;
    }
  }

  minInterval(date): void {
    this.incrementedEventStartInterval = new Date(+date.value + 86400000);
    this.userAction.eventStartInterval = date.value;
    this.userAction.eventFinishInterval = this.incrementedEventStartInterval;
    if (this.userAction.eventStartInterval && !this.userAction.startTime) {
      this.dateValidation = true;
    }
  }

  maxInterval(date): void {
    this.userAction.eventFinishInterval = date.value;
  }

  isCompanyFormDisable(data): void {
    this.isCitizenName = data.citizenName.length > 2 ? true : false;
  }

  isCitizenFormDisable(data): void {
    this.isCompanyName = data.companyName.length > 2 ? true : false;
  }

  getEmptyErrorMessage() {
    return this.eventName.hasError('required') ? 'Введите название акции' : '';
  }

  getCitizenErrorMessage() {
    return this.citizenName.hasError('required') ? 'Введите ваше имя' : '';
  }

  getCompanyErrorMessage() {
    return this.companyName.hasError('required') ? 'Введите название компании' : '';
  }

  getTelErrorMessage() {
    return this.telNumberPrime.hasError('required') ? 'Введите правильный номер' : '';
  }


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Введите ваш email' :
      this.email.hasError('email') ? 'Email должен содержать - @' :
        '';
  }

  setCitizenPhoto(file) {
    let errorMessage: any;
    let toolTipCitizen: any;
    if (file.target.files[0].type !== 'image/jpeg' && !document.querySelector('.errorMessage')) {
      errorMessage = document.createElement('p');
      errorMessage.innerHTML = 'Прикрепите файл с расширением jpeg/jpg';
      errorMessage.setAttribute('class', 'errorMessage');
      toolTipCitizen = document.querySelector('#toolTipCitizen');
      toolTipCitizen.appendChild(errorMessage);
      this.citizenPhotoVariable.nativeElement.value = '';
    }
    if (file.target.files[0].type !== 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.citizenPhotoVariable.nativeElement.value = '';
    }
    if (file.target.files[0].type === 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.userAction.citizenPhoto = file.target.files[0].name;
      this.isCitizenPhoto = true;
      errorMessage = document.querySelector('.errorMessage');
      errorMessage.className = errorMessage.className.replace('errorMessage', 'invisible');
    }
  }

  removeCitizenPhoto() {
    this.citizenPhotoVariable.nativeElement.value = '';
    this.userAction.citizenPhoto = null;
  }

  setCompanyLogo(file) {
    let errorMessage: any;
    let toolTipCompany: any;
    if (file.target.files[0].type !== 'image/jpeg' && !document.querySelector('.errorMessage')) {
      errorMessage = document.createElement('p');
      errorMessage.innerHTML = 'Прикрепите файл с расширением jpeg/jpg';
      errorMessage.setAttribute('class', 'errorMessage');
      toolTipCompany = document.querySelector('#toolTipCompany');
      toolTipCompany.appendChild(errorMessage);
      this.companyLogoVariable.nativeElement.value = '';
    }
    if (file.target.files[0].type !== 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.companyLogoVariable.nativeElement.value = '';
    }

    if (file.target.files[0].type === 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.userAction.companyLogo = file.target.files[0].name;
      this.isCompanyLogo = true;
      errorMessage = document.querySelector('.errorMessage');
      errorMessage.className = errorMessage.className.replace('errorMessage', 'invisible');
    }
  }

  removeCompanyLogo() {
    this.companyLogoVariable.nativeElement.value = '';
    this.userAction.companyLogo = null;
  }

  goPrevious(data) {
    data.preventDefault();
  }

  setPlacePicture(file) {
    let errorMessage: any;
    let toolTipPlacePict: any;
    if (file.target.files[0].type !== 'image/jpeg' && !document.querySelector('.errorMessage')) {
      errorMessage = document.createElement('p');
      errorMessage.innerHTML = 'Прикрепите файл с расширением jpeg/jpg';
      errorMessage.setAttribute('class', 'errorMessage');
      toolTipPlacePict = document.querySelector('#toolTipPlacePict');
      toolTipPlacePict.appendChild(errorMessage);
      this.placePictVariable.nativeElement.value = '';
    }
    if (file.target.files[0].type !== 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.placePictVariable.nativeElement.value = '';
    }

    if (file.target.files[0].type === 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      this.userAction.placePicture = file.target.files[0].name;
      this.isPlacePicture = true;
      errorMessage = document.querySelector('.errorMessage');
      errorMessage.className = errorMessage.className.replace('errorMessage', 'invisible');
    }
  }

  removePlacePicture() {
    this.placePictVariable.nativeElement.value = '';
    this.userAction.placePicture = null;
  }

  correctCitizenPhoto() {
    this.userAction.citizenPhoto = '';
  }

  correctCompanyLogo() {
    this.userAction.companyLogo = '';
  }

  correctPlacePicture() {
    this.userAction.placePicture = '';
  }

  removeInput(data) {
    data.target.parentNode.style.display = 'none';
  }

  getCrossIcon(data) {
    if (data.target.value.length === 0) {
      data.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].style.visibility = 'visible';
    }
  }
  finishDateChange(data, finishDate) {
    const incrTime = data.value.getTime() + 1000*60*60*24;
    this.finishDate = new Date();
    this.finishDate.setTime(data.value.getTime() + 1000*60*60*24);
    if (data.value > finishDate) {
      this.userAction.eventFinishInterval = this.finishDate;
    }
  }
}
