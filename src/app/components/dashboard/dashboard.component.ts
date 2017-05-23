import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public stocks:any;
  constructor(stocksService: StocksService) { 
   stocksService
    .load()
    .subscribe(res => this.stocks = JSON.parse(res.text().replace("//","")));
  }

  ngOnInit() {
  }
}
