const express=require("express");
const app= express();

const initiatemongoose = require('./database/initMongo');
const initiateRoutes = require('./entities/routes');

app.set('view engine',"ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initiateRoutes(app);

initiatemongoose()
.then(function()
{
    console.log("Data Base connected successfully");

    app.listen(process.env.PORT || 5000, function()
	{
		console.log("Server is live");
        
	});
})
.catch(function(err)
{
    console.log("Database Connection "+ err);
})