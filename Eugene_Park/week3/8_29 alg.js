function rotateArr(arr, shiftBy){
	if (shiftBy > 0){
		for (var i = 0; i < shiftBy; i++){
			var temp = arr[arr.length-1];
			for (var n = arr.length-1 ; n > 0; n--){
				arr[n] = arr[n-1];
			}
			arr[0] = temp;
		}
	}
	else if (shiftBy < 0){
		for (var i = 0; i < Math.abs(shiftBy); i++){
			var temp = arr[0];
			for (var n = 0; n < arr.length-1; n++){
				arr[n] = arr[n+1];
			}
			arr[arr.length-1] = temp
		}
	}
	return arr;
}

function filterRange(arr, min, max){
	for (var i = 0; i < arr.lengh; i++){
		if ((arr[i] <= max)&&(arr[i]>=min)){
			for (var n = i; n < arr.length-1; n ++){
				arr[n] = arr[n+1];
			}
			arr.length --;
			i--;
		}
	}
	return arr;
}
