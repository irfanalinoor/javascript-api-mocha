
const expect = require("chai").expect;
const {Get_CurrentByGPSCoordinates} = require("../apiModules/Weather/Get_CurrentByGPSCoordinates");
const data = require('../resource/datafile/InputData.json');


describe('Current Weather Data API - Test Suite', function() {
this.timeout(30000);

    describe('Basic Shakedown Tests', function() {

        it('Verify \'Current Weather By GPS Coordinates\' Api response is OK', async function() {

            testData = data.BaseURL+'current/?lat=0&lon=0&key='+data.ApiKey;

            // console.log("Running Test for Current Weather By GPS Coordinates "+testData);
            
            currentResponse = await Get_CurrentByGPSCoordinates(testData);

            expect(currentResponse.statusCode).to.equal(200);
            
            currentResponseBody = JSON.parse(currentResponse.body);
     
            expect(currentResponseBody.data).to.be.an('array');
            
        });

    });


    describe('Functional Tests', function() {

        it('Verify STATE CODE is displayed in response of \'Current Weather By GPS Coordinates\' Api' , async function() {

            testData = data.BaseURL+'current/?lat='+data.Current[2].Lat+'&lon='+data.Current[2].Lon+'&key='+data.ApiKey;

            // console.log("Running Test for Current Weather By GPS Coordinates "+testData);/
            
            currentResponse = await Get_CurrentByGPSCoordinates(testData);

            expect(currentResponse.statusCode).to.equal(200);
            
            currentResponseBody = JSON.parse(currentResponse.body);
            
            expect(currentResponseBody.data[0]).to.include.any.keys( 'state_code');
            
            expect(currentResponseBody.data[0].state_code).not.to.be.null;

        });

    });

});