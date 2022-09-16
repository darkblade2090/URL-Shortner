const urlModel = require('../../../database/models/urlModel.js');

module.exports = async function(req,res)
{
    data={title : 'Url Shortner', urlData: null, message: '', formMessage: '' , check: true}
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
    res.render('homePage.ejs',{data : data});
    
    return
}