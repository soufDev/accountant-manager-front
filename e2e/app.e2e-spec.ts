import { GdrFrontPage } from './app.po';

describe('gdr-front App', () => {
  let page: GdrFrontPage;

  beforeEach(() => {
    page = new GdrFrontPage();
  });

  it('should display error saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
