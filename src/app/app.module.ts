import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockComponent } from './components/stock/stock.component';
import { StocksService } from './services/stocks.service';
import { ManageComponent } from './components/manage/manage.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Manage', component: ManageComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockComponent,
    ManageComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
