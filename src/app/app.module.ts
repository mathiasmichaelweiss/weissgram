import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './views/profile-page/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';

@NgModule({
  declarations: [AppComponent, ProfilePageComponent, HeaderComponent, TitleComponent, TextBlockComponent, AddPostComponent, UiInputComponent, UiButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
