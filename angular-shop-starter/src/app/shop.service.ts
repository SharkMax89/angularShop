import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private articles: Article[] = [
    { id: 1, name: 'Lantern', description: 'This Lantern shines bright. '.repeat(20), pic: '/assets/pics/laterne.jpg' },
    { id: 2, name: 'Skateboard', description: 'Roll on this skateboard like Elissa Steamer. '.repeat(20), pic: '/assets/pics/skateboard.jpg' },
    { id: 3, name: 'Tennisball', description: 'Extra bouncy action on your grass court. '.repeat(20), pic: '/assets/pics/tennisball.jpg' },
    { id: 4, name: 'Basketball', description: 'Works great for dunking. '.repeat(20), pic: '/assets/pics/basketball.jpg' },
    { id: 5, name: 'Leggings', description: 'Wear these for your best performance. '.repeat(20), pic: '/assets/pics/leggings.jpg' },
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article {
    return <Article>this.articles.find(a => a.id === id);
  }

}
