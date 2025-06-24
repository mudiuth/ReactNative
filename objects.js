/*objects-instance of a class
cass is a grup of related objects
students - class

attributes (properties)
behaviors(methods)

e.g student 
attributes(name, age, height, address, dob etc)

*/

let student_obj = {
	//key: value
	name: "william Peter",
	address: "kampala",
	age: 55,
	student: true,
	height: 5.46
}

//syntax ==> object.key

console.log(student_obj.name)
console.log (student_obj.address)
console.log(student_obj['age'])

student_obj.name = "uthman Semu"
console.log(student_obj.name)
console.log(student_obj)
student_obj.age = 29

//objects in objects 

let student1_obj = {
	//key: value
	name: "william Peter",
	address: {
		district: "kampala",
		village: "bukasa"
	},
	age: 55,
	student: true,
	height: 5.46,
	interests: ["football","music","art"]
}
console.log(student1_obj.address.village)


//arrays in objects 
let class1 = {
	males:["james","Peter","Luke"],
	females:["Bella","Blessing","Fathima"],
	location:"uagada"
}

console.log (class1.males[0])
console.log(`the male named ${class1.males[2]} is in love with ${class1.females[1]} and are located in ${class1.location}`)

//objects in Arrays APIs return such information
let my_students = [
	{
		name: "mudi",
		age: 18,
		nationality:"ugandan"
	},
	{
		name:"uthman",
		age:30,
		nationality:"Rwandese"
	}
]

console.log(my_students[0].name)
console.log(`${my_students[0].name}`)


//objects in arrays in objects 

/*
let obj: ={
interests:[
	{
	sports: "Football"
	},
	{
	social: "Mentorship"
	}
]
}*/

let man_obj ={
	address:[
		{
			district: "Nirobi",
			region: "central",
			country: "Kenya"
		},
		{
			district:"kampala",
			region: "central",
			country: "uganda"
		}
	]
}

console.log(`${man_obj.address[0]}`)
console.log(man_obj.address[0])