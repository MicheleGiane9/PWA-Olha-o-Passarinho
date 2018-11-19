import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public feeds: Array<string>;
  
  private url: string = "https://spreadsheets.google.com/feeds/list/1M-C8XiuaqvsS5k8L4ZEn0Y6sIzbu7eYbPdPqU1AhsqU/od6/public/values?alt=json";  

  public noFilter: Array<any>;

  public hasFilter: boolean = false;

  searchTerm: string = '';
 
  items: any;
 
  
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController){
   
    this.fetchContent();
  }

  
  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Buscando Aves...'
    });

    loading.present();

    
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.feed.entry;
        this.noFilter = this.feeds;
        loading.dismiss();
      }); 
  
    }
    itemSelected (url: string):void {
     // let browser = new InAppBrowser(url, '_system');
    }
    
    filterItems() {
      this.hasFilter = false;
      this.feeds = this.noFilter.filter((feed) => {
          return feed.gsx$nomecomum.$t.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    openDetails(feed) {
      this.navCtrl.push('PassaroDetailsPage', {feed: feed});
     
    } 
    openDetailsSabia(feed) {
      this.navCtrl.push('SomPage', {feed: feed});
     
    } 
  
  }
  
  
  