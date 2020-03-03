import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanetsService } from './shared/services/planets.service';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
