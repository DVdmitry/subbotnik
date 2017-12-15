import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.css']
})
export class PublishEventComponent implements OnInit {
  emptyPage = 'ну чо вы тискаете? мы ещё ничего не придумали :(';
  references = [
    {name: 'Перейти на страницу акции', ref: '/publish-event-page'},
    {name: 'Поделиться акцией', ref: '/publish-event-page'},
    {name: 'Вернуться на главную страницу', ref: '/main'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
