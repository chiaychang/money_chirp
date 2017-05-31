$(document).ready(function() {
	// signup jQuery capture of the sign up form
	var signUpForm = $("form.signup");
	var emailInput = $("input#email-input");
	var passwordInput = $('input#password-input');

	//mambers seach company capture of the form
	var searchForm = $("form.search-add");
	var companySearch = $("input#search-input");

	// login jQuery capture of the login form
	var loginForm = $("form.login");



	signUpForm.on("submit", function(event) {
		event.preventDefault();
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};

		if (!userData.email || !userData.password) {
			return;
		}

		signUpUser(userData.email, userData.password);
    	emailInput.val("");
    	passwordInput.val("");
	});

	loginForm.on("submit", function(event) {
        event.preventDefault();
        console.log("success");
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });


	// searchForm.on("submit", function(event) {
	// 	event.preventDefault();

	// 	var searchData = companySearch.val().trim().toUpperCase();

	// 	// get or post? this may need to be a "put" route since we created the column by association
	// 	$.post("/api/" + searchData, function(data) {
	// 		console.log(data);
	// 	});	
	// });


	$.get("/api/user_data").then(function(data) {
		console.log(data);
		$(".member-name").append(data.email);
	});


	function signUpUser(email, password) {
		$.post("/api/signup", {
			email: email,
			password: password
		}).then(function(data) {
			window.location.replace(data);
		}).catch(function(err) {
			console.log(err);
		});
	}

	function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    }

	
	
//////////////////AWESOME COMPLETE //////////////////////
	var input = $('#myinput');
	
	var awesomplete = new Awesomeplete(input);
	
	
awesomplete.list = ['3M Company',
'Abbott Laboratories',
'AbbVie',
'Accenture', 
'Activision Blizzard',
'Acuity Brands', 
'Adobe Systems', 
'Advance Auto Parts',
'Aetna', 
'AFLAC',
'Agilent Technologies', 
'Akamai Technologies', 
'Alaska Air Group', 
'Albemarle', 
'Alexion Pharmaceuticals',
'Allegion',
'Allergan', 
'Allstate',
'Google',
'Altria Group', 
'Amazon',
'Ameren', 
'American Airlines',
'American Electric Power',
'American Express',
'American International Group',
'American Tower  A',
'American Water Works Company',
'Ameriprise Financial',
'AMETEK',
'Amgen',
'Amphenol',
'Analog Devices',
'Aon',
'Apple',
'Applied Materials',
'Arconic',
'Arthur J Gallagher & Co',
'ATT',
'Autodesk',
'Automatic Data Processing',
'AutoNation', 
'AutoZone', 
'AvalonBay Communities', 
'Avery Dennison', 
'Baker Hughes', 
'Bank of America', 
'Bed Bath & Beyond',
'Berkshire Hathaway',
'Best Buy',
'HR Block',
'Boeing Company',
'BorgWarner',
'Boston Scientific',
'Bristol-Myers Squibb',
'Broadcom',
'Brown-Forman',
'Campbell Soup',
'Capital One Financial',
'Cardinal Health',
'Carmax',
'Carnival', 
'Caterpillar', 
'CBS',
'Celgene',
'CenturyLink',
'Cerner',
'Charles Schwab',
'Charter Communications',
'Chesapeake Energy',
'Chevron',
'Chipotle',
'CIGNA',
'Cisco',
'Citigroup',
'Citizens Financial Group',
'Citrix Systems',
'CME Group',
'Coach',
'CocaCola',
'Cognizant Technology Solutions',
'Comcast ',
'ConocoPhillips',
'Consolidated Edison',
'Constellation Brands',
'Corning',
'Costco',
'Coty',
'CSX',
'Cummins' ,
'CVS',
'D R Horton',
'Darden Restaurants',
'DaVita',
'John Deere',
'Delphi Automotive',
'Delta Air Lines',
'Dentsply Sirona',
'Devon Energy',
'Discover Financial Services',
'Dollar General',
'Dollar Tree',
'Dover',
'Dow Chemical',
'Dr Pepper',
'Du Pont',
'Duke Energy',
'Dun & Bradstreet',
'E-Trade',
'Eastman Chemical',
'eBay',
'Ecolab' ,
'Edwards Lifesciences',
'Electronic Arts',
'Entergy',
'Exelon',
'Expedia' ,
'Exxon Mobil' ,
'F5 Networks',
'Facebook',
'FedEx',
'Fidelity National Information Services',
'Fifth Third Bank',
'First Solar',
'FirstEnergy',
'Fiserv',
'FLIR Systems',
'Flowserve',
'Fluor',
'Foot Locker' ,
'Ford Motor',
'Frontier Communications',
'Gap',
'Garmin',
'General Dynamics',
'General Electric',
'General Mills',
'General Motors',
'Goldman Sachs Group',
'goodyear',
'Grainger',
'Halliburton',
'Hanesbrands',
'Harley-Davidson',
'Hasbro',
'Hewlett Packard Enterprise',
'Home Depot',
'Johnson & Johnson',
'JPMorgan Chase & Co',
'Juniper Networks',
'Kellogg',
'Kohls',
'Kraft Heinz Co',
'Kroger Co',
'Lowes',
'Macys',
'Marathon Oil' ,
'Mastercard',
'Mattel',
'McDonalds',
'MetLife',
'Michael Kors Holdings',
'Microsoft',
'Morgan Stanley',
'Motorola Solutions' ,
'Netflix',
'Nike',
'Nordstrom',
'Nvidia',
'Oracle',
'PACCAR',
'PayPal',
'Pepsi',
'Perrigo',
'Philip Morris International',
'Phillips 66',
'PNC',
'Ralph Lauren',
'Progressive',
'QUALCOMM ',
'Rockwell Automation', 
'Ross Stores',
'Royal Caribbean Cruises Ltd',
'Salesforce',
'Snapchat',
'Southwest Airlines',
'Southwestern Energy',
'Staples',
'Starbucks' ,
'Sysco',
'Target' ,
'Tegna',
'Teradata' ,
'Texas Instruments',
'Textron',
'The Clorox Company',
'Walt Disney ',
'Thermo Fisher Scientific',
'Tiffany & Co',
'Time Warner',
'TJX Companies ',
'Torchmark',
'Tyson Foods',
'US Bank',
'Ulta',
'Under Armour',
'Union Pacific',
'Urban Outfitters',
'VanityFair',
'Valero Energy',
'Viacom ',
'Visa ',
'Walmart',
'Wells Fargo',
'Western Union Co',
'Whole Foods Market',
'Xerox',
'Yahoo',
'Yum! Brands ',
'Twilio',
"AMD",
"IBM",
"BOX",
"TESLA",
"GoPro",
"Verizon"
];
	
});





























