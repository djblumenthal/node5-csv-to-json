var fs = require('fs');
var underscore = require('underscore');

fs.readFile(process.argv[2], 'utf-8', function(err, data){
	data = data.toString().split('\n');
	var keys = data[0].split(',');
	var dataArrOfObj = [];
	data = data.slice(1);
	for (var i=0; i<data.length; i++){
		dataArrOfObj.push(underscore.object(keys, data[i].split(',')));
	};
	fs.writeFile(process.argv[3], JSON.stringify(dataArrOfObj), 'utf-8');
});