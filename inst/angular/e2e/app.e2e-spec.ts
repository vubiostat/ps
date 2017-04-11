import { PsPage } from './app.po';

describe('ps App', () => {
  let page: PsPage;

  beforeEach(() => {
    page = new PsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
