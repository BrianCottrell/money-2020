var name = $('h1.productTitleName').html();
var image = $('div.easyzoom a').attr('href');
var price = $('span.price_ammount').html();
var dimensions = $('#pdp_details_segment > div > div > ul:nth-child(6) > li:nth-child(1)').html();
var height = dimensions.slice(0, dimensions.indexOf("'"));
var width = dimensions.slice(dimensions.indexOf("x")+2).slice(0, dimensions.indexOf("'"));