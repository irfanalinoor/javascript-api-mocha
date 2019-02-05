var expect = require("chai").expect;
var {postmanPost} = require("../apiModules/EchoApi/postmanPost");


var test = {
    data: {
        URL: "https://postman-echo.com/post",
        PARAMS: 
        {   param1: 'p1',
            param2: 'p2'
        }
    }
}


describe('Postman Echo API Suite - POST', function() {
this.timeout(5000);

    describe('Basic Test', function() {

        it('Test 1', async function() {

            let responseOut = await postmanPost(test.data);
            expect(responseOut.url).to.equal(test.data.URL);

            
        });

    });

    
   
});