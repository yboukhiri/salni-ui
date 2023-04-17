import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Friend } from '../models/friend.model';

@Injectable()
export class FriendsService {
  constructor(private http: HttpClient) {}

  getFriends() {
    return this.http.get<Friend[]>(`${environment.apiUrl}/users/friends`);
  }
}
