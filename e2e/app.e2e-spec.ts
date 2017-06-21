import { ChildParentExamplePage } from './app.po';

describe('child-parent-example App', () => {
  let page: ChildParentExamplePage;

  beforeEach(() => {
    page = new ChildParentExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
