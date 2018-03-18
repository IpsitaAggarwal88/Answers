//1
var myNumber=42, myName= "Ipsita";
var temp;
temp=myNumber;
myNumber=myName;
myName=temp;

console. log(myNumber);
console.log(myName);

//2
for(var i=-52; i<=1066;i++)
{
	console.log(i);
}

//3
function beCheerful()
{
	console.log("good morning!");
}
for( var i=0;i<98;i++)
{
	beCheerful();
}

//4
for(var i=-300; i<=0;i++)
{
	if(i%3===0)
	{	if(i==-3 || i==-6)
		{
			continue;
		}
		else
		{
			console.log(i);
		}
		
	}

}

//5
var num=2000;

while(num<=5280)
{
	console.log(num);
	num++;
}

//6

var num1=12, num2=22;

if((num1===12 && num2===22)||(num2===12) && (num1===22))
{
	console.log("How did you know?");
}
else
{
	console.log("Just Another day....");
}

//7

var year=1980;

if(year%4===0)
{
	if(year%100===0)
	{
		console.log("Not a leap year!");
	}
	else
	{
		console.log("leap year entered...");
	}
}

	else if (year%400===0) 
		{
			console. log("leap year entered...");        }
			else
			{
				console.log("not a leap year");
			}


//8

var count=0;

for(var i=512; i<=4096;i++)
{
	if(i%5===0)
	{
		count++;
		console.log(i);
	}
}
console.log("Number of multiples of 5 from 512 to 4096 is: "+count);

//9

