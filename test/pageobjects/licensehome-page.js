const configData = require('../../config');
const constants = require('../../constant');


class LicenseHomePage{

//page locators:
get addLicensee() {return $("//span[contains(text(),'ADD LICENSEE')]/parent::button")}

get openDropDown() {return $("//div[@class='MuiAutocomplete-endAdornment']/button[@class='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator']")}

get dropDownList() {return $("/html/body/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div")}

get addBtn() {return $("//ul[@class='MuiList-root MuiMenu-list MuiList-padding']")}

get companyName() {return $("//input[@id='name']")}

get clickCountyDropDown() {return $("//div[@class='MuiFormControl-root jss145 jss151 jss150 jss149']")}

get selectCounty() {return $("//ul[@class='MuiList-root MuiMenu-list MuiList-padding']")}

get addButton() {return $("//span[text()='ADD']")}



// get password() {return "//input[@name='passwd']"}
// get submitBtn() {return "//input[@type='submit']"}

//page actions

clickAddLicensee(){
    this.addLicensee.waitForDisplayed({timeout: 30000 })
    this.addLicensee.click();
    browser.pause(5000)
}

clickToOpenDropDown(){
    this.openDropDown.waitForDisplayed({timeout: 30000 })
    this.openDropDown.click();
    browser.pause(1000)
}

selectDropDownValue(){
    this.dropDownList.waitForDisplayed({timeout: 30000 })
    this.dropDownList.$$('input')[1].click()
    browser.pause(10000)

}

clickOnAddBtn(){
    this.addBtn.waitForDisplayed({timeout: 30000 })
    this.addBtn.click()
    browser.pause(1000)

}

enterCompanyName(company){
    this.companyName.waitForDisplayed({timeout: 30000 })
    this.companyName.click()
    browser.pause(2000)
    this.companyName.setValue(company)
    browser.pause(3000)


}


clickCountyDropdown(){
    this.clickCountyDropDown.waitForDisplayed({timeout: 30000 })
    this.clickCountyDropDown.click()
    browser.pause(2000)
}

selectCountyDropdownalue(){
    this.selectCounty.waitForDisplayed({timeout: 30000 })
    this.selectCounty.$$('li')[5].click()
    browser.pause(3000)
}


clickOnAdd(){
    this.addButton.waitForDisplayed({timeout: 30000 })
    this.addButton.click()
    browser.pause(1000)

}

}

module.exports = new LicenseHomePage()


