import { Component, Input } from '@angular/core';
import { Friend } from '../../../models/friend.model';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss'],
})
export class FriendItemComponent {
  @Input()
  friend: Friend | undefined;

  constructor() {}
}
