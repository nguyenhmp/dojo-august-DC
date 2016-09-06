for (var i = 0; i < 4; i++){
	console.log("            ||");
};
for (var i = 0; i < 10; i+=3){
	var needle = "";
	for (var n = i; n < 9; n++){needle +=" ";};
	needle += "__/";
	for (var m = 0; m < i; m++){needle +=":";};
	needle += "||";
	for (var m = 0; m < i; m++){needle +=":";};
	needle += "\\__";
	console.log(needle);
}
needle = "|";
for (var i = 0; i < 24; i++){needle +="\"";};
needle += "|";
console.log(needle);
for (var i = 0; i < 7; i+=2){
	needle = "";
	for (var n = 0; n < i; n++){needle += " ";};
	needle += "\\_";
	for (var m = 0; m < 11 - i; m++){needle += "/\\";};
	needle += "_/";
	console.log(needle);
}
for (var i = 0; i < 4; i++){
	console.log("            ||");
};
for (var i = 0; i < 16; i++){
	console.log("         |%%||%%|");
};
for (var i = 0; i < 10; i+=3){
	var needle = "";
	for (var n = i; n < 9; n++){needle +=" ";};
	needle += "__/";
	for (var m = 0; m < i; m++){needle +=":";};
	needle += "||";
	for (var m = 0; m < i; m++){needle +=":";};
	needle += "\\__";
	console.log(needle);
}
needle = "|";
for (var i = 0; i < 24; i++){needle +="\"";};
needle += "|";
console.log(needle);