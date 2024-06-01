'use strict';

module.exports = function(app){
    var jsonku = require("./controller");

    app.route('/')
    .get(jsonku.index);

    app.route('/katalog')
    .get(jsonku.getAllKatalogBatik);

    app.route('/berita')
    .get(jsonku.getAllBerita);

    app.route('/wisata')
    .get(jsonku.getAllWisata);
}