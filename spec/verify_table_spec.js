
'use strict';
var TableHomepage = require('../pages/table_page.js');

describe('angularjs', function() {
  it('should verify the table ', function() {
     TableHomepage.get();
    browser.driver.sleep(5000);

     // tableHomepage.setName('ribna');
    expect(TableHomepage.gettableText()).toEqual('iterator');
  });
});
