import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  private Url = environment.apiUrl;

  constructor(private apiService: ApiService) {}

  listarVendedor(): Observable<any> {
    return this.apiService.get(`${this.Url}listar/vendedor`);
  }

  cadastrarVendedor(vendedor: any): Observable<any> {
    return this.apiService.post(`${this.Url}criar/vendedor`, vendedor);
  }

  atualizarVendedor(vendedor: any): Observable<any> {
    return this.apiService.put(`${this.Url}atualizar/vendedor`, vendedor);
  }

  excluirVendedor(): Observable<any> {
    return this.apiService.delete(`${this.Url}excluir/vendedor`);
  }
}