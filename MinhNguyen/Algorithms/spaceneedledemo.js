/*
\_/\/\/\/\/\/\/\/\/\/\/\_/
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

function print1to255(){
	var num = 1;
	while(num <= 255){
		console.log(num);
		num++;
	}
}

// print1to255()

function printOdds1to255(argument) {
	var num = 1;
	while(num <= 255){
		num = num + 2;
		console.log(num);
	}
}

printOdds1to255();

// prints integer from 0 to 255 and with each the sum so far
	var sum = 0;
function printIntsAndSum0To255(){
	for (var i = 0; i <= 255; i++) {
		sum += i;
		console.log("", i , ' - sum:' , sum);
	}
}
printIntsAndSum0To255();
printIntsAndSum0To255();
//print all values in an arr
function printArrayVals(arr){
	for(var idx = 0; idx < arr.length; idx++){
		console.log("arr[", idx, "]=", arr[idx])
	}
}

printArrayVals([1,2,3,4,5,6]);
