import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  resData;
  newsData;

  constructor(public http : HttpClient) { }

  ngOnInit(): void {
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-28S&sortBy=publishedAt&apiKey=fd9a5fcb3d65423ba94894d09819035a'
    this.http.get(url)
    .subscribe(res=>
    {
      this.resData=res;
      if(this.resData.status=="ok")
      {
        this.newsData=this.resData.articles;
        console.log(this.newsData);
      }
    });
  }

}



