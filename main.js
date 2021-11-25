const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'devtestrecruitte.myshopify.com',
  apiKey: 'd156c699edcc98186dae8e6f9562d838',
  password: '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'
});

async function getJson() {
  return shopify.product.list();
}
let productArr = getJson(); // hello

let sliderBackpacks = document.getElementById("slider_backpacks");
var info = "";

for(var cont=0; cont< productArr.length; cont++){
  info+="<img src='"+productArr[cont]['image']['src']+"'/>"+
        "<div class='content'>"+productArr[cont]['title']+"</div>";
}

sliderBackpacks.innerHTML = info;
