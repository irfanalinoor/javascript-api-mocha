const {coreRequest} = require ('../../common/coreRequest');

const Get_ByName = testData =>
    new Promise( (resolve, reject) => {

        let apiService = "/name/";
        let _url = apiService + testData.INPUT_NAME;

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
            console.log("Error Inside Get_ByName module: "+error);
        });
    });

module.exports = {Get_ByName};