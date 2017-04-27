import { DircontDesignPage } from './app.po';

describe('dircont-design App', function() {
  let page: DircontDesignPage;

  beforeEach(() => {
    page = new DircontDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
