import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  basicInfoConfig: any;
  contactInfoConfig: any;
  additionalInfoConfig: any;
  editInfoConfig: any;

  constructor() {
    this.editInfoConfig = Object.assing({}, this.basicInfoConfig, this.contactInfoConfig, this.additionalInfoConfig);
  }

  ngOnInit() {
  }

}
