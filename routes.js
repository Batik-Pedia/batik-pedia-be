'use strict';

module.exports = function(app){
    var jsonku = require("./controller");

    app.route('/')
    .get(jsonku.index);

    /* Katalog */
    
    app.route('/katalog')
    .get(jsonku.getAllKatalogBatik);

    app.route('/katalog/:id')
    .get(jsonku.getKatalogBatikId);

    /* Katalog */

    /* Berita */

    app.route('/berita')
    .get(jsonku.getAllBerita);

    app.route('/berita/:id')
    .get(jsonku.getBeritaId);

    /* Berita */

    /* Wisata */
    app.route('/wisata')
    .get(jsonku.getAllWisata);

    app.route('/wisata/:id')
    .get(jsonku.getWisataId);

    /* Wisata */
}