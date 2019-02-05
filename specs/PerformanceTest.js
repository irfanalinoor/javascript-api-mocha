const expect = require("chai").expect;
const {Get_ForecastByPostalCode} = require("../apiModules/Weather/Get_ForecastByPostalCode");
const {Get_CurrentByGPSCoordinates} = require("../apiModules/Weather/Get_CurrentByGPSCoordinates");
const data = require('../resource/datafile/InputData.json');


describe('Performance Test Suite', function() {
this.timeout(500000);

var expectedApiResponseTime = 4000;


  it('Verify Response=OK when both APIs are called 10times', async function() {

    console.log("Expected Response Time per Api Request Call = "+expectedApiResponseTime);
          
    for(var i = 0; i < 10; i++) {

      // console.log("Calling APIs in "+i+" iteration")
      
      testData1 = data.BaseURL+'current/?lat='+data.Current[i].Lat+'&lon='+data.Current[i].Lon+'&key='+data.ApiKey;

      testData2 = data.BaseURL+'forecast/3hourly?postal_code='+data.Forecast3Hourly[i].Postal_Code+'&key='+data.ApiKey;

      currentResponse = await Get_CurrentByGPSCoordinates(testData1);

      forecastResponse = await Get_ForecastByPostalCode(testData2);

      expect(currentResponse.statusCode).to.equal(200);  

      expect(currentResponse.elapsedTime).to.lessThan(expectedApiResponseTime);
      
      expect(forecastResponse.statusCode).to.equal(200);

      expect(forecastResponse.elapsedTime).to.lessThan(expectedApiResponseTime);

      // console.log(">>> Response Code of \'Current Weather By GPS Coordinates\' Api = "+currentResponse.statusCode);
      // console.log(">>> Response Time of \'Current Weather By GPS Coordinates\' Api = "+currentResponse.elapsedTime);

      // console.log(">>> Response Time of \'Forecast Weather By Postal Code\' Api = "+forecastResponse.statusCode);
      // console.log(">>> Response Time of \'Forecast Weather By Postal Code\' Api = "+forecastResponse.elapsedTime);

    }
          
    });


});