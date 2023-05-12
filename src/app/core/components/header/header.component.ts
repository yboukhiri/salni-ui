import { Component } from '@angular/core';
import {
  faBell,
  faHeart,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private autheticationService: AuthenticationService) {}

  // logout icon
  faSignOutAlt = faSignOutAlt;

  // fa notification icon
  faBell = faBell;

  // fa profile icon
  faUser = faUser;

  logout() {
    this.autheticationService.logout();
  }
}
