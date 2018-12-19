import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class SettingsService    {

  settings = {
      show_tutorial: true
  }

  constructor( private _storage: Storage,
               private _platform: Platform) {
    console.log('Hello SettingsProvider Provider');
  }

  load_storage() {
    return new Promise( (resolve, reject)=>{
      // mobile
      if (this._platform.is("cordova")) {
          this._storage.ready()
            .then( ()=> {
                this._storage.get("settings")
                  .then( (settings => {

                      if (settings) {
                        this.settings = settings;

                      }
                      resolve();
                  }))
            });
      }
      else {
        // desktop
        if (localStorage.getItem("settings")) {
           this.settings = JSON.parse(localStorage.getItem("settings"));
        }

        resolve();
      }  
  
    });

  }

  save_storage() {
      if (this._platform.is("cordova")) {
          this._storage.ready()
              .then( ()=> {
                  this._storage.set("settings", this.settings);
              })
      }
      else {
          localStorage.setItem("settings", JSON.stringify(this.settings));
      }
  }

}
