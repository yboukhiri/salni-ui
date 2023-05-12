import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDto } from 'src/app/generated-api';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss'],
})
export class FriendItemComponent {
  constructor() {}

  @Input()
  friend: UserDto | undefined;

  @Input()
  isSelected: boolean = false;

  @Output()
  friendSelected = new EventEmitter<UserDto>();

  selectFriend() {
    if (this.friend) {
      this.friendSelected.emit(this.friend);
    }
  }
}
