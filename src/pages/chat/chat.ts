import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import User from '../../models/user.model';
import Message from '../../models/message.model';
import { ChatApiProvider } from '../../providers/chat-api/chat-api';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  user: User;
  messages: Array<Message>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private api: ChatApiProvider) {
    this.user = this.navParams.get('user');
    

    this.api.subscribe( (data:Array<Message>) => {
      this.messages = data;
    })
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatPage');
  // }

  sendMessage(msgForm: NgForm) {
    let msg = new Message(msgForm.value.text, this.user);
    this.api.sendMessage(msg);
  }

}
