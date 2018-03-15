import { NumberGuesserPage } from './app.po';

describe('number-guesser App', function() {
  let page: NumberGuesserPage;

  beforeEach(() => {
    page = new NumberGuesserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
