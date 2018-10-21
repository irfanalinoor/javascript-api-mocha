const {coreRequest} = require ('../../common/coreRequest');

const Get_ByCapital = testData =>
    new Promise( (resolve, reject) => {

        let apiService = "/capital/";
        let _url = apiService + testData.INPUT_CAPITAL;

        configs = {
                method : "get",
                baseURL : testData.BASEURL,
                url : _url
            }

        coreRequest( configs )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
            console.log("Error Inside Get_ByCapital module: "+error);
        });
    });

module.exports = {Get_ByCapital};