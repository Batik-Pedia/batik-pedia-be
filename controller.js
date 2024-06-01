'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Successfully running REST API!", res);
};

const author = "Andi Salam Syahputra"
const error404 = 'Data not found'
const error500 ='Internal Server Error'

/* Katalog  */

// Get All data katalog batik
exports.getAllKatalogBatik = function(req, res){
    connection.query("SELECT * FROM katalog_batik", function(error, rows, fields){
        if (error) {
            response.ok(error, res);
        } else {
            var data = {
                status : 200,
                author: author,
                katalogBatik: rows
            };
            response.ok(data,res);
        }
    });
};

// Get data katalog batik by id
exports.getKatalogBatikId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM katalog_batik WHERE idBatik = ?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    katalogBatik: rows
                };
                response.ok(data, res)
            }else{
                response.ok(rows, res);
            }
                
        }
    });
};

exports.addKatalogBatik = function(req, res){
    var namaBatik = req.body.namaBatik;
    var detailBatik = req.body.detailBatik;
    var sejarahBatik = req.body.sejarahBatik;
    var penggunaan = req.body.penggunaan;
    var makna = req.body.makna;
    var image = req.body.image;
    var lat = req.body.lat;
    var lon = req.body.lon;

    connection.query("INSERT INTO katalog_batik (namaBatik,detailBatik,sejarahBatik,penggunaan,makna,image,lat,lon) VALUES(?,?,?,?,?,?,?,?)", 
    [namaBatik,detailBatik,sejarahBatik,penggunaan,makna,image,lat,lon], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {

            response.ok(rows, res,201)
        }
    });

}

exports.deleteKatalogId = function(req, res){
    let id = req.body.idBatik
    connection.query("DELETE FROM katalog_batik WHERE idBatik =?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            response.ok("Succesfuly delete", res);
        }
    });
};

/* Katalog  */

/* Berita */

// Get All Berita
exports.getAllBerita = function(req, res){
    connection.query("SELECT * FROM berita", function(error, rows, fields){
        if (error) {
            response.ok(error, res);
        } else {
            var data = {
                status : 200,
                author: author,
                katalogBatik: rows
            };
            response.ok(data,res);
        }
    });
};

// Get data berita by id
exports.getBeritaId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM berita WHERE idBerita = ?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    berita: rows
                };
                response.ok(data,res)
            }else{
                response.ok(rows, res);
            }
                
        }
    });
};

exports.addBerita = function(req, res){
   var namaBerita = req.body.namaBerita
   var tglBerita = req.body.tglBerita
   var lokasiBerita = req.body.lokasiBerita
   var urlBerita = req.body.urlBerita
   var imageBerita = req.body.imageBerita

    connection.query("INSERT INTO berita (namaBerita, tglBerita, lokasiBerita, urlBerita, imageBerita) VALUES(?,?,?,?,?)", 
    [namaBerita, tglBerita, lokasiBerita, urlBerita,imageBerita], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {

            response.ok(rows, res,201)
        }
    });

}

exports.deleteBeritaId = function(req, res){
    let id = req.body.idBerita
    connection.query("DELETE FROM berita WHERE idBerita =?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
                response.ok("Succesfuly delete", res);
        }
    });
};

/* Berita  */

/* Wisata */

// Get All Wisata
exports.getAllWisata = function(req, res){
    connection.query("SELECT * FROM wisata", function(error, rows, fields){
        if (error) {
            response.ok(error, res);
        } else {
            var data = {
                status : 200,
                author: author,
                katalogBatik: rows
            };
            response.ok(data,res);
        }
    });
};

// Get data wisata by id
exports.getWisataId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM wisata WHERE idWisata = ?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    wisata: rows
                };
                response.ok(data, res)
            }else{
                response.ok(rows, res);
            }
                
        }
    });
};


exports.addWisata = function(req, res){
  var namaWisata = req.body.namaWisata
  var detailWisata = req.body.detailWisata
  var lat = req.body.lat
  var lon = req.body.lon
  var imageWisata = req.body.imageWisata

     connection.query("INSERT INTO wisata (namaWisata, detailWisata, lat, lon,imageWisata) VALUES(?,?,?,?,?)", 
     [namaWisata, detailWisata,lat,lon,imageWisata], function(error, rows, fields){
         if (error) {
            console.log(error);
            response.ok(error,res);
         } else {
 
             response.ok(rows, res,201)
         }
     });
 
 }

 exports.deleteWisataId = function(req, res){
    let id = req.body.idWisata
    connection.query("DELETE FROM wisata WHERE idWisata =?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
                response.ok("Succesfuly delete", res);
        }
    });
};

/* Wisata */



/* Kursus */

// Get All Kursus
exports.getAllKursus = function(req, res){
    connection.query("SELECT * FROM kursus_membatik", function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            response.ok(rows, res);
        }
    });
};

// Get data kursus by id
exports.getKursusId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM kursus_membatik WHERE idKursus = ?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    kursus: rows
                };
                response.ok(data, res)
            }else{
                response.ok(rows, res);
            }
                
        }
    });
};


exports.addKursus = function(req, res){
  var namaKursus = req.body.namaKursus
  var image = req.body.image
  var harga = req.body.harga
  var deskripsi = req.body.deskripsi

     connection.query("INSERT INTO kursus_membatik (namaKursus, image, harga, deskripsi) VALUES(?,?,?,?)", 
     [namaKursus,image,harga,deskripsi], function(error, rows, fields){
         if (error) {
            console.log(error);
            response.ok(error,res);
         } else {
 
             response.ok(rows, res,201)
         }
     });
 
 }

 exports.deleteKursusId = function(req, res){
    let id = req.body.idKursus
    connection.query("DELETE FROM kursus_membatik WHERE idKursus =?", [id], function(error, rows, fields){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
                response.ok("Succesfuly delete", res);
        }
    });
};


/* Kursus */
