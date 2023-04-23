Feature: add computers
    Scenario: add computers with valid data and required data
        Given I am on the add computers page
        When I enter "<computerName>" and "<introducedOn>" and "<discontinuedOn>" and "<brand>"
        And I click on the create this computer button
        Then I should see the "<message>"
        Examples:
            | computerName                   | introducedOn | discontinuedOn | brand      | message                                                          |
            | Macintosh LC. 6.1 68k desktops | 2012-01-16   | 2022-01-16     | Apple Inc. | Done !  Computer Macintosh LC. 6.1 68k desktops has been created |
            | IBM 3270 PC                    |              | 2023-02-16     | IBM        | Done !  Computer IBM 3270 PC has been created                    |
            | Sony SVE15136CN                |              |                | Sony       | Done !  Computer Sony SVE15136CN has been created                |
            | NeXTstation Turbo              |              |                |            | Done !  Computer NeXTstation Turbo has been created              |