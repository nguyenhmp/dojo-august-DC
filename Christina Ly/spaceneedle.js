for(var i=0; i<4; i++){
	console.log("                      | |");
}
console.log("                   __/| |\\__");

var colon= ":::";
var space= "   ";
var leftwall = "__/";
var rightwall="\\__";
var cent = "| |";
var lower = '/ \\';
for(var i=0;i<4; i++){
	var row=' '
	for(var k=0; k <= 4-i; k++){
		row+=space;
	}
	row+=leftwall;
	for(var k=0; k<=i; k++){
		row+=colon;
	}
	row+=cent;
	for(var k=0; k<=i; k++){
		row+=colon;
	}
	row+=rightwall;
	console.log(row);
}
leftwall = "_/";
rightwall="\\_";
for(var i=0;i<4; i++){
	var row=''
	for(var k=0; k <=i; k++){
		row+=space;
	}
	row+=rightwall;
	for(var k=0; k<=11-(2*i); k++){
		row+=lower;
	}
	row+=leftwall;
	console.log(row);
}
for(var i=0; i<4; i++){
	console.log("                      | |");
}