var num=0;
 while(num<=60000)
 {
 	if(num%6===0)
 	{
 		console.log(num);

 	}
 	num++;
 }

 //10

 for(var i=1;i<=100;i++)
 {
 	if(i%5===0 && i%10===0)
 	{
 		console.log("coding dojo");}

 		else if(i%5===0)
 	{
 		console.log("coding");
 	}
 		
 	
 	
 	else console.log(i);
 

 //12

var sum=0;
 for(var i=-300000;i<=300000;i++)
 {

 	if(i%2===-1 || i%2===1)
 	{
 		console.log(i);
 		sum+=i;
 	}
 }
 console.log(sum);

 //13

 var num=2016;

 while(num>0)
 {
  	console.log(num);
 	num=num-4;
 	
 }

 //14

 function multiple(highNum, lowNum, mult)
 {
 	for(var i=highNum;i>=lowNum;i--)
 	{
 		if(i%mult===0)
 		{
 			console.log(i);
 		}
 	}
 }

  multiple(30,10,3);

 //15

 function printMultiple(param1, param2, param3, param4)
 {
 	var num=param2;
 	if(param2>param3)
 	{
 		console.log("Can't print multiples!!");
 	}
 	else
 	{
 		while(num>=param2 && num<=param3)
 		{
 			if(num%param1===0 && num!==param4)
 			{
 				console.log(num);
 			}
 			num++;
 		}
 	}
 	
 }

 printMultiple(3,5,17,9);

 //Page 20

 //1

 function array(number)
 {	
 	var arr=[];
 	for (var i=number, j=0;i>=0, j<=number;i--,j++)
 	{
 		arr.push(i);
 		console.log(arr[j]);
 	}
 	console.log(arr.length);
 }

 array(9);

 //2

 function arrayPrint(arr)
 {
 	console.log(arr[0]);
 	return arr[1];
 }
var arr=[1,2];
var num=arrayPrint(arr);
console.log(num);
 
 //3

 function array(arr)
 {
 	var num=0;
 	num=arr[0]+arr.length;

 	return num;
 }

 var arr= [true,1,2];
 var sum=array(arr);
 console.log(sum);

 //4

 var arr=[1,3,5,7,9,13],num=0;

 for(var i=0;i<arr.length;i++)
 {
 	if(arr[i]>arr[1])
 	{
 		console.log(arr[i]);
 		num++;
 	}
 }
 console.log(num);

 //5
function newArr(arr)
{
	var array=[],num=0;
	for(var i=0;i<arr.length;i++)
 {
 	if(arr[i]>arr[1])
 	{
 		array.push(arr[i]);
 		num++;
 		
 	}

 }
 console.log("number of elements in new Array is:"+num);
  return array;
}

var newArray=[], arr=[1,3,5,7,9,13];
newArray=newArr(arr);
console.log(newArray);
 
 //6

 function array(num1, num2)
 {
 	var arr=[];

 	if(num1===num2)
 	{
 		console.log("jinx!");
 	}

 	for(var i=0;i<num1;i++)
 	{
 		arr.push(num2);
 	}

 	return arr;

 }

 var arr=array(3,2);
 console.log(arr);

 //7

 function array(arr)
 {
 	if(arr[0]>arr.length)
 	{
 		return "Too Big!!";
 	}
 	else if(arr[0]<arr.length)
 	{
 		return "Too small!!";
 	}
 	else
 	{
 		return "Just Right!";
 	}
 }

var arr=[1,2,3];
 var string=array(arr);
 console.log(string);

 //8

 function fahrenheitToCelcius(fDegrees)
 {
 	var cDegrees, temp=0;

 	temp=fDegrees-32;
 	cDegrees=(temp*5)/9;

 	return cDegrees;
 }

 var temperature=fahrenheitToCelcius(100);
 console.log(temperature);

 //9

 function celciusToFahrenheit(cDegrees)
 {
 	var fDegrees, temp=0;

 	temp=(cDegrees*9)/5;
 	fDegrees=temp+32;

 	return fDegrees;
 }

 var temperature=celciusToFahrenheit(37.78);
 console.log(temperature);

 //pg 22

 //1

 function negToBig(arr)
 {
 	for(var i=0;i<arr.length;i++)
 	{
 		if(arr[i]<0)
 		{
 			arr[i]="Big";
 		}
 	}
 	return arr;
 }

 var array=[-1,3,5,-5];
 console.log(negToBig(array));

 //2

 function lowHigh(arr)
 {
 	var low=arr[0], high=arr[0];

 	for(var i=1;i<arr.length;i++)
 	{
 		if(low>arr[i])
 		{
 			low=arr[i];
 		}
 		else if(high<arr[i])
 		{
 			high=arr[i];
 		}
 	}
 	console.log("The lowest number in the array is: "+low);
 	return high;

 }

var array =[1,3,7,5];
 console.log("The highest number in the array is: "+lowHigh(array));

 //3

 function prn(arr)
 {
 	console.log("Second to last value in array is:"+arr[arr.length-2]);

 	for (var i=0;i<arr.length;i++)
 	{
 		if(arr[i]%2!==0)
 		{
 			console.log("the first odd value in the array is: "+arr[i]);
 			break;
 		}
 	}
 }

 var array=[2,1,-5,6,8,9];
 prn(array);

 //4

 function double(arr)
 {
 	var newArr=[];

 	for(var i=0;i<arr.length;i++)
 	{
 		newArr[i]=arr[i]*arr[i];
 	}

 	return newArr;
 }

 var array=[2,4,6];
 console.log(double(array));

 //5

 function countPositives(arr)
 {
 	var count=0;

 	for( var i=0;i<arr.length;i++)
 	{
 		if(arr[i]>0)
 		{
 			count++;
 		}
 	}
 	arr[arr.length-1]=count;

 	return arr;
 }

 var array=[-1,1,1,1];
 console.log(countPositives(array));

 //6

 function countEvenOdd(arr)
 {
 	var countEven=0, countOdd=0;

 	for(var i=0;i<arr.length;i++)
 	{
 		
 		if(arr[i]%2!==0)
 		{
 			countOdd++;
 			countEven=0;
 		}
 		else
 		{
 			countEven++;
 			countOdd=0;
 		}

 		if(countOdd===3)
 		{
 			console.log("That's odd!!");
 		}
 		else if(countEven===3)
 		{
 			console.log("Even more so!!");
 		}
 		else
 		{
 			console.log("none found!!");
 		}

 	}
 }

 var array=[1,2,3,6,7,8];
 countEvenOdd(array);

 //7

 var array=[1,2,3,4,5];

 for(var i=0;i<array.length;i++)
 {
 	if(i%2!==0)
 	{
 		array[i]=array[i]+1;
 	}
 }

 console.log(array);

//8

function strArray(arr)
{
	var newArr=[];
	newArr[0]=0;
	for(var i=1;i<arr.length;i++)
	{
		newArr[i]=arr[i-1].length;
	}

	return newArr;
}

var array=["Ipsita", "loves","her","daughter"];
console.log(strArray(array));

//10

function reversal(arr)
{
	var temp, mid=arr.length/2;

	for( var i=0,j=(arr.length-1);i<mid && j>=mid;i++,j--)
	{
		temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		
	}
	 return arr;
}

var array=[1,2,3,4,5];
console.log(reversal(array));

//11

function negatives(arr)
{
	var newArr=[], temp;

	for( var i=0;i<arr.length;i++)
	{
		if(arr[i]>0)
		{
			temp=arr[i]*(-1);
			newArr[i]=temp;
		}
		else
		{
			newArr[i]=arr[i];
		}
		
	}

	return newArr;
}

var array=[1,-3,5], newArray=[];
newArray=negatives(array);
console.log(newArray);

//13

function swapTowardsCenter(arr)
{
	var temp, mid=(arr.length-1)/2;

	for( var i=0,j=(arr.length-1);i<mid, j>mid; i=i+2,j=j-2)
	{
		temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		console.log(arr[i]);
		console.log(arr[j]);

	}

	console.log(arr);
}

var array=[1,2,3,4,5,6,7,8];
swapTowardsCenter(array);