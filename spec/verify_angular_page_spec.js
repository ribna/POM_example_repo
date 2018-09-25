

'use strict';
var angularHomepage = require('../pages/HomePage.js');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');
    expect(angularHomepage.getGreetingText()).toEqual('Hello Julie!');

    browser.driver.sleep(5000);
  });
});
