import {
  Component,
  Input,
  Output,
  input,
  computed,
  EventEmitter,
  output,
} from '@angular/core';

import { type User } from './user.model';

// import { Component, computed, signal } from '@angular/core';

// import  { DUMMY_USERS } from  '../dummy-users'

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //     return 'assets/users/' + this.selectedUser.avatar
  // }

  @Input({ required: true }) user!: User;
  @Input({ required: true}) selected!: boolean;
  //   @Input({ required : true}) id!: string;
  //   @Input({ required: true }) avatar!: string;
  //   @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => {
  //     return 'assets/users/' + this.avatar
  // });

  onSelectedUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set( DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
