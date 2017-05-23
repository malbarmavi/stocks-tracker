import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StocksService {
    private stocks: Array<string> = ['MSFT', 'GOOG', 'FB', 'TWTR', 'AMZN', 'INTC'];
    private http: Http;
    private stocksUrl = "http://finance.google.com/finance/info?client=ig&q=";

    constructor(http: Http) {
        this.http = http;
    }

    public get() {
        return this.stocks.slice(0);
    }

    public add(stock) {
        this.stocks.push(stock);
        return this.get();
    }

    public remove(stock){
        this.stocks.splice(this.stocks.indexOf(stock), 1);
        return this.get();
    }

    public load() {
        return this.http.get(`${this.stocksUrl}${this.stocks.join(',')}`);
    }
}
