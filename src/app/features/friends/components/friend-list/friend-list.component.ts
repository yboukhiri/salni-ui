import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDto, UsersService } from 'src/app/generated-api';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  friends: UserDto[] = [];
  selectedFriend: UserDto | null = null;

  @Output()
  friendSelected: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  ngOnInit(): void {
    this.usersService.usersControllerGetFriends().subscribe((friends) => {
      this.friends = friends;
      this.selectedFriend = friends[0];
      this.friendSelected.emit(friends[0]);
    });
  }

  selectFriend(friend: any) {
    this.selectedFriend = friend;
    this.friendSelected.emit(friend);
  }
}
