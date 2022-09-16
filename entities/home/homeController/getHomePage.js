const urlModel = require('../../../database/models/urlModel.js');

module.exports = async function(req,res)
{
    var domain = 'http:localhost:3000/';
    data={title : 'Url Shortner', urlData: null, message: '', formMessage: '' , check: true, domain: domain};
    try
    {
        var urlData = await urlModel.find();
        data.urlData = urlData;
    }
    catch(e)
    {
        console.log(e);
        data.message = 'Error while loading data'
    }
    res.render('HomePage.ejs',{data : data});
    
    return
}