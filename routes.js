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

  /* edukasi */
  app.route('/kursus')
  .get(jsonku.getAllKursus);

  app.route('/kursus/:id')
  .get(jsonku.getKursusId);

  app.route('/add-kursus')
  .post(jsonku.addKursus);

  app.route('/delete-kursus')
  .delete(jsonku.deleteKursusId);

  /* edukasi */



   /* Video */
   app.route('/video-batik')
   .get(jsonku.getAllVideo);
 
   app.route('/video-batik/:id')
   .get(jsonku.getVidBatikId);
 
   app.route('/add-video-batik')
   .post(jsonku.addVideoBatik);
 
   app.route('/delete-video-batik')
   .delete(jsonku.deleteVideoBatik);
 
   /* Video */
}