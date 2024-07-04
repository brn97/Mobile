import { Component, OnInit, inject } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],

})
export class TelaLoginPage {

  loginData: any = {
    "email": "",
    "password": ""
  }

  constructor(private alertController: AlertController,
    private userService: AuthService,
    private router: Router) { }



  onLogin() {
    this.userService.login(this.loginData).subscribe((res: any) => {
      console.log('Response from API:', res);
      if (res.access) { // Verifique se o token foi retornado
        alert('Login Success');
        this.userService.saveToken(res.access); // Salve o token no LocalStorage
        this.router.navigateByUrl('/tabs/tab2');
      } else {
        this.presentAlert(res.message);
      }
    }
    );
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/');
  }
}
