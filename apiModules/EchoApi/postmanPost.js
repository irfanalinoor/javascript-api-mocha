const {baseRequest} = require ('../../common/baseRequest');


const postmanPost = testData =>
    new Promise(async (resolve, reject) => {
        baseRequest(
            'post',
            testData.URL
        )
        .then((resp) => resolve(resp))
        .catch(err => reject (err))
    });

module.exports = {postmanPost};