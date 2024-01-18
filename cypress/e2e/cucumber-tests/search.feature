Feature: Google search

Scenario: search keeggo on google successfully
    Given I open automationexercise login page
    And I type login data
    When I click in products
    And I search for a product in the search bar
    And I put the product in my cart
    Then I valid the product in my cart