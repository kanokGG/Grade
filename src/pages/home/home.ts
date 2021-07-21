import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page2} from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  input1:string = null
  input2:string = null
  input3:number = null
  constructor(public navCtrl: NavController) {
  }
  showText(input1,input2,input3){
    console.log(this.input1,this.input2,this.input3)
    if(input1==null||input2==null||input3==null){
    this.navCtrl.push(HomePage)
    }
    else
      this.navCtrl.push(Page2 ,{item1:this.input1,item2:this.input2,item3:this.input3})
  }
}
