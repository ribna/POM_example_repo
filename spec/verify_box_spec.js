

'use strict';
var boxHomepage = require('../pages/Box_page.js');

describe('angularjs homepage', function() {
  it('should display the toDo task', function() {
    boxHomepage.get();
    boxHomepage.setName('newTask');
    boxHomepage.getLoginBt();
    browser.driver.sleep(6000);
  });

  it('should click the task', function() {

    boxHomepage.getcheck();
    browser.driver.sleep(6000);

  });


    //var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
   // browser.wait(EC.presenceOf($('#abc')), 5000);
              // expect(boxHomepage.getcheck().tobe(true));
    //expect(foo.isSelected()).toBe(true);
    //expect(boxHomepage.getLoginBt());
});
