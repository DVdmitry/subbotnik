import { Component, OnInit } from '@angular/core';
import { AppService} from '../app-service';
import { NavLinks} from './nav-links';

@Component({
  selector: 'app-nav-links',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent implements OnInit {
  links: NavLinks[];
  constructor (private service: AppService) {}
  ngOnInit(): void {
    this.getLinks();
  }
  getLinks(): void {
     this.service.getLinks().then(resp => this.links = resp);
  }
}
