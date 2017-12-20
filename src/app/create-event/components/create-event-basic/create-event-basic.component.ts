import { Component, OnInit } from '@angular/core';
import {CreateEventComponent} from '../../create-event.component';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-event-basic',
  templateUrl: './create-event-basic.component.html',
  styleUrls: ['./create-event-basic.component.css']
})
export class CreateEventBasicComponent implements OnInit {
  formGroup: FormGroup;

  constructor(createEventComponent: CreateEventComponent, formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(createEventComponent.basicInfoConfig);
  }

  ngOnInit() {
  }

}
