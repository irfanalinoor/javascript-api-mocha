const axios = require('axios');

// this is base request module which will be called by 
// all the api route modules.
// this is generic module that take request inputs and return error or response
// this module uses axios binding (npm package)
const baseRequest = ( _method, _url) =>
    new Promise((resolve, reject) => {
        axios({
            method : _method,
            url : _url
        })
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    });

module.exports = {baseRequest};    
