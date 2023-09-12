import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app/chat-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
