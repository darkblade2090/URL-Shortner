const urlModel = require('../../../database/models/urlModel.js');

module.exports = async function(req,res)
{
    var id = req.params.id;
    try{
        await urlModel.deleteOne({_id: id});
    }
    catch(e)
    {
        res.send('Server error');
    }
    res.redirect('/');
}