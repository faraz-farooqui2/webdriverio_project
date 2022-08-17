const { Given, When, Then } = require('@cucumber/cucumber');
const constants = require('../../constant');
const loginPage = require('../pageobjects/login-page');
const configData = require('../../config');
const licenseeHome = require('../pageobjects/licensehome-page')
const allureReporter = require('@wdio/allure-reporter').default

Given(/^I am on the login page$/, function() {
     browser.url(constants.BASE_URL)
     browser.pause(5000)
});

When(/^I enter \"(.*)\"$/, function (username){
     //loginPage.enterUserName()
    // browser.$("//input[@type='email']").setValue(username)
    allureReporter.
    loginPage.email.setValue(username)
    
});

Then(/^I click on next$/, function (){
    loginPage.clickNextButton()
   // browser.$("//input[@type='submit']").click()
});

Then(/^Insert \"(.*)\"$/, function (password){
    //loginPage.enterPassword()
    // browser.$("//input[@name='passwd']").setValue("OA385mavric")
    loginPage.pwdBtn.setValue(password)
});

Then(/^I click on login button$/, function (){
    loginPage.clickNextButton()
   // browser.$("//input[@type='submit']").click()
   // browser.pause(10000)
});

Then(/^I click on Yes button$/, function (){
    loginPage.clickNextButton()

   // browser.$("//input[@type='submit']").click()
   // browser.pause(10000)
});

When(/^I click on Add Licensee$/, function() {
    licenseeHome.clickAddLicensee()

});

Then(/^I click on Drop Down$/, function (){
    licenseeHome.clickToOpenDropDown()
});

Then(/^I click on Inspection Type$/, function (){
    licenseeHome.selectDropDownValue()
});