#language: en

Feature: Validate dashboard page

    Scenario: Check and verify the dashboard elements
        Given Login to OrangeHRM
        When check dashboard page is active
        Then verify page header

Feature: Validate admin page

    Scenario: Check and verify the admin page elements
        Given Login to OrangeHRM
        When check dashboard page is active
        Then verify page header
