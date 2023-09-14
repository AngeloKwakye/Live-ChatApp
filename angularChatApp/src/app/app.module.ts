import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app/chat-app.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const config: SocketIoConfig = { url: 'http://localhost:3000', options:{} }

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
