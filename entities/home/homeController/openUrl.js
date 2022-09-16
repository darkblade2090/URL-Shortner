const urlModel = require('../../../database/models/urlModel.js');

module.exports = async function(req,res)
{
    var url = req.params.url;
    try
    {
        var urlData = await urlModel.findOne({shortUrl: url});
        if(urlData)
        {
            res.redirect(urlData.longUrl);
        }
        else
        {
            res.send('Invalid URL');
        }
    }
    catch(e)
    {
        console.log(e);
        res.send('Server error');
    }
    
    return;
}