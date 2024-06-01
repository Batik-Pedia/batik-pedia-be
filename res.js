'use strict';

exports.ok = function(values, res,status){
    var data = {
        'status' : status,
        'values': values,
        'author': process.env.author
    };

    res.json(data);
}