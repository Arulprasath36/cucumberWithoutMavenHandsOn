$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GmailLogin.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is for login functionality",
  "description": "",
  "id": "this-feature-is-for-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User logs in with valid username and password",
  "description": "",
  "id": "this-feature-is-for-login-functionality;user-logs-in-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the username as \"arulprasath36\" and password as \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be getting error message",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailLoginSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 328677040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arulprasath36",
      "offset": 29
    },
    {
      "val": "1234",
      "offset": 61
    }
  ],
  "location": "GmailLoginSteps.user_enters_the_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 6117708,
  "status": "passed"
});
formatter.match({
  "location": "GmailLoginSteps.clicks_on_the_login_button()"
});
formatter.result({
  "duration": 180824,
  "status": "passed"
});
formatter.match({
  "location": "GmailLoginSteps.user_should_be_getting_error_message()"
});
formatter.result({
  "duration": 147103,
  "status": "passed"
});
});