import { SettingsService } from './../../providers/settings/settings';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  slides:any[] = [
    {
      title: "Welcome!!!",
      description: "This <b>application</b> will help you understand many Ionic framework interesting topics",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is ionic?",
      description: "<b>Ionic Framework</b> is an open SDK  that allows developers to create mobile apps in JavaScript, CSS y HTML.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What does this app do?",
      description: "This application will help you understand about a page's lifecycle and how to use local storage!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  
  constructor(public navCtrl: NavController,
              private _settings: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionPage');
  }

  skip_tutorial() {
    this._settings.settings.show_tutorial = false;
    this._settings.save_storage();
    this.navCtrl.setRoot(HomePage);


  }



}
