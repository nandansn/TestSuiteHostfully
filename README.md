![Hostfully Logo](./logo.jpeg)

# Computer Test Suite Hostfully

UI Test Suite: Automated UI testing suite for computers web app.

## Installation

To install test project **TestSuiteHostFully**, follow these steps:

1. Clone the repository.
2. Install dependencies: `npm install`

## Usage

To rub test project **TestSuiteHostFully**, follow these steps:

1. Run the application: `npx cypress run`

## Design

Used **Page Component Pattern**

- Break down each page into smaller, reusable components, which are then used to build the page object. This can make your code more flexible and scalable, as you can reuse components across multiple pages and easily make changes to specific parts of the page without affecting the rest.

## Test Scenarios

### Positive scenarios for add computer functionality

- TC: Add a new computer with all fields filled
- TC: Add a new computer with only mandatory fields filled
- TC: Add a new computer with discontinued date and brand fields filled
- TC: Add a new computer with only brand fields filled

### Positive scenarios for edit computer functionality

- TC:Filter a computer and edit its details
- TC: Cancel editing a computer

### Positive scenarios for delete computer functionality

- TC: Deleting a computer using the filter and edit pages

### Positive scenarios for search computer functionality

- TC: User filters computers by partial name match
- TC: User filters computers with no name match
- TC: User able to navigate the list using pagination

### Negative scenarios for user data validation

- TC: add computers with no name for the computer
- TC: add computers with wrong introduced date format
- TC: add computers with wrong discontinued date format
