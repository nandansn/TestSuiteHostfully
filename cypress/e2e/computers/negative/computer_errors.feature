Feature: add computers, form validation
    Scenario: add computers with no name for the computer
        Given I am on the add computers page
        When I click on the create this computer button
        Then I should see the form validation error for name "Failed to refine type : Predicate isEmpty() did not fail."

    Scenario: add computers with wrong introduced date format
        Given I am on the add computers page
        When I enter computer name as "ZXCVB"
        And I enter introduced date with wrong format as "13-10-1980"
        And I click on the create this computer button
        Then I should see the form validation error for introduced date "Failed to decode date : java.time.format.DateTimeParseException: Text '13-10-1980' could not be parsed at index 0"

    Scenario: add computers with wrong discontinued date format
        Given I am on the add computers page
        When I enter computer name as "ZXCVB"
        And I enter discontinued date with wrong format as "13-10-1980"
        And I click on the create this computer button
        Then I should see the form validation error for discontinued date "Failed to decode date : java.time.format.DateTimeParseException: Text '13-10-1980' could not be parsed at index 0"