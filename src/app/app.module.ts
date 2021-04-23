import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

//NGX
import {NgxPaginationModule} from 'ngx-pagination';

//COMPONENTS
import { HeaderComponent } from './static/header/header.component';
import { AppComponent } from './app.component';
import { OfferComponent } from './dinamic/offer/offer.component';
import { CharacteristicsComponent } from './dinamic/characteristics/characteristics.component';
import { PricesComponent } from './dinamic/prices/prices.component';
import { DetailsComponent } from './static/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
