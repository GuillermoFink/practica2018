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
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdiomaPage');
  }

}
