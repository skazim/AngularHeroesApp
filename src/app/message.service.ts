import { Injectable } from '@angular/core';
@Injectable({

  providedIn: 'root'
})
export class MessageService {
  messages: String[] = [];

  addmessage(message: string) {
    this.messages.push(message)
  }
  clear() {
    this.messages = [];
  }
}
