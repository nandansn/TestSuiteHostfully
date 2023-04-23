Feature: Edit computer
    Scenario: Filter a computer and edit its details
        Given I am on the computers home page
        When I filter computers by name "AN/FSQ-32"
        Then I select the "AN/FSQ-32" computer from the filtered list
        Then I should be on the edit computer page for "AN/FSQ-32"
        And I enter "<computerName>" and "<introducedOn>" and "<discontinuedOn>" and "<brand>"
        And I click the Save this computer button
        Then I should see the message "<message>"
        Examples:
            | computerName                   | introducedOn | discontinuedOn | brand      | message                                                          |
            | Macintosh LC. 6.1 68k desktops | 2012-01-16   | 2022-01-16     | Apple Inc. | Done !  Computer Macintosh LC. 6.1 68k desktops has been updated |
            | IBM 3270 PC                    |              | 2023-02-16     | IBM        | Done !  Computer IBM 3270 PC has been updated                    |
            | Sony SVE15136CN                |              |                | Sony       | Done !  Computer Sony SVE15136CN has been updated                |
            | NeXTstation Turbo              |              |                |            | Done !  Computer NeXTstation Turbo has been updated              |

    Scenario: Cancel editing a computer
        Given I am on the computers home page
        When I filter computers by name "AN/FSQ-32"
        Then I select the "AN/FSQ-32" computer from the filtered list
        Then I should be on the edit computer page for "AN/FSQ-32"
        And I click the "Cancel" button
        Then I should be redirected to the home page