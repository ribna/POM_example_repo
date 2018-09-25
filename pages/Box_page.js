'use strict';

var BoxHomePage = function() {

  var nameInput = element(by.model('todoList.todoText'));
   // var nameInput_1 = element(by.model('todoList.todoText'));
  var loginBtn = element(by.xpath('//input[@value="add"]'));
   var angCheck = element(by.xpath('//li[@ng-repeat="todo in todoList.todos" and child::label/span[text()="build an AngularJS app"]]'));

  this.get = function() {
      browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
    //nameInput_1.sendKeys(name);
  };

  this.getLoginBt = function() {
     loginBtn.click();
  };

   this.getcheck = function() {

    if(expect(angCheck.isSelected()).toBe(false))
                 {
                 angCheck.click();
                  }
             else
              {
               angCheck.click();
              }
   };
};

module.exports = new BoxHomePage();
