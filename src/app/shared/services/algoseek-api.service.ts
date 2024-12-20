import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environment';

@Injectable({ providedIn: 'root' })
export class AlgoseekApiService {
  _BASE_URL: string = environment.apiUrl;
  _TOKEN: string = 'B-olna-xIkfs-xCeC8vnhiuQ-3HzdWZM';

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this._TOKEN}`,
      'Content-Type': 'application/json',
    });
  }
}
