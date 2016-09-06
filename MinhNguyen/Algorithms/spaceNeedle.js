// 1. decide what event listener you need//if neccessary
// 2. write the callback function
// 3. test and rewrite


function topDome(){
	/*
	         __/||\__
	      __/:::||:::\__
	   __/::::::||::::::\__
	__/:::::::::||:::::::::\__ */
	for (var i = 0; i < 4; i++) {
		var row = ''
		for (var k = 0; k < 9-i * 3; k++){
			row += " "
		}
		row += "__/"
		for (var k = 0; k < 3 * i; k++){
			row += ":"
		}
		row += "||"
		for (var k = 0; k < 3 * i; k++){
			row += ":"
		}
		console.log(row + "\\__")
	}
	// |""""""""""""""""""""""""|
	row = "|"
	for (var k = 0; k < 24; k++){
		row += "\""
	}
	console.log(row + "|")
}
/*          /\
            ||
            ||
            || */
function needle(){
	for (var i = 0; i < 4; i++){
		row = ''
		for (var k = 0; k < 12; k++){
			row += " "
		}
		if (i == 0){
			row += "/\\"
		} else {
			 row += "||"
		}
		console.log(row)
	}
}
needle()
topDome()
/*\_/\/\/\/\/\/\/\/\/\/\/\_/
	  \_/\/\/\/\/\/\/\/\/\_/
	    \_/\/\/\/\/\/\/\_/
	      \_/\/\/\/\/\_/    */
for (var i = 0; i < 4; i++){
	row = ''
	for (var k = 0; k < i*2; k++){
		row += " "
	}
	row += "\\_"
	for (var k = 0; k < 11-(i*2); k++){
		row += "/\\"
	}
	console.log(row + "_/")
}
needle()
for (var i = 0; i < 16; i++){
	row = ''
	for (var k = 0; k < 9; k++){
		row +=" "
	}
	console.log(row + "|%%||%%|")
}
topDome()
