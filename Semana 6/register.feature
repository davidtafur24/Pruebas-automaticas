Feature: Register into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Register unsuccesful with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill my <name>, <lastName> and <email>
    And I choose a <university>
    And I choose my <career>
    And I fill with <password>
    And I accept terms and conditions
    And I try to register
    Then I expect to see <error>

    Examples:
      | name      | lastName | email              | university               | career   | password  | error           | 
      |           |          |                    |                          |          |           | "Ingresa tu"    | 
      | David     | Torres   |                    |                          |          |savsdEra1  | "Ingresa tu c"  | 
      | David     | Torres   | mycorreo@gmail.com | universidad-de-los-andes | 22       |           | "Ingresa una c" |  

Scenario Outline: Register successfully with right inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill my <name>, <lastName> and <email>
    And I choose a <university>
    And I choose my <career>
    And I fill with <password>
    And I accept terms and conditions
    And I try to register
    Then I expect <result>

    Examples:
      | name      | lastName | email              | university               | career   | password  | result          | 
      | David     | Torres   | mycorreo@gmail.com | universidad-de-los-andes | 22       |savsdEra1  | "Registro exit" |      

