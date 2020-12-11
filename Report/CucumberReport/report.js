$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking functionality of Adactin Application",
  "description": "",
  "id": "booking-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the valid username in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid password in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies whether HomePage navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 8162425401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_username_in_the_username_field()"
});
formatter.result({
  "duration": 443386800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_password_in_the_password_field()"
});
formatter.result({
  "duration": 230409899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1495133099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_HomePage_navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
});