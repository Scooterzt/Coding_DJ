1.	//retunr array 1 to 255
	function arr(){
		var newArr=[];
	for (var i = 1; i<=255;i++){
		newArr.push(i);
	}
	return arr;
}	
console.log(arr());

2. // Get sum of all even 1000
	function getEven(){
		var sum = 0;
		for(var i=1; i<=1000;i++){
			if(i%2==0){
				sum=sum+i;
			}
		}
		return sum;
	}
console.log(getEven());	

3. //Sum odd 5000 
	function sumOdd() {
		var sum=0;
		for( var i=1;i<=5000;i++){
			if(i%2==1){
				sum=sum+i;
			}
		}
	}
console.log(sumOdd());

4. // return sum of all numbers in  given arrey
	function sumArr(arr){
		var sum = 0;
		for(var i = 0; i<=arr.length; i++){
			sum += arr[i];
		}
	}
console.log(sumArr(arr));

5. // retunr max value in arrey
	function maxValue(arr){
		let max = arr[0];
		for(let i=0; arr.length; i++){
			if(arr[i]>max){
				max=arr[i];
			}
		}
		return max;
	}



6. // return avarage number in given array
	function avgArr(arr) {
	let sum = 0;
	let avg = 0;
	for(let i = 0; i<arr.length; i++){
		sum = sum + arr[i];
	}
	return sum/avg;
}
7. //Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
	function oddArr(arr){
		let newArr = [];
		for( let i=0; i<arr.length; i++){
			if(arr[i]%2==1){
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}

8.//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
	function greaterY(arr, y){
		let count = 0;
		for(let i=0; i<arr.length; i++){
			if (arr[i]>y){
				count++;
			}
		}
		return count;
	}

9. //Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
	function squareArr(arr){
		for(let i=0; i<arr.length; i++){
			arr[i]=arr[i]*arr[i];
		}
		return arr; // not sure if i need to return "arr" or just only return;
	}

10. //Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
	function noNegative(arr){
		for(let i = 0; i<arr.length; i++){
			if(arr[i]<0){
				arr[i]=0;
			}
		}
		return arr;
	}

11. //Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
	function maxMinAvg(arr){
		let newArr = [];
		let max = arr[0];
		let min = arr[0];
		let avg = 0;
		let sum = 0;
		for( let i=0; i<arr.length){
			if(arr[i]>max){
				max=arr[i];
			}
			if(arr[i]<min){
				min=arr[i]
			}
			sum+=arr[i]
		}
		avg = sum/arr.length;
		return newArr.push(max, min, avg); // not sure if i can add miltiple values with push.

	}

12. //Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.  
	function swapArr(arr){
		let temp;
		for(let i=0; i<arr.length; i++){
				if(arr.length < 2){
					return;
				}
			arr[0] = temp;
			arr[0] = arr[arr.length-1];
			arr[arr.length-1] = temp;
		}
		return arr;
	}

13. // Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
	function dojoArr(arr){
		for( let i=0; i<arr.length; i++){
			if(arr[i]<0){
				arr[i]="Dojo";
			}
		}
		return arr;
	}


	
	function swap(arr) {
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
        sum+=arr[i];
    }
    avg = sum/arr.length;
    var arrnew = [max,min,avg];
    return arrnew; 
}








