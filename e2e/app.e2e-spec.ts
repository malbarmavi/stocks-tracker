import { StocksTrackerPage } from './app.po';

describe('stocks-tracker App', () => {
  let page: StocksTrackerPage;

  beforeEach(() => {
    page = new StocksTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
