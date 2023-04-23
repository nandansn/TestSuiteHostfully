![Hostfully Logo](./logo.jpeg)

# Computer Test Suite Hostfully

UI Test Suite: Automated UI testing suite for computers web app.

## Technologies Used

- cypress
- typescript
- gherkin
- mochawesome
- docker

## Design

### Page and Page elements design

Used **Page Component Pattern**

- Break down each page into smaller, reusable components, which are then used to build the page object. This can make your code more flexible and scalable, as you can reuse components across multiple pages and easily make changes to specific parts of the page without affecting the rest.

### Test case design,

- Use BDD framework gherkin, cucumber to create feature and step definition files, for the test cases.
- Applied test data driven appraoch in required scenarios.

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

## Test execution:

You can follow, anyone of the following methods to execute the tests,

### Method 1: Using Docker

The project has been published to docker registry

**pre-requisites**

- Docker running on your machine

**Step 1: pull the docker image**

```
    docker pull geeknandadocker13/hostfully:v1.0.0
```

**Step 2: execute test using the docker image**

```
    docker run -v /home/username/any-directory/:/hostfully-project/mochawesome-report/ geeknandadocker13/hostfully:v1.0.0
```

note: /home/username/any-directory/ => path where you want to store the report in your local host

after test execution you will see the reports in /home/username/any-directory as html files

### Method 2: Executing from project directory

**pre-requisites**

- nodejs installed on your machine

To install test project **TestSuiteHostFully**, follow these steps:

1. Clone the repository : git@github.com:nandansn/TestSuiteHostfully.git
2. Install dependencies: `npm install`
3. Run the application: `npm test`
