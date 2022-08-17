Feature: Login to MyLicense BackPack

Background:

    Scenario Outline: Login to MyLicense BackPack
    Given I am on the login page
    When  I enter "<username>"
    Then  I click on next
    Then  Insert "<password>"
    Then  I click on login button
    Then  I click on Yes button

 Examples:
     | username             | password             |
     | osama@mavrictech.com | OaMavric385          |  

      
   

  Scenario Outline: Add Licensee 

     When  I click on Add Licensee
     Then  I click on Drop Down
     Then  I click on Inspection Type
     Then  I click on set "<company>"
     Then  I click on county dropdown
     Then  I select county from dropdown
     Then  I click on Add button

Examples:
     | company              | 
     | automation-scripts   | 





     