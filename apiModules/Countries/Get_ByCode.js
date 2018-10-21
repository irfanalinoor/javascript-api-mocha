const {coreRequest} = require ('../../common/coreRequest');

const Get_ByCode = testData =>
    new Promise( (resolve, reject) => {
        let apiService = "/alpha/";
        let _url = apiService + testData.INPUT_CODE;

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
            console.log("Error Inside Get_ByCode module: "+error);
        });
    });

module.exports = {Get_ByCode};