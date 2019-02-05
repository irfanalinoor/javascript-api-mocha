const rp = require('request-promise');

// this is core request module which will be called by 
// all the api route modules.
// this is generic module that take request 'options' and return error or response
// this module uses request-promise binding (npm package)
const RequestPromise = ( options ) =>
    new Promise((resolve, reject) => {
        rp( options )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
        });
    });

module.exports = {RequestPromise};    
