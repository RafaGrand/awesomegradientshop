 const path = require('path');
 const fs = require("fs");
 const host = "127.0.0.1";
 const port = 1337;
 const express = require("express");
 const ejs =  require("ejs");

 
 const server = express();
 server.use(express.static(path.join(__dirname, 'public')));
 server.use(express.static(path.join(__dirname + '/js')));//middleware
 server.use(express(__dirname)); 
 server.set('view engine','html');
 server.engine('html', require('ejs').renderFile);
 
//  server.get("*", function(request, response){ 
//    response.render('index.html', {obj: productArr});
//   });

server.get("*", async function(request, response){ 
  response.render('index.html', {obj: await productArr});
 });
 const Shopify = require('shopify-api-node');
   
 const shopify = new Shopify({
   shopName: 'devtestrecruitte.myshopify.com',
   apiKey: 'd156c699edcc98186dae8e6f9562d838',
   password: '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'
 });
 
 async function getJson() {
  return shopify.product.list();
 }
 
 let productArr = getJson();
 //console.log(productArr);

 server.listen(port, host);
 console.log('Running at Port 1337');