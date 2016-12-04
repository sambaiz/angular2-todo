import { MytodoPage } from './app.po';

describe('mytodo App', function() {
  let page: MytodoPage;

  beforeEach(() => {
    page = new MytodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
