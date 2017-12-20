import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-additional',
  templateUrl: './create-event-additional.component.html',
  styleUrls: ['./create-event-additional.component.css']
})
export class CreateEventAdditionalComponent implements OnInit {

  basicInfoConfig: any;

  constructor(createEventComponent: CreateEventComponent) {
    this.basicInfoConfig = createEventComponent.basicInfoConfig;

  ngOnInit() {
  }

}
