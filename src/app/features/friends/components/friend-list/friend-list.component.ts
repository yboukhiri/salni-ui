import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDto, UsersService } from 'src/app/generated-api';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  friends: UserDto[] = [];

  ngOnInit(): void {
    this.usersService.usersControllerGetFriends().subscribe((friends) => {
      this.friends = friends;
    });
  }
}
