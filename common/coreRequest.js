const axios = require('axios');

// this is core request module which will be called by 
// all the api route modules.
// this is generic module that take request 'configs' and return error or response
// this module uses axios binding (npm package)
const coreRequest = ( configs ) =>
    new Promise((resolve, reject) => {
        axios( configs )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    });

module.exports = {coreRequest};    
