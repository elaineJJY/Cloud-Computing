module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product_price,cmd:getProductPrice', ProductPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function ProductPrice(msg,respond){
        var price = ""
        for(data in mockData){
            if(data.product_id==msg.prodectId){
                price = data.product_price;
                break;
            }
        }
        respond(null, { result: price});
    }

}