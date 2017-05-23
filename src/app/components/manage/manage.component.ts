import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  private service: StocksService;
  private stocksForm: FormGroup;
  private stocksKeys: string[];

  constructor(stocksService: StocksService, formBuilder: FormBuilder) {
    this.service = stocksService;
    this.stocksForm = formBuilder.group({
      'newStock': ['', Validators.required]
    });
    this.stocksKeys = this.service.get();
  }

  public add(stock: string): void {
    if (stock && stock.trim().length > 0) {
      this.stocksKeys = this.service.add(stock);
    }
    this.stocksForm.controls['newStock'].setValue('');
  }

  public remove(stock): void {
    this.stocksKeys = this.service.remove(stock);
  }

  ngOnInit() {
  }

}
