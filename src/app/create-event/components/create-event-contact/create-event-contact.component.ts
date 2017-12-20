import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-contact',
  templateUrl: './create-event-contact.component.html',
  styleUrls: ['./create-event-contact.component.css']
})
export class CreateEventContactComponent implements OnInit {

  basicInfoConfig: any;

  constructor(createEventComponent: CreateEventComponent) {
    this.basicInfoConfig = createEventComponent.basicInfoConfig;

  ngOnInit() {
  }

}
