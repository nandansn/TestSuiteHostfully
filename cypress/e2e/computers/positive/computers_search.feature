Feature: Filtering computers by name
    Scenario: User filters computers by exact name
        Given i am on the computer home page
        When i enter the name of a computer "AN/FSQ-32" in the filter text field
        Then i click the filter button
        Then the list of computers table should be displayed
        And i should see the record for search, with computer name "AN/FSQ-32" introduced on "01 Jan 1960" discontinued on "-" and company as "IBM"
        And i should see the count message "One computer found"

    Scenario: User filters computers by partial name match
        Given i am on the computer home page
        When i enter the name of a computer "Cosmac" in the filter text field
        Then i click the filter button
        Then i should see the list of computers displayed include computers whose name contains Cosmac,  with computer name "COSMAC ELF" introduced on "-" discontinued on "-" and company as "RCA"
        And i should see the count message "2 computers found"

    Scenario: User filters computers with no name match
        Given i am on the computer home page
        When i enter the name of a computer "asdf" in the filter text field
        Then i click the filter button
        Then the list of computers table should not be displayed
        And i should see the message "Nothing to display"
        And i should see the count message "No computer"
        And i should see the pagination buttons are disabled

    Scenario: User able to navigate the list using pagination
        Given i am on the computer home page
        When i enter the name of a computer "AC" in the filter text field
        Then i click the filter button
        And i should see the count message "116 computers found"
        And i click the next navigation link
        Then i should see the pagination message "Displaying 11 to 20 of 116"
        Then i click the previous navigation link
        Then i should see the pagination message "Displaying 1 to 10 of 116"


