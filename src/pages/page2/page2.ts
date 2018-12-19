import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController) {
  }


  go_to_page3() {
      this.navCtrl.push("page-3");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    let promise = new Promise( (resolve, reject)=> {

      let confirm = this._alertCtrl.create({
        title: 'Are you sure?',
        message: "Are you sure that you want to enter?",
        buttons: [
          {
            text: 'Cancel',
            handler: () => resolve(false)
          },
          {
            text: "Yes, I'm sure",
            handler: () => resolve(true)
          }
        ]
      });
  
      confirm.present();
  
    });



    return promise;
  }


  ionViewCanLeave(){
    console.log("ionViewCanLeave"); 

    console.log("wait two seconds to exit...")

    let loading = this._loadingCtrl.create({
        content: "Wait please ..."
    });

    loading.present();

    let promise = new Promise( (resolve, reject) => {
      
        setTimeout(() => {
            loading.dismiss();
            resolve(true); 
        }, 2000);

    });

    return promise;
  } 
  
  
  ionViewDidLoad(){
     console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");  
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");  
  }


  ionViewWillLeave(){
    console.log("ionViewWillLeave");  
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");   
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");  
  }




}
