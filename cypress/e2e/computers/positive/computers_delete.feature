Feature: Deleting a computer from the computers table

    Scenario: Deleting a computer using the filter and edit pages
        Given I am on the computers home page
        When I filter the computers by "COSMAC ELF"
        And I select the computer "COSMAC ELF" from the filtered list
        Then I should be redirected to the computer edit page
        When I click the "Delete" button
        Then I should see the message "Done !  Computer COSMAC ELF has been deleted"
