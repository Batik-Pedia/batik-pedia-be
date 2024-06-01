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

    app.route('/add-katalog')
    .post(jsonku.addKatalogBatik);

    app.route('/delete-katalog')
    .delete(jsonku.deleteKatalogId);

    /* Katalog */

    /* Berita */

    app.route('/berita')
    .get(jsonku.getAllBerita);

    app.route('/berita/:id')
    .get(jsonku.getBeritaId);

    app.route('/add-berita')
    .post(jsonku.addBerita);

    app.route('/delete-berita')
    .delete(jsonku.deleteBeritaId);

 

    /* Berita */

    /* Wisata */
    app.route('/wisata')
    .get(jsonku.getAllWisata);

    app.route('/wisata/:id')
    .get(jsonku.getWisataId);

    app.route('/add-wisata')
    .post(jsonku.addWisata);

    app.route('/delete-wisata')
    .delete(jsonku.deleteWisataId);

    /* Wisata */
}