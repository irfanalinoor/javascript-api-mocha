const {baseRequest} = require ('../../common/baseRequest');


const postmanGet = testData =>
    new Promise(async (resolve, reject) => {
        baseRequest(
            'get',
            testData.URL
        )
        .then((resp) => resolve(resp))
        .catch(err => reject (err))
    });

module.exports = {postmanGet};