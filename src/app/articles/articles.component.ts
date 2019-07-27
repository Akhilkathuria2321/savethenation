import { Component, OnInit } from '@angular/core';
import { ArticlereaderService } from '../articlereader.service';
import { ArticleSummary } from '../models/articlesummary';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  private articlesSummary: ArticleSummary[];
  constructor(private articleService: ArticlereaderService) { }

  ngOnInit() {
    this.articlesSummary = this.articleService.getArticlesSummary();
  }

}
