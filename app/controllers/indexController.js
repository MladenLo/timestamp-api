//Importing modules
var moment = require('moment');

var indexController = {};
indexController.index = function(req, res) {
  res.render('index');  
};

indexController.indexWithParameter = function(req, res) {
    var result;
    var timestampRegex = /^[0-9]*$/;
    var myTime;
    if(timestampRegex.test(req.params.timestring)) {
        myTime = moment.unix(req.params.timestring);
        result = {
            unix: myTime.unix(),
            natural: myTime.format("MMMM D, YYYY")
        };
    } else {
        myTime = moment(req.params.timestring);
        result = {
            unix: myTime.unix(),
            natural: myTime.format("MMMM D, YYYY")
        };
    }
    if(result.natural == "Invalid date") {
        result.unix = null;
        result.natural = null;
    }
    res.send(JSON.stringify(result));
};

module.exports = indexController;