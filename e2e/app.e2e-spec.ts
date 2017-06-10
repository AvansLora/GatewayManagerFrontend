import { GatewaysWebinterfacePage } from './app.po';

describe('gateways-webinterface App', () => {
  let page: GatewaysWebinterfacePage;

  beforeEach(() => {
    page = new GatewaysWebinterfacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
