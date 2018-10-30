## API JavaScript Test Automation Framework


## Overview
* This is demo project to showcase Api Test Automation Framework in JavaScript.
* Project uses free [Countries RESTApi](http://restcountries.eu) & [Postman Echo Api](https://docs.postman-echo.com)
* **Skills:** Api Test Automation, Modular Design
* **Languages:** JavaScript
* **SCM:** Git
* **Build/Dependency Management:** Mocha/npm
* **API Testing Frameworks:** REST Api, NodeJS, Request
* **Assertion Lib:** Chai, Expect, Should
* **CI/CD:** Jenkins (To Be Added)
----
## Setup
1. Download [ApiJavaScriptAutomation](https://github.com/irfanalinoor/ApiJavaScriptAutomation) Project from GitHub
2. Install latest [Node.JS](https://nodejs.org/en/download/)
3. Open Terminal and Navigate to Project Directory
4. Run `$ npm install`
5. Run `$ npm install -g mocha`
6. Run Tests `$ npm test`

----
## Test Scenarios

    Rest Countries API - Test Suite
    Basic Shakedown Tests
      ✓ Verify 'Name' Api response is OK (3784ms)
      ✓ Verify 'Code' Api response is OK (1862ms)
      ✓ Verify 'Capital' Api response is OK (2333ms)
      ✓ Verify 'Region' Api response is OK (3624ms)
    Functional Tests
      ✓ Verify CAPITAL NAME in 'Name Api' using 'Capital Api' (5214ms)
      ✓ Verify POPULATION value is same in 'Name + Code + Capital' Api responses (5835ms)
      ✓ Verify AREA value is same in 'Name + Code + Capital' Api responses (5358ms)



