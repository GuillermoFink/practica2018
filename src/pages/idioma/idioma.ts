import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ApiabmProvider } from '../../providers/apiabm/apiabm';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the IdiomaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idioma',
  templateUrl: 'idioma.html',
  providers: [ApiabmProvider]
})
export class IdiomaPage {
  lat;
  lng;
  idioma;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService, public miLocacion: Geolocation) {
    this.miLocacion.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdiomaPage');
  }

  placeMarker($event){
    console.log($event);
    console.log("**");
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.test();
  }

  test(){
    let lat = parseInt(this.lat);
    let lng = parseInt(this.lng);
    console.log("LAT "+lat);
    console.log("LNG" +lng);

    if(lat < -20 && lat > -55 && lng < -53 && lng > -75){
      console.log("ESP - BS AS");
      this.idioma = 'es';
    }else if(lat > -24 && lat < -1 && lng < -34 && lng > -53){
      console.log("POR-RIO");
      this.idioma = 'pt';
    }else if ( lat < 42 && lat > 26 && lng < 118 && lng > 79){
      console.log("CH - PEKIN");
      this.idioma = 'ch';
    }else if( lat > 47 && lat < 54 && lng < 15 && lng > 6){
      console.log("ALE - BERLIN");
      this.idioma = 'al';
    }else if(lat > 37 && lat < 41 && lng < -6 && lng > -10){
      console.log("POR - LISBOA");
      this.idioma = 'pt';
    }else if (lat > 30 && lat < 66 && lng < -69 && lng > -138){
      console.log("EN - KANSAS");
      this.idioma = 'en';
    }else{
      swal({
        type: 'info',
        title: 'Sorry',
        text: 'We dont have support for the selected country',
      })
    }

    this.translateService.use(this.idioma);
  }

  Volver() {
    this.navCtrl.setRoot(MainPage)
  }
  ar(){
    this.lat = -33.705921648542684;
    this.lng = -64.9294106625;
    this.test();
  }
  al(){
    this.lat = 52.06870666321749;
    this.lng = 10.89938075870532;
    this.test();
  }
  pt(){
    this.lat = -8.447754367690132;
    this.lng = -51.394254412500004;
    this.test();
  }
  ch(){
    this.lat = 36.91033167040192;
    this.lng = 103.76915820849877;
    this.test();
  }
  en(){
    this.lat = 42.62767220719085;
    this.lng = -101.71704136636356;
    this.test();
  }
}
