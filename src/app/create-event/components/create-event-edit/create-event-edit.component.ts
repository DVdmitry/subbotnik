import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-edit',
  templateUrl: './create-event-edit.component.html',
  styleUrls: ['./create-event-edit.component.css']
})
export class CreateEventEditComponent implements OnInit {

  basicInfoConfig: any;

  constructor(createEventComponent: CreateEventComponent) {
    this.basicInfoConfig = createEventComponent.basicInfoConfig;

  ngOnInit() {
  }

}
