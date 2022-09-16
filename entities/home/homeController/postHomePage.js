const urlModel = require('../../../database/models/urlModel.js');

const validUrl = require('valid-url');
var randomstring = require("randomstring");


module.exports = async function(req,res)
{
    var domain = 'https://url-shortner4.herokuapp.com/';
    data={title : 'Url Shortner',urlData: null, message: '' , formMessage: '', check : true, domain: domain}
    var longUrl = req.body.url;
    //console.log(longUrl); 
    if(validUrl.isWebUri(longUrl))
    {
            var check = await urlModel.findOne({longUrl: longUrl});
            if(check)
            {
                data.formMessage = "Url is already Shorted! Shorted Url: "+domain+check.shortUrl;
            }
            else
            {
                const domain = 'http:localhost:3000/';
                var newId =await randomstring.generate({
                    length: 6,
                    charset: 'alphanumeric'
                  });
                while(await urlModel.findOne({shortUrl : domain+newId}))
                    {
                        newId = await randomstring.generate({
                            length: 6,
                            charset: 'alphanumeric'
                          });
                    }
                var newUrl = domain + newId;
                await urlModel.create({longUrl : longUrl, shortUrl : newId});
                data.formMessage = 'Shorted Url: '+ newUrl;
            }
    }
    else
    {
        data.check = false;
        data.formMessage = 'Invalid URL'
    }


    try
    {
      var urlData = await urlModel.find();
       data.urlData = urlData;
    }
    catch(e)
    {
        console.log(e);
        data.formMessage = 'Error while loading data'
    }

  res.render('HomePage.ejs',{data : data});
    
return;
}