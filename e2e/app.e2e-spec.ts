import { SubbotnikPage } from './app.po';

describe('subbotnik App', function() {
  let page: SubbotnikPage;

  beforeEach(() => {
    page = new SubbotnikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
