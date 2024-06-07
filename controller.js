'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Successfully running REST API!", res);
};

const author = "Andi Salam Syahputra"
const error404 = 'Data not found'

/* Katalog  */

exports.getAllKatalogBatik = function(req, res){
    let query = "SELECT * FROM katalog_batik";

    // Membuat variabel untuk menampung kondisi WHERE
    let conditions = [];

    // Cek apakah ada parameter filterWilayah dan terapkan filter
    if (req.query.filterWilayah && req.query.filterWilayah !== 'Semua') {
        const filterWilayah = req.query.filterWilayah;
        conditions.push(`wilayah='${filterWilayah}'`);
    }

    if (req.query.filterJenisBatik && req.query.filterJenisBatik !== 'Semua') {
        const filterJenisBatik = req.query.filterJenisBatik;
        conditions.push(`jenisBatik='${filterJenisBatik}'`);
    }

    if (conditions.length > 0) {
        query += " WHERE " + conditions.join(" AND ");
    }


    if (req.query.sort) {
        const sortBy = req.query.sort;
        const order = req.query.order === 'desc' ? 'DESC' : 'ASC';
        query += ` ORDER BY ${sortBy} ${order}`;
    }

    connection.query(query, function(error, rows){
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
    connection.query("SELECT * FROM katalog_batik WHERE idBatik = ?", [id], function(error, rows){
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
                response.ok(rows[0], res);
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
    var jenisBatik = req.body.jenisBatik;
    var wilayah = req.body.wilayah;

    connection.query("INSERT INTO katalog_batik (namaBatik,detailBatik,sejarahBatik,penggunaan,makna,image,lat,lon,jenisBatik,wilayah) VALUES(?,?,?,?,?,?,?,?,?,?)",
        [namaBatik,detailBatik,sejarahBatik,penggunaan,makna,image,lat,lon,jenisBatik,wilayah], function(error, rows){
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
    connection.query("DELETE FROM katalog_batik WHERE idBatik =?", [id], function(error){
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
    connection.query("SELECT * FROM berita", function(error, rows){
        if (error) {
            response.ok(error, res);
        } else {
            var data = {
                status : 200,
                author: author,
                berita: rows
            };
            response.ok(data,res);
        }
    });
};

// Get data berita by id
exports.getBeritaId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM berita WHERE idBerita = ?", [id], function(error, rows){
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
                response.ok(rows[0], res);
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
        [namaBerita, tglBerita, lokasiBerita, urlBerita,imageBerita], function(error, rows){
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
    connection.query("DELETE FROM berita WHERE idBerita =?", [id], function(error){
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
    connection.query("SELECT * FROM wisata", function(error, rows){
        if (error) {
            response.ok(error, res);
        } else {
            var data = {
                status : 200,
                author: author,
                wisata: rows
            };
            response.ok(data,res);
        }
    });
};

// Get data wisata by id
exports.getWisataId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM wisata WHERE idWisata = ?", [id], function(error, rows){
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
                response.ok(rows[0], res);
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
        [namaWisata, detailWisata,lat,lon,imageWisata], function(error, rows){
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
    connection.query("DELETE FROM wisata WHERE idWisata =?", [id], function(error){
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
    connection.query("SELECT * FROM kursus_membatik", function(error, rows){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {

            var data = {
                status : 200,
                author: author,
                kursus: rows
            };

            response.ok(data, res);
        }
    });
};

// Get data kursus by id
exports.getKursusId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM kursus_membatik WHERE idKursus = ?", [id], function(error, rows){
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
                response.ok(rows[0], res);
            }

        }
    });
};


exports.addKursus = function(req, res){
    var namaKursus = req.body.namaKursus
    var image = req.body.image
    var harga = req.body.harga
    var deskripsi = req.body.deskripsi
    var urlKursus = req.body.urlKursus

    connection.query("INSERT INTO kursus_membatik (namaKursus, image, harga, deskripsi,urlKursus) VALUES(?,?,?,?,?)",
        [namaKursus,image,harga,deskripsi,urlKursus], function(error, rows){
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
    connection.query("DELETE FROM kursus_membatik WHERE idKursus =?", [id], function(error){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            response.ok("Succesfuly delete", res);
        }
    });
};


/* Kursus */


/* Video Batik */

// Get All Kursus
exports.getAllVideo = function(req, res){
    connection.query("SELECT * FROM video_batik", function(error, rows){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {


            response.ok(rows, res);
        }
    });
};

// Get data kursus by id
exports.getVidBatikId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM video_batik WHERE idKursus = ?", [id], function(error, rows){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    video: rows
                };
                response.ok(data, res)
            }else{
                response.ok(rows[0], res);
            }

        }
    });
};


exports.addVideoBatik = function(req, res){
    var judulVideo = req.body.judulVideo
    var imgVideo = req.body.imgVideo
    var urlVideo = req.body.urlVideo

    connection.query("INSERT INTO video_batik (judulVideo,imgVideo,urlVideo) VALUES(?,?,?)",
        [judulVideo,imgVideo,urlVideo], function(error, rows){
            if (error) {
                console.log(error);
                response.ok(error,res);
            } else {

                response.ok(rows, res,201)
            }
        });

}

exports.deleteVideoBatik = function(req, res){
    let id = req.body.idVideo
    connection.query("DELETE FROM video_batik WHERE idKursus =?", [id], function(error){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            response.ok("Succesfuly delete", res);
        }
    });
};

/* Video Batik */



/* Nusantara */

// Get All Nusantara
exports.getAllProvinsi = function(req, res){
    connection.query("SELECT * FROM provinsi", function(error, rows){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {


            response.ok(rows, res);
        }
    });
};

// Get data provinsi by id
exports.getProvinsiId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM provinsi WHERE idProvinsi = ?", [id], function(error, rows){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            if(rows.length === 0){
                var data = {
                    status : 404,
                    message: error404,
                    video: rows
                };
                response.ok(data, res)
            }else{
                response.ok(rows[0], res);
            }

        }
    });
};


exports.addProvinsi = function(req, res){
    var namaProvinsi = req.body.namaProvinsi
    var imgProvinsi = req.body.imgProvinsi
    var detailProvinsi = req.body.detailProvinsi

    connection.query("INSERT INTO provinsi (namaProvinsi,imgProvinsi,detailProvinsi) VALUES(?,?,?)",
        [namaProvinsi,imgProvinsi,detailProvinsi], function(error, rows){
            if (error) {
                console.log(error);
                response.ok(error,res);
            } else {

                response.ok(rows, res,201)
            }
        });

}

exports.deleteProvinsi = function(req, res){
    let id = req.body.idProvinsi
    connection.query("DELETE FROM provinsi WHERE idKursus =?", [id], function(error){
        if (error) {
            console.log(error);
            response.ok(error,res);
        } else {
            response.ok("Succesfuly delete", res);
        }
    });
};

/* Nusantara*/