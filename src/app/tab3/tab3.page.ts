import { Component } from '@angular/core';
import { LancheService } from '../services/lanche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  lanches: any[] = [];

  constructor(
    private router: Router,
    private lancheService: LancheService,
  ) {}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.listarLanches();
  }

  listarLanches() {
    this.lancheService.listarLanches().subscribe(
      data => {
        this.lanches = data;
        console.log('Lanches listados com sucesso', data);
      },
      error => {
        console.error('Erro ao listar lanches', error);
      }
    );
  }



}






