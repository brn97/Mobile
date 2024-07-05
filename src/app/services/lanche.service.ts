import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LancheService {
  private Url = environment.apiUrl;

  constructor(private apiService: ApiService) {}

  listarLanches(): Observable<any> {
    return this.apiService.get(`${this.Url}listar/produtos`);
  }

  cadastrarLanche(lanche: any): Observable<any> {
    return this.apiService.post(`${this.Url}criar/produto`, lanche);
  }
}
  
