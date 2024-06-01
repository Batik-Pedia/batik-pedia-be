'use strict';

var response =  require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Succesfully running REST API!", res)
};

/* Katalog  */

// Get All data katalog batik
 exports.getAllKatalogBatik = function(req, res){
    connection.query("SELECT * FROM katalog_batik", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
 }

//  Get data katalog batik by id
exports.getKatalogBatikId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM katalog_batik WHERE idBatik = ?", [id],function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
 }

 
/* Katalog  */


/* Berita */

 // Get All Berita
 exports.getAllBerita = function(req, res){
    connection.query("SELECT * FROM berita", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    })
 }


//  Get data berita by id
exports.getBeritaId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM berita WHERE idBerita = ?", [id],function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
 }

 /* Berita  */

 /* Wisata */

 //Get All Wisata
 exports.getAllWisata = function(req, res){
    connection.query("SELECT * FROM wisata", function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    })
 }

 exports.getWisataId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM berita WHERE idWisata = ?", [id],function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
 }

 /* Wisata */