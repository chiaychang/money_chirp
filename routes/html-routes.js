var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var chartData = require("../chartData.js");
var path = require("path");

// TWITTER 
var keys = require("../keys.js");
var accountInfo = keys.twitterKeys;
var Twitter = require('twitter');
var client = new Twitter(accountInfo);


///////////////// JOYS RUN CHART //////////////////////////////////////////////
function runChart(chartData, chartScore) {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData,
                datasets: [{
                    label: ["Twitter Trending Score"],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: chartScore
                }],
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        });
    }

////////////////////////////////////////////////////////////////////////////////










module.exports = function(app) {
	
	app.get("/", function(req, res) {

		if (req.user) {
			res.redirect("/dashboard");
			// res.redirect("/members");
			return false;
		}
		res.render("signup");
	});

	app.get("/login", function(req, res) {
		var hbsObject = {};
			
		if (req.user) {
			res.render("dashboard", hbsObject);
			// res.render("members", hbsObject);
		}

		res.render("login", hbsObject)
	});

	
	app.get("/members", isAuthenticated, function(req, res) {

		// db.User.findAll({
		// 		where: {
		// 			id: req.user.id
		// 		},
		// 		include: [ db.company_list ],
		// 		raw: true, //into a readable json format
		// 		nest: true	//in to a nested format to access the companies_list table
		// 	}).then(function(data) {
		// 		console.log("////////////////////////");
		// 		console.log(data.length);
		// 		console.log(data);
		// 		console.log("////////////////////////");

		// 		var hbsObject = {
		// 			company_name: data
		// 		};

		// 		res.render("members", hbsObject);
		// 	});
	});

	// testing for dashboard JOY PLEASE READ!!! I THINK WE CAN CREATE AN ARRY HERE TO SET UP FOR THE CHART.JS
	app.get("/dashboard", isAuthenticated, function(req, res) {

		db.User.findAll({
				where: {
					id: req.user.id
				},
				include: [ db.company_list ],
				raw: true, //into a readable json format
				nest: true	//in to a nested format to access the companies_list table
			}).then(function(data) {
				console.log("////////////////////////");
				var companiesArray = [];
				for (var i = 0; i < data.length; i++) {
					// console.log(data[i].company_lists.twitter_handle);
					companiesArray.push(data[i].company_lists.twitter_handle);
				}
				/// joy here is the array////
				console.log("this is your new array " + companiesArray);
				console.log("////////////////////////");

				var hbsObject = {
					company_name: data,
					TwitterArray: companiesArray
				};

				res.render("dashboard", hbsObject);
			});
	});

	
};