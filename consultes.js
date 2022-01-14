/* Tenim una col·lecció d'Objectes Restaurant a la ciutat de Nueva York, i necessitem algunes consultes.... pots ajudar-nos? */
var db = db.getSiblingDB("restaurants");
/* 1. Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants */
console.log("Tots els restaurants de NY");
var cursor = db.restaurants.find( {} );
cursor.forEach(printjson);
/* 2. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants */
console.log("Dades de tots els restuarants de NY");
var cursor = db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1} );
cursor.forEach(printjson);
/* 3. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp _id per tots els documents en la col·lecció Restaurants */
console.log("Dades de tots els restaurants de NY");
var cursor = db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0} );
cursor.forEach(printjson);
/* 4. Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp _id per tots els documents en la col·lecció Restaurants */
console.log("Dades de tots els restaurants de NY");
var cursor = db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, zip_code: 1, _id: 0} );
cursor.forEach(printjson);
/* 5. Escriu una consulta per mostrar tots els restaurants que estan en el Bronx */
console.log("Dades de tots els restaurants situats al Bronx");
cursor = db.restaurants.find( { borough: "Bronx" }, { name: 1, cuisine: 1, _id: 0} );
cursor.forEach(printjson);
/* 6. Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx */
console.log("Dades dels cinc primers restaurants situats al Bronx");
var cursor = db.restaurants.find( { borough: "Bronx"}, { name: 1, cuisine: 1, _id: 0 } ).limit(5);
cursor.forEach(printjson);
/* 7. Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que que siguin del Bronx */
console.log("Dades dels cinc segons restaurants situats al Bronx");
var cursor = db.restaurants.find( { borough: "Bronx" }, { name: 1, cuisine: 1, _id: 0 } ).limit(5).skip(5);
cursor.forEach(printjson);
/* 8. Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90 */
console.log("Dades de tots els restaurants amb una puntuació major que 90");
var cursor = db.restaurants.find( {'grades.score': { $gt: 90 } }, { name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 9. Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que 100 */
console.log("Dades de tots els restaurants amb una puntuació entre 80 i 100");
var cursor = db.restaurants.find( { 'grades.score': { $gt: 80, $lt: 100 } }, { name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 10. Escriu una consulta per trobar els restaurants que estan situats en termes de latitud inferiors a -95.754168 */
console.log("Dades de tots els restaurants situats en termes de latitud inferiors a -95.754168");
var cursor = db.restaurants.find( { "address.coord.1": { $lt: -95.754168 } }, { name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 11. Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen  menjar 'American' i tenen algun score superior a 70 i latitud inferior a -65.754168 */
console.log("Dades de tots els restaurants");
var cursor = db.restaurants.find(  { $and: [ { cuisine: { $ne: "American" } }, { 'grades.score': { $gt: 70} }, { 'adress.coord.1': { $lt: -65.754168 } } ] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 12. Escriu una consulta per trobar els restaurants que no preparen menjar 'American' i tenen algun score superior a 70 i que, a més,  és localitzen en longituds inferiors a -65.754168. Nota : Fes aquesta consulta sense utilitzar operador $and */
var cursor = db.restaurants.find( { cuisine: { $ne: "American" }, 'grades.score': { $gt: 70}, 'adress.coord.1': { $lt: -65.754168 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 13. Escriu una consulta per trobar els restaurants que no preparen menjar 'American ', tenen alguna nota 'A' i no pertanyen a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent */
console.log("Dades de tots els restaurants que no preparen menjar 'American ', tenen alguna nota 'A' i no pertanyen a Brooklyn");
var cursor = db.restaurants.find( { cuisine: { $ne: "American"}, 'grades.grade': "A", borough: { $ne: "Brooklyn"} }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } ).sort( { cuisine: -1 } );
cursor.forEach(printjson);
/* 14. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' en les tres primeres lletres en el seu nom */
console.log("Dades de tots els restaurants quines tres primeres lletres del seu nom són 'Wil'");
var cursor = db.restaurants.find( { name: { $regex: /^Wil/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 15. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' en les últimes tres lletres en el seu nom */
console.log("Dades de tots els restaurants quines tres últimes lletres del seu nom són 'ces'");
var cursor = db.restaurants.find( { name: { $regex: /ces$/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 16. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' en qualsevol lloc del seu nom */
console.log("Dades de tots els restaurants quin nom conté 'Reg' en qualsevol part");
var cursor = db.restaurants.find( {name: { $regex: /Reg/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 17. Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats americans o xinesos */
console.log("Dades de tots els restaurants que preparen plats amaerican o xinesos");
var cursor = db.restaurants.find( { borough: "Bronx", cuisine: { $in: [ "American", "Chinese" ] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 18. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn */
console.log("Dades de tots els restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn");
var cursor = db.restaurants.find( { borough: { $in: [ "Staten Island", "Queens", "Bronx", "Brooklyn" ] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 19. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn */
console.log("Dades de tots els restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn");
var cursor = db.restaurants.find( { borough: { $nin: [ "Staten Island", "Queens", "Bronx", "Brooklyn" ] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 20. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10 */
console.log("Dades de tots els restaurants amb una puntuació menor que 10");
var cursor = db.restaurants.find( { 'grades.score': { $lt: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si son 'American', 'Chinese' o el name del restaurant comença amb lletres 'Wil' */
/*console.log("Dades de tots els restaurants que preparen marisc (excepte els de cuina americana o xinesa) o el seu nom começa amb 'Will'");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 22. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score de 11 amb un ISODate "2014-08-11T00:00:00Z" */
/*console.log("Dades de tots els restaurants");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 23. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z" */
/*console.log("Dades de tots els restaurants");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 24. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor entre 42 i 52 */
console.log("Dades de tots els restaurants situats en una longuitud entre 42 i 52");
var cursor = db.restaurants.find( { 'adress.coord.1': { $gte: 42, $lte: 52 } }, {restaurant_id: 1, name: 1, 'address.street': 1, 'address.coord': 1, _id: 0 } );
cursor.forEach(printjson);
/* 25. Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes */
console.log("Dades de tots els restaurants ordents segons el nom de forma ascendent");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } ).sort( { name: 1 } );
cursor.forEach(printjson);
/* 26. Escriu una consulta per organitzar el nom dels restaurants en ordre descendent juntament amb totes les columnes */
console.log("Dades de tots els restaurants ordenats segons el nom de forma descendent");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } ).sort( { name: -1 } );
cursor.forEach(printjson);
/* 27. Escriu una consulta per organitzar el nom de la cuisine en ordre ascendent i el barri en ordre descendent */
console.log("Dades de tots els restaurants ordeenats segons la cuisine en ordre ascendent i el barri en ordre descendent");
var cursor = db.restaurants.find( {}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } ).sort( { cuisine: 1, borough: -1 });
cursor.forEach(printjson);
/* 28. Escriu una consulta per saber si les direccions contenen el carrer (Street) */
console.log("Dades de tots els restaurants amb una direcció que contingui la paraula 'Street'");
var cursor = db.restaurants.find( { 'adress.street': { $regex: /Street/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1,_id: 0 } );
cursor.forEach(printjson);
/* 29. Escriu una consulta que seleccioni tots el documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double */
console.log("Dades de tots els restaurants amb el camp coord és de tipus Double");
var cursor = db.restaurants.find( { "address.coord": { $type: "double" } }, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7 */
console.log("Dades de tots els restaurants quin mòdul (resta de la divisió) d'algun score entre 7 és 0");
var cursor = db.restaurants.find( { "grades.score": { $mod: [ 7, 0 ] } }, {restaurant_id: 1, name: 1, grades: 1, _id: 0 } );
cursor.forEach(printjson);
/* 31. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name */
console.log("Dades de tots els restaurants quin nom conté la cadena 'mon'");
var cursor = db.restaurants.find( { name: { $regex: /mon/ } }, {restaurant_id: 1, name: 1, borough: 1, 'adress.coord.0': 1, 'adress.coord.1': 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);
/* 32.Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que conteinen 'Mad' com a primeres tres lletres del seu name */
console.log("Dades de tots els restaurants quin nom comença per 'Mad'");
var cursor = db.restaurants.find( { name: { $regex: /^Mad/ } }, {restaurant_id: 1, name: 1, borough: 1, 'adress.coord.0': 1, 'adress.coord.1': 1, cuisine: 1, _id: 0 } );
cursor.forEach(printjson);