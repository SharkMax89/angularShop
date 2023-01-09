import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.articles = this.shopService.getArticles();
  }

}
