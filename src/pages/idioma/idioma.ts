import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ApiabmProvider } from '../../providers/apiabm/apiabm';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2'

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {

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
      alert("asd");
    }

    this.translateService.use(this.idioma);
  }

  Volver() {
    this.navCtrl.setRoot(MainPage)
  }
}
