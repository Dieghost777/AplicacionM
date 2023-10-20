import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}

  obtenerMenu() {
    return this.http.get(this.apiUrl);
  }
}
