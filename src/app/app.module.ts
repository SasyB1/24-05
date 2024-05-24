import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrandComponent } from './pages/brand/brand.component';
import { Page404Component } from './pages/page404/page404.component';
import { CardComponent } from './main-components/card/card.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HeaderComponent } from './main-components/header/header.component';
import { HeroComponent } from './main-components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BrandComponent,
    Page404Component,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
