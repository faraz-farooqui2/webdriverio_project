const constants = require('../constant');
class ElememtUtil{

    doClick(element){
        $(element).waitForClickable()
        $(element).click()
    }

    doSetValue(element, value){
        $(element).waitForDisplayed()
        $(element).setValue(value)
        
    }

    doGetText(element){
        $(element).waitForDisplayed()
        return $(element).getText()
    }

    doIsDisplayed(element){
        //var el = $("//input[@type='email']");
        $(element).waitForDisplayed({ timeout: 100000})
        return $(element).isDisplayed()
    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === constants.LOGIN_PAGE_TITLE)
        }, 30000, 'title is not displayed after the given time'
    )
        return browser.getTitle()
    }



}

module.exports = new ElememtUtil()
