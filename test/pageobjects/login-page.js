const configData = require('../../config');
const constants = require('../../constant');


class LoginPage{

//page locators:
get email() {
    return $("//input[@type='email']")
}

get nextBtn() {
    return $("//input[@type='submit']")
}

get pwdBtn() {
    return $("//input[@name='passwd']")
}

enterUserName(username){
    this.email.waitForDisplayed({timeout: 30000 })
    this.email.setValue(username)
    browser.pause(1000)
}

clickNextButton(){
    this.nextBtn.waitForDisplayed({timeout: 30000 })
    this.nextBtn.click()
    browser.pause(3000)
}
enterPassword(password){
    this.pwdBtn.waitForDisplayed({timeout: 30000 })
    this.pwdBtn.setValue(password)
    browser.pause(1000)
}
}

module.exports = new LoginPage()


