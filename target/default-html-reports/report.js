$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/petsbystatus.feature");
formatter.feature({
  "name": "Verifying number of pets with status\u003davailable name\u003ddoggie",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Negative testing - 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negativeTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I set petsByStatus service endpoint for swagger service",
  "keyword": "Given "
});
formatter.match({
  "location": "petsByStatusStepDefs.i_set_petByStatust_service_endpoint_for_swagger_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set a GET request for queryparam status \u003d \"available\"",
  "keyword": "When "
});
formatter.match({
  "location": "petsByStatusStepDefs.send_a_GET_request_for_queryparam_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I calculate how many of result set has name \"doggiee\" and have zero result",
  "keyword": "Then "
});
formatter.match({
  "location": "petsByStatusStepDefs.i_calculate_how_many_of_result_set_has_name_and_have_zero_result(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});