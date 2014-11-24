/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , MainPagePo = require('./main.po');

describe('Main page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/main');
  });

  it('should say MainCtrl', function () {
    expect(mainPage.heading.getText()).toEqual('main');
    expect(mainPage.text.getText()).toEqual('MainCtrl');
  });
});
