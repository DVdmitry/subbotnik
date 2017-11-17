import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MAT_DATE_LOCALE,
  MatNativeDateModule, MatTooltipModule, MatStepperModule,
  MatSelectModule, MatExpansionModule, MatTabsModule,
  MatCheckboxModule, MatSliderModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppService } from './app-service';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { StepOneRegisterActionComponent } from './actions/new-action-one/step-one-register-action.component';
import { MakeActionComponent } from './actions/make-action/make-action.component';
import { MapComponent } from './shared/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StepOneRegisterActionComponent,
    MakeActionComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSliderModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBj42L1LGSA875C7wVr9p_Yta2TJeCHKY8',
      libraries: ['places']
    }),
    RouterModule.forRoot([
      {
        path: 'main',
        component: MakeActionComponent
      },
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main/create-event-page',
        component: StepOneRegisterActionComponent
      },
    ])
  ],
  providers: [AppService, { provide: LOCALE_ID, useValue: 'ru' },
    {provide: MAT_DATE_LOCALE, useValue: 'ru-EN'},
    MapComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

