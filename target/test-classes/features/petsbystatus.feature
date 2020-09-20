Feature: Verifying number of pets with status=available name=doggie

    @happyPath
    Scenario: Happy path testing
      Given I set petsByStatus service endpoint for swagger service
      When I set a GET request for queryparam status = "available"
      Then I calculate how many of result set has name "doggie" and validate results

  @mocking
    Scenario: Mock testing
      Given I set petsByStatus endpoint for mocking service
      When I set a GET request for queryparam status = "available"
      Then I calculate how many of result set has name "doggie" and validate results

  @negativeTest
  Scenario: Negative testing - 1
    Given I set petsByStatus service endpoint for swagger service
    When I set a GET request for queryparam status = "availablee"
    Then I receive enum incompatibilty as regards to enum PetStatus

  @negativeTests
    Scenario: Negative testing - 2
      Given I set petsByStatus service endpoint for swagger service
      When I set a GET request for queryparam status = "available"
      Then I calculate how many of result set has name "doggiee" and have zero result

  @negativeTest
  Scenario: Negative testing - 3
    Given I set petsByStatus endpoint for mocking service with XML content type
    When I set a GET request for queryparam status = "available"
    Then I validate content types are incompatable





