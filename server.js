const {app} = require("./app")

const createServer = () => {
    return app.listen(app.get('port'), () => {
        console.log('server on port', app.get('port'));
    });
};

module.exports.createServer = createServer
