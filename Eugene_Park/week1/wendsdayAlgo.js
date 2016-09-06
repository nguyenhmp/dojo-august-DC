function factorial(num){
	var result = 1;
	for(var i = 1; i <= num; i++){
		result *= i;
	}
	console.log(result);
	return result;
}