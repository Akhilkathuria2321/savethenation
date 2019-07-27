import { Component, OnInit, Input } from '@angular/core';
import { ArticleSummary } from '../models/articlesummary';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() articleSummary: ArticleSummary;
  constructor() { }

  ngOnInit() {
  }

}
