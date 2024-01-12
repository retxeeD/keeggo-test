Feature: Get action by id

Scenario: Make a get request by id successfully
    Given I make a request
    Then I show list.name value
    And Valid the statusCode