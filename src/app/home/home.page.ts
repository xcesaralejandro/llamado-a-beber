import { Component } from '@angular/core';
import Pizzicato from 'pizzicato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public btn_text:String;
  public btn_icon:String;
  public image:String;
  public static sound:Boolean
  protected amar_azul:Pizzicato;
  constructor() {
    HomePage.sound = false
    this.btn_text = 'Iniciar el llamado a beberrr';
    this.btn_icon = 'musical-note';
    this.image = 'perrito_triste.gif';
  }

  ngOnInit(){
    this.amar_azul = new Pizzicato.Sound('/assets/amar_azul.mp3');
  }

  sound(){
    HomePage.sound = !HomePage.sound
    if(HomePage.sound){
      this.amar_azul.play();
      this.btn_text = 'Detener el llamado a beberrr';
      this.btn_icon = 'volume-off';
      this.image = 'cervecita.gif';
    }else{
      this.btn_text = 'Iniciar el llamado a beberrr';
      this.amar_azul.stop();
      this.btn_icon = 'musical-note';
      this.image = 'perrito_triste.gif';
    }
  }
}
