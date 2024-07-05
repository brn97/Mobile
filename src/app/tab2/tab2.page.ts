import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../services/vendedor.service';
import { AuthService } from '../services/auth.service'; // Importando AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  vendedorData: any = {
    user: {
      username: '',
      email: ''
    },
    telefone_vendedor: '',
    cpf_cnpj_vendedor: '',
    link_contato: ''
  };

  constructor(
    private vendedorService: VendedorService,
    private authService: AuthService, // Injetando AuthService
    private router: Router
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.carregarDadosVendedor();
  }

  carregarDadosVendedor() {
    this.vendedorService.listarVendedor().subscribe(data => {
      this.vendedorData = data;
    }, error => {
      console.error('Erro ao carregar dados do vendedor', error);
    });
  }

  onEditar() {
    this.vendedorService.atualizarVendedor(this.vendedorData).subscribe(response => {
      console.log('Vendedor atualizado com sucesso', response);
      this.router.navigate(['/']);  // Redirecione conforme necessário
    }, error => {
      console.error('Erro ao atualizar vendedor', error);
    });
  }

  onExcluir() {
    this.vendedorService.excluirVendedor().subscribe(response => {
      console.log('Vendedor excluído com sucesso', response);
      this.logout();
    }, error => {
      console.error('Erro ao excluir vendedor', error);
    });
  }

  limparCampos() {
    this.vendedorData = {
      user: {
        username: '',
        email: ''
      },
      telefone_vendedor: '',
      cpf_cnpj_vendedor: '',
      link_contato: ''
    };
    console.log('Campos limpos após logout');
  }

  logout() {
    this.authService.logout();
    this.limparCampos();  // Limpa os campos ao deslogar
    this.router.navigate(['/tela-login']);
  }

  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/lanche');
  }
}