
'use strict';
var TableHomepage = function(){
  var nameInput = element(by.xpath('//table[@class="variables-matrix input-arguments"]/tbody/tr[2]/td[1]'));

  this.get = function(){
    browser.get('https://docs.angularjs.org/api/ng/function/angular.forEach');
  };

   //this.setName = function(name) {
   /// nameInput.sendKeys(name);};

    this.gettableText = function() {
    return nameInput.getText();
  };
};

module.exports = new TableHomepage();

