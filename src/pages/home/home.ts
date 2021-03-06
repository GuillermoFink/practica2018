import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ApiabmProvider } from '../../providers/apiabm/apiabm';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiabmProvider]
})
export class HomePage {
  esUsuario = true;
  usuarios: any;
  mail: string;
  password: string;
  lat;
  lng;

  correcto: boolean;

  idioms: any[] = [];

  constructor(public navCtrl: NavController, public http: Http, public translateService: TranslateService) {
    this.correcto = false;
    /////////////TRAER USUARIOS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosUsuarios")
      .subscribe(data => {
        this.usuarios = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
    //////////////////ACTUALIZACION ENCUESTAS/////////////
    for (let i = 0; i < 20; i++) {
      let datos = { "idEncuesta": i }
      this.http.post("http://www.estacionamiento.16mb.com/git/api/updateEstadoEncuesta", datos).subscribe(
        data => {
          //console.log(data)
        });
    }
    ///////////ELEGIR IDIOMA///////////
    this.idioms = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'Ingles'
      },
      {
        value: 'pt',
        label: 'Portugués'
      },
      {
        value: 'al',
        label: 'Aleman'
      },
      {
        value: 'ch',
        label: 'Chino'
      }
    ];
  }
  choose(lang) {
    this.translateService.use(lang);
  }
  login() {
    this.usuarios.forEach(element => {
      if (element.mail == this.mail && element.password == this.password) {
        this.correcto = true;
        console.log("registro ok" + element);
        this.navCtrl.setRoot(MainPage, {
          "id": element.id,
          "nombre": element.nombre,
          "apellido": element.apellido,
          "mail": element.mail,
          "password": element.password,
          "legajo": element.legajo,
          "tipo": element.tipo,
          "foto": element.foto,
          "libre": element.libre
        });
      }
    });
    if (this.correcto == false) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Nombre de usuario o contraseña incorrectos!',
      })
    }
  }

  asignarUsuario(tipo) {
    switch (tipo) {
      case "admin": {
        this.mail = "guillermo_fink@hotmail.com";
        this.password = "321321321";
        break;
      }
      case "alumno": {
        this.mail = "rp@gmail.com";
        this.password = "321321321";
        break;
      }
      case "profesor": {
        this.mail = "octavio@gmail.com";
        this.password = "321321321";
        break;
      }
      case "administrativo": {
        this.mail = "jm@gmail.com";
        this.password = "28745365";
        break;
      }
    }

  }

}
