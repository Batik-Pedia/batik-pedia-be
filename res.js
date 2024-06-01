'use strict';

exports.ok = function(values, res,status){
    var data = {
        'status' : status,
        'values': values
    };

    res.json(data);
    res.end();
}