const functions = require('@google-cloud/functions-framework');

const runEndPoint = functions.http('runEndPoint', (req, res) => {
    try {
        const path = req.url.substring(1);
        res.send(path);
    } catch (e) {
        res.error(`An error occured: ${e}`);
    }
});

module.exports = runEndPoint;

