console.log("Hello Node!");
console.log(5+8*139);

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index1.html", "<h1> This is a node file part two. </h1>", function(error){
	if(error){
		console.log(error);
	} else {
		console.log("congrats file created");
	}
});

var myPhotoUrl = "https://live.staticflickr.com/5613/15326525840_17dd8d86fb_b.jpg";

https.get(myPhotoUrl, function(response){
	response.pipe(fs.createWriteStream(__dirname + "/myparrot.jpg"));
});