import { CodewithdanAngularAppPage } from './app.po';

describe('codewithdan-angular-app App', () => {
  let page: CodewithdanAngularAppPage;

  beforeEach(() => {
    page = new CodewithdanAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
