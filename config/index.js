var configValues = require ('./config.json');

module.exports = {
    getDbConnectionString : function (){
        return `mongodb://${configValues.username}:${configValues.password}@ds229648.mlab.com:29648/nodetestdn`;
    }
}