var expect = require("chai").expect;
var {postmanGet} = require("../apiModules/EchoApi/postmanGet");


var test = {
    data: {
        URL: "https://postman-echo.com/get",
        PARAMS: 
        {   param1: 'p1',
            param2: 'p2'
        }
    }
}


describe('Postman Echo API Suite - GET', function() {
this.timeout(5000);

    describe('Basic Test', function() {

        it('Test 1', async function() {

            let responseOut = await postmanGet(test.data);
            expect(responseOut.url).to.equal(test.data.URL);

            
        });

    });

    
   
});