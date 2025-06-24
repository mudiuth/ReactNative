/*
loops / iteration statements - used to execute statements repeatedly 

-while loop
-do while 
-for loop
-for in
-for of loop
*/

/*
while loop

syntax
	while(condition){
	//statement(s)
	}
*/

let number = 2
while (number <= 6){
	console.log(number)
	number++
}

let animals = ["cow", "cat", "dog", "sheep"]
let index = 0
while(index < animals.length){
	console.log(animals[index])
	index++
}

/*
do while - once 
syntax
	do{
	//statement(s)
	}while(condition);

	*/

let _number = [1,2,3,4,5,6]
let square_nums = []

let i = 0
do{
	//get the square of each number 
	square_nums.push(_number[i]*_number[i])
	i++
} while(i < _number.length)

console.log(square_nums)

/*
for loop 
syntax 
	for (initialization; condition; increment/decrememnt){
	statement(s)
	}

	*/

let students = [
	{
		name : "uthman",
		course: "BNCS",
		age : "20",
		address: "Kampala"
	},
	{
		name : "James",
		course: "AI & ML",
		age : "29",
		address: "Kabale"
	}

]

for (let n = 0; n < students.length; n++){
	console.log(students[n].name + "studies" + students[n].course + "comes from" +students[n].address )

}
for (let student of students){
	console.log(student)
}

/*
for in loop

syntax
	for (variable in array){
	//statement(s)
	}
*/
//for in - object
//for of - array

let days = ["sunday", "monday", "Tuesday", "wednesday", "Thursday", "Friday", "saturday", "sunday"]
for (let day of days){
	console.log(day)
}

let car = {
	model: "Golf",
	make: "VolksWagen",
	year: 2025,
	color: "silver"
}
for(c in car){
	//console.log(car[c])
	console.log(c+" : "+car[c])
}