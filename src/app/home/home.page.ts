import { Component } from '@angular/core';
import Pizzicato from 'pizzicato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public songs : Array<any>
  public fx : any

  constructor() {
    this.songs = [
      {
        'name' : 'Tomo licor',
        'author' : 'Amar Azul',
        'file_name' : 'amar_azul.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1 
      },
      {
        'name' : 'Check em',
        'author' : 'Skrillex',
        'file_name' : 'Skrillex - Check em.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      },
      {
        'name' : 'Lluvia',
        'author' : 'Genio Ft. Cosculluela',
        'file_name' : 'Genio Ft. Cosculluela - Lluvia.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      },
      {
        'name' : 'Estilo De Vida',
        'author' : 'Justin Quiles',
        'file_name' : 'Justin Quiles - Estilo De Vida.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      },
      {
        'name' : 'Comerte A Besos',
        'author' : 'Nicky Jam Y Wisin',
        'file_name' : 'Justin Quiles Ft. Nicky Jam Y Wisin - Comerte A Besos.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      },
      {
        'name' : 'Latina',
        'author' : 'Reykon Ft. Maluma',
        'file_name' : 'Reykon Ft. Maluma - Latina.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      },
      {
        'name' : 'Pega Pega',
        'author' : 'Tito El Bambino',
        'file_name' : 'Tito El Bambino - Pega Pega.mp3',
        'status' : 'stop',
        'icon' : 'play',
        'fx' : 'on',
        'pizzicato' : null,
        'volume' : 1
      }

    ];
    this.fx = {
      'RingModulator' : new Pizzicato.Effects.RingModulator({
          speed: 30,
          distortion: 1,
          mix: 0.5
      })
    }
  }

  ngOnInit(){
    this.songs.forEach(song => {
      song.pizzicato = new Pizzicato.Sound('/assets/' + song.file_name)
    });
  }

  sound(song){
    if(song.status == 'stop'){
      song.status = 'play'
      song.pizzicato.play()
      song.icon = 'square'
    }else{
      song.status = 'stop'
      song.pizzicato.stop()
      song.icon = 'play'
    }
  }
  
  effects(song){
    if(song.fx == 'on'){
      song.fx = 'off'
      song.pizzicato.addEffect(this.fx.RingModulator);
    }else{
      song.fx = 'on'
      song.pizzicato.removeEffect(this.fx.RingModulator)
    }
  }

  volume (song){
    song.pizzicato.volume = song.volume 
  }
}
