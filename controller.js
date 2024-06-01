'use strict';

var response =  require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Succesfully running REST API!", res)
};

// Get All data katalog batik
 exports.getAllKatalogBatik = function(req, res){
    connection.query("SELECT * FROM katalog_batik", function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    })
 }



 // Get All Berita
 exports.getAllBerita = function(req, res){
    connection.query("SELECT * FROM berita", function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    })
 }


 //Get All Wisata
 exports.getAllWisata = function(req, res){
    connection.query("SELECT * FROM wisata", function(error,rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    })
 }