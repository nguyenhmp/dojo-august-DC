function most_significant_digit(num){
	num = Math.abs(num);
	while(num > 10){
		num /= 10;
	}
	while(num < 1){
		num *= 10;
	}
	return num = Math.floor(num);
}

function statistics_until_doubles(){
	var nextRoll = Math.floor(Math.random()* 20 + 1);
	var roll = -1, counter = 1, min = 21, max = 0, sum = 0;
	while(roll != nextRoll){
		roll = nextRoll;
		counter	++;
		if(roll > max)
			max = roll;
		if(roll < min)
			min = roll;
		sum += roll;
		nextRoll = Math.floor(Math.random()* 20 + 1);
	}
	var ave = (sum + nextRoll) / counter;
	console.log("Number of rolls: " + counter + ". Min: " + min + ". Max: " + max + ". Average: " + ave);
}
