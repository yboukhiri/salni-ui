import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Deal } from '../models/deal.model';

@Injectable()
export class DealsService {
  constructor(private http: HttpClient) {}

  getDeal(withUserOfId: number) {
    return this.http.get<Deal>(
      `${environment.apiUrl}/deals/user/${withUserOfId}`
    );
  }
}
