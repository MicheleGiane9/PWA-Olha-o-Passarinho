import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { NativeAudio } from '@ionic-native/native-audio';


@IonicPage()
@Component({
  selector: 'page-passaro-details',
  templateUrl: 'passaro-details.html',
})

export class PassaroDetailsPage {


  url: string = "https://spreadsheets.google.com/feeds/list/1M-C8XiuaqvsS5k8L4ZEn0Y6sIzbu7eYbPdPqU1AhsqU/od6/public/values?alt=json";  
  feed: any;
  
 constructor(private nativeAudio: NativeAudio,public navCtrl: NavController, public navParams: NavParams, public http: Http)
 {          

  this.feed = this.navParams.get('feed');

    }

     

  }