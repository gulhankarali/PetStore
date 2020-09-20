$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/petsbystatus.feature");
formatter.feature({
  "name": "Verifying number of pets with status\u003davailable name\u003ddoggie",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Happy path testing",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@happyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I set GET petsByStatus service endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "petsByStatusStepDefs.i_set_GET_petsByStatus_service_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request for queryparam status \u003d \"available\"",
  "keyword": "When "
});
formatter.match({
  "location": "petsByStatusStepDefs.send_a_GET_request_for_queryparam_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate results and calculate how many of result set has name \"doggie\"",
  "keyword": "Then "
});
formatter.match({
  "location": "petsByStatusStepDefs.i_validate_results_and_calculate_how_many_of_result_set_has_name(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Results are very dynamic! It is expected to be 10 but there are 152 expected:\u003c10\u003e but was:\u003c152\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat com.petstore.step_definitions.petsByStatusStepDefs.i_validate_results_and_calculate_how_many_of_result_set_has_name(petsByStatusStepDefs.java:45)\n\tat ✽.I validate results and calculate how many of result set has name \"doggie\"(file:src/test/resources/features/petsbystatus.feature:7)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});