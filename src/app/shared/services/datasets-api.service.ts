import { HttpClient } from '@angular/common/http';
import { AlgoseekApiService } from './algoseek-api.service';
import { catchError, Observable, throwError } from 'rxjs';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatasetsApiService {
  apiService = inject(AlgoseekApiService);
  http = inject(HttpClient);

  datasets = this.createSignal<any[]>([]);
  datasetsDetails = this.createSignal<any>({});

  private createSignal<T>(defaultValue: T) {
    return signal<T>(defaultValue);
  }

  private fetchData<T>(endpoint: string): Observable<any[]> {
    const url = `${this.apiService._BASE_URL}/${endpoint}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error(`Error fetching data from ${endpoint}`, error);
        return throwError(() => new Error('Failed to fetch data'));
      })
    );
  }

  getDatasetsContent(): Observable<any[]> {
    return this.fetchData<any[]>('datasets/api/v2/extras/platform/datasets');
  }

  getDatasetsDetailsContent(text_id: string): Observable<any[]> {
    return this.fetchData<any>(`datasets/api/v2/extras/platform/datasets/${text_id}`);
  }
}