import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockComponent } from './components/stock/stock.component';
import { StocksService } from './services/stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
