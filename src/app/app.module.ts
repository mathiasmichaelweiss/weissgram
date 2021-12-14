import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './views/profile-page/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, ProfilePageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
