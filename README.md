## API JavaScript Test Automation Framework [![CircleCI](https://circleci.com/gh/irfanalinoor/javascript-api-mocha/tree/master.svg?style=svg)](https://circleci.com/gh/irfanalinoor/javascript-api-mocha/tree/master)

## Overview
* This is simple project to showcase Api Test Automation Framework in JavaScript using mocha.
* Project uses free [Countries RESTApi](http://restcountries.eu) & [World Weather Api](https://www.weatherbit.io/api)
* **Skills:** Api Test Automation, Modular Design
* **Languages:** JavaScript/ Node.JS
* **SCM:** Git
* **Build/Dependency Management:** npm, Request-Promise
* **API Testing Frameworks:** Mocha, REST Api, Data-Driven (Json)
* **Assertion Lib:** Chai, Expect, Should
* **CI/CD:** Integration with [CircleCI](https://circleci.com/gh/irfanalinoor)

## Setup
* Download [javascript-api-mocha](https://github.com/irfanalinoor/javascript-api-mocha) Project from GitHub
* Install latest [Node.JS](https://nodejs.org/en/download/)
* Install latest [Visual Studio Code](https://code.visualstudio.com/download)
* Open Terminal and Navigate to Project Directory
* Run `$ npm install`
* Run `$ npm install -g mocha`
* Run Tests `$ npm test`

## Sample Test Scenarios - [Test Report Summary](http://htmlpreview.github.io/?https://github.com/irfanalinoor/ApiJavaScriptAutomation/blob/master/mochawesome-report/mochawesome.html)

    Current Weather Data API - Test Suite
    Basic Shakedown Tests
      √ Verify 'Current Weather By GPS Coordinates' Api response is OK (1157ms)
    Functional (Data-Driven) Tests
      √ Verify STATE CODE is displayed in response of 'Current Weather By GPS Coordinates' Api (1120ms)

    Forecast Weather Data API - Test Suite
    Basic Shakedown Tests
      √ Verify 'Forecast - 3 Hourly Data' Api response is OK
    Functional (Data-Driven) Tests
      √ Verify response of 'Forecast Weather By Postal Code' Api have value of TIMESTAMP UTC (1226ms)
      √ Verify response of 'Forecast Weather By Postal Code' Api have value of WEATHER (1505ms)

    Performance Test Suite
    Expected Response Time per Api Request Call = 3500 ms
      √ Verify Response Time less than 3500 ms per API call when both APIs are called 10times (23901ms)

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


## CI/CD Run
- Change [InputData](https://github.com/irfanalinoor/javascript-api-mocha/blob/master/resource/datafile/InputData.json) to run tests on CircleCI

- CircleCI - Config.yml

      version: 2
      jobs:
        build:
          working_directory: ~/JavaScriptApiAutomation
          docker:
            - image: circleci/node:8.0
            - image: mongo:3.4.4
          steps:
            - run:
                name: "Checking NodeJs + NPM Version"
                command: |
                  node --version
                  npm --version
            - checkout
            - restore_cache:
                key: dependency-cache-{{ checksum "package.json" }}
            - run:
                name: Install Mocha
                command: 'sudo npm i -g mocha'
            - run:
                name: Run API Tests
                command: 'npm test'

    
