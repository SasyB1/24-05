import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { Page404Component } from './pages/page404/page404.component';
import { CardComponent } from './main-components/card/card.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HeaderComponent } from './main-components/header/header.component';
import { HeroComponent } from './main-components/hero/hero.component';

import { YamamayComponent } from './pages/yamamay/yamamay.component';
import { TezenisComponent } from './pages/tezenis/tezenis.component';
import { CalzedoniaComponent } from './pages/calzedonia/calzedonia.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Page404Component,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    YamamayComponent,
    TezenisComponent,
    CalzedoniaComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
