import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  go_to_page3() {
      this.navCtrl.push("page-3");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    let number = Math.round(Math.random() * 10);
    console.log(number);

    if ( number >= 5) {
      return true;
    }
    else {
      return false;
    }
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave"); 

    console.log("wait two seconds to exit...")

    let promise = new Promise( (resolve, reject) => {
      
        setTimeout(() => {
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
