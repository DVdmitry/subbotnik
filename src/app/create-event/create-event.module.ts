import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateEventComponent} from './create-event.component';
import {CreateEventBasicComponent} from './components/create-event-basic/create-event-basic.component';
import {CreateEventContactComponent} from './components/create-event-contact/create-event-contact.component';
import {CreateEventAdditionalComponent} from './components/create-event-additional/create-event-additional.component';
import {CreateEventEditComponent} from './components/create-event-edit/create-event-edit.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: CreateEventComponent,
      children: [{
        path: '',
        pathMatch: 'full',
        component: CreateEventBasicComponent,
      }, {
        path: 'contact',
        component: CreateEventContactComponent,
      }, {
        path: 'additional',
        component: CreateEventAdditionalComponent,
      }, {
        path: 'edit',
        component: CreateEventEditComponent,
      }],
    }])
  ],
  declarations: [
    CreateEventComponent,
    CreateEventBasicComponent,
    CreateEventContactComponent,
    CreateEventAdditionalComponent,
    CreateEventEditComponent,
  ]
})
export class CreateEventModule {
}
