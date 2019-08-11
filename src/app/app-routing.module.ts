import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { HomeComponent } from './home/home.component';
import { TestWidgetsComponent } from './test-widgets/test-widgets.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articledetail', component: ArticledetailComponent },
  { path: 'testwidget', component: TestWidgetsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
