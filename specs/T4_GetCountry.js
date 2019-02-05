
var expect = require("chai").expect;
var {Get_ByName} = require("../apiModules/Countries/Get_ByName");
var {Get_ByCode} = require("../apiModules/Countries/Get_ByCode");
var {Get_ByCapital} = require("../apiModules/Countries/Get_ByCapital");
var {Get_ByRegion} = require("../apiModules/Countries/Get_ByRegion");


var test = {
    data: {
        BASEURL: "https://restcountries.eu/rest/v2/",
        URL: "/name",
        INPUT_NAME: "Australia",
        INPUT_CAPITAL: "Canberra",
        INPUT_CODE: "AU",
        INPUT_REGION: "Oceania"
    }
}

//
describe('Rest Countries API - Test Suite', function() {
this.timeout(30000);

    describe('Basic Shakedown Tests', function() {

        it('Verify \'Name\' Api response is OK', async function() {
            test.data.INPUT_NAME = "Australia"
            byName_response = await Get_ByName(test.data);
            expect(byName_response.status).to.equal(200);
            expect(byName_response.data).to.be.an('array');
            
        });

        it('Verify \'Code\' Api response is OK', async function() {
            test.data.INPUT_CODE = "AU"
            byCode_response = await Get_ByCode(test.data);
            expect(byCode_response.status).to.equal(200);
            expect(byCode_response.data).to.include.any.keys( 'name', 'topLevelDomain',
            'alpha2Code','alpha3Code','callingCodes','capital','altSpellings','region',
            'subregion','population','demonym','area','nativeName','numericCode','currencies');
        });

        it('Verify \'Capital\' Api response is OK', async function() {
            test.data.INPUT_CAPITAL = "Canberra",
            byCapital_response = await Get_ByCapital(test.data);
            expect(byCapital_response.status).to.equal(200);
            expect(byCapital_response.data).to.be.an('array');
            
        });

        it('Verify \'Region\' Api response is OK', async function() {
            test.data.INPUT_REGION = "Oceania"
            byRegion_response = await Get_ByRegion(test.data);
            expect(byRegion_response.status).to.equal(200);
            expect(byRegion_response.data).to.be.an('array');
            
        });
    });


    describe('Functional Tests', function() {

        it('Verify CAPITAL NAME in \'Name Api\' using \'Capital Api\'' , async function() {

            test.data.INPUT_CODE = "AU"   //Australia
            byCode_response = await Get_ByCode(test.data);
            //take name of country + capital from response of CODE api
            test.data.INPUT_NAME = byCode_response.data.name
            test.data.INPUT_CAPITAL = byCode_response.data.capital
            //get responses of 'Name api' and 'Capital api'
            byName_response = await Get_ByName(test.data);
            byCapital_response = await Get_ByCapital(test.data);
            //expect that both response should have 'Country name' and 'capital'
            expect(byName_response.data[0]).to.include.any.keys( 'name', 'capital',);
            expect(byCapital_response.data[0]).to.include.any.keys( 'name', 'capital',);
            //Verify capital_name in 'Name Api' using 'Capital Api'
            expect(byName_response.data[0].capital).to.equal(byCapital_response.data[0].capital);
        });

        it('Verify POPULATION value is same in \'Name + Code + Capital\' Api responses' , async function() {

            test.data.INPUT_CODE = "CN"  //CHINA
            byCode_response = await Get_ByCode(test.data);
            //take name of country + capital from response of CODE api
            test.data.INPUT_NAME = byCode_response.data.name
            test.data.INPUT_CAPITAL = byCode_response.data.capital
            //get responses of 'Name api' and 'Capital api'
            byName_response = await Get_ByName(test.data);
            byCapital_response = await Get_ByCapital(test.data);
            //expect that both response should have 'Country name' and 'capital'
            expect(byName_response.data[0]).to.include.any.keys( 'population');
            expect(byCapital_response.data[0]).to.include.any.keys( 'population',);
            //Verify Population value is same in Name + Code + Capital Api responses
            expect(byCode_response.data.population).to.equal(byName_response.data[0].population);
            expect(byCode_response.data.population).to.equal(byCapital_response.data[0].population);
            expect(byName_response.data[0].population).to.equal(byCapital_response.data[0].population);
        });

        it('Verify AREA value is same in \'Name + Code + Capital\' Api responses' , async function() {

            test.data.INPUT_CODE = "PK"  //PAKISTAN
            byCode_response = await Get_ByCode(test.data);
            //take name of country + capital from response of CODE api
            test.data.INPUT_NAME = byCode_response.data.name
            test.data.INPUT_CAPITAL = byCode_response.data.capital
            //get responses of 'Name api' and 'Capital api'
            byName_response = await Get_ByName(test.data);
            byCapital_response = await Get_ByCapital(test.data);
            //expect that both response should have 'Country name' and 'capital'
            expect(byName_response.data[0]).to.include.any.keys( 'area');
            expect(byCapital_response.data[0]).to.include.any.keys( 'area',);
            //Verify AREA value is same in Name + Code + Capital Api responses
            expect(byCode_response.data.area).to.equal(byName_response.data[0].area);
            expect(byCode_response.data.area).to.equal(byCapital_response.data[0].area);
            expect(byName_response.data[0].area).to.equal(byCapital_response.data[0].area);
        });
    });

});