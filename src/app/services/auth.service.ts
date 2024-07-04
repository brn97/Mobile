import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.Url}api/token/`, loginData);
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  async getToken(): Promise<string | null> {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
