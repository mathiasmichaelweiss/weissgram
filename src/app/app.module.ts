import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { PostComponent } from './components/post/post.component';
import { UiUserHeaderComponent } from './components/ui-user-header/ui-user-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiPhotosSliderComponent } from './components/ui-photos-slider/ui-photos-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './views/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModalComponent } from './views/auth/components/auth-modal/auth-modal.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    HeaderComponent,
    TitleComponent,
    TextBlockComponent,
    AddPostComponent,
    UiInputComponent,
    UiButtonComponent,
    PostComponent,
    UiUserHeaderComponent,
    UiPhotosSliderComponent,
    AuthComponent,
    AuthModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
