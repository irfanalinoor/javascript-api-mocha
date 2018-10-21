const {coreRequest} = require ('../../common/coreRequest');

const Get_ByRegion = testData =>
    new Promise( (resolve, reject) => {

        let apiService = "/region/";
        let _url = apiService + testData.INPUT_REGION;

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
            console.log("Error Inside Get_ByRegion module: "+error);
        });
    });

module.exports = {Get_ByRegion};