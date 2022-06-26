module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        var url = ""
        
        for(index in mockData){
            var data = mockData[index];
            if(data.product_id==msg.productId){
                url = data.product_url;
                break;
            }
        }
        respond(null, { result: url});
    }

    function productName(msg, respond) {
        var name = ""
        for(index in mockData){
            var data = mockData[index];
            if(data.product_id==msg.productId){
                name = data.product_name;
                break;
            }
        }
        respond(null, { result: name});
    }

}