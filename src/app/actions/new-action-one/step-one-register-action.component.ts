import { Component, OnInit } from '@angular/core';
import { Action} from '../action';
import { AppService } from '../../app-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'step-one-register-action',
  templateUrl: 'step-one-register-action.html',
  styleUrls: ['step-one-register-action.css']
})

export class StepOneRegisterActionComponent implements OnInit {
  userAction: Action;
  isLinear = false;
  firstFormGroup: FormGroup;
  eventName = '';
  exactDate = '';
  startTime = '';
  finishTime = '';
  eventStartInterval = '';
  eventFinishInterval = '';
  showInterval = false;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor (private service: AppService, private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.service.getAction().then(response => this.userAction = response);
    this.firstFormGroup = this._formBuilder.group({
      eventName: ['', Validators.compose([Validators.required,
        Validators.minLength(2)])],
      exactDate: [null, Validators.nullValidator],
      startTime: [null, Validators.nullValidator],
      finishTime: [null, Validators.nullValidator],
      eventStartInterval: [null, Validators.nullValidator],
      eventFinishInterval: [null, Validators.nullValidator],
      showInterval: false
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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

  }
  customInterval(): void {
    if (!this.showInterval) {
      this.showInterval = true;
    } else {
      this.showInterval = false;
    }
  }

}
