import { SettingsService } from './../providers/settings/settings';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroduccionPage } from '../pages/introduccion/introduccion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private platform: Platform, 
              private statusBar: StatusBar, 
              private splashScreen: SplashScreen,
              private _settings: SettingsService) {
    platform.ready().then(() => {

      console.log("platform ready");
      this._settings.load_storage()
            .then( ()=> {
              console.log("load storage complete");
              if (this._settings.settings.show_tutorial) {
                console.log("show tutorial");
                this.rootPage = "IntroduccionPage";
              }
              else {
                console.log("hide tutorial");
                this.rootPage = HomePage;
              }

              this.platform.pause.subscribe( ()=> {
                  console.log("the application will stop...");
              })

              this.platform.resume.subscribe( ()=> {
                  console.log("the application will resume...");
              })

               statusBar.styleDefault();
              splashScreen.hide();
        
            });

    });
  }
}

