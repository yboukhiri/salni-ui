import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FriendItemComponent } from './components/friend-list/friend-item/friend-item.component';
import { FriendsService } from './services/friends.service';

@NgModule({
  declarations: [FriendListComponent, FriendItemComponent],
  imports: [CommonModule],
  exports: [FriendListComponent],
  providers: [FriendsService],
})
export class FriendsModule {}
