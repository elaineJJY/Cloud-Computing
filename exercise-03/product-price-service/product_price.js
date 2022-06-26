module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product_price,cmd:getProductPrice', ProductPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function ProductPrice(msg,respond){
        var price = ""
        for(index in mockData){
            var data = mockData[index];
            if(data.product_id==msg.productId){
                price = data.product_price;
                break;
            }
        }
        console.log(price);
        respond(null, { result: price});
    }

}