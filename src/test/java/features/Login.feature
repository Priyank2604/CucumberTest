Feature: Application Login

  Scenario: Home page default login
    Given User is on NetBanking landing page
    When User login into application with username "pk" and password "1234"
    Then Home page is populated
    And Cards are displayed "true"

  Scenario: Home page default login
    Given User is on NetBanking landing page
    When User login into application with username "rk" and password "4321"
    Then Home page is populated
    And Cards are displayed "false"