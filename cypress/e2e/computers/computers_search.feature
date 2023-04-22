Feature: Filtering computers by name
    Scenario: User filters computers by exact name
        Given i am on the computer home page
        When i enter the name of a computer "AN/FSQ-32" in the filter text field
        And i click the filter button
        Then the list of computers table should be displayed
        And i should see the record for search, with computer name "AN/FSQ-32" introduced on "01 Jan 1960" discontinued on "-" and company as "IBM"

    Scenario: User filters computers by partial name match
        Given i am on the computer home page
        When i enter the name of a computer "Cosmac" in the filter text field
        And i click the filter button
        Then i should see the list of computers displayed include computers whose name contains Cosmac,  with computer name "COSMAC ELF" introduced on "-" discontinued on "-" and company as "RCA"

    Scenario: User filters computers with no name match
        Given i am on the computer home page
        When i enter the name of a computer "asdf" in the filter text field
        And i click the filter button
        Then the list of computers table should not be displayed
        And i should see the message "Nothing to display"
