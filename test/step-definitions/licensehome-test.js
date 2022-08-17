//import {Given,When,Then} from 'cucumber';
const { assert } = require('chai');
const { default: pause } = require('webdriverio/build/commands/browser/pause');
const licenseHomePage = require('../pageobjects/licensehome-page');
const configData = require('../../config');
const constants = require('../../constant');
const loginPage = require('../../pages/login-page');

describe('Verify Licensee Home Page', function(){


it('Add Licensee', function(){   
browser.url(constants.BASE_URL)
//assert.equal(true, loginPage.isEmailTxtFieldDisplayed(), 'Email text field is not present')
//assert.equal(true, loginPage.isNextBtnDisplayed(), 'Next button is not present')
//expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
loginPage.doLogin(configData.username , configData.password)
loginPage.clickElement()
licenseHomePage.clickAddLicensee()
browser.pause(10000)
})
})

// Given(/^I am on the login page$/, function(){
//     browser.url(constants.BASE_URL)
// })