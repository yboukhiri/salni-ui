import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/friend.model';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  constructor(private friendsService: FriendsService) {}

  friends: Friend[] = [];

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe((friends) => {
      this.friends = friends;
    });
  }
}
