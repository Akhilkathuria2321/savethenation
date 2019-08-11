import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { PortalfeaturesComponent } from './portalfeatures/portalfeatures.component';
import { TestComponent } from './test/test.component';
import { TestDirective } from './test.directive';
import { TestdirectiveDirective } from './testdirective.directive';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { HomeComponent } from './home/home.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { TestWidgetsComponent } from './test-widgets/test-widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdddeviceComponent,
    PortalfeaturesComponent,
    TestComponent,
    TestDirective,
    TestdirectiveDirective,
    ArticlesComponent,
    AboutComponent,
    ArticleComponent,
    ArticledetailComponent,
    HomeComponent,
    ParallaxComponent,
    TestWidgetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
