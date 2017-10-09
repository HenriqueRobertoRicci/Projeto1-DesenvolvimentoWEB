  var mymap = L.map('mapid').setView([-22.877034368871936, -47.20902914999999], 14);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);



var marker = L.marker([-22.8624236, -47.2186265]).addTo(mymap);
marker.bindPopup("<b>Associação da Guarda Municipal de Hortolandia</b><br>R. Argolino de Morães, 330 - Vila Sao Francisco, Hortolândia - SP, 13184-230");//;//;//.openPopup();

var marker = L.marker([-22.8808333, -47.1961591]).addTo(mymap);
marker.bindPopup("<b>Empresa Brasileira de Correios e Telégrafos - Hortolandia</b><br>Correios - R. Líbero Badaró, 471 - Jardim do Bosque, Hortolândia - SP, 13186-260");//;//.openPopup();

var marker = L.marker([-22.8807742, -47.2033121]).addTo(mymap);
marker.bindPopup("<b>Moraes Taxi</b><br>R. Serra do Japi, 271 - Jardim Everest, Hortolândia - SP, 13186-041");//;//.openPopup();

var marker = L.marker([-22.86343325669617, -47.2136074]).addTo(mymap);
marker.bindPopup("<b>Táxi Hortolândia</b><br>R. José Camilo de Camargo, 5 - Parque Ortolândia, Hortolândia - SP, 13184-494");//;//.openPopup();

var marker = L.marker([-22.86396170669633, -47.21532760000002]).addTo(mymap);
marker.bindPopup("<b>Serviço de Registro Civil Notarial de Hortolandia</b><br>R. Joaquim Aparecido Bueno - Lot. Remanso Campineiro, Hortolândia - SP, Brasil");//;//.openPopup();

var marker = L.marker([-22.86406632048303, -47.213916400000016]).addTo(mymap);
marker.bindPopup("<b>Táxi Shopping Hortolandia 24hs</b><br>R. José Camilo de Camargo - Lot. Remanso Campineiro, Hortolândia - SP, 13184-494");//;//.openPopup();

var marker = L.marker([-22.866538906697162, -47.21517299999999]).addTo(mymap);
marker.bindPopup("<b>Hortoprev</b><br>R. Alda Lourenço Francisco, 160 - Lot. Remanso Campineiro, Hortolândia - SP, 13184-310");//;//.openPopup();

var marker = L.marker([-22.867983406697647, -47.215135799999985]).addTo(mymap);
marker.bindPopup("<b>STSPMH - Sindicato dos Trabalhadores do Serviço Público do Município de Hortolândia</b><br>R. Antônio Bernardes, 360 - Lot. Remanso Campineiro, Hortolândia - SP, 13184-456");//;//.openPopup();

var marker = L.marker([-22.868419997355065, -47.21473346864775]).addTo(mymap);
marker.bindPopup("<b>IMPERIUM TAXI RMC</b><br>R. Antônio Bernardes, 360 - Lot. Remanso Campineiro, Hortolândia - SP, 13184-456");//;//.openPopup();

var marker = L.marker([-22.86985850669824, -47.21805919999997]).addTo(mymap);
marker.bindPopup("<b>Prefeitura Municipal de Hortolandia</b><br>R. José Camargo, 21 - Lot. Remanso Campineiro, Hortolândia - SP, 13184-493");//.openPopup();

var marker = L.marker([-22.866836936605605, -47.22533906745912]).addTo(mymap);
marker.bindPopup("<b>Terminal Metropolitano Hortolandia</b><br>Av. Santana, 704, Hortolândia - SP, Brasil");//.openPopup();

var marker = L.marker([-22.88528534786098, -47.16142909470521]).addTo(mymap);
marker.bindPopup("<b>Almoxarifado Prefeitura de Hortolândia</b><br>R. Jaír da Silva Guimarães, 161-181 - Jardim Malta, Hortolândia - SP, Brasil");//.openPopup();

var marker = L.marker([-22.876763306700497, -47.1629226]).addTo(mymap);
marker.bindPopup("<b>Penitenciária/Presídio</b><br>Estr. Mun. Sabrina Batista de Camargo, 1-423, Hortolândia - SP, Brasil");//.openPopup();

var marker = L.marker([-22.87511190669997, -47.22519450000004]).addTo(mymap);
marker.bindPopup("<b>Cia de Saneamento Básico do Estado de São Paulo - SABESP</b><br>Rua Pastor Germano Ritter, 651 - Parque Ortolândia, Hortolândia - SP, 13184-050");//.openPopup();

var marker = L.marker([-22.89499120670645, -47.229258999999956]).addTo(mymap);
marker.bindPopup("<b>Viação Boa Vista Ltda.</b><br>Av. Santana, 1000 - Jardim Amanda, Hortolândia - SP, 13188-000");//.openPopup();

var marker = L.marker([-22.897773988750842, -47.18689722890554]).addTo(mymap);
marker.bindPopup("<b>Corpo De Bombeiros De Hortôlandia</b><br>R. Luiz Arten, 43 - Jardim Terras de Santo Antonio, Hortolândia - SP, 13184-654");//.openPopup();

var marker = L.marker([-22.862214806695754, -47.21740369999998]).addTo(mymap);
marker.bindPopup("<b>HortoFáci</b><br>R. Argolino de Morães, 2-184 - Vila Sao Francisco, Hortolândia - SP, Brasil");//.openPopup();

var marker = L.marker([-22.869176901859575, -47.21232250000003]).addTo(mymap);
marker.bindPopup("<b>Fórum de Hortolândia</b><br>Rua Sebastião Custódio de Oliveira, 20 - Remanso Campineiro Hortolândia - SP 13184-507");//.openPopup();

var marker = L.marker([-22.87066222843365, -47.201028277543294]).addTo(mymap);
marker.bindPopup("<b>Delegacia de Polícia de Hortolândia</b><br>Parque dos Pinheiros, Hortolândia - SP, 13184-580, Brasil");//.openPopup();

var marker = L.marker([-22.868057706697652, -47.204678599999966]).addTo(mymap);
marker.bindPopup("<b>INSS Hortolândia</b><br>R. José Agostinho, 587 - Jardim Santana, Hortolândia - SP, 13184-527, Brasil");//;//.openPopup();