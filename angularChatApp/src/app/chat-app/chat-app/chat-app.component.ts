import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ChatMessage } from 'src/chat-message';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  model = new ChatMessage("")
  messageList: string[] =[];
  welcomeMessage: string = "Yo!, feel free then chat wai";

 
  constructor(private messageService: ServiceService, private socket: Socket) { 
  }

  sendMsg(): void{
    console.log(this.model.msg);
    this.messageService.sendMessage(this.model.msg);
    this.model.msg = "";
  }

  ngOnInit(): void {
    this.getMsg();
  }



   getMsg(): void{
    this.messageService.getMessage().subscribe((message: any)=>{
      this.messageList.push(message);
      console.log({message});
    });
  };

  submitted = false;

  onSubmit(){
    this.sendMsg();
    this.submitted = true;
  };

}
