$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login into application with username \"pk\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.userIsOnNetBankingLandingPage()"
});
formatter.result({
  "duration": 338664300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pk",
      "offset": 43
    },
    {
      "val": "1234",
      "offset": 61
    }
  ],
  "location": "stepDefination.user_login_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 9373900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.homePageIsPopulated()"
});
formatter.result({
  "duration": 876800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_are_displayed(String)"
});
formatter.result({
  "duration": 857700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User login into application with username \"rk\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.userIsOnNetBankingLandingPage()"
});
formatter.result({
  "duration": 817900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rk",
      "offset": 43
    },
    {
      "val": "4321",
      "offset": 61
    }
  ],
  "location": "stepDefination.user_login_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 2212200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.homePageIsPopulated()"
});
formatter.result({
  "duration": 222200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination.cards_are_displayed(String)"
});
formatter.result({
  "duration": 2436300,
  "status": "passed"
});
});