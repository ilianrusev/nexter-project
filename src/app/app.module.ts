import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RealtorsComponent } from './components/realtors/realtors.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomesComponent } from './components/homes/homes.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent, HeaderComponent, RealtorsComponent, FeaturesComponent, HomesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
