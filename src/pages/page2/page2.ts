import { Component } from '@angular/core';
import { NavParams,NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  variable:string
  variable1:string
  variable2:number
  grade:string
  constructor(public navparams: NavParams,public navCtrl : NavController ) {
    this.variable = this.navparams.get('item1')
    this.variable1 = this.navparams.get('item2')
    this.variable2 = this.navparams.get('item3')
    if(this.variable2>=80 && this.variable2<=100){
      this.grade="A"
    }
    else if(this.variable2>=75 && this.variable2<=79){
      this.grade="B+"
    }
    else if(this.variable2>=70 && this.variable2<=74){
      this.grade="B"
    }
    else if(this.variable2>=65 && this.variable2<=69){
      this.grade="C+"
    }
    else if(this.variable2>=60 && this.variable2<=64){
      this.grade="C"
    }
    else if(this.variable2>=55 && this.variable2<=59){
      this.grade="D+"
    }
    else if(this.variable2>=50 && this.variable2<=54){
      this.grade="D"
    }
    else if(this.variable2>=0 && this.variable2<=49){
      this.grade="F"
    }
  }
    showText2(){
    this.navCtrl.push(HomePage)
    }
  
}



