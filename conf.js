
'use strict';
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  seleniumServerJar:'selenium-server-standalone-2.53.0.jar',
 // specs: ['./spec/verify_table_spec.js'],
  specs: ['./spec/verify_angular_page_spec.js'],
  //suites:{
   // homepage:'./spec/**/*spec.js',
 // };
};
