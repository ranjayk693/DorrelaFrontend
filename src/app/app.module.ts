import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialCompunent } from './Pages/rental/materail.module';

// Pages
import { RentalComponent } from './Pages/rental/rental.component';
import { ModelComponent } from './Pages/model/model.component';
import { RentalLandingPageComponent } from './Pages/rental-landing-page/rental-landing-page.component';

@NgModule({
  declarations: [AppComponent, RentalComponent, ModelComponent, RentalLandingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialCompunent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
