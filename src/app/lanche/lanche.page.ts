import { Component } from '@angular/core';
import { LancheService } from '../services/lanche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage {

    nome_produto: string = '';
    preco_produto: number = 0;
    descricao_produto: string = '';
    categoria: string = '';
    status_produto: string = '';
    imagem: string = '';

  constructor( 
    private router: Router,
    private lancheService: LancheService,
  ) { }


  onCadastro() {
    const lanche = {
      nome_produto: this.nome_produto,
      preco_produto: this.preco_produto,
      descricao_produto: this.descricao_produto,
      categoria: this.categoria,
      status_produto: this.status_produto,
      foto_produto: this.imagem,
    }
    console.log('Dados a serem enviados:', lanche); 
    this.lancheService.cadastrarLanche(lanche).subscribe(
      response => {
        console.log('Lanche cadastrado com sucesso', response);
        this.router.navigate(['/tabs/tab3']);
      },
      error => {
        console.error('Erro ao cadastrar lanche', error);
      }
    );
  }


  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/');
  }

}