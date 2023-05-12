import { Component } from '@angular/core';
import { UserDto } from 'src/app/generated-api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  selectedFriend: UserDto | null = null;

  selectFriend(friend: any) {
    this.selectedFriend = friend;
  }
}
