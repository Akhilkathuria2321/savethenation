import { Injectable } from '@angular/core';
import { ArticleSummary } from './models/articlesummary';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlereaderService {
  constructor(private http: HttpClient) {
    this.http.get<ArticleSummary>('assets/Article1.txt').subscribe(data => {
      console.log(data.title);
    });
  }

  getArticlesSummary(): ArticleSummary[] {
    const a1 = new ArticleSummary();
    this.http.get<ArticleSummary>('assets/Article1.txt').subscribe(d => a1.summaryText = d.summaryText);
    this.http.get<ArticleSummary>('assets/Article1.txt').subscribe(d => a1.title = d.title);

    const a2 = new ArticleSummary();
    this.http.get<ArticleSummary>('assets/Article2.txt').subscribe(d => a2.summaryText = d.summaryText);
    this.http.get<ArticleSummary>('assets/Article2.txt').subscribe(d => a2.title = d.title);

    const a3 = new ArticleSummary();
    this.http.get<ArticleSummary>('assets/Article3.txt').subscribe(d => a3.summaryText = d.summaryText);
    this.http.get<ArticleSummary>('assets/Article3.txt').subscribe(d => a3.title = d.title);
    const ARTICLES = [
      a1, a2, a3
    ];
    return ARTICLES;
  }
}
