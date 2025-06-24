console.log("hello")
let w = 4
console.log(w)
/*
selection statement -  decision making statements 
if statement
-if else statement 
-else if statement 
codition tannary operator 
-switc statemet

*/


//if sattement
/*if (condition){
	//statement(s)
}
*/

let age = 15
if (age>=18){
	console.log("A person who is" +age+ " is considered adult")
}else{
	console.log("A person who is " +age+ " is considered young")
}


let discount 
let _age = 20

if (_age<8){
	discount = 15
}else if (_age<=15){
	discount = 12 
}else if (_age<=25){
	dicount = 10
}else if (_age<=35){
	discount = 5
}else{
	discount = 0
}

console.log("We offer a discount of "+discount+" if a person is "+_age+" years old" )

//ternary operator - simplifies the if else statemet

/*
syntax: condition? statement 
*/

let stmt = _age >= 18? "You are eligible to vote": "You are not eligible to vote"
console.log(stmt)
/*
let _discount

if (_age >= 18){
	_discount = 5
} else{
	_discount = 15
}
*/
let _discount = age >= 18 ? 5:15
console.log("The offered discount is", _discount)

/*
switch statement

switchh(expression){
	case 1:
		statement(s)
		break;
	case2:
		statement(s)
		.
		.
		.
		.
		case n:
			statement(s)
			break;
		default:
			statement(s)
			break;
		}

}
*/

let m =9
let n = 4
let op = '+'

switch(op){
	case '+':
		console.log('m+n', m+n)
		break;
	case '-':
		console.log('m-n', m-n)
		break;
	case '*':
		console.log('m*n', m*n)

	default:
		console.log("unknow operator")
		break;
}