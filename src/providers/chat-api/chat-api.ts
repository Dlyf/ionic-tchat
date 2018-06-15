// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import User from '../../models/user.model';
import Message from '../../models/message.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



/*
 Generated class for the ChatApiProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class ChatApiProvider {
  private obsMessages: Observable< Array<Message> >;
  private users: Array<User>;
  messages: Array<Object>;

  constructor(private db: AngularFireDatabase) {
    this.obsMessages = db.list('messages').valueChanges();

    this.users = [new User('adrien', 'mail@test.fr')];
    this.users = [new User('Domi', 'domilung@gmail.com')];
    console.log('Hello ChatApiProvider Provider');
    // this.users = [
    //   new User('Adrien', 'adrien.vossough@gmail.com'),
    //   new User('Domi', 'domilung@gmail.com'),
    //   new User('Hervé', 'ab@gmail.com'),
    //   new User('Dédé', 'ab@gmail.com'),
      
    // ];
  }
  getUsers(): Array<User> {
    return this.users;
  }
  sendMessage(msg: Message) {
    this.db.list('messages').push(msg);
  }
  subscribe( fct: (data: Array<Message>) => void ) {
    this.obsMessages.subscribe(fct);
  }
  getMessage(): Array<Message> {
    return [
      new Message('Texte de test', new User("adrien", "mail@test.fr")),
      new Message('Texte de test', new User("Dominique", "domi@test.fr"))
    ]
  }
